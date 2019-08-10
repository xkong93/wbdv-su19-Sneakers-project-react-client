import React, {Component} from 'react';
import SearchStockContainer from "./SearchStockContainer";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import StockDetailContainer from "./StockDetailContainer";
import HomeContainer from "./HomeContainer"
import NavigationComponent from "../component/NavigationComponent";
import ProductReviewContainer from "./ProductReviewContainer";
import LoginComponent from "../component/LoginSignUpComponents/LoginComponent";
import SignUpComponent from "../component/LoginSignUpComponents/SignUpComponent";
import NaviComponent from "../component/NaviComponent"
import LoginSignUpContainer from "./LoginSignUpContainer";
import ProfileContainer from "./ProfileContainer";
import PortfolioContainer from "./PortfolioContainer";
import AddingComponent from "../component/ReviewComponents/AddingComponent";

class Main extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavigationComponent/>
                    <div>
                        <Route
                            path='/detail/addReview'
                            component={AddingComponent}
                        />
                    </div>
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
                            component={SignUpComponent}
                        />
                    </div>
                    <div>
                        <Route
                            path='/user/:uid/profile/:type'
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
