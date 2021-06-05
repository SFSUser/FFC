import React, { Component } from 'react';
import CategoryBoxProp from 'tsc/entity/nav/props/CategoryBoxProp';

export default class CategoryBox extends Component<CategoryBoxProp> {
    constructor(props: any){
        super(props);
    }

    render() {
        let me = this;
        return (
            <div className={`card category category__${me.props.data.image}`}>
                <h4>{me.props.data.title}</h4>
            </div>
        );
    }
}