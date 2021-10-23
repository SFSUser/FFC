import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import FFC from  '../../../../assets/img/ffc.png';
import * as I from 'react-feather';

export default class PageHeader extends Component<{title: string}> {
    constructor(props: any){
        super(props);
    }

    componentDidMount(){
        let me = this;
    }

    render() {
        let me = this;
        return (
            <div className="page-header">
                <h1>
                    <img src={FFC} />

                    {me.props.title}

                    <Link className="mt-0 ml-2" to="/">
                        <Button variant="danger">
                            <I.ArrowLeft/> Volver
                        </Button>
                    </Link> 
                </h1>
            </div>
        );
    }
}
