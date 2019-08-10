import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import {Container} from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';

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

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },

}));

export default function NavigationComponent() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <AppBar position="static" color={"default"}>            <Container maxWidth="lg">

            <Toolbar>
                    <Typography variant="h6">
                        SneakerStock
                    </Typography>
                <div className={clsx(classes.search, classes.title)}>
                    <div className={classes.searchIcon}>
                        <Link href='/search'><SearchIcon /></Link>
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                    <Link to='/home'><Button  className={classes.button}>Home</Button></Link>
                    <Link to='/login'><Button>Login</Button></Link>
                    <Link to='/signup'><Button>Sign Up</Button></Link>
                    {/*<Link to='/search'><Button >Search</Button></Link>*/}
                    <Link to='/user/:uid/profile/DashBoard'><Button >My Account</Button></Link>
                </Toolbar>            </Container>

            </AppBar>
        </div>
    );
}
