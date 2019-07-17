import React, {Component} from 'react';

const StockComponent = ({stock}) => (

    <div className="card h-100" >
        <img className="card-img-top" src={stock.media.thumbUrl}/>
        <div className="card-body">
            <h5 className="card-title">{stock.name}</h5>
            <h5 className="card-title">${stock.market.averageDeadstockPrice}</h5>
        </div>
    </div>
)


export default StockComponent;
