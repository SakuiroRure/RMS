import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from '../pages/main';
import NotFound from '../pages/NotFound';


export default class RouteConfig extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/home" push />} /> 
                    <Route path="/" component={Main}></Route> 
                </Switch>
            </HashRouter>
        )
    }
}