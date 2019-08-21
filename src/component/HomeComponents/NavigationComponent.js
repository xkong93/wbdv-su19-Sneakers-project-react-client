import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import Cookies from 'js-cookie'


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

    const logout =()=>{
        // Cookies.remove("JSESSIONID")
        localStorage.clear()
    }

    var loginJson = JSON.parse(localStorage.getItem(Cookies.get("JSESSIONID")))
    return (

        <div className={classes.root}>
            <AppBar position="static" color={"default"}>

            <Toolbar>

                    <Typography variant="h6" className={classes.title}
                    > SneakerStock</Typography>


                {console.log(loginJson)}
                    <Link to='/'><Button  className={classes.button}>Home</Button></Link>
                {/*{Cookies.get("JSESSIONID") ==null && <Link to='/login'><Button>Login</Button></Link>}*/}
                {/*{Cookies.get("JSESSIONID") ==null &&<Link to='/register'><Button>Sign Up</Button></Link>}*/}
                {/*{Cookies.get("JSESSIONID") ==null && <Link to="/home"><Button  onClick={()=>logout()} >Sign Out</Button></Link>}*/}
                {loginJson ==null && <Link to='/login'><Button>Login</Button></Link>}
                {loginJson ==null &&<Link to='/register'><Button>Sign Up</Button></Link>}
                {loginJson !=null && <Link to="/home"><Button  onClick={()=>logout()} >Sign Out</Button></Link>}
                    <Link to='/search/ '><Button>Search</Button></Link>
                {loginJson != null && <Link to={`/user/${loginJson.uid}/profile`}><Button >My Account</Button></Link>}
            </Toolbar>
            </AppBar>
        </div>
    );
}
