import React, { Component } from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Footer from './section/Footer';
import HomePage from './HomePage';
import TestPage from './TestPage';
import MigrantesPage from './MigrantesPage';
import EscuelaPage from './EscuelaPage';
import BuildPage from './BuildPage';
import { WEB_DESCRIPTION, WEB_TITLE } from '../constant/common';
import VersionPage from './VersionPage';
import "animate.css/animate.min.css";
import 'animate.css';
import GaPage from '../core/GaPage';

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
                            <GaPage>
                                <HomePage/>
                            </GaPage>
                        </Route>
                        <Route path="/test">
                            <GaPage>
                                <TestPage />
                            </GaPage>
                        </Route>
                        <Route path="/migrantes">
                            <GaPage>
                                <MigrantesPage />
                            </GaPage>
                        </Route>
                        <Route path="/escuela">
                            <GaPage>
                                <EscuelaPage />
                            </GaPage>
                        </Route>
                        <Route path="/build">
                            <GaPage>
                                <BuildPage />
                            </GaPage>
                        </Route>
                        <Route path="/version">
                            <VersionPage />
                        </Route>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}
