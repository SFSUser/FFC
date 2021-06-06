import React, { Component } from 'react';

export default class TestPage extends Component {
    
    render (){
        return (
            <div>
                <h1>Test page</h1>
                <div className="circle">
                    <span className="content">Content</span>
                </div>
                <hr/>
                <div className="base-wrapper">
                    <div className="parallax-container">
                        <div className="wrapper">
                            <img className="background__image" src="https://s3-ap-southeast-2.amazonaws.com/daily-fire-assets/codepen-assets/dotted-background.png" />
                            <img className="middle__image" src="https://s3-ap-southeast-2.amazonaws.com/daily-fire-assets/codepen-assets/stars.png" />
                            <img className="foreground__image" src="https://s3-ap-southeast-2.amazonaws.com/daily-fire-assets/codepen-assets/polygons.png" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}