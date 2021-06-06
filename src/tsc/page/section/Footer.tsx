import React, { Component } from 'react';
import * as Icon from 'react-feather';

export default class Footer extends Component {
    render() {
        return (
            <div className="www-footer card p-2 mt-3 mb-5">
                <h4>Contatenos</h4>

                <div className="social">
                    <Icon.Facebook/> Facebook
                    <Icon.Twitter/> Twitter
                    <Icon.Youtube/> Youtube
                </div>
            </div>
        );
    }
}  