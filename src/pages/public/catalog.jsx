import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { HttpService } from '../../service/http';
import { connect } from 'react-redux';
import { Button, DatePicker, Icon, Menu } from 'antd';
import './catalog.less';

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
        this.getCatalogList()
    }
    back() {
        this.props.history.goBack();
    }
    getCatalogList() {
        let api = `/api/system/getMenuList`
        HttpService.request("get", api, {}).then(res => {
            this.setState({ catalogList: res })
        }).catch(e => {
            console.log(e)
        })
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
        this.props.change()
    }
    render() {
        return (
            <div id="catalog_container">
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item className="topMenu">
                        {!this.state.collapsed&&<img src={require('../../assets/exlogo.png')}/>}
                        <Button className="handle" type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                        </Button>
                    </Menu.Item>
                    {this.state.catalogList.map((cata, index) =>
                        <Menu.SubMenu key={index} title={<span><Icon type="mail" /><span>{cata.name}</span></span>}>
                            {cata.sub.map((sub, i) => (
                                <Menu.Item key={i}>
                                    <NavLink to="/table">{sub.name}</NavLink>
                                </Menu.Item>
                            ))}
                        </Menu.SubMenu>

                    )}
                </Menu>
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