import React, {Component} from 'react';
import SearchStock from "./SearchStock";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import StockDetail from "../component/StockDetail";
import StockDetailContainer from "./StockDetailContainer";

class Main extends Component {
    render() {
        return (

            <Router>
                <h1>main</h1>
                <div>
                    <Route
                        path='/search'
                        component={SearchStock}
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
