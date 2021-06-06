import { Component } from "react";
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import * as common from "../constant/common";
import CategoryBox from "../component/nav/CategoryBox";

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
                            <>
                                <Col key={i} sm={6}>
                                    <CategoryBox data={cat}/>
                                </Col>
                                {i == 1 && 
                                    <div className="col-sm-12 circle-container">
                                        <div className="circle-fixer">
                                            <div className="circle">
                                                <span className="content">Content</span>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </>
                        );
                    }) }
                </Row>
            </div>
        );
    }
}