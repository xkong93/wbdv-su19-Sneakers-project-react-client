import React, {Component} from 'react';
import SearchStockContainer from "./SearchStockContainer";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import StockDetailContainer from "./StockDetailContainer";
import HomeContainer from "./HomeContainer"
import NavigationComponent from "../component/NavigationComponent";
import ProductReviewContainer from "./ProductReviewContainer";
import RegisterContainer from "./RegisterContainer";
import LoginSignUpContainer from "./LoginSignUpContainer";
import ProfileContainer from "./ProfileContainer";
import PortfolioContainer from "./PortfolioContainer";

class Main extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavigationComponent/>
                    <div>
                        <Route
                            path='/home'
                            component={HomeContainer}/>
                    </div>
                    <div>
                        <Route
                            path='/login'
                            component={LoginSignUpContainer}
                        />
                    </div>
                    <div>
                        <Route
                            path='/signup'
                            component={RegisterContainer}
                        />
                    </div>
                    <div>
                        <Route
                            path='/user/:uid/profile'
                            component={ProfileContainer}
                        />
                    </div>
                    <div>
                        <Route
                            path='/user/:uid/portfolio'
                            component={PortfolioContainer}
                        />
                    </div>
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
            </div>
        );
    }
}

export default Main;
