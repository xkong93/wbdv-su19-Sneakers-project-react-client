import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Container} from "@material-ui/core";
import Button from '@material-ui/core/Button';


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    image: {
        width: "93px",
        height: "66px"
    },
    table: {
        minWidth: 650,
    },
});

function deleteItem(i) {
    const {items} = this.state;
    items.splice(i, 1);
    this.setState({items});
}

class PortfolioComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            portfolio: '',

        }
    }

    componentDidMount() {
        this.setState({
            portfolio: this.props.portfolio
        })
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">ACTION</TableCell>

                                <TableCell>NAME</TableCell>
                                <TableCell align="center">RELEASE DATE</TableCell>
                                <TableCell align="center">BRAND</TableCell>
                                <TableCell align="center">RETAIL PRICE</TableCell>
                                <TableCell align="center">MARKET PRICE</TableCell>
                                <TableCell align="center">GAIN/LOSS</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.portfolio.portfolioItems.map((row,i) => (
                                <TableRow key={`row-${i}`}>
                                    <TableCell align="center"> <Button
                                        onClick={() => deleteItem(i)}
                                        color="secondary"
                                    >
                                        Delete
                                    </Button></TableCell>
                                    <h1>{i}</h1>
                                    <TableCell component="th" scope="row">
                                        <img className={classes.image} src={row.imageUrl} alt="Logo"/>
                                        <span>{row.name}</span>
                                    </TableCell>
                                    <TableCell align="center">{row.releaseDate}</TableCell>
                                    <TableCell align="center">{row.brand}</TableCell>
                                    <TableCell align="center">${row.retailPrice}</TableCell>
                                    <TableCell align="center">${row.marketPrice}</TableCell>
                                    <TableCell align="center">${row.gainLoss}</TableCell>
                                </TableRow>
                            ))}

                            <TableRow>
                                <TableCell align="center">Totals:&nbsp;{this.portfolio.totalItem} Items </TableCell>
                                <TableCell colSpan={2}/>
                                <TableCell align="center">${this.portfolio.retailSum} </TableCell>
                                <TableCell align="center">${this.portfolio.marketSum} </TableCell>
                                <TableCell align="center">${this.portfolio.gainLossSum} </TableCell>

                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(PortfolioComponent)
