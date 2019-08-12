import React, {Component} from 'react';
import AddingComponent from "../component/ReviewComponents/AddingComponent";
import UserService from "../services/UserService";

export default class AddingRContainer extends React.Component{
    constructor(props) {
        super(props);
        this.userService= UserService.getInstance()
        this.state = {
            uid: this.props.match.params.uid,
            user: {}
        }
    }

    componentDidMount() {
        this.getUserById(this.state.uid)
    }

    getUserById=(uid)=>
        this.userService.findUserById(uid).then(response => this.setState({user: response}))



    render(){
        return(
            <div>
                <AddingComponent uid={this.state.user.username}/>
            </div>
        )
    }

}
