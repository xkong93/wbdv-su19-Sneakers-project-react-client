import React from 'react';
import {Link} from 'react-router-dom'
const StockComponent = ({stock}) => (

    <div className="card h-100 mb-5 border-secondary" >
        <Link  target="_blank" to={"/detail/" + stock.urlKey}>
        <img className="card-img-top" src={stock.media.thumbUrl} />
        </Link>

        <div className="card-body">
            <h5 className="card-title">{stock.title}</h5>
            <h5 className="card-title">${stock.market.averageDeadstockPrice}</h5>

        </div>
    </div>
)

export default StockComponent;
