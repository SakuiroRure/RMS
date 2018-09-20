import React, { Component } from 'react';
import { HttpService } from '../service/http';
import { UserInfo } from '../service/user';
import { connect } from 'react-redux';
import { Button, DatePicker, Icon, Menu } from 'antd';
import Top from './public/head';
import Catalog from './public/catalog';
import Content from '../router/routes';
import './main.less';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        }

    }
    componentDidMount() {

    }
    back() {
        this.props.history.goBack();
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <div id="main_container">
                <Top/>
                <Catalog change={this.toggleCollapsed.bind(this)}/>
                <main className={this.state.collapsed?"off":"on"}><Content/></main>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        userInfo: state.userInfo,
        catalog: state.catalog
    }
}, {
        dispatch(type, value) {
            return { type, value }
        }
    })(App)