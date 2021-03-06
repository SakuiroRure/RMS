import React, { Component } from 'react';
import { HttpService } from '../../service/http';
import { UserInfo } from '../../service/user';
import * as type from '../../store/type'
import { connect } from 'react-redux';
import './login.less';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logo:require('../../assets/logo.png'),
            user:'',
            pass:'',
            messageList: []
        }
    }
    componentWillMount() {
        console.log("mount", this, this.props)
        let info = this.props.history.location.query
        this.getMessageList()
    }
    back() {
        this.props.history.goBack();
    }
    toDate(stack){
        if(stack){
          let date = new Date(stack)
          return `${(date.getHours()<10?"0":"")+date.getHours()}:${(date.getMinutes()<10?"0":"")+date.getMinutes()}`
        }
    }
    getMessageList() {
        let api = `/userComments/getProductComments`
        let params = {
            product_type: 1,
            product_id: 39817,
            pageNow: 1,
            pageSize: 10,
        }
        HttpService.request("get", api, params).then(res => {
            this.setState({
                messageList: res.data.userComments
            })
        })
    }
    getMerberInfo(){
        let api = `/member/getInfo`;
        HttpService.request("post",api,{}).then(res=>{
            console.log("merber",res)
            this.props.dispatch(type.User_Edit,res.data)
            UserInfo.setUserInfo(res.data)
            this.props.history.goBack();
        })
    }
    submit(){
        let w = /\w+/
        if(!this.state.user)
            console('请填写用户名!!!',1)
        if(!w.test(this.state.user))
            console('请正确填写用户名!!!', 1)
        if(!this.state.pass)
            console('请填写密码!!!', 1)
        let api = `/member/h5/userLogin`
        let params = {
            loginName:this.state.user,
            pwd:this.state.pass
        }
        HttpService.request("post",api,params).then(res=>{
            if(res.flag==20000){
                this.props.dispatch(type.User_Edit,res.data)
                UserInfo.setUserInfo(res.data)
                this.getMerberInfo()
            }else{
                console(res.msg,1)
                this.setState({
                    user:'',
                    pass:''
                })
            }
        })
    }
    render() {
        return (
            <div id="login_container">
                <section className="main">
                    <img src={this.state.logo} className="logo"/>
                    <div className="info">
                        <div className="info_sec">
                            <img src={require('../../assets/number.png')}/>
                            <input type="text" placeholder="please input your username" value={this.state.user}  ref={(dom)=>{this.userDom = dom}} onChange={()=>this.setState({user:this.userDom.value})}/>
                        </div>
                        <div className="info_sec">
                            <img src={require('../../assets/password.png')}/>
                            <input type="password" placeholder="password?" value={this.state.pass}  ref={(dom)=>{this.passDom = dom}} onChange={()=>this.setState({pass:this.passDom.value})}/>
                        </div>
                        <button onClick={this.submit.bind(this)}>确定</button>
                    </div>
                </section>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        userInfo: state.userInfo,
        product: state.product
    }
}, {
        dispatch(type, value) {
            return { type, value }
        }
    })(App)