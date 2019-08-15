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
import UserService from "../../services/UserService"



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


class EditorCollectionComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            portfolioItems: this.props.portfolio.portfolioItems,
            totalItem:this.props.portfolio.portfolioItems.length
        }
        this.userService = UserService.getInstance();
    }

    deleteItem = (i) => {
        const items = this.state.portfolioItems;
        const productUrlKey =  this.state.portfolioItems[i].urlKey
        items.splice(i, 1);
        this.setState({
            portfolioItems: items,
            totalItem: this.state.totalItem - 1
        });

        this.DeleteProductFromUser(this.props.uid,productUrlKey)
    }

    DeleteProductFromUser = (uid,pid) =>{
        this.userService.removeProductFromEditorCollection(uid,pid)
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
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.portfolioItems.map((row, i) => (
                                <TableRow key={`row-${i}`}>
                                    <TableCell align="center"> <Button
                                        onClick={() => this.deleteItem(i)}
                                        color="secondary"
                                    >
                                        Delete
                                    </Button></TableCell>
                                    <TableCell component="th" scope="row">
                                        <img className={classes.image} src={row.imageUrl} alt="Logo"/>
                                        <span>{row.name}</span>
                                    </TableCell>
                                    <TableCell align="center">{row.releaseDate}</TableCell>
                                    <TableCell align="center">{row.brand}</TableCell>
                                    <TableCell align="center">${row.retailPrice}</TableCell>
                                    <TableCell align="center">${row.marketPrice}</TableCell>
                                </TableRow>
                            ))}

                            <TableRow>
                                <TableCell colSpan={1}/>
                                <TableCell
                                    align="center">Totals:&nbsp;{this.state.totalItem} Items </TableCell>
                                <TableCell colSpan={2}/>

                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(EditorCollectionComponent)
