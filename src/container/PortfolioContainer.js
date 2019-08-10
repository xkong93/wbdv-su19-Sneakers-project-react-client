import React, {Component} from 'react';
import PortfolioComponent from '../component/ProfileComponents/PortfolioComponent'
import UserService from "../services/UserService"

class PortfolioContainer extends Component {

    constructor(props) {
        super(props)
        this.userService = UserService.getInstance()
        this.state = {
            portfolioItems: [],
            totalItem: '',
            retailSum: '',
            marketSum: '',
            gainLossSum: ''
        }
    }

    componentDidMount() {
        var data = '';
        this.userService.getPortfolioForUserByUserId(1)
            .then(response => this.setState({
                portfolioItems: response.portfolioItems
            }))
    }

    render() {
        return (
            <div>
                <PortfolioComponent/>

            </div>
        );
    }
}

export default PortfolioContainer;
