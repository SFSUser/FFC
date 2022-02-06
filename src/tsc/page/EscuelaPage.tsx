import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { GET_GROUP } from '../constant/hermanos';
import PageHeader from '../component/nav/PageHeader';
import ScrollAnimation from 'react-animate-on-scroll';

export default class EscuelaPage extends Component {
    
    render (){
        return (
            <>
                <div className="textcenter">
                    <div className="page-bg page-bg-escuela">
                        <PageHeader category="formacion" title="Escuela de Pensamiento y Formación Francisclariana"/>
                        <div className="box-spacer-2"></div>
                        <svg className="wave-blue" viewBox="0 0 900 100" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 85L25 78.7C50 72.3 100 59.7 150 52.3C200 45 250 43 300 45C350 47 400 53 450 58.5C500 64 550 69 600 73.5C650 78 700 82 750 79C800 76 850 66 875 61L900 56L900 101L875 101C850 101 800 101 750 101C700 101 650 101 600 101C550 101 500 101 450 101C400 101 350 101 300 101C250 101 200 101 150 101C100 101 50 101 25 101L0 101Z" fill="#0066FF"></path></svg>               
                    </div>
                </div>
                <div className="box box-blue text-white">
                    <div className="box-fixer">
                        <Row>
                            <Col sm="12" md="4">
                                <h1 className="title-white">De la historia del caminar de la Escuela</h1>
                            </Col>
                            <Col sm="12" md="8">
                                <ScrollAnimation duration={3} animateIn="animate__animated animate__fadeIn">
                                    <p>
                                        La Familia Franciscana de Colombia tiene larga historia de Escuela de Formación al servicio de la familia y de la Iglesia; un ejemplo de ello fue la Escuela de Formadores para la vida religiosa que tuvo una larga existencia.
                                    </p>
                                    <p>
                                        En el último tiempo, y por más de dos años, se ha venido cultivando el proyecto de la Escuela de Pensamiento y Formación Francisclariana que tuvo su mayor impulso para concretarla en el Congreso Nacional JPIC–FFC del mes de marzo del 2021; las distintas mesas de trabajo en las que se desarrolló el Congreso solicitaron a la Junta Directiva hacer realidad este proyecto; en las conclusiones de cada mesa se hicieron sugerencia de contenidos.
                                    </p>
                                    <p>
                                        Se constituyó un equipo que dio forma a la propuesta formativa que actualmente se realiza en el Módulo Inicial.
                                    </p>
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="page-bg page-bg-escuela2">                
                    <svg className="wave-blue" viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 36L133 36L133 65L267 65L267 34L400 34L400 40L533 40L533 15L667 15L667 24L800 24L800 34L800 0L800 0L667 0L667 0L533 0L533 0L400 0L400 0L267 0L267 0L133 0L133 0L0 0Z" fill="#0066FF"></path></svg>
                    <div className="text-center box-spacer-2">
                        <ScrollAnimation duration={3} animateIn="animate__animated animate__fadeInDown">
                        <h1 className="title-white">Sentido e intencionalidad del Proceso Formativo</h1>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="box box-gray text-white">
                    <div className="box-fixer">
                        <Row>
                            <Col sm="12" md="5">
                                <ScrollAnimation duration={3} animateIn="animate__animated animate__fadeIn">
                                    <h1 className="title-white">Objetivo</h1>
                                    <p>
                                        Identificar y reflexionar acerca de las comprensiones, experiencias y prácticas, personales y comunitarias de espiritualidad francisclariana, en el marco del seguimiento de Jesús, viviendo el evangelio, desde la Iglesia, en la misión de instauración del reinado de Dios, que se reconocen en la cotidianidad de la vida, en el estilo de vida, en la formación de la interioridad y en los proyectos de los que se participa, para hacer consciencia de las claves de formación necesarias que fortalezcan los procesos y servicios en los que la espiritualidad toma forma de cara a cada persona y a la realidad en el contexto actual.
                                    </p>
                                </ScrollAnimation>
                            </Col>
                            <Col sm="12" md="7">
                                <ScrollAnimation duration={3} animateIn="animate__animated animate__fadeInRight">
                                    <ol className="mt-5">
                                        <li>Es un Proceso de Procesos.</li>
                                        <li>Multidisciplinar e Integral – en las dimensiones de interioridad y entorno vital.</li>
                                        <li>En perspectiva de liberación y transformación: (Vida personal; fraterno/sororal; eclesial/sinodal; social/ética ciudadana; Cuidado de la Creación).</li>
                                        <li>Generador de un Mundo Posible (en la justicia según el amor de Dios).</li>
                                        <li>De un Sujeto en Transformación y Transformador.</li>
                                        <li>Inspirados en la Experiencia de Fe que aporta en la Construcción del Reinado de Dios.</li>
                                        <li>Según la Espiritualidad de Francisco y Clara de Asís que se Encarna desde A.L.</li>
                                    </ol>
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="box-white">
                    <svg className="wave-gray" viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 36L133 36L133 65L267 65L267 34L400 34L400 40L533 40L533 15L667 15L667 24L800 24L800 34L800 0L800 0L667 0L667 0L533 0L533 0L400 0L400 0L267 0L267 0L133 0L133 0L0 0Z" fill="#0066FF"></path></svg>
                    <div className="box text-purple">
                        <div className="text-center mb-3">
                            <h1>Equipo de acompañamiento de la Escuela</h1>
                        </div>
                        <div className="box-fixer">
                            <div className="hermanos">
                                { GET_GROUP("escuela").map( (h, i) =>
                                    <div key={i} className="hermano-box">
                                        <img src={h.imagen}/>
                                        <h4>{h.nombre}</h4>
                                    </div>
                                 )}
                            </div>
                        </div>
                    </div>
                    <svg className="wave-purple pull-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,192L60,197.3C120,203,240,213,360,202.7C480,192,600,160,720,144C840,128,960,128,1080,138.7C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
                <div className="box box-purple text-white pull-up">
                    <div className="box-fixer">
                        <h1>Proceso formantivo en el Módulo Inicial</h1>
                        
                        <table className="table table-formacion table-modulos">
                            <thead>
                                <tr>
                                    <th colSpan={2} className="text-center">MÓDULO DE INICIACIÓN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Una sesión</td>
                                    <td>Tema 1. INICIACIÓN</td>
                                </tr>
                                <tr>
                                    <td>Dos sesiones</td>
                                    <td>Tema 2. REFLEXIÓN DE PRÁCTICAS</td>
                                </tr>
                                <tr>
                                    <td>Tres sesiones</td>
                                    <td>Tema 3. FUENTES DE LA TRADICIÓN DE FE Y BASE DE LA ESPIRITUALIDAD</td>
                                </tr>
                                <tr>
                                    <td>Tres sesiones</td>
                                    <td>Tema 4. HORIZONTE EPISTEMOLÓGICO</td>
                                </tr>
                                <tr>
                                    <td>Dos sesiones</td>
                                    <td>Tema 5. METODOLOGÍA</td>
                                </tr>
                                <tr>
                                    <td>Dos sesiones</td>
                                    <td>Tema 6. PEDAGOGÍA</td>
                                </tr>
                                <tr>
                                    <td>Una sesión</td>
                                    <td>TRABAJO FINAL</td>
                                </tr>
                                <tr>
                                    <td>Una sesión</td>
                                    <td>Tema 7. CELEBRACIÓN: NUEVO ESTILO DE VIDA</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}