import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {keys} from "@material-ui/core/styles/createBreakpoints";
import Cookies from 'js-cookie'
import EditorProductsComponent from "./EditorProductsComponent"


const useStyles = makeStyles(theme => ({
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
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function UserProductComponent({userProducts}) {
    const classes = useStyles();


    return (
        <Grid container spacing={4}>
            {userProducts.map(card => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={card.imageUrl}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {card.title}
                            </Typography>
                            <Typography>
                                ${card.marketPrice}
                            </Typography>
                        </CardContent>
                        {/*<CardActions>*/}

                        {/*    {localStorage.getItem(Cookies.get("JSESSIONID")) != null &&*/}
                        {/*    (JSON.parse(localStorage.getItem(Cookies.get("JSESSIONID")))).dtype == "Editor" &&*/}
                        {/*    <Button size="small" color="primary">*/}
                        {/*        Delete*/}
                        {/*    </Button>}*/}
                        {/*</CardActions>*/}
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}


export default UserProductComponent;
