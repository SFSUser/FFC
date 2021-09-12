import React, { Component } from 'react';
import * as Icon from 'react-feather';

export default class Footer extends Component {
    render() {
        return (
            <div className="www-footer card p-2 mt-2 mb-2">
                <h4>Información de contacto</h4>

                <div className="social">
                    <span className="p-2">
                        <Icon.Facebook/> Facebook
                    </span>
                    <span className="p-2">
                        <Icon.Twitter/> Twitter
                    </span>
                    <span className="p-2">
                        <Icon.Youtube/> Youtube
                    </span>
                </div>
            </div>
        );
    }
}  