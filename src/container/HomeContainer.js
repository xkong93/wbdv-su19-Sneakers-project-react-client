import React, {Component} from 'react';
import StockService from "../services/StockService";
import HomeNotUserComponent from "../component/HomeNotUserComponent";

export default class HomeContainer extends Component {
    constructor(props){
        super(props);
        this.stockService = StockService.getInstance();
        this.state ={
            stock: []
        }
    }

    // findAllShoes = () =>
    //     this.stockService.find

    render() {
        return (
            <div>
                <HomeNotUserComponent shoes={this.state.stock}></HomeNotUserComponent>
            </div>
        )
    }
}
