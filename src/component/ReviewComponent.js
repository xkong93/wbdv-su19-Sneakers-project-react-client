import React, {Component} from 'react';

const ReviewComponent = ({review}) => {

    return (
        <div className="container">

            <p>{review.description} </p>
        </div>
    )
}


export default ReviewComponent;
