import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles(theme => ({
    root: {
        width: 300,
    },
    margin: {
        height: theme.spacing(3),
    },
}));
const marksSize = [
    {
        value: 0,
        label: 'SMALL',
    },
    {
        value: 2.5,
        label: 'PERFECT',
    },

    {
        value: 5,
        label: 'LARGE',
    },
];
const marksWidth = [
    {
        value: 0,
        label: 'NARROW',
    },
    {
        value: 2.5,
        label: 'PERFECT',
    },

    {
        value: 5,
        label: 'WIDE',
    },
];
const marksComfort = [
    {
        value: 0,
        label: 'UNCOMFORTABLE',
    },

    {
        value: 5,
        label: 'COMFORTABLE',
    },
];
const marksQuality = [
    {
        value: 0,
        label: 'POOR',
    },
    {
        value: 5,
        label: 'PERFECT',
    },
];
const RatingComponent = ({ratings}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                ratings.map(rating =>
                    <div >
                        <h2>RATINGS: {rating.overall} </h2>
                        <div>
                            <Typography id="discrete-slider" gutterBottom>
                                SIZE
                            </Typography>

                            <Slider
                                disabled
                                defaultValue={rating.size}
                                aria-labelledby="discrete-slider-custom"
                                step={5}
                                valueLabelDisplay="off"
                                marks={marksSize}
                                max={5}
                                min={0}

                            />

                            <Typography id="discrete-slider" gutterBottom>
                                WIDTH
                            </Typography>
                            <Slider
                                disabled
                                defaultValue={rating.width}
                                aria-labelledby="discrete-slider-custom"
                                step={5}
                                valueLabelDisplay="off"
                                marks={marksWidth}
                                max={5}
                                min={0}

                            />
                            <Typography id="discrete-slider" gutterBottom>
                                COMFORT
                            </Typography>
                            <Slider
                                disabled
                                defaultValue={rating.comfort}
                                aria-labelledby="discrete-slider-custom"
                                step={5}
                                valueLabelDisplay="off"
                                marks={marksComfort}
                                max={5}
                                min={0}
                            />
                            <Typography id="discrete-slider" gutterBottom>
                                QUALITY
                            </Typography>
                            <Slider
                                disabled
                                defaultValue={rating.quality}
                                aria-labelledby="discrete-slider-custom"
                                step={5}
                                valueLabelDisplay="off"
                                marks={marksQuality}
                                max={5}
                                min={0}
                            />
                        </div>
                    </div>
                )
            }
        </div>
    )
}


export default RatingComponent;
