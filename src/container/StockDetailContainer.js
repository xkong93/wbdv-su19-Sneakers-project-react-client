import React, {Component} from 'react';
import StockDetailComponent from "../component/ProductComponents/StockDetailComponent";
import StockService from "../services/StockService"
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import ProductReviewContainer from "./ProductReviewContainer";
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


class StockDetailContainer extends Component {

    constructor(props) {
        super(props)
        this.stockService = StockService.getInstance()
        this.state = {
            detail: {},
            pid: this.props.match.params.pid,
            uid:this.props.match.params.uid
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
                <ProductReviewContainer params={this.props.match.params}/>
                <Link href={`/add/${this.state.pid}/${this.state.uid}`} color="inherit"><Button fullWidth size={"large"} variant="outlined" color="inherit">Add Review</Button></Link>
            </Container>
        );
    }
}

export default StockDetailContainer;
