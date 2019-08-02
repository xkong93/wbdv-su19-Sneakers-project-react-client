import React, {Component} from 'react';

const ReviewComponent = ({review}) => {

    return (
        <div>
        {review != undefined && <p>{review.description} </p> }
        </div>
        )
}


export default ReviewComponent;
