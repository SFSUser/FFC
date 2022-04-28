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
import TertuliaPage from './TertuliaPage';
import ActualidadPage from './ActualidadPage';

export default class BasePage extends Component {
    render (){
        return (
            <div className="wrapper">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{WEB_TITLE}</title>
                    <meta name="description" content={WEB_DESCRIPTION}/>
                    <link rel="icon" type="image/png" href="https://i.imgur.com/CChNH8e.png" sizes="16x16" />
                </Helmet>
                <BrowserRouter>
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
                    <Route exact path="/tertulia">
                        <GaPage>
                            <TertuliaPage />
                        </GaPage>
                    </Route>
                    <Route path="/tertulia/:meet">
                        <GaPage>
                            <TertuliaPage />
                        </GaPage>
                    </Route>
                    <Route exact path="/actualidad">
                        <GaPage>
                            <ActualidadPage />
                        </GaPage>
                    </Route>
                    <Route path="/actualidad/:articulo">
                        <GaPage>
                            <ActualidadPage />
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
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}
