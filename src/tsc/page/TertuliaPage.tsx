import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { GET_GROUP } from '../constant/hermanos';
import PageHeader from '../component/nav/PageHeader';
import ScrollAnimation from 'react-animate-on-scroll';

class TertuliaPage extends Component<any, any> {
    
    componentDidMount(): void {
        let { meet } = this.props.match.params;

        if(meet){
            this.setState({
                meet
            });
        }
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
                        <Row>
                            <Col sm="12" md="8">
                                <h2>Para ver la proxima terculia, ingresa a:</h2>
                                <p>
                                    Recuerda que las tertulias son los lunes a las 6 pm.
                                </p>
                            </Col>
                            <Col sm="12" md="4">
                                <div>
                                    {this.state?.meet &&
                                        <a style={{fontSize: 40}} target='_blank' className="btn btn-success" href={"https://meet.google.com/" + me.state}>
                                            <img src="https://i.imgur.com/rtDFsts.png" height={60}/> Ir al encuentro
                                        </a>
                                    }
                                </div>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col sm="12" md="4">
                                <h1 className="title-white">Reseña de las tertulias</h1>
                            </Col>
                            <Col sm="12" md="8">
                                <ScrollAnimation duration={3} animateIn="animate__animated animate__fadeIn">
                                    <p>
                                        Do quis proident exercitation voluptate aliqua nostrud ea mollit occaecat veniam eu ea nisi est. Ut labore anim pariatur anim enim proident sit ex deserunt est. Ex consectetur enim consequat et enim cupidatat aliquip qui exercitation incididunt sint. Quis sit consequat duis reprehenderit id culpa duis.                                    
                                    </p>
                                    <p>
                                        Ea magna eu commodo ullamco. Anim dolore adipisicing labore consequat in commodo excepteur fugiat aute cillum ea reprehenderit. Voluptate elit velit sint qui do ipsum magna ut laboris tempor proident enim tempor. Est velit nostrud proident irure velit nulla esse nulla elit sint dolore ipsum. Elit ut irure commodo id laboris minim do cupidatat id exercitation aliqua est esse fugiat.
                                    </p>
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(TertuliaPage);
