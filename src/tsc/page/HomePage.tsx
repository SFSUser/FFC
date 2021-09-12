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
                        <div className="home-cell">
                            <h3>JPIC</h3>
                            <div className="image image__jpic"></div>
                        </div>
                        <div className="home-cell image__fco_jesus">
                            <h3>Formación</h3>
                            <div className="image image__fco_jesus"></div>
                        </div>
                        <div className="home-cell image__donate">
                            <h3>Donaciones</h3>
                            <div className="image image__donate"></div>
                        </div>
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
                        <div className="home-cell image__fco_rendon">
                            <h3>Oratorio</h3>
                            <div className="image image__fco_rendon"></div>
                        </div>
                        <div className="home-cell image__jufra">
                            <h3>Jóvenes</h3>
                            <div className="image image__jufra"></div>
                        </div>
                        <div className="home-cell image__tejido_artesanal">
                            <h3>Tienda</h3>
                            <div className="image image__tejido_artesanal"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}