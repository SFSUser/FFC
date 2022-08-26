import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Card, InputGroup, FormControl } from 'react-bootstrap';
import { GET_GROUP } from '../constant/hermanos';
import PageHeader from '../component/nav/PageHeader';
import ScrollAnimation from 'react-animate-on-scroll';
import Wave from 'react-wavify';
import { TERTULIAS, TERTULIA_DEFAULT } from '../constant/tertulias';
import * as I from 'react-feather';

class TertuliaPage extends Component<any, any> {
    
    componentDidMount(): void {
        let { meet } = this.props.match.params;
        
        if(meet){
            this.setState({
                meet
            });
        }
    }

    toMin(text) {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    checkCriteria(t){
        let me = this;
        let criteria = me.state?.criteria ?? "";
        if(!(criteria.length > 0)){
            return true;
        } 
        let content = t.titulo + (t.descripcion??"");
        content = me.toMin(content);
        criteria = me.toMin(criteria);
        console.log("data", content, criteria);
        return content.includes(criteria);
    }

    render (){
        let me = this;
        return (
            <>
                <div className="textcenter">
                    <div className="page-bg page-bg-tertulia">
                        <PageHeader category="tertulia" title="Tertulias Francisclarianas"/>
                        <div className="box-spacer-2"></div>
                        <svg className="wave-golden" viewBox="0 0 900 100" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 85L25 78.7C50 72.3 100 59.7 150 52.3C200 45 250 43 300 45C350 47 400 53 450 58.5C500 64 550 69 600 73.5C650 78 700 82 750 79C800 76 850 66 875 61L900 56L900 101L875 101C850 101 800 101 750 101C700 101 650 101 600 101C550 101 500 101 450 101C400 101 350 101 300 101C250 101 200 101 150 101C100 101 50 101 25 101L0 101Z" fill="#0066FF"></path></svg>               
                    </div>
                </div>
                <div className="box box-golden text-white">
                    <div className="box-fixer">
                        {this.state?.meet &&
                            <>
                                <Row>
                                    <Col sm="12" md="8">
                                        <h2>Para ver la próxima tertulia, ingresa a:</h2>
                                        <p>
                                            Recuerda que las tertulias son los lunes a las 6 pm.
                                        </p>
                                    </Col>
                                    <Col sm="12" md="4">
                                        <div>
                                            <a style={{fontSize: 40}} target='_blank' className="btn btn-success" href={"https://meet.google.com/" + me.state.meet}>
                                                <img src="https://i.imgur.com/rtDFsts.png" height={60}/> Ir al encuentro
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                                <hr/>
                            </>
                        }
                        <Row>
                            <Col sm="12" md="4">
                                <h1 className="title-white">Reseña de las tertulias</h1>
                            </Col>
                            <Col sm="12" md="8">
                                <ScrollAnimation duration={3} animateIn="animate__animated animate__fadeIn">
                                    <p>
                                        La <b>TERTULIA</b>, es un espacio de encuentro que se ha dado la Familia  Franciscana de Colombia  para Conversar, tejer, caminar la palabra cada <b>lunes de 6pm a 8pm</b>.
                                    </p>
                                    <p>
                                        Es un espacio en el que se proponen temas de interés fraterno y sororal, temas que provocan la comunicación y que se mezclan con canciones, poesía y oración. 
                                    </p>
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="box-white">
                    <Wave
                        className="wave-golden wave-down"
                        paused={false}
                        options={{
                            height: 20,
                            amplitude: 60,
                            speed: 0.15,
                            points: 2
                        }}
                    />
                    <div className="box-spacer-1 text-golden">
                        <h1>Últimas tertulias</h1>
                        <InputGroup className="mb-3 tertulia-input">
                            <FormControl
                                placeholder="Buscar tertulia..."
                                onChange={e => me.setState({criteria: e.target.value})}
                                />
                        </InputGroup>
                    </div>
                    <div className="box-fixer mt-5">
                        <Row className="justify-content-center">
                            {TERTULIAS.filter( t => me.checkCriteria(t)).map( t => 
                                <Col md="3" sm="12">
                                    <Card className="mb-2 tertulia-info">
                                        <div className="header">
                                            <h3 className="text-golden">{t.titulo}</h3>
                                        </div>
                                        <img src={t.imagen?.length > 0 ? t.imagen : TERTULIA_DEFAULT.imagen} />
                                        <span>{t.descripcion}</span>
                                        <a target="_blank" href={"https://www.facebook.com/watch/live/?ref=watch_permalink&v=" + t.video}>
                                            <I.Facebook/> Ver grabación
                                        </a>
                                    </Card>
                                </Col>
                            )}
                        </Row>
                    </div> 
                    <div className="box-spacer-1"></div>
                </div>
            </>
        );
    }
}

export default withRouter(TertuliaPage);
