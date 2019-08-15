import React, {Component} from 'react';
import UserService from "../services/UserService"
import {Redirect} from 'react-router';
import SignUpComponent from "../component/LoginSignUpComponents/SignUpComponent";
import EditorService from "../services/EditorService";


class RegisterContainer extends Component {
    constructor(props) {
        super(props);
        this.userService = UserService.getInstance()
        this.editorService = EditorService.getInstance()
        this.state = {
            register: false,
            notregister: false,
            editor: false,
            noEditor: false,
            response: {}

        }
    }


    createUser = (user, e) => {
        e.preventDefault()
        this.userService.createUser(user).then(res => {
            console.log(res.status)
            if (res.status == 200 || res.status == 304) {
                this.setState({
                    register: true,
                })
            } else {
                this.setState({notregister: true}, () => {
                    setTimeout(() => this.setState({notregister: false}), 3000)
                });
            }
        })
    }

    creatEditor = (editor, code, e) => {
        e.preventDefault()
        this.editorService.createEditor(editor, code).then(res => {
                        console.log(res.status)

            if (res.status == 200 || res.status == 304) {
                this.setState({
                    register: true,
                })
            } else {
                this.setState({noEditor: true}, () => {
                    setTimeout(() => this.setState({noEditor: false}), 3000)
                });
            }
        })
    }

    render() {
        if (this.state.register == true) {
            return (<Redirect to="/login"/>);
        } else {
            return (<SignUpComponent isFailed={this.state.notregister} createU={this.createUser}
                                     noEditor={this.state.noEditor} createE={this.creatEditor}
            />);
        }
    }
}

export default RegisterContainer;
