import { Component } from "react";
import React from 'react';
import ffc from './../../../assets/img/ffc.png';
import { Row, Col } from 'react-bootstrap';
import * as common from "../constant/common";
import CategoryBox from "../component/nav/CategoryBox";
//const HomeCategory = [1,2,3,4];

export default class HomePage extends Component {
    constructor(props: any){
        super(props);
    }

    render(){
        let me = this;
        return(
            <div>
                <h1 className="ffc-title">Familia Franciscana de colombia</h1>
                {/*<div className="text-center">
                    <img className="ffc-logo-small" src={ffc} />
                </div>*/}
                <div className="ffc-paja"></div>
                <Row>
                    { common.HomeCategory.map( (cat, i) => {
                        return (
                            <Col key={i} sm={6}>
                                <CategoryBox data={cat}/>
                            </Col>
                        );
                    }) }
                </Row>
            </div>
        );
    }
}