import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        "& h2": {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",

        },
        "& div": {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            fontSize: "15px",
        }

    },
    title: {
        marginTop: '20px'

    },
    description: {
        marginTop: "5px",
        fontSize: "15px"
    },
    image: {
        width: '60%',
        alignSelf: 'center',
    },
    colorway: {
        // overflow: "hidden",
             // textOverflow: "ellipsis"

    }

}));


const StockDetailComponent = ({detail}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h2 className={classes.title}>{detail.title}</h2>
            {detail.market != undefined && <h2>Market: ${detail.market.averageDeadstockPrice} </h2>}

            {detail.media != undefined && <img className={classes.image} src={detail.media.smallImageUrl}/>}

            <div >
                <span><strong>STYLE:</strong> {detail.styleId}</span>
                <span className={classes.colorway}><strong>COLORWAY:</strong> {detail.colorway}</span>
                <span><strong>RETAIL PRICE:</strong> ${detail.retailPrice}</span>
                <span><strong>RELEASE DATE:</strong> {detail.releaseDate}</span>
            </div>
            <div className={classes.description}>
                <strong>DESCRIPTION: </strong> {detail.description ? (<p> {detail.description}</p>) :
                (<p>No Description</p>)}
            </div>

        </div>
    )
}


export default StockDetailComponent;
