import React, {Component} from 'react';
import AddingComponent from "../component/ReviewComponents/AddingComponent";
import UserService from "../services/UserService";
import ProductService from "../services/ProductService";

export default class AddingRContainer extends React.Component{
    constructor(props) {
        super(props);
        this.userService= UserService.getInstance()
        this.productService = ProductService.getInstance()
        this.state = {
            uid: this.props.match.params.uid,
            urlKey: this.props.match.params.urlKey,
            response: {},
            user: {}
        }
    }

    componentDidMount() {
        this.getUserById(this.state.uid)
        this.getProductByUrl(this.state.urlKey)
    }

    getUserById=(uid)=>
        this.userService.findUserById(uid).then(response => this.setState({user: response}))

    getProductByUrl = (url) =>
        this.productService.findProductByUrlKey(url).then(response => this.setState({response: response}))

    render(){
        return(
            <div>
                {console.log(this.state.response)}
                <AddingComponent uid={this.state.uid} pid={this.state.response.id}/>
            </div>
        )
    }

}
