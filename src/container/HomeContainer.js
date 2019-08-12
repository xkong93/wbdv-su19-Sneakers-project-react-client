import React, {Component} from 'react';
import StockService from "../services/StockService";
import HomeNotUserComponent from "../component/HomeNotUserComponent";
import ProductService from "../services/ProductService";
import Cookies from 'js-cookie'
import UserService from "../services/UserService";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default class HomeContainer extends Component {
    constructor(props){
        super(props);
        this.productService = ProductService.getInstance();
        this.userService = UserService.getInstance()
        this.state ={
            products : [],
            uid: (JSON.parse(localStorage.getItem(Cookies.get("JSESSIONID")))).uid
        }
    }

    componentDidMount() {
            //this.productService.findAllProduct().then(products =>  this.setState({products: products}))
            this.getProductsForUser(this.state.uid)
    }

    getProductsForUser=(uid)=>
        this.userService.getProductsForUser(uid).then(products =>  this.setState({products: products}))

    render() {
        return (
            <div>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Let's Collect & Review Sneakers!
                </Typography>
                {/*{Cookies.get("JSESSIONID") != null &&<h3>Your Collection</h3>}*/}
                {Cookies.get("JSESSIONID") != null && this.state.products !=null &&<HomeNotUserComponent products={this.state.products}></HomeNotUserComponent>}

            </div>
        )
    }
}
