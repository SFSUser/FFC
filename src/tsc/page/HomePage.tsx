import { Component } from "react";
import { Link } from 'react-router-dom';
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
                                {cat.center ? 
                                    <div key={i} className="col-sm-12 circle-container">
                                        <div className="circle-fixer">
                                            <div className="circle">
                                                <h4>{ cat.title }</h4>
                                                {cat.sections.map( (s:any) => <Link to={s.url}>{s.name}</Link> )}
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <Col key={i} sm={6}>
                                        <CategoryBox data={cat}/>
                                    </Col>
                                }
                            </>
                        );
                    }) }
                </Row>
            </div>
        );
    }
}