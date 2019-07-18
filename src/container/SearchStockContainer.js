import React, {Component} from 'react';
import StockComponent from "../component/StockComponent";
import StockService from "../services/StockService"

class SearchStockContainer extends Component {
    constructor(props) {
        super(props);
        this.stockService = StockService.getInstance()
        this.state = {
            keywords: '',
            stocks: []
        }
    }

    //因为网站的api不是公共api 所以不能直接fetch 网上说什么违反cors policy
    //只能通过代理服务器模拟浏览器请求
    //看这篇文章：https://medium.com/netscape/hacking-it-out-when-cors-wont-let-you-be-great-35f6206cc646
    searchStock = () => {
        this.stockService.searchItem(this.state.keywords)
            .then(json => this.renderStock(json)); //key point
    }

    renderStock = (response) => {
        this.setState({
            stocks: response.Products
        })
    }

    keywordChange = event => {
        this.setState({
            keywords: event.target.value
        });
    }

    render() {
        return (


            <div className="container">
                <div className="row">

                    <h1>Search Stock</h1>
                    <div className='input-group mb-3'>
                        <input className="form-control"
                               value={this.state.keywords}
                               onChange={this.keywordChange}
                               placeholder="keyword"/>
                        <div className="input-group-append">
                            <button
                                onClick={this.searchStock}
                                className="btn btn-primary">
                                Search
                            </button>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">
                        {
                            this.state.stocks.map(stock =>
                                <div key={stock.id} className="col-md-3 col-sm-6 col-12">
                                <div className='card-deck'>
                                    <StockComponent stock={stock}/>
                                </div>
                                </div>
                            )
                        }
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchStockContainer;
