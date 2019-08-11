import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Divider from '@material-ui/core/Divider';
import ReviewService from "../../services/ReviewService";


const ranges = [
    {
        value: '0-20',
        label: '0 to 20',
    },
    {
        value: '21-50',
        label: '21 to 50',
    },
    {
        value: '51-100',
        label: '51 to 100',
    },
];

const useStyles = makeStyles(theme => ({
    element: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",
        margin: theme.spacing(1),
        marginBottom: theme.spacing(2)
    },
    margin: {
        margin: theme.spacing(2),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        flexBasis: 800,
    },
    Sbutton : {
        marginTop: theme.spacing(5)
    },
    title: {
        display: 'flex',
        justifyContent: "center"
    }
}));

export default function AddingComponent() {
    const classes = useStyles();
    const reviewService= ReviewService.getInstance();
    const [values, setValues] = React.useState({
        overall:'',
        size: 100,
        width: 100,
        comfort: 100,
        quality: 100,
        description: '',
        isRecommend: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const notRecommend = () =>
        setValues({...values, isRecommend: false})
    const Recommend =() =>
        setValues({...values, isRecommend: true})


    function createReview (review, pid, uid) {
        reviewService.createReview(review, pid, uid);
    }


    const marks = [
        {value: 0, label: 'Too Small',},
        {value: 25, label: 'Small',},
        {value: 50, label: 'Perfect',},
        {value: 75, label: 'Large',},
        {value: 100, label: 'Too Large',},
    ];
    const marks1 = [
        {value: 0, label: 'Too Narrow',},
        {value: 25, label: 'Narrow',},
        {value: 50, label: 'Perfect',},
        {value: 75, label: 'Wide',},
        {value: 100, label: 'Too Wide',},
    ];
    const marks2 = [
        {value: 0, label: 'Uncomfortable',},
        {value: 50, label: 'Ok',},
        {value: 100, label: 'Comfortable',},
    ];
    const marks3 = [
        {value: 0, label: 'Poor',},
        {value: 50, label: 'Ok',},
        {value: 100, label: 'Perfect',},
    ];

    function valuetext(value) {
        return `${value}°C`;
    }

    return (
        <div>
            {values.size}
            <div className={classes.title}><h1>Write Your Reviews</h1></div>
            <Box className={classes.element}>
                <Box component="fieldset" borderColor="transparent" >
                    <Typography component="legend"><h5>Overall rating</h5></Typography>
                    <Rating size="large"
                        name="simple-controlled"
                        value={values.overall}
                        onChange={handleChange('overall')}
                    />
                </Box>
            </Box>
            <Box className={classes.element}>
                    <Box>
                    <Typography><h5>Do you recommend this product?</h5></Typography>
                        <Box display="flex" bgcolor="background.paper">
                            <Box flexGrow={1}>
                                <Button onClick={()=>Recommend} variant="outlined" color="inherit">Yes</Button>
                            </Box>
                            <Box >
                                <Button onClick={()=>notRecommend} variant="outlined" color="inherit">No</Button>
                            </Box>
                        </Box>
                    </Box>
            </Box>
            <Box className={classes.element} >
                <Box width="50%" display="block" justifyContent="center">
                    <Box display="flex" justifyContent="center">
                        <Typography id="discrete-slider-restrict" >
                            <h5>Size</h5>
                        </Typography>
                    </Box>
                <Slider
                    // valueLabelFormat={valueLabelFormat}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-restrict"
                    step={null}
                    valueLabelDisplay="auto"
                    marks={marks}
                    value={values.size}
                    onChange={handleChange('size')}
                />
                </Box>
            </Box>
            <Box className={classes.element} >
                <Box width="50%" display="block" justifyContent="center">
                    <Box display="flex" justifyContent="center">
                        <Typography id="discrete-slider-restrict" >
                            <h5>Width</h5>
                        </Typography>
                    </Box>
                    <Slider
                        // valueLabelFormat={valueLabelFormat}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-restrict"
                        step={null}
                        valueLabelDisplay="auto"
                        marks={marks1}
                        defaultValue={values.width}
                        onChange={handleChange('width')}
                    />
                </Box>
            </Box>
            <Box className={classes.element} >
                <Box width="50%" display="block" justifyContent="center">
                    <Box display="flex" justifyContent="center">
                        <Typography id="discrete-slider-restrict" >
                            <h5>Comfort</h5>
                        </Typography>
                    </Box>
                    <Slider
                        // valueLabelFormat={valueLabelFormat}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-restrict"
                        step={null}
                        valueLabelDisplay="auto"
                        marks={marks2}
                        defaultValue={values.comfort}
                        onChange={handleChange('comfort')}
                    />
                </Box>
            </Box>
            <Box className={classes.element} >
                <Box width="50%" display="block" justifyContent="center">
                    <Box display="flex" justifyContent="center">
                        <Typography id="discrete-slider-restrict" >
                            <h5>Quality</h5>
                        </Typography>
                    </Box>
                    <Slider
                        // valueLabelFormat={valueLabelFormat}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-restrict"
                        step={null}
                        valueLabelDisplay="auto"
                        marks={marks3}
                        defaultValue={values.quality}
                        onChange={handleChange('quality')}
                    />
                </Box>
            </Box>

            <Divider />

            <Box className={classes.element} >
                <TextField
                    id="standard-multiline-flexible"
                    label="Your Opinion in one sentence"
                    multiline
                    rowsMax="1"
                    value={values.multiline}
                    onChange={handleChange('multiline')}
                    className={classes.textField}
                    margin="normal"
                />
            </Box>
            <Box className={classes.element} >
                <TextField
                    id="standard-multiline-static"
                    label="Review in Details"
                    multiline
                    rows="5"
                    className={classes.textField}
                    margin="normal"
                    value={values.description}
                    onChange={handleChange('description')}
                />
            </Box>

            <Divider />

            <Box className={classes.Sbutton}>
                <Button onClick={()=>createReview(values, 1,1)} fullWidth size={"large"} variant="outlined" color="secondary" className={classes.button}>
                    Submit Review
                </Button>
            </Box>
        </div>
    );
}
