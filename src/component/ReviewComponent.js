import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        },

}));

const ReviewComponent = ({review}) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
        {review != undefined && <p>{review.description} </p> }
        </div>
        )
}


export default ReviewComponent;
