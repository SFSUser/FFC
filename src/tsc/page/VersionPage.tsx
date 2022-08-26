import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
//import { Link } from 'react-router-dom';

export default class VersionPage extends Component {
    
    render (){
        return (
            <div className="textcenter">
                <div className="p-3">
                    <a href="/"><Button color="danger">Volver atrás</Button></a>
                </div>
                <div className="p-5">
                    <h1>VERSION 1.1</h1>
                </div>
            </div>
        );
    }
}