import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import UserService from "../../services/UserService";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(3, 2),
        margin: "5px"
    },

}));

const ReviewComponent = ({review}) => {
    const classes = useStyles()
    const userService = UserService.getInstance()

    return (
        <div>

        <Paper className={classes.root}>
        <Typography component="p">
            {review != undefined && <p>{review.description} </p>}
        </Typography>
        <Typography variant="h6" component="h1">
            <Link href={`/user/${review.uid}`}>Author-{review.username}</Link>
        </Typography>
        </Paper>
        </div>
    )
}


export default ReviewComponent;
