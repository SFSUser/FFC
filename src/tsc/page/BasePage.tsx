import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router';
import { HashRouter, Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Footer from './section/Footer';
import HomePage from './HomePage';
import TestPage from './TestPage';

export default class BasePage extends Component {
    render (){
        return (
            <div>
                <div className="fixer">
                    <HashRouter>
                        <Navbar bg="light" variant="light">
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Link className="nav-link" to="/">Hogat</Link>
                            <Link className="nav-link" to="/about">Test</Link>
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                        </Navbar>
                        <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route path="/about">
                            <TestPage />
                        </Route>
                        <Route path="/dashboard">
                            <div></div>
                        </Route>
                        </Switch>
                    </HashRouter>
                    <Footer/>
                </div>
            </div>
        );
    }
}