import { Component } from "react";
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import React from 'react';
import * as I from 'react-feather';
import FFC from  '../../../assets/img/ffc.png';
import { HomeCategory } from "../constant/common";

import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

export class HomePage extends Component<RouteComponentProps, { innerWidth: string, category: any}> {
    constructor(props: any){
        super(props);
        this.state = {
            innerWidth: window.innerHeight + "px",
            category: null,
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

    private setCategory(category: any){
        let me = this;

        if(category.sections.length == 1) {
            this.props.history.push(category.sections[0].url);
            return;
        }

        me.setState({
            category: category
        });
    }
    
    componentWillUnmount(){
        let me = this;
        window.removeEventListener("resize", me.resizeEvent);
    }

    private showLine(group: number){
        let me = this;
        return HomeCategory.filter( c => c.group == group ).map( (c, i) => 
            <div onClick={ () => me.setCategory(c) } key={i} className="home-cell">
                {me.state.category !== c && 
                    <h3>
                        {c.title}
                    </h3>
                }
                <div className={`image image__${c.image}`}></div>
                {me.state.category == c &&
                    <div className="section-list">
                        <h2>
                            {c.title}
                        </h2>
                        {c.sections.map( (s: any, i) => 
                            <Link key={i} to={s.url}>
                                {!s.ready && <I.AlertTriangle/>} {s.name} 
                            </Link>
                        )}
                    </div>
                }
            </div>
        );
    }

    render(){
        let me = this;
        return(
            <div className="wrapper">
                <div className="home" style={{height: me.state.innerWidth }}>
                    <div className="home-bar-image">
                        {me.showLine(1)}
                    </div>
                    <div className="home-bar-pattern"></div>
                    <div className="home-bar-middle">
                        <div>
                            <div className="text-center">
                                <img src={FFC} />
                            </div>
                            <h1>Familia Franciscana de Colombia</h1>
                        </div>
                        {/*HomeCategory.filter( c => c.group == 0 ).map( (c, i) => 
                            <div key={i}>
                                <span>
                                    {c.title}
                                </span>
                                {c.sections.map( s => 
                                    <a>{s.name}</a>
                                )}
                            </div>
                        )*/}
                        <ul className="family-list">
                            <li>OFS</li>
                            <li>OFM</li>
                            <li>OFM Conv</li>
                            <li>OFM Cap</li>
                            <li>OSC</li>
                            <li>Jufra</li>
                            <li>HFMMA</li>
                            <li>FIC</li>
                            <li>FMI</li>
                            <li>FMM</li>
                        </ul>
                    </div>
                    <div className="home-bar-pattern"></div>
                    <div className="home-bar-image">
                        {me.showLine(2)}
                    </div>
                    {  
                        /* me.state.category &&
                        <div className="backdrop">
                            <div className="section-dialog">
                                <ul className="section-list">
                                    {me.state.category.sections.map( (s:any) => 
                                        <li><Link to={s.url}>{s.name}</Link></li>
                                    )}
                                </ul>    
                                <Button onClick={() => me.setCategory(null)}>Cerrar ventana</Button>
                            </div>
                        </div>
                        */
                     }
                </div>
            </div>
        );
    }
}

export default withRouter(HomePage);
