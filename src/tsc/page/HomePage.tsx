import { Component } from "react";
import { Link } from 'react-router-dom';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import * as common from "../constant/common";
import CategoryBox from "../component/nav/CategoryBox";
import FFC from  '../../../assets/img/ffc.png';

export default class HomePage extends Component {
    constructor(props: any){
        super(props);
    }

    public get WinHeight() {
        return window.innerHeight + "px";
    }

    render(){
        let me = this;
        return(
            <div className="wrapper">
                <div className="home" style={{height: me.WinHeight }}>
                    <div className="home-bar-image">
                        <div className="home-cell image image__jpic">JPIC</div>
                        <div className="home-cell image image__fco_jesus"><b>Formación</b></div>
                        <div className="home-cell image image__donate">Donaciones</div>
                    </div>
                    <div className="home-bar-middle">
                        <div>
                            <div className="text-center">
                                <img width={100} src={FFC} />
                            </div>
                            <h1>Familia Franciscana de Colombia</h1>
                        </div>
                        <div>
                            <span>
                                Espirituralidad
                            </span>
                        </div>
                    </div>
                    <div className="home-bar-image">
                        <div className="home-cell image image__fco_rendon">Oratorio</div>
                        <div className="home-cell image image__jufra">Jóvenes</div>
                        <div className="home-cell image image__tejido_artesanal">Tienda</div>
                    </div>
                </div>
            </div>
        );
    }
}