 import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import FFC from  '../../../../assets/img/ffc.png';
import * as I from 'react-feather';
import { HomeCategory, WEB_TITLE_SMALL } from '../../constant/common';
import { Helmet } from "react-helmet";

export default class PageHeader extends Component<{title: string, category: string}> {
    constructor(props: any){
        super(props);
    }

    componentDidMount(){
        let me = this;
    }

    private get Sections(): Array<any> {
        let me = this;
        var category: any = HomeCategory.filter( c => c.id == me.props.category)[0];
        let sections: Array<any> = category?.sections ? category.sections : [];
        return sections;
    }

    render() {
        let me = this;
        let sections = me.Sections;
        const locationT = (typeof location == "undefined") ? {pathname:""} : location;
        let current_section = sections.filter( s => s.url == locationT.pathname)[0];
        
        return (
            <>
                <div>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>{WEB_TITLE_SMALL} - {me.props.title}</title>
                    </Helmet>
                </div>
                <div className="header-bar-sections desktop animate__animated animate__fadeIn animate__slow">
                    {HomeCategory.map( (c, i) => 
                        <a key={i} href={c.url} className="header-bar-section">
                            {c.title}
                        </a>
                    )}
                </div>
                <div className="page-header animate__animated animate__fadeIn">
                    <div className="main-title animate__animated animate__slideInDown">
                        <div>
                            <img className="animate__animated animate__zoomIn animate__slow" src="/ffc.png" />

                            <h1 className="animate__animated animate__fadeIn animate__slow">{me.props.title}</h1>

                            <a className="mt-0 ml-2" href="/">
                                <Button variant="danger" className="animate__animated animate__fadeIn animate__slow">
                                    <I.ArrowLeft/> Volver
                                </Button>
                            </a> 
                        </div>
                        {sections.length > 1 && 
                            <div className="header-category-sections animate__animated animate__fadeIn animate__delay-1s">
                                {sections.map( (s: any, i: number) => 
                                    <a key={i} href={s.url} className={`header-category-section ${s == current_section ? 'header-category-section--active' : ''}`}>
                                        {s.shortname ?? s.name}
                                    </a>
                                )}
                            </div>
                        }
                    </div>
                </div>
            </>
        );
    }
}
