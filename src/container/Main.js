import React, {Component} from 'react';
import SearchStockContainer from "./SearchStockContainer";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import StockDetailComponent from "../component/StockDetailComponent";
import StockDetailContainer from "./StockDetailContainer";

class Main extends Component {
    render() {
        return (

            <Router>
                <h1>main</h1>
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
            </Router>
        );
    }
}

export default Main;
