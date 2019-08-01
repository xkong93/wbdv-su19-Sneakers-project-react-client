import React, {Component} from 'react';
import SearchStockContainer from "./SearchStockContainer";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import StockDetailContainer from "./StockDetailContainer";
import ProductReviewContainer from "./ProductReviewContainer";

class Main extends Component {
    render() {
        return (

            <Router>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">SneakerStock</span>
                    <form className="form-inline my-2 my-lg-0">
                        <Link to='/search'>
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                        </Link>
                    </form>
                </nav>
                <div>
                    <Route
                        path='/search'
                        component={SearchStockContainer}
                    />
                </div>

                <div>
                    <Route
                        path='/detail/:urlKey'
                        component={StockDetailContainer}
                    />
                </div>
                <div>
                    <Route
                        path='/detail/:urlKey'
                        component={ProductReviewContainer}
                    />
                </div>

            </Router>
        );
    }
}

export default Main;
