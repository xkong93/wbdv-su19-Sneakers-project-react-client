import React, {Component} from 'react';
import StockService from "../services/StockService";
import HomeNotUserComponent from "../component/HomeNotUserComponent";
import ProductService from "../services/ProductService";
import Cookies from 'js-cookie'

export default class HomeContainer extends Component {
    constructor(props){
        super(props);
        this.productService = ProductService.getInstance();
        this.state ={
            products : []
        }
    }

    componentDidMount() {
            this.productService.findAllProduct().then(products =>  this.setState({products: products}))
    }


    render() {
        return (
            <div>
                <HomeNotUserComponent products={this.state.products}></HomeNotUserComponent>
            </div>
        )
    }
}
