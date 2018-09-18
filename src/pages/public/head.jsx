import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { HttpService } from '../../service/http';
import { connect } from 'react-redux';
import { Button, DatePicker, Icon, Menu } from 'antd';
import './head.less';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            catalogList: [],
            extend: [],
        }
        console.log("state", this.state.catalogList)

    }
    componentDidMount() {

    }
    back() {
        this.props.history.goBack();
    }
    render() {
        return (
            <div id="head_container">
                <section>
                    <Icon type="user"/>
                    <span> Admin_super 欢迎你!</span>
                    <Button type="dashed" size="small">退出</Button>
                </section>
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