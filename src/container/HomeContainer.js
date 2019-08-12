import React, {Component} from 'react';
import StockService from "../services/StockService";
import HomeNotUserComponent from "../component/HomeNotUserComponent";
import ProductService from "../services/ProductService";
import Cookies from 'js-cookie'
import UserService from "../services/UserService";

export default class HomeContainer extends Component {
    constructor(props){
        super(props);
        this.productService = ProductService.getInstance();
        this.userService = UserService.getInstance()
        this.state ={
            products : {},
            uid: (JSON.parse(localStorage.getItem(Cookies.get("JSESSIONID")))).uid
        }
    }

    componentDidMount() {
            //this.productService.findAllProduct().then(products =>  this.setState({products: products}))

    }

    getProductsForUser=(uid)=>
        this.userService.getProductsForUser(uid).then(products =>  this.setState({products: products}))

    render() {
        return (
            <div>
                {console.log(this.state.products)}
                {Cookies.get("JSESSIONID") != null &&<h3>Your Collection</h3>}
                {Cookies.get("JSESSIONID") != null &&<HomeNotUserComponent products={this.state.products}></HomeNotUserComponent>}
            
            </div>
        )
    }
}
