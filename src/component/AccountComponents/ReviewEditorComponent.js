import React from 'react';

export default function ReviewEditorComponent({reviews, deleteR}) {


    return (

        <div className="list-group">
           {reviews!=null && reviews.map( review => <div href="#" className="list-group-item">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Overall: {review.overall}</h5>
                    <small>Recommendation : {(review.isRecommend)?'Yes': 'No'}</small>
                </div>
                <p className="mb-1">{review.description}</p>
                <small>size:{review.size}, width: {review.width}, comfort: {review.comfort}, quality: {review.quality}</small>
               <button onClick={()=>deleteR(review.id)} className="d-flex w-100 justify-content-between">Delete</button>
            </div>)}
        </div>
    );
}
