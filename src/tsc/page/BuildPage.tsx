import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

export default class BuildPage extends Component {
    
    render (){
        return (
            <div className="textcenter">
                <div className="p-3">
                    <Link to="/"><Button color="danger">Volver atrás</Button></Link>
                </div>
                
                <ScrollAnimation duration={3} animateIn="animate__animated animate__bounceIn">
                    <div className="ffc-build"></div>
                </ScrollAnimation>
            </div>
        );
    }
}