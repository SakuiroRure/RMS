import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/home/home'


export default class RouteConfig extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/home" push />} />
                <Route path="/home" exact component={Home} name="首页"></Route>
            </Switch>
        )
    }
}