import React, {Component} from 'react';

const StockDetail = ({detail}) => (

    <div className="container">
        <h1>{detail.title}</h1>

        {/*//这里不行*/}
        {/*//api 例子*/}
        {/*//https://stockx.com/api/products/air-jordan-5-retro-michigan-2019*/}
        {/*<img src={detail.media.thumbUrl}/>*/}
        <p>
            {detail.description}
        </p>
    </div>
)


export default StockDetail;
