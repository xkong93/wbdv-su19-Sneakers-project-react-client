import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Switch, Route, Link} from "react-router-dom";
import ProfileContainer from "../../container/AccountContainer/ProfileContainer";
import UserPortfolioContainer from "../../container/AccountContainer/UserPortfolioContainer";
import {Container} from "@material-ui/core";
import ProductReviewContainer from "../../container/ProductReviewContainer";
import Box from '@material-ui/core/Box';
import ProfileEditCotainer from "../../container/AccountContainer/ProfileEditCotainer";
import Cookies from "js-cookie"
import ReviewEditorContainer from "../../container/AccountContainer/ReviewEditorContainer"
import EditorCollectionContainer from "../../container/AccountContainer/EditorCollectionContainer";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Book from "@material-ui/icons/Book";
import RateReview from "@material-ui/icons/RateReview";
import Edit from "@material-ui/icons/BorderColor";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function AccountComponent(props) {
    const {container} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    // const id = Cookies.get("JSESSIONID") != null ? (JSON.parse(localStorage.getItem(Cookies.get("JSESSIONID")))).uid : -1
    // const type = Cookies.get("JSESSIONID") != null ? (JSON.parse(localStorage.getItem(Cookies.get("JSESSIONID")))).dtype : -1
    const id = JSON.parse(localStorage.getItem(Cookies.get("JSESSIONID")))? JSON.parse(localStorage.getItem(Cookies.get("JSESSIONID"))).uid :0
    const type = JSON.parse(localStorage.getItem(Cookies.get("JSESSIONID")))? JSON.parse(localStorage.getItem(Cookies.get("JSESSIONID"))).dtype :0


    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            {console.log(id)}
            {type != "Editor" && <List>
                {['Profile', 'Portfolio', 'Reviews'].map((text, index) => (
                    <Link to={`/user/${props.match.params.uid}/${text.toLowerCase()}`}>
                        <ListItem button key={text}>
                            <ListItemIcon>{index ===0 && <AccountCircle/>}{index ===1 && <Book/>}{index ===2 && <RateReview/>}</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </Link>
                ))}
            </List>}


           {type == "Editor" && id == props.match.params.uid && <List>
                {['Profile', 'Collection'].map((text, index) => (
                    <Link to={`/user/${props.match.params.uid}/${text.toLowerCase()}`}>
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <AccountCircle/> : <Book/>}</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </Link>
                ))}
            </List>}

            <Divider/>
            {id == props.match.params.uid && <List>
                {['Setting'].map((text, index) => (
                    <Link to={`/user/${props.match.params.uid}/${text.toLowerCase()}`}>
                        <ListItem button key={text}>
                            <ListItemIcon>{index === 0 && <Edit/> }</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </Link>
                ))} </List>}

            <Divider/>
            {type == "Editor" && id == props.match.params.uid && <List>
                {['Review'].map((text, index) => (
                    <Link to={`/user/${props.match.params.uid}/${text.toLowerCase()}`}>
                        <ListItem button key={`${text}(EditorOnly)`}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                            <ListItemText primary={`${text}(EditorOnly)`}/>
                        </ListItem>
                    </Link>
                ))}
            </List>}

            <Box bgcolor="grey.300"
                 color="white"
                 p={2}
                 position="absolute"
                 bottom="5%"
            >
                <Link to="/" color="inherit">Back to Home Page</Link>
            </Box>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {props.user.firstName.toUpperCase()} {props.user.lastName.toUpperCase()}
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>

            <Container className={classes.content}>

                <Switch>
                    //key point
                    <Route path="/user/:uid/profile" component={ProfileContainer}/>
                    <Route path="/user/:uid/portfolio" component={UserPortfolioContainer}/>
                    <Route path="/user/:uid/collection" component={EditorCollectionContainer}/>
                    <Route path="/user/:uid/reviews" component={ProductReviewContainer}/>
                    <Route path="/user/:uid/setting" component={ProfileEditCotainer}/>
                    <Route Path="user/:uid/review" component={ReviewEditorContainer}/>
                </Switch>
            </Container>
        </div>
    );
}

export default AccountComponent;
