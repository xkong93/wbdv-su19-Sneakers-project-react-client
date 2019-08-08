import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
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
            <AppBar position="static" color={"default"}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        SearchStock
                    </Typography>
                    <Link to = '/home'  ><Button>Home</Button></Link>
                    <Link to = '/login'  ><Button>Login</Button></Link>
                    <Link to = '/signup'  ><Button>SignUp</Button></Link>
                    <Link to = '/search' ><Button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</Button></Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
