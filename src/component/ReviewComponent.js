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
        <div>

        <Paper className={classes.root}>
        <div >
            {review != undefined && <p>{review.description} </p>}
        </div>
            <div>
                {}
            </div>
        </Paper>
        </div>
    )
}


export default ReviewComponent;
