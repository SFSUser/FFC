import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router';
import { HashRouter, Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Footer from './section/Footer';
import HomePage from './HomePage';
import TestPage from './TestPage';
import BuildPage from './BuildPage';

export default class BasePage extends Component {
    render (){
        return (
            <div className="wrapper">
                <HashRouter>
                    <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route path="/test">
                            <TestPage />
                        </Route>
                        <Route path="/build">
                            <BuildPage />
                        </Route>
                    </Switch>
                </HashRouter>
                <Footer/>
            </div>
        );
    }
}