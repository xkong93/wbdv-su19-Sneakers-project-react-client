import React, {Component} from 'react';
import StockDetailComponent from "../component/StockDetailComponent";
import StockService from "../services/StockService"

class StockDetailContainer extends Component {

    constructor(props){
        super(props)
        this.stockService = StockService.getInstance()
        this.state = {
            detail: {}
        }

    }

    componentDidMount() {
        const urlKey = this.props.match.params.urlKey
        this.stockService.obtainDetailInfo(urlKey)
            .then(responseJSON => this.setState({
                detail:responseJSON.Product
            }))
    }

    render() {
        return (
            <div>
                <StockDetailComponent detail={this.state.detail}/>
            </div>
        );
    }
}

export default StockDetailContainer;
