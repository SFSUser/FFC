import React, { Component } from 'react';
import CategoryBoxProp from 'tsc/entity/nav/props/CategoryBoxProp';

export default class CategoryBox extends Component<CategoryBoxProp> {
    constructor(props: any){
        super(props);
    }

    render() {
        let me = this;
        return (
            <div className={`card category`}>
                <h4>{me.props.data.title}</h4>
                <ul>
                    {me.props.data.sections.map( (s: any, i: any) => {
                        return <li key={i}>{s.name}</li>;
                    })}
                </ul>
                <div className={`category__image category__image__${me.props.data.image}`}></div>
            </div>
        );
    }
}