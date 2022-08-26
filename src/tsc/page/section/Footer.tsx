import Link from 'next/link';
import React, { Component } from 'react';
import * as Icon from 'react-feather';
import { HomeCategory } from '../../constant/common';

export default class Footer extends Component {
    render() {
        return (
            <div className="www-footer">
                
                <div className="footer-bar-sections">
                    {HomeCategory.map( (c, i) => 
                        <a key={i} href={c.url} className="footer-bar-section">
                            {c.title}
                        </a>
                    )}
                </div>
                
                <div className="footer-bar-social">
                    <div className="p-2">
                        <Icon.Facebook/> <span>Facebook</span>
                    </div>
                    <div className="p-2">
                        <Icon.Twitter/> <span>Twitter</span>
                    </div>
                    <div className="p-2">
                        <Icon.Youtube/> <span>Youtube</span>
                    </div>
                    <div className="p-2">
                        <Icon.Instagram/> <span>Instagram</span>
                    </div>
                    <div className="p-2">
                        <Icon.Linkedin/> <span>LinkedIn</span>
                    </div>
                </div>
            </div>
        );
    }
}  