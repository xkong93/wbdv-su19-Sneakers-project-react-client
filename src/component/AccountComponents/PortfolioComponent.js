import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Container} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
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
}));
const PortfolioComponent = ({portfolio}) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>NAME</TableCell>
                        <TableCell align="center">RELEASE DATE</TableCell>
                        <TableCell align="center">BRAND</TableCell>
                        <TableCell align="center">RETAIL PRICE</TableCell>
                        <TableCell align="center">MARKET PRICE</TableCell>
                        <TableCell align="center">GAIN/LOSS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {portfolio.portfolioItems.map(row => (
                        <TableRow key={row.productId}>
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
                        <TableCell align="center" >Totals:&nbsp;{portfolio.totalItem} Items </TableCell>
                        <TableCell colSpan={2}/>
                        <TableCell align="center" >${portfolio.retailSum} </TableCell>
                        <TableCell align="center" >${portfolio.marketSum} </TableCell>
                        <TableCell align="center" >${portfolio.gainLossSum} </TableCell>

                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );
}

export default PortfolioComponent;
