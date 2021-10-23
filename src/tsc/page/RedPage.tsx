import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import PageHeader from '../component/nav/PageHeader';

export default class RedPage extends Component {
    
    render (){
        return (
            <>
                <div className="textcenter">
                    <div className="page-bg page-bg-migrantes">
                        <PageHeader title="Red Franciscana para Migrantes Colombia – RFM"/>
                        <svg className="wave-brown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    </div>
                </div>
                <div className="box box-brown text-white">
                    <div className="box-fixer">
                        <Row>
                            <Col sm="12" md="4">
                                <h1 className="title-white">Nuestra historia</h1>
                            </Col>
                            <Col sm="12" md="8">
                                <p>
                                    <b>RFM Colombia</b> surgió en el <b>Congreso JPIC de la Familia Franciscana de Colombia (FFC)</b> realizado en Bogotá a finales de marzo de 2021. El trabajo de la Pastoral Migrante de la <b>Parroquia San Lorenzo Mártir</b> en <b>Medellín</b> inspiró el diálogo entre un <b>grupo de hermanos de la FFC</b> sobre <b>cómo acoger</b> a quienes viven el éxodo de la movilidad humana. 
                                </p>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="page-bg page-bg-migrantes2">                
                    <svg className="wave-brown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,96L0,192L288,192L288,160L576,160L576,64L864,64L864,64L1152,64L1152,128L1440,128L1440,0L1152,0L1152,0L864,0L864,0L576,0L576,0L288,0L288,0L0,0L0,0Z"></path></svg>
                </div>
                <div className="box box-gray text-white">
                    <div className="box-fixer">
                        <Row>
                            <Col sm="12" md="4">
                                <p className="mt-5">
                                    Inspirados en la <b>cultura del encuentro, acoger</b> a los migrantes y desplazados internos que por razones de violencia generalizada, conflictos socio-políticos, situación económica o desastres naturales <b>transitan o buscan permanecer en Colombia</b> para (re) <b>construir sus proyectos de vida</b> y <b>el tejido social</b>. 
                                </p>
                            </Col>
                            <Col sm="12" md="8">
                                <h1 className="title-white">Objetivo</h1>
                                <p>
                                    <b>Acoger para (re)construir</b> significa actuar en dos campos que <b>conecten experiencias y propicien espacios de vida digna y justicia social: </b>
                                </p>
                                <ol className="mt-5">
                                    <li>Acompañamiento en el camino de tránsito hacia otros países. Fonda caminera.</li>
                                    <li>Contribución a la organización de comunidades de base de migrantes alrededor de la cultura del encuentro para la defensa de derechos y la incidencia política. </li>
                                </ol>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="box-white">
                    <svg className="wave-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill-opacity="1" d="M0,32L0,160L360,160L360,64L720,64L720,192L1080,192L1080,64L1440,64L1440,0L1080,0L1080,0L720,0L720,0L360,0L360,0L0,0L0,0Z"></path>
                    </svg>
                    <div className="box pull-up text-gray">
                        <div className="text-center mb-3">
                            <h1>Nuestro equipo</h1>
                            De izquierda a derecha hermanoxs.
                        </div>
                        <div className="hermanos">
                            <div className="hermano-box">
                                <img src="https://imgur.com/g8F6Hpp.jpg"/>
                                <h4>Ernesto Pérez</h4>
                            </div>
                            <div className="hermano-box">
                                <img src="https://imgur.com/3yBmzsM.jpg"/>
                                <h4>María de Jesús Lepesqueur</h4>
                            </div>
                            <div className="hermano-box">
                                <img src="https://imgur.com/EvaBFGQ.jpg"/>
                                <h4>Nydia Díaz</h4>
                            </div>
                            <div className="hermano-box">
                                <img src="https://imgur.com/o7Zk1BP.jpg"/>
                                <h4>Marta Rendón</h4>
                            </div>
                            <div className="hermano-box">
                                <img src="https://imgur.com/iJO0YjX.jpg"/>
                                <h4>Diomirna Rojas</h4>
                            </div>
                            <div className="hermano-box">
                                <img src="https://imgur.com/OF3FW1D.jpg"/>
                                <h4>Fray Juan Jairo Rendón, OFM</h4>
                            </div>
                            <div className="hermano-box">
                                <img src="https://imgur.com/YrICGhi.jpg"/>
                                <h4>María Margarita Sánchez</h4>
                            </div>
                            <div className="hermano-box">
                                <img src="https://imgur.com/5LPr9kb.jpg"/>
                                <h4>Fabián Valderrama</h4>
                            </div>
                            <div className="hermano-box">
                                <img src="https://imgur.com/Sy6bqFn.jpg"/>
                                <h4>Johanna Pérez</h4>
                            </div>
                            <div className="hermano-box">
                                <img src="https://imgur.com/6x2q4AX.png"/>
                                <h4>Miguel Ángel Martín</h4>
                            </div>
                        </div>
                    </div>
                    <svg className="wave-brown pull-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,192L60,197.3C120,203,240,213,360,202.7C480,192,600,160,720,144C840,128,960,128,1080,138.7C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
                <div className="box box-brown text-white pull-up">
                    <div className="box-fixer">
                        <h1>Líneas de acción</h1>
                        <ul>
                            <li>Atención humanitaria de emergencia. Pastoral migrante, Parroquia San Lorenzo Mártir. Proyecto de Fonda Caminera.</li>
                            <li>Formación desde la cultura del encuentro. Proyecto territorial Antiquia, Armenia, Pereira, Bogotá. </li>
                            <li>Incidencia política y legal.  </li>
                            <li>Comunicaciones. </li>
                        </ul>
                    </div>
                </div>
                <div className="box box-brown-ligth text-white">
                    <div className="box-fixer">
                        <Row>
                            <Col>
                                <h1>¿Dónde estamos</h1>
                                <Row>
                                    <Col>
                                        <ul>
                                            <li>Barranquilla</li>
                                            <li>Antioquia</li>
                                            <li>Armenia</li>
                                            <li>Pereira</li>
                                            <li>Cali</li>
                                            <li>Barrancabermeja</li>
                                            <li>Bogotá</li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <img className="margin-center" src="https://imgur.com/52ox5Wh.png"/>
                                    </Col>
                                </Row>
                                <p className="mt-3">
                                    Tomado de <a className="anchor-yellow" href="https://redfranciscana.org/equipo/">https://redfranciscana.org/equipo/</a>
                                </p>
                            </Col>
                            <Col>
                                <h1>¿Cómo nos organizamos?</h1>
                                <div className="text-center">
                                    <img src="https://imgur.com/aIro263.png"/>  
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        );
    }
}