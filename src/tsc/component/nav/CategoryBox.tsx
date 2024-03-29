import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import CategoryBoxProp from 'tsc/entity/nav/props/CategoryBoxProp';
import $ from "jquery";

export default class CategoryBox extends Component<any> {
    private image: any = null;
    constructor(props: any){
        super(props);
        this.image = React.createRef();
    }

    componentDidMount(){
        let me = this;
        window.addEventListener("scroll", function () {
            let parallax =  me.image.current;
            let scrollPosition = window.pageYOffset;
            $(parallax).stop().animate({
                backgroundPositionY: (scrollPosition * 0.1) + "%"
            });
        });
    }

    render() {
        let me = this;
        return (
            <div className={`card category`}>
                <h4>{me.props.data.title}</h4>
                {me.props.data.sections.map( (s: any, i: any) => {
                    return <a key={i} href={s.url}>{s.name}</a>;
                })}
                <div ref={me.image} className={`image image__${me.props.data.image}`}></div>
            </div>
        );
    }
}