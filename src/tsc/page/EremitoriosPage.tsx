import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { GET_GROUP } from '../constant/hermanos';
import PageHeader from '../component/nav/PageHeader';
import Wave from 'react-wavify';
import ScrollAnimation from 'react-animate-on-scroll';

export default class EremitoriosPage extends Component {
    
    render (){
        return (
            <>
                <div className="textcenter">
                    <div className="page-bg page-bg-migrantes">
                        <PageHeader category="jpic" title="Nuevos estilos de Vida"/>
                        <div className="box-spacer-2"></div>
                        <svg className="wave-brown" viewBox="0 0 900 100" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 85L25 78.7C50 72.3 100 59.7 150 52.3C200 45 250 43 300 45C350 47 400 53 450 58.5C500 64 550 69 600 73.5C650 78 700 82 750 79C800 76 850 66 875 61L900 56L900 101L875 101C850 101 800 101 750 101C700 101 650 101 600 101C550 101 500 101 450 101C400 101 350 101 300 101C250 101 200 101 150 101C100 101 50 101 25 101L0 101Z" fill="#0066FF"></path></svg>               
                    </div>
                </div>
                <div className="box box-brown text-white">
                    <div className="box-fixer">
                        <Row>
                            <Col sm="12" md="4">
                                <h1 className="title-white">Nuestra historia</h1>
                            </Col>
                            <Col sm="12" md="8">
                                <ScrollAnimation duration={3} animateIn="animate__animated animate__fadeIn">
                                    <p className="text-justify">
                                        Somos una pareja de esposos franciscanos seglares, que desde muy jóvenes recibimos un llamado profundo a la búsqueda del silencio, la soledad y la distancia con las cosas del mundo.
                                        Más tarde, tras haber reconocido nuestra identidad FrancisClareana, sentimos la necesidad imperante de vivir en la montaña y construir una casa/ermita para compartir con la comunidad y con la Familia Franciscana. Vendimos todo, organizamos debidamente a los hijos y nos dimos a la tarea de la compra de un lote y la construcción de una casa.
                                        Luego, recibimos el apoyo, confianza y cariño del hermano Próspero Arciniegas OFM Cap. (asistente espiritual de nuestra fraternidad), quien escuchándonos y visitándonos, nos incentivó a dar cuerpo a nuestro sueño profundo, al que él mismo consideró y denominó “eremitorio seglar”. 
                                        Nos formó con su ejemplo creativo, generoso y fraterno, con muchas lecturas, charlas y talleres.
                                    </p>
                                    <p className="text-justify">
                                        A partir del año 2012, de manera muy especial, el hermano depositó en nosotros toda su confianza, y fomentó frecuentes y periódicas visitas y estadías de nuestros hermanos novicios capuchinos, observantes, conventuales y comunidades religiosas femeninas y algunas fraternidades de la OFS.
                                        Paralelamente, se trabajó en educación ambiental en las escuelas del municipio a través de múltiples experiencias pedagógicas y científicas en la laguna de Fúquene, con su gente, su flora y su fauna, y se realizaron talleres y charlas, estadías de camping juveniles, proyectos productivos y recreativos con la comunidad escolar y campesina. 
                                    </p>
                                    <p className="text-justify">
                                        Luego, debido a los dos años y medio de pandemia, cesaron por completo las actividades abiertas del eremitorio. 
                                        Por último, debido al resultado de la Tertulia Franciscana Nuevos Estilos de Vida, por el interés de los asistentes y del equipo de coordinación de ésta, y añadido al sentir nuestro de volver a ofrecer y compartir nuestro espacio de silencio y de paz con los hermanos, surgió y se impulsó nuevamente la idea de la reapertura del eremitorio.
                                    </p>
                                </ScrollAnimation>
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
                            <Col sm="12" md="6">
                                <ScrollAnimation duration={3} animateIn="animate__animated animate__fadeIn">
                                    <p className="mt-5 mb-2">
                                        Cada forastero que llama a nuestra puerta es una ocasión de encuentro con Jesucristo, que se identifica con el extranjero acogido o rechazado en cualquier época de la historia (cf. Mt 25,35.43). 
                                    </p>                                
                                    <small>Mensaje del Santo Padre Francisco para la Jornada Mundial del Emigrante y el Refugiado 2018 (14 enero 2018).</small>
                                </ScrollAnimation>                                    
                            </Col>
                            <Col sm="12" md="6">
                                <ScrollAnimation duration={3} animateIn="animate__animated animate__fadeIn">
                                    <p className="mt-5 mb-2 text-justify">
                                        «La vida es el arte del encuentro, aunque haya tanto desencuentro por la vida»[204]. […] Es un estilo de vida tendiente a conformar ese poliedro que tiene muchas facetas, muchísimos lados, pero todos formando una unidad cargada de matices, […] representa una sociedad donde las diferencias conviven complementándose, enriqueciéndose e iluminándose recíprocamente, aunque esto implique discusiones y prevenciones. 
                                    </p>                                    
                                    <small>Carta Encíclica Fratelli Tutti del Santo Padre Francisco sobre la fraternidad y la amistad social, num. 251.</small>
                                </ScrollAnimation>
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
                        <ScrollAnimation duration={3} animateIn="animate__animated animate__zoomIn">
                            <h1 className="title-white">Objetivo</h1>
                        </ScrollAnimation>
                        <ScrollAnimation duration={3} animateIn="animate__animated animate__fadeIn">
                            <p className="text-justify">
                                Acoger y ofrecer a todos los hermanos y hermanas, especialmente a la familia Franciscana, una experiencia de silencio significativa, para un encuentro profundo con Dios, consigo mismo, con nuestros hermanos y con la creación entera … a partir de la propuesta de San Francisco en su regla para los eremitorios, y teniendo presentes los lineamientos de la Encíclica Laudato SI, mediante el amor fraterno, el respeto, la valoración y el cuidado de nuestra CASA COMÚN.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation duration={3} animateIn="animate__animated animate__zoomIn">
                            <h1 className="title-white">Líneas de acción</h1>
                        </ScrollAnimation>
                        <ScrollAnimation duration={3} animateIn="animate__animated animate__fadeIn">
                            <p>
                                El Eremitorio ofrece dos líneas de acción fundamentales: La contemplativa y la activa. 
                            </p>
                            <p>
                                Por lo pronto, reiniciamos esta primera etapa fundamental de reapertura únicamente, con la modalidad contemplativa y/o de silencio. Posteriormente, se abrirá la segunda modalidad, dependiendo del proceso de adecuación que ésta implica.
                            </p>

                            <b>a. Modalidad contemplativa y/o de silencio: (Disponible a partir del segundo semestre del presente año).</b>
                            <ul>
                                <li>Acogida y hospedaje fraterno preferiblemente para hermanos y hermanas de la familia franciscana. </li>
                                <li>Tiempo y espacios adecuados y propicios para la meditación, la contemplación y la reflexión libre, personal, sentida y vívida.</li>
                                <li>Consagración de las horas a través del silencio, meditación y reflexión personal de lecturas insertas en la actualidad, que hacen relevancia del momento presente.</li>
                                <li>Compartir fraterno de las comidas y trabajos domésticos.</li>
                                <li>Chimenea y tertulia en la noche para romper el silencio y compartir vivencias.</li>
                            </ul>
                            <b>b. Modalidad activa: (Posteriormente disponible).</b>
                            <ul>
                                <li>Camping para grupos o fraternidades juveniles pequeños que deseen una charla, un taller, un compartir fraterno y/o contacto con la naturaleza.</li>
                                <li>Actividades ecológicas (siembras, caminatas, recorridos) tras el contacto afectivo, para recibir la invaluable limosna/donación de la creación. </li>
                                <li>Visitas a familias vecinas o escuelas para recibir la fraterna limosna/enseñanza de la espiritualidad campesina.</li>
                                <li>Otras propuestas abiertas.</li>
                            </ul>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="box-white">
                    <svg className="wave-brown-ligth" viewBox="0 0 900 200"><path d="M0 53L50 47.7C100 42.3 200 31.7 300 27C400 22.3 500 23.7 600 32C700 40.3 800 55.7 850 63.3L900 71L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z"></path></svg>
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
                        <ScrollAnimation duration={3} animateIn="animate__animated animate__fadeIn">
                            <h1>Visita Franciscans International a FFC – JPIC</h1>
                        </ScrollAnimation>
                    </div>
                    <div className="box-fixer mb-3">
                        <Row>
                            <Col sm="12" md="6">
                            <ScrollAnimation duration={3} animateIn="animate__animated animate__fadeInLeft">
                                    <p>
                                        Este evento se realizó duarante los dias 3 – 14 de octubre de 2021.
                                    </p>
                                    <h3>Ciudades visitadas</h3>
                                    <ul>
                                        <li>Bogotá.</li>
                                        <li>Medellín.</li>
                                        <li>Cali.</li>
                                    </ul>
                                </ScrollAnimation>
                            </Col>
                            <Col sm="12" md="6">
                                <ScrollAnimation duration={3} animateIn="animate__animated animate__zoomIn">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6ffbCWMiRjY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="box-brown-ligth text-white">
                    <svg className="wave-brown" viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 36L133 36L133 65L267 65L267 34L400 34L400 40L533 40L533 15L667 15L667 24L800 24L800 34L800 0L800 0L667 0L667 0L533 0L533 0L400 0L400 0L267 0L267 0L133 0L133 0L0 0Z" fill="#0066FF"></path></svg>
                    <div className="box-fixer">
                        <ScrollAnimation duration={3} animateIn="animate__animated animate__fadeIn">
                            <h1>¿Dónde estamos</h1>
                        </ScrollAnimation>
                        <p>
                            El Eremitorio queda ubicado en el Municipio de Fúquene, a 100 Kilómetros de Bogotá, a dos horas desde el portal del norte.
                            Ruta: Bogotá, Centro Chía, Cajicá, Zipaquirá, Ubaté, Capellanía, que es el punto de encuentro, ya a 10 minutos del eremitorio.
                        </p>
                    </div>
                </div>
                <div className="box-white text-brown">
                    <svg className="wave-brown-ligth" viewBox="0 0 900 200"><path d="M0 53L50 47.7C100 42.3 200 31.7 300 27C400 22.3 500 23.7 600 32C700 40.3 800 55.7 850 63.3L900 71L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z"></path></svg>
                    <div className="box-fixer pull-up-2">
                        <h1>Información de contacto</h1>                    
                        <div className="box-spacer-2">
                            <ul>
                                <li><b>Correo: </b>francisclareanofs@gmail.com</li>
                                <li>Jairo Valderrama.  <b>Celular: </b>315 3358928. </li>
                                <li>Elena Leongómez.  <b>Celular: </b>317 3775856. </li>
                            </ul>
                        </div> 
                    </div>
                </div>
            </>
        );
    }
}