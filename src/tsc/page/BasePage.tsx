import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Footer from './section/Footer';
import HomePage from './HomePage';
import TestPage from './TestPage';
import RedPage from './RedPage';
import EscuelaPage from './EscuelaPage';
import BuildPage from './BuildPage';
import { WEB_DESCRIPTION, WEB_TITLE } from '../constant/common';

export default class BasePage extends Component {
    render (){
        return (
            <div className="wrapper">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{WEB_TITLE}</title>
                    <meta name="description" content={WEB_DESCRIPTION}/>
                </Helmet>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route path="/test">
                            <TestPage />
                        </Route>
                        <Route path="/red">
                            <RedPage />
                        </Route>
                        <Route path="/escuela">
                            <EscuelaPage />
                        </Route>
                        <Route path="/build">
                            <BuildPage />
                        </Route>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}