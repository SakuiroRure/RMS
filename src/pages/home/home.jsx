import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, DatePicker, Icon, Menu } from 'antd';
import './home.less';

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
    render() {
        return (
            <div id="home_container">
                {/* <DatePicker /> */}
                <img src={require('../../assets/welcome.png')} className="content"/>
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