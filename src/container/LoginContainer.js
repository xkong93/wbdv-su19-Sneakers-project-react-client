import React, {Component} from 'react';
import LoginComponent from '../component/LoginSignUpComponents/LoginComponent'
import UserService from "../services/UserService"
import {Redirect} from 'react-router';
import Cookies from 'js-cookie'

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.userService = UserService.getInstance()
        this.state = {
            isLoggedIn: false,
            isFailed: false,
            user: {
                username: "",
                password: ""
            },
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        var body = this.state.user;
        this.userService.login(body)
            .then(res => {
                if (res != undefined) {
                    var sessionId = Cookies.get().JSESSIONID;
                    localStorage.setItem(sessionId, JSON.stringify(res)); //json to string
                    this.setState({
                        register: true,
                        isLoggedIn:true
                    })
                } else {
                    this.setState({isFailed: true}, () => {
                        setTimeout(() => this.setState({isFailed: false}), 3000)
                    });
                }
            })
    }



    handleUserName = (e) => {
        this.setState({
            user: {
                username: e.target.value,
                password: this.state.user.password
            }
        })

    }

    handlePassword = (e) => {
        this.setState({
            user: {
                username: this.state.user.username,
                password: e.target.value
            }
        })
    }

    render() {
        if (this.state.isLoggedIn == true) {
            return (<Redirect to="/home"/>);
        } else {
            return (<LoginComponent isFailed={this.state.isFailed} handleSubmit={this.handleSubmit}
                                    handlePassword={this.handlePassword}
                                    handleUserName={this.handleUserName}
            />);
        }
    }
}

export default LoginContainer;
