import React, {Component} from 'react';
import {Link} from 'react-router-dom'
const StockComponent = ({stock}) => (

    <div className="card h-100 mb-5 border-secondary" >
        <Link to={"/detail/" + stock.urlKey}>
        <img className="card-img-top" src={stock.media.thumbUrl} />
        </Link>
        <div className="card-body">
            <h5 className="card-title">{stock.title}</h5>
            <h5 className="card-title">${stock.market.averageDeadstockPrice}</h5>
            <button className="btn btn-success">Save</button>
            <button className="btn btn-warning">Remove</button>
        </div>
    </div>
)


export default StockComponent;
