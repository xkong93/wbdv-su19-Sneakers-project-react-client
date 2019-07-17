import React, {Component} from 'react';
import fetchJsonp from 'fetch-jsonp';

class SearchStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: '',
            stocks: []
        }
    }

    //因为网站的api不是公共api 所以不能直接fetch 网上说什么违反cors policy
    //只能通过代理服务器模拟浏览器请求
    //看这篇文章：https://medium.com/netscape/hacking-it-out-when-cors-wont-let-you-be-great-35f6206cc646
    searchStock = () => {
        return fetch(`https://cors-anywhere.herokuapp.com/https://stockx.com/api/browse?_search=${this.state.keywords}&dataType=product`)
            .then(response => response.json())
            .then(json => this.renderStock(json)); //key point
    }

    renderStock = (response) => {
        console.log(response)

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
            <div>
                <h1>Search Stock</h1>
                <div className='input-group'>
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
                <ul className="list-group">

                    {
                        this.state.stocks.map(stock => <li className="list-group-item" key={stock.id}>
                            {stock.name}
                            <img src={stock.media.thumbUrl} />

                        </li>)
                    }


                </ul>

            </div>
        );
    }
}

export default SearchStock;
