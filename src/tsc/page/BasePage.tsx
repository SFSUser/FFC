import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Footer from './section/Footer';
import HomePage from './HomePage';
import TestPage from './TestPage';
import RedPage from './RedPage';
import BuildPage from './BuildPage';

export default class BasePage extends Component {
    render (){
        return (
            <div className="wrapper">
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