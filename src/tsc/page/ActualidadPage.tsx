import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { GET_GROUP } from '../constant/hermanos';
import { WEB_TITLE_SMALL } from '../constant/common';
import PageHeader from '../component/nav/PageHeader';
import ScrollAnimation from 'react-animate-on-scroll';
import { ACTUALIDAD, ACTUALIDAD_CATEGORIAS } from '../constant/actualidad';
import * as I from 'react-feather';
import { Helmet } from 'react-helmet';
import { withRouter } from 'next/router';

class ActualidadPage extends Component<any,any> {

    componentDidMount(): void {
        let { articulo } = this.props.match?.params ?? {};
        let id = parseInt(articulo);

        if(id > 0){
            this.setState({
                article_id: id
            });
        }
    }

    setFilter(filter: string){
        this.setState({
            //article_id: 0,
            category: filter
        });
    }

    setArticle(article: any) {
        this.setState({ article });
    }

    getArticle(article: any, height = 500){
        let me = this;
        return (
            <div>
                <iframe src={article.url?.replace("view", "preview")} width="100%" height={height} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        );
    }
    
    render (){
        let me = this;
        let actualidad = ACTUALIDAD.filter( (doc: any) => doc.category == me.state?.category || ["todos", undefined].includes(me.state?.category));
        actualidad = actualidad.reverse();
        let currentArticle = actualidad.find( (doc: any) => doc.id == me.state?.article_id);
        return (
            <>
                <div className="textcenter">
                    <div className="page-bg page-bg-actualidad">
                        <PageHeader category="actualidad" title="Actualidad"/>
                        <div className="box-spacer-2"></div>
                        <svg className="wave-brown-ligth" viewBox="0 0 900 100" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 85L25 78.7C50 72.3 100 59.7 150 52.3C200 45 250 43 300 45C350 47 400 53 450 58.5C500 64 550 69 600 73.5C650 78 700 82 750 79C800 76 850 66 875 61L900 56L900 101L875 101C850 101 800 101 750 101C700 101 650 101 600 101C550 101 500 101 450 101C400 101 350 101 300 101C250 101 200 101 150 101C100 101 50 101 25 101L0 101Z" fill="#0066FF"></path></svg>               
                    </div>
                </div>
                <div className="box box-brown-ligth text-white">
                    <div className="box-fixer">
                        <Row>
                            <Col sm="12" md="4">
                                <h1 className="title-white">Actualidad</h1>
                            </Col>
                            <Col sm="12" md="8">
                                <ScrollAnimation duration={3} animateIn="animate__animated animate__fadeIn">
                                    <p>
                                        En la presente sección Familia Franciscana de Colombia te comparte novedades, experiencias fraternas, artículos, documentos eclesiales, análisis de la realidad y documentos de interés alrededor de diferentes temáticas que como Familia nos compete conocer.                                    
                                    </p>
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </div>
                </div>                    
                <svg className="wave-brown-ligth" viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 36L133 36L133 65L267 65L267 34L400 34L400 40L533 40L533 15L667 15L667 24L800 24L800 34L800 0L800 0L667 0L667 0L533 0L533 0L400 0L400 0L267 0L267 0L133 0L133 0L0 0Z" fill="#0066FF"></path></svg>
                <div className="box box-white text-black">                    
                    <div className="box-fixer">
                        {currentArticle &&
                            <>
                                <Helmet>
                                    <title>{WEB_TITLE_SMALL} - {currentArticle.titulo}</title>
                                    <meta name="description" content={currentArticle.descripcion} />
                                </Helmet>
                                <div className="text-center">
                                    <h3>{currentArticle.titulo}</h3>
                                    <p>{currentArticle.descripcion}</p>
                                    {me.getArticle(currentArticle, 700)}
                                </div> 
                            </>
                        }
                        <div className="m-3 text-center">
                            {Object.keys(ACTUALIDAD_CATEGORIAS).map((identificador, i) => 
                                <Button className="m-2" variant={identificador == me.state?.category ? "danger" : "warning"} onClick={()=>me.setFilter(identificador)} key={i}>
                                    {ACTUALIDAD_CATEGORIAS[identificador].nombre}
                                </Button>
                            )}
                        </div>
                        <div>
                            {actualidad.length == 0 &&
                                <div className="text-center">
                                    <h3>No hay artículos para la categoría "{ACTUALIDAD_CATEGORIAS[me.state.category]?.nombre ?? "Todos"}"</h3>
                                </div>
                            }
                            {actualidad.map((item: any, index: number) =>
                                <div key={index}>
                                    <Card>
                                        <ScrollAnimation duration={3} animateIn="animate__animated animate__fadeIn">
                                            <Card.Body>
                                                <div className="box-white-img">
                                                    {/*<img src={item.img} alt=""/>*/}
                                                </div>
                                                <div>
                                                    <h3>
                                                        {item.titulo}
                                                    </h3>
                                                    <p>{item.descripcion}</p>
                                                    <div>
                                                        <b className="badge bg-secondary text-white mr-3">{item.fecha}</b> 
                                                        <b className="badge bg-danger text-white mr-3">{ACTUALIDAD_CATEGORIAS[item.category].nombre}</b> 
                                                        <Button variant="primary" size="sm" onClick={() => this.setArticle(me.state?.article == item ? null: item)}>
                                                            {me.state?.article == item ? 
                                                                <>
                                                                <I.ChevronUp size={15}/> Ocultar articulo
                                                                </> 
                                                                : 
                                                                <>
                                                                    <I.ChevronDown size={15}/> Leer más
                                                                </>
                                                            }
                                                        </Button>
                                                        <a className="btn btn-sm btn-info ml-3" href={"/actualidad/" + item.id}>
                                                            <I.Link size={15}/> Ver enlace
                                                        </a>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </ScrollAnimation>
                                    </Card>
                                    {me.state?.article && me.state.article == item &&
                                        me.getArticle(me.state.article)
                                    }
                                </div>
                            )}
                        </div>
                        <div className="box-spacer-2">

                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default withRouter(ActualidadPage);
