import React, {Component} from 'react';
import SignUpComponent from '../component/LoginSignUpComponents/SignUpComponent'
import UserService from "../services/UserService"
import {Redirect} from 'react-router';
class RegisterContainer extends Component {
    constructor(props) {
        super(props);
        this.userService = UserService.getInstance()
        this.state = {
            currentUser: [],
            isLoggedIn: false,
            isFailed: false,
            user: {
                username: "",
                email: "",
                password: "",
                firstName: "",
                lastName: ""
            }
        }
    }

    handleRegister = () => {
        var body = this.state.user
        console.log(body)
        this.userService.register(body)
            .then(user => {
                if (user.id>0) {
                    this.setState({
                        isLoggedIn: true,
                        currentUser: user
                    })
                } else {
                    this.setState({isFailed: true},
                        () => {
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
                email: this.state.user.password,
                password: this.state.user.password,
                firstName: this.state.user.password,
                lastName: this.state.user.password
            }
        })

    }

    handlePassword = (e) => {
        this.setState({
            user: {
                username: this.state.user.password,
                email: this.state.user.password,
                password: e.target.value,
                firstName: this.state.user.password,
                lastName: this.state.user.password
            }
        })
    }

    handleFirstName = (e) => {
        this.setState({
            user: {
                username: this.state.user.password,
                email: this.state.user.password,
                password: this.state.user.password,
                firstName: e.target.value,
                lastName: this.state.user.password
            }
        })
    }
    handleLastName = (e) => {
        this.setState({
            user: {
                username: this.state.user.password,
                email: this.state.user.password,
                password: this.state.user.password,
                firstName: this.state.user.password,
                lastName: e.target.value
            }
        })
    }
    handleEmail = (e) => {
        this.setState({
            user: {
                username: this.state.user.password,
                email: e.target.value,
                password: this.state.user.password,
                firstName: this.state.user.password,
                lastName: this.state.user.password
            }
        })
    }

    render() {
        if (this.state.isLoggedIn) {
            console.log(this.state.currentUser)
            return (<Redirect to={`/user/${this.state.currentUser.id}/profile`}/>);
        } else {
            return (
                <SignUpComponent
                    isFailed={this.state.isFailed}
                    handleRegister={this.handleRegister}
                    handlePassword={this.handlePassword}
                    handleUserName={this.handleUserName}
                    handleEmail={this.handleEmail}
                    handleFirstName={this.handleFirstName}
                    handleLastName={this.handleLastName}
                />)
        }
    }
}

export default RegisterContainer;
