import { Component } from "react";
import { Link } from 'react-router-dom';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import * as common from "../constant/common";
import CategoryBox from "../component/nav/CategoryBox";
import FFC from  '../../../assets/img/ffc.png';
import { HomeCategory } from "../constant/common";

export default class HomePage extends Component<{}, { innerWidth: string}> {
    constructor(props: any){
        super(props);
        this.state = {
            innerWidth: window.innerHeight + "px"
        };
    }

    private resizeEvent: any;

    componentDidMount(){
        let me = this;
        me.resizeEvent = function(){
            let innerWidth = window.innerHeight + "px";
            me.setState({
                innerWidth 
            });
        }
        window.onresize = me.resizeEvent;
    }
    
    componentWillUnmount(){
        let me = this;
        window.removeEventListener("resize", me.resizeEvent);
    }

    render(){
        let me = this;
        return(
            <div className="wrapper">
                <div className="home" style={{height: me.state.innerWidth }}>
                    <div className="home-bar-image">
                        {HomeCategory.filter( c => c.group == 1 ).map( (c, i) => 
                            <Link key={i} to={c.url} className="home-cell">
                                <h3>{c.title}</h3>
                                <div className={`image image__${c.image}`}></div>
                            </Link>
                        )}
                    </div>
                    <div className="home-bar-pattern"></div>
                    <div className="home-bar-middle">
                        <div>
                            <div className="text-center">
                                <img src={FFC} />
                            </div>
                            <h1>Familia Franciscana de Colombia</h1>
                        </div>
                        {HomeCategory.filter( c => c.group == 0 ).map( (c, i) => 
                            <Link key={i} to={c.url}>
                                <span>
                                    {c.title}
                                </span>
                            </Link>
                        )}
                    </div>
                    <div className="home-bar-pattern"></div>
                    <div className="home-bar-image">
                        {HomeCategory.filter( c => c.group == 2 ).map( (c, i) => 
                            <Link key={i} to={c.url} className="home-cell">
                                <h3>{c.title}</h3>
                                <div className={`image image__${c.image}`}></div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}