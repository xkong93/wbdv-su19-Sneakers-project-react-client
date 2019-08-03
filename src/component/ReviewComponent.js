import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';

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
    return (
        <Paper className={classes.root}>
        <div >
            {review != undefined && <p>{review.description} </p>}
        </div>
            <div>
                {}
            </div>
        </Paper>
    )
}


export default ReviewComponent;
