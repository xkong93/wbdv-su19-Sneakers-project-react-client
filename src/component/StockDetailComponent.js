import React, {Component} from 'react';

const StockDetailComponent = ({detail}) => {

    return (<div className="container">
        <h1>{ detail.title}</h1>

        {/*//unable render when detail is undefined at beginning*/}
        {detail.media != undefined && <img src={detail.media.smallImageUrl}/>}

        <p>
            {detail.description}
        </p>
    </div>)
}


export default StockDetailComponent;
