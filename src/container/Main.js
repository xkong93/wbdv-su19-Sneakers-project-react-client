import React, {Component} from 'react';
import SearchStockContainer from "./SearchStockContainer";
import {BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";
import StockDetailContainer from "./StockDetailContainer";
import HomeContainer from "./HomeContainer"
import NavigationComponent from "../component/HomeComponents/NavigationComponent";
import SignUpComponent from "../component/LoginSignUpComponents/SignUpComponent";
import LoginContainer from "./LoginContainer";
import AccountContainer from "./AccountContainer/AccountContainer";
import AddingRContainer from "./AddingRContainer";
import RegisterContainer from "./RegisterContainer";


class Main extends Component {

    render() {
        return (
            <div >
                <Router>

                    <Route component={NavigationComponent}/>
                        <Switch>
                        <Route exact path="/" component={HomeContainer}/>
                        <Route path="/home" component={HomeContainer}/>
                        <Route path="/login" component={LoginContainer}/>
                        <Route path="/register" component={RegisterContainer}/>
                        <Route path="/search/:keywords" component={SearchStockContainer}/>
                        <Route path="/detail/:urlKey" component={StockDetailContainer}/>
                        <Route path="/add/:urlKey/:pid/:uid" component={AddingRContainer}/>
                        <Route path="/user/:uid" component={AccountContainer}/>
                        </Switch>
                </Router>
            </div>
        );
    }
}

export default Main;
