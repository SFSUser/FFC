import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

export default class BuildPage extends Component {
    
    render (){
        return (
            <div className="textcenter">
                <div className="p-3">
                    <a href="/"><Button color="danger">Volver atrás</Button></a>
                </div>
                
                <ScrollAnimation duration={3} animateIn="animate__animated animate__bounceIn">
                    <div className="ffc-build"></div>
                </ScrollAnimation>
            </div>
        );
    }
}