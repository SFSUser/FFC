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
                        <div className="box-spacer-2"></div>
                        <svg className="wave-brown" viewBox="0 0 900 100" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 85L25 78.7C50 72.3 100 59.7 150 52.3C200 45 250 43 300 45C350 47 400 53 450 58.5C500 64 550 69 600 73.5C650 78 700 82 750 79C800 76 850 66 875 61L900 56L900 101L875 101C850 101 800 101 750 101C700 101 650 101 600 101C550 101 500 101 450 101C400 101 350 101 300 101C250 101 200 101 150 101C100 101 50 101 25 101L0 101Z" fill="#0066FF" stroke-linecap="round" stroke-linejoin="miter"></path></svg>               
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
                    <svg className="wave-gray" viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 36L133 36L133 65L267 65L267 34L400 34L400 40L533 40L533 15L667 15L667 24L800 24L800 34L800 0L800 0L667 0L667 0L533 0L533 0L400 0L400 0L267 0L267 0L133 0L133 0L0 0Z" fill="#0066FF" stroke-linecap="square" stroke-linejoin="miter"></path></svg>
                    <div className="box pull-up text-gray">
                        <div className="text-center mb-3">
                            <h1>Nuestro equipo</h1>
                            De izquierda a derecha hermanoxs.
                        </div>
                        <div className="box-fixer">
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
                <div className="box-brown-ligth text-white">
                    <svg className="wave-brown" viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 36L133 36L133 65L267 65L267 34L400 34L400 40L533 40L533 15L667 15L667 24L800 24L800 34L800 0L800 0L667 0L667 0L533 0L533 0L400 0L400 0L267 0L267 0L133 0L133 0L0 0Z" fill="#0066FF" stroke-linecap="square" stroke-linejoin="miter"></path></svg>
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
                                    <img width="100%" src="https://imgur.com/aIro263.png"/>  
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        );
    }
}