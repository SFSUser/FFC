import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class BuildPage extends Component {
    
    render (){
        return (
            <div className="textcenter">
                <div className="p-3">
                    <Link to="/"><Button color="danger">Volver atrás</Button></Link>
                </div>
                <div className="ffc-build"></div>
            </div>
        );
    }
}