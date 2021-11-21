import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { GET_GROUP } from '../constant/hermanos';
import PageHeader from '../component/nav/PageHeader';
import Wave from 'react-wavify';

export default class MigrantesPage extends Component {
    
    render (){
        return (
            <>
                <div className="textcenter">
                    <div className="page-bg page-bg-migrantes">
                        <PageHeader category="jpic" title="Red Franciscana para Migrantes"/>
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
                                <p className="text-justify">
                                    La Red Franciscana para Migrantes Colombia (RFM Colombia) surgió en el Congreso JPIC de la Familia Franciscana de Colombia (FFC) realizado en Bogotá a finales de marzo de 2021. En este contexto, un <b>grupo de hermanos de la FFC</b> inspirados en el trabajo de la <b>Pastoral Migrante</b> de la Parroquia San Lorenzo Mártir en Medellín iniciaron un diálogo sobre cómo <b>acoger, proteger, promover e integrar</b> a quienes viven el <b>éxodo de la movilidad humana</b> desde la cultura del encuentro. Quehacer inspirado y acompañado por la Red Franciscana para Migrantes y Franciscans International (FI).  
                                </p>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="page-bg page-bg-migrantes2">
                    <Wave
                        className="wave-brown wave-down"
                        paused={false}
                        options={{
                            height: 20,
                            amplitude: 60,
                            speed: 0.15,
                            points: 2
                        }}
                    />
                    <div className="box-spacer-3"></div>       
                </div>
                <div className="box-gray text-white page-bg-escuela2">
                    <div className="box-fixer">
                        <Row>
                            <Col>
                                <p className="mt-5 mb-2">
                                    Cada forastero que llama a nuestra puerta es una ocasión de encuentro con Jesucristo, que se identifica con el extranjero acogido o rechazado en cualquier época de la historia (cf. Mt 25,35.43). 
                                </p>                                    
                                <small>Mensaje del Santo Padre Francisco para la Jornada Mundial del Emigrante y el Refugiado 2018 (14 enero 2018).</small>
                            </Col>
                            <Col>
                                <p className="mt-5 mb-2 text-justify">
                                    «La vida es el arte del encuentro, aunque haya tanto desencuentro por la vida»[204]. […] Es un estilo de vida tendiente a conformar ese poliedro que tiene muchas facetas, muchísimos lados, pero todos formando una unidad cargada de matices, […] representa una sociedad donde las diferencias conviven complementándose, enriqueciéndose e iluminándose recíprocamente, aunque esto implique discusiones y prevenciones. 
                                </p>                                    
                                <small>Carta Encíclica Fratelli Tutti del Santo Padre Francisco sobre la fraternidad y la amistad social, num. 251.</small>
                            </Col>
                        </Row>
                    </div>    
                    <Wave
                        className="wave-brown-ligth mt-5"
                        paused={false}
                        options={{
                            height: 10,
                            amplitude: 30,
                            speed: 0.15,
                            points: 5
                        }}
                    />
                </div>
                <div className="box-brown-ligth text-white">
                    <div className="box box-fixer">
                        <h1 className="title-white">Objetivo</h1>
                        <p className="text-justify">
                            Animados en la <b>cultura del encuentro, acoger, proteger, promover e integrar</b> a los migrantes y desplazados internos que por razones de violencia generalizada, conflictos socio-políticos, situación económica o desastres naturales <b>transitan o buscan permanecer en Colombia</b> para <b>(re) construir sus proyectos de vida</b> y el <b>tejido social.</b>
                        </p>
                        <h1 className="title-white">Líneas de acción</h1>
                        <ul>
                            <li>Atención humanitaria de emergencia. Pastoral migrante, Parroquia San Lorenzo Mártir.</li>
                            <li>Apoyo a procesos de acogida e inclusión. Proyecto territorial Medellín y Bogotá.  </li>
                            <li>Incidencia política y legal a partir de la documentación de casos para la protección de los migrantes en el territorio colombiano. </li>
                            <li>Comunicaciones. </li>
                        </ul>
                        {/*<h1 className="title-white">Poryectos en curso</h1>
                        <p>
                            Apoyo a procesos de acogida e inclusión agenciados por la Red Franciscana para Migrantes Colombia  en las ciudades de Medellín y Bogotá.
                        </p>*/}
                    </div>
                </div>
                <div className="box-white">
                    <svg className="wave-brown-ligth" viewBox="0 0 900 200"><path d="M0 53L50 47.7C100 42.3 200 31.7 300 27C400 22.3 500 23.7 600 32C700 40.3 800 55.7 850 63.3L900 71L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
                    <div className="box pull-up text-gray">
                        <div className="text-center mb-3">
                            <h1>Nuestro equipo</h1>
                        </div>
                        <div className="box-fixer">
                            <div className="hermanos">
                                { GET_GROUP("red").map( (h, i) =>
                                    <div key={i} className="hermano-box">
                                        <img src={h.imagen}/>
                                        <h4>{h.nombre}</h4>
                                    </div>
                                 )}
                            </div>
                        </div>
                    </div>
                    <Wave
                        className="wave-brown"
                        paused={false}
                        options={{
                            height: 20,
                            amplitude: 60,
                            speed: 0.15,
                            points: 2
                        }}
                    />                    
                </div>
                <div className="box-brown text-white">
                    <div className="box-fixer">
                        <h1>Visita Franciscans International a FFC – JPIC</h1>
                    </div>
                    <div className="box-fixer mb-3">
                        <Row>
                            <Col>
                                <p>
                                    Este evento se realizó duarante los dias 3 – 14 de octubre de 2021.
                                </p>
                                <h3>Ciudades visitadas</h3>
                                <ul>
                                    <li>Bogotá.</li>
                                    <li>Medellín.</li>
                                    <li>Cali.</li>
                                </ul>
                            </Col>
                            <Col>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/6ffbCWMiRjY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </Col>
                        </Row>
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
                                            <li>Sincelejo</li>
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
                                <div className="text-center">
                                    <img width="100%" src="https://imgur.com/aIro263.png"/>  
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="box-white text-brown">
                    <svg className="wave-brown-ligth" viewBox="0 0 900 200"><path d="M0 53L50 47.7C100 42.3 200 31.7 300 27C400 22.3 500 23.7 600 32C700 40.3 800 55.7 850 63.3L900 71L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
                    <div className="box-fixer pull-up-2">
                        <h1>Información de contacto</h1>                    
                        <div className="box-spacer-2">
                            <ul>
                                <li><b>Correo: </b>familiafranciscana@ffc.org.co</li>
                                <li><b>Celular: </b>311 8123383. </li>
                            </ul>
                        </div> 
                    </div>
                </div>
            </>
        );
    }
}