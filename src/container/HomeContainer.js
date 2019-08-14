import React, {Component} from 'react';
import StockService from "../services/StockService";
import UserProductComponent from "../component/HomeComponents/UserProductComponent";
import EditorProductComponent from "../component/HomeComponents/EditorProductsComponent";
import ProductService from "../services/ProductService";
import Cookies from 'js-cookie'
import UserService from "../services/UserService";
import EditorService from "../services/EditorService";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";


const styles = theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    editorComp: {
        marginTop: "100px"
    }
});


class HomeContainer extends Component {

    constructor(props) {

        super(props);
        this.productService = ProductService.getInstance();
        this.userService = UserService.getInstance()
        this.editorService = EditorService.getInstance();
        this.state = {
            editorPickProducts: [],
            userProducts: [],
            uid: '',
            search:""
        }
    }

    componentDidMount() {
        this.editorService.getAllEditor()
            .then(response => this.setState({editorPickProducts: response}))
        // this.getProductsForUser(this.state.uid)
        //     .then(response => this.setState({
        //         userService: response
        //     }))
        if (localStorage.getItem(Cookies.get("JSESSIONID")) != null) {
            var uid = JSON.parse(localStorage.getItem(Cookies.get("JSESSIONID"))).uid
            this.setState({
                uid: uid
            })
            this.getProductsForUser(uid);
        }

    }

    getProductsForUser = (uid) =>
        this.userService.getProductsForUser(uid)
            .then(products => this.setState({
                userProducts: products
            }))

    searchChange=(e)=>
        this.setState({search: e.target.value})

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <CssBaseline/>
                <main>
                    <div className={classes.heroContent}>
                        <Container maxWidth="md">
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Let's Collect & Review Sneakers!
                            </Typography>
                            <div className="row">
                                <div className='input-group mb-3'>
                                    <input className="form-control"
                                           value={this.state.search}
                                           onChange={(e)=>this.searchChange(e)}
                                           placeholder="Seach for Sneakers"/>
                                    <div className="input-group-append">
                                        <Link to={`/search/${this.state.search}`}>
                                            <button
                                                className="btn btn-primary">
                                                Search
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.heroButtons}>
                            </div>
                        </Container>
                    </div>


                    {this.state.editorPickProducts.length > 0 && <Container maxWidth="md">
                        <h3>EDITORS' PICKS</h3>
                        <EditorProductComponent editorProducts={this.state.editorPickProducts}/>
                    </Container>}


                    {Cookies.get("JSESSIONID") != undefined && this.state.userProducts.length > 0 &&
                    <Container maxWidth="md">
                        <h3>MY COLLECTION</h3>
                        {console.log(this.state.userProducts)}
                        <UserProductComponent userProducts={this.state.userProducts}/>

                    </Container>}

                </main>

                {/* Footer */}
                <footer>
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
                    </Typography>
                </footer>
                {/* End footer */}
            </React.Fragment>

        )
    }
}

export default withStyles(styles)(HomeContainer)
