import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from '../pages/main'


export default class RouteConfig extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path="/" component={Main}></Route>  
                </Switch>
            </HashRouter>
        )
    }
}