import React, {Component} from 'react';
import ProfileContainer from './ProfileContainer'
import PortfolioContainer from './PortfolioContainer'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class AccountContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {}


    }


    render() {
        const match = this.props.match

        return (
            <div>
                <h1>account</h1>

                <Switch>
                    //key point
                    <Route path={`${match.url}/profile`} component={ProfileContainer}/>
                    <Route path={`${match.url}/portfolio`} component={PortfolioContainer}/>
                </Switch>


            </div>
        );
    }
}

export default AccountContainer;
