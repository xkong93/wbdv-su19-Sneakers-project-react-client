import React, {Component} from 'react';
import StockDetailComponent from "../component/ProductComponents/StockDetailComponent";
import StockService from "../services/StockService"
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import ProductReviewContainer from "./ProductReviewContainer";
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import ProductService from "../services/ProductService";


class StockDetailContainer extends Component {

    constructor(props) {
        super(props)
        this.stockService = StockService.getInstance()
        this.productService=ProductService.getInstance()
        this.state = {
            detail: {},
            pid: this.props.match.params.pid,
            uid:this.props.match.params.uid,
            urlKey:  this.props.match.params.urlKey,
            product: ''
        }

    }

    componentDidMount() {

        // const urlKey = this.props.match.params.urlKey
        this.stockService.obtainDetailInfo(this.state.urlKey)
            .then(responseJSON => this.setState({
                detail: responseJSON.Product
            }))
    }

    addProduct=(urlKey, uid)=>
        this.productService.addProduct(urlKey, uid).then(response => this.setState({product: response}))

    render() {
        return (
            <Container maxWidth="lg">
                {/*{console.log(this.state.product.timestamp)}*/}
                <div className="float-right">
                    <button type="button" className="btn btn-info" onClick={()=>this.addProduct(this.state.urlKey, this.state.uid)}>Add to Collection</button></div>
                <StockDetailComponent detail={this.state.detail}/>
                <ProductReviewContainer params={this.props.match.params}/>
                <Link href={`/add/${this.state.pid}/${this.state.uid}`} color="inherit"><Button fullWidth size={"large"} variant="outlined" color="inherit">Add Review</Button></Link>
            </Container>
        );
    }
}

export default StockDetailContainer;
