import React, {Component} from 'react';
import SearchStockContainer from "./SearchStockContainer";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import StockDetailContainer from "./StockDetailContainer";
import HomeContainer from "./HomeContainer"
import NavigationComponent from "../component/NavigationComponent";
import ProductReviewContainer from "./ProductReviewContainer";
import LoginComponent from "../component/LoginComponent";
import SignUpComponent from "../component/SignUpComponent";
import NaviComponent from "../component/NaviComponent"
import LoginSignUpContainer from "./LoginSignUpContainer";
import ProfileContainer from "./ProfileContainer";

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
                            component={SignUpComponent}
                        />
                    </div>
                    <div>
                        <Route
                            path='/profile'
                            component={ProfileContainer}
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
