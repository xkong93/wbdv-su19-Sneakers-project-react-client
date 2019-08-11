import React, {Component} from 'react';
import LoginComponent from '../component/LoginSignUpComponents/LoginComponent'
import UserService from "../services/UserService"
import {Redirect} from 'react-router';


class LoginSignUpContainer extends Component {
    constructor(props) {
        super(props);
        this.userService = UserService.getInstance()
        this.state = {
            userId: null,
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
            .then(user => {
                console.log(user.id)
                if (user.id>0) {
                    console.log(user.id)
                    this.setState({
                        isLoggedIn: true,
                        userId: user.id
                    })
                }
                //暂时没想到要如何用
                //else {
                //    this.setState({isFailed: true}, () => {
                 //       setTimeout(() => this.setState({isFailed: false}), 3000)
                 //   });
               // }
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
        if (this.state.isLoggedIn) {
            console.log("logged in")
            return (<Redirect to={`/user/${this.state.userId}/profile`}/>);
        } else {
            return (<LoginComponent
                handleSubmit={this.handleSubmit}
                handlePassword={this.handlePassword}
                handleUserName={this.handleUserName}
            />);
        }
    }
}

export default LoginSignUpContainer;
