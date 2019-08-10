import React, {Component} from 'react';
import LoginComponent from '../component/LoginSignUpComponents/LoginComponent'
import SignupComponent from '../component/LoginSignUpComponents/SignUpComponent'
import ProfileComponent from '../component/ProfileComponents/ProfileComponent'
import UserService from "../services/UserService"
import {Redirect} from 'react-router';


class LoginSignUpContainer extends Component {
    constructor(props) {
        super(props);
        this.userService = UserService.getInstance()
        this.state = {
            isLoggedIn: false,
            isFailed: false,
            user: {
                username: "",
                password: ""
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        var body = this.state.user;
        this.userService.login(body)
            .then(res => {
                if (res.status == 200) {
                    this.setState({
                        isLoggedIn: true
                    })
                } else {
                    this.setState({isFailed: true}, () => {
                        setTimeout(() => this.setState({isFailed: false}), 3000)
                    });
                }
            })


    }

    handleUserName = (e) => {
        console.log(e.target.value)
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
        if (this.state.isLoggedIn === true) {
            return (<Redirect to="/profile"/>);
        } else {
            return (<LoginComponent isFailed={this.state.isFailed} handleSubmit={this.handleSubmit}
                                    handlePassword={this.handlePassword}
                                    handleUserName={this.handleUserName}
            />);
        }
    }
}

export default LoginSignUpContainer;
