import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import FFC from  '../../../../assets/img/ffc.png';
import * as I from 'react-feather';
import { HomeCategory } from '../../constant/common';

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
        
        return (
            <>
                <div className="header-bar-sections desktop">
                    {HomeCategory.map( (c, i) => 
                        <Link key={i} to={c.url} className="header-bar-section">
                            {c.title}
                        </Link>
                    )}
                </div>
                <div className="page-header">
                    <div className="main-title">
                        <div>
                            <img src={FFC} />

                            <h1>{me.props.title}</h1>

                            <Link className="mt-0 ml-2" to="/">
                                <Button variant="danger">
                                    <I.ArrowLeft/> Volver
                                </Button>
                            </Link> 
                        </div>
                        {sections.length > 0 && 
                            <div className="header-category-sections">
                                {sections.map( (s: any, i: number) => 
                                    <Link key={i} to={s.url} className={`header-category-section ${(s.url) == location.pathname ? 'header-category-section--active' : ''}`}>
                                        {s.name}
                                    </Link>
                                )}
                            </div>
                        }
                    </div>
                </div>
            </>
        );
    }
}
