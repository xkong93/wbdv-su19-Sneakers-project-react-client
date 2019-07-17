import React, {Component} from 'react';

const StockComponent = ({stock}) => (

    <div className="card" styles={{width: "18rem"}}>
        <img className="card-img-top" src={stock.media.thumbUrl}/>
        <div className="card-body">
            <h5 className="card-title">{stock.name}</h5>
            <h5 className="card-title">${stock.market.averageDeadstockPrice}</h5>
        </div>
    </div>
)


export default StockComponent;
