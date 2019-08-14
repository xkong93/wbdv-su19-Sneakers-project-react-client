import React, {Component} from 'react';
import PortfolioComponent from '../../component/AccountComponents/PortfolioComponent'
import UserService from "../../services/UserService"

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

        const uid = this.props.match.params.uid
        this.userService.getPortfolioForUserByUserId(uid)
            .then(response => {
                this.setState({
                    portfolioItems: response.portfolioItems,
                    totalItem: response.totalItem,
                    retailSum: response.retailSum,
                    marketSum: response.marketSum,
                    gainLossSum: response.gainLossSum
                })
            })
    }
    render() {
        return (
            <div>
                {console.log(this.state)}
                {this.state.portfolioItems.length > 0 && <PortfolioComponent uid={this.props.match.params.uid} portfolio={this.state}/>}
            </div>
        );
    }
}

export default PortfolioContainer;
