import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, DatePicker, Icon, Menu, Table } from 'antd';
import Hammer from 'react-hammerjs';
import './table.less';

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
    touch(type,event){
        console.log(type,event)
    }
    render() {
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: '12%',
        }, {
            title: 'Address',
            dataIndex: 'address',
            width: '30%',
            key: 'address',
        }];

        const data = [{
            key: 1,
            name: 'John Brown sr.',
            age: 60,
            address: 'New York No. 1 Lake Park',
            children: [{
                key: 11,
                name: 'John Brown',
                age: 42,
                address: 'New York No. 2 Lake Park',
            }, {
                key: 12,
                name: 'John Brown jr.',
                age: 30,
                address: 'New York No. 3 Lake Park',
                children: [{
                    key: 121,
                    name: 'Jimmy Brown',
                    age: 16,
                    address: 'New York No. 3 Lake Park',
                }],
            }, {
                key: 13,
                name: 'Jim Green sr.',
                age: 72,
                address: 'London No. 1 Lake Park',
                children: [{
                    key: 131,
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 2 Lake Park',
                    children: [{
                        key: 1311,
                        name: 'Jim Green jr.',
                        age: 25,
                        address: 'London No. 3 Lake Park',
                    }, {
                        key: 1312,
                        name: 'Jimmy Green sr.',
                        age: 18,
                        address: 'London No. 4 Lake Park',
                    }],
                }],
            }],
        }, {
            key: 2,
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }];
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                console.log(selected, selectedRows, changeRows);
            },
        }
        return (
            <div id="table_container">
                <Hammer 
                    onTap={this.touch.bind(this,'onTap')} 
                    onSwipe={this.touch.bind(this,'onSwipe')}
                >
                    <section>
                        <DatePicker />
                    </section>
                </Hammer>
                <Table columns={columns} rowSelection={rowSelection} dataSource={data} />,
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