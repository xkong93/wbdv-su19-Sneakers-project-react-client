import React, {Component} from 'react';
import StockDetailComponent from "../component/ProductComponents/StockDetailComponent";
import StockService from "../services/StockService"
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
class StockDetailContainer extends Component {


    constructor(props) {
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
                detail: responseJSON.Product
            }))
    }

    render() {
        return (
            <Container maxWidth="lg">
                <StockDetailComponent detail={this.state.detail}/>
            </Container>
        );
    }
}

export default StockDetailContainer;
