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
import {Snackbar} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Cookies from "js-cookie"

class StockDetailContainer extends Component {

    constructor(props) {
        super(props)
        this.stockService = StockService.getInstance()
        this.productService = ProductService.getInstance()
        this.state = {
            detail: {},
            pid: this.props.match.params.pid,
            uid: localStorage.getItem(Cookies.get("JSESSIONID")),
            urlKey: this.props.match.params.urlKey,
            openSuccess: false,
            openFailure: false,
        }

    }

    componentDidMount() {

        // const urlKey = this.props.match.params.urlKey
        this.stockService.obtainDetailInfo(this.state.urlKey)
            .then(responseJSON => this.setState({
                detail: responseJSON.Product
            }))
    }

    addProduct = (urlKey, uid) =>
        this.productService.addProduct(urlKey, uid)
            .then(response => {
                if (response.status != 200) {
                    this.setState({
                        openFailure: true
                    })
                }else{
                    this.setState({
                        openSuccess: true
                    })
                }
            })

    closeSnackbar = () => {
        this.setState({openSuccess: false, openFailure:false})
    }

    render() {
        return (
            <Container maxWidth="lg">

                <Snackbar
                    anchorOrigin={{vertical: "top", horizontal: "left"}}
                    open={this.state.openSuccess}
                    autoHideDuration={3000}
                    message={<span id="message-id">Added to your portfolio!</span>}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton onClick={this.closeSnackbar} color='inherit' key='close' aria-label='close'>
                            <CloseIcon/>
                        </IconButton>
                    ]}
                />

                <Snackbar
                    anchorOrigin={{vertical: "top", horizontal: "left"}}
                    open={this.state.openFailure}
                    autoHideDuration={3000}
                    message={<span id="message-id">Sneaker already added. Please don't add it Again! </span>}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton onClick={this.closeSnackbar} color='inherit' key='close' aria-label='close'>
                            <CloseIcon/>
                        </IconButton>
                    ]}
                />
                {/*{console.log(this.state.product.timestamp)}*/}
                <div className="float-right">
                    <button type="button" className="btn btn-info"
                            onClick={() => this.addProduct(this.state.urlKey, this.state.uid)}>Add to Collection
                    </button>
                </div>
                <StockDetailComponent detail={this.state.detail}/>
                <ProductReviewContainer params={this.props.match.params}/>
                <Link href={`/add/${this.state.pid}/${this.state.uid}`} color="inherit"><Button fullWidth size={"large"}
                                                                                                variant="outlined"
                                                                                                color="inherit">Add
                    Review</Button></Link>
            </Container>
        );
    }
}

export default StockDetailContainer;
