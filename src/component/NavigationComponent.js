import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import {Container} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    button: {

    },
    menuButton: {
        marginRight: theme.spacing(5),

    },
    title: {
        flexGrow: 1,
    },
}));

export default function NavigationComponent() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <AppBar position="static" color={"default"}>            <Container maxWidth="lg">

            <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        SneakerStock
                    </Typography>
                    <Link to='/'><Button  className={classes.button}>Home</Button></Link>
                    <Link to='/login'><Button>Login</Button></Link>
                    <Link to='/signup'><Button>Sign Up</Button></Link>
                    <Link to='/search'><Button >Search</Button></Link>
                    <Link to='/user/1'><Button >My Account</Button></Link>
                </Toolbar>            </Container>

            </AppBar>
        </div>
    );
}
