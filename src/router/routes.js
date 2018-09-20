import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/home/home'
import Table from '../pages/table/table'
import NotFound from '../pages/NotFound'


export default class RouteConfig extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/home" push />} />
                <Route path="/home" exact component={Home} name="首页"/>
                <Route path="/table" exact component={Table} name="列表页"/>
                <Route path="/404" component={NotFound} />
                <Route render={() => <Redirect to="/404" />}/>
            </Switch>
        )
    }
}