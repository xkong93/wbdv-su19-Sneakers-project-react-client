import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
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
import {Box} from "@material-ui/core";

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
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center"
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        flexBasis: 600,
    },
    Sbutton: {
        marginTop: theme.spacing(5),
    }
}));

export default function ProfileEditorComponent() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = prop => event => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    return (
        <div>
            <div className={classes.root}>
                <TextField fullWidth
                           label="Username"
                           id="simple-start-adornment"
                           className={clsx(classes.margin, classes.textField)}
                           InputProps={{
                               startAdornment: <InputAdornment position="start">Username</InputAdornment>,
                           }}
                />
                {/*<TextField*/}
                {/*    select*/}
                {/*    label="With Select"*/}
                {/*    className={clsx(classes.margin, classes.textField)}*/}
                {/*    value={values.weightRange}*/}
                {/*    onChange={handleChange('weightRange')}*/}
                {/*    InputProps={{*/}
                {/*        startAdornment: <InputAdornment position="start">Kg</InputAdornment>,*/}
                {/*    }}*/}
                {/*>*/}
                {/*    {ranges.map(option => (*/}
                {/*        <MenuItem key={option.value} value={option.value}>*/}
                {/*            {option.label}*/}
                {/*        </MenuItem>*/}
                {/*    ))}*/}
                {/*</TextField>*/}
                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="adornment-amount">FirstName</InputLabel>
                    <Input
                        id="adornment-amount"
                        value={values.amount}
                        onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start">FirstName</InputAdornment>}
                    />
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="adornment-amount">LastName</InputLabel>
                    <Input
                        id="adornment-weight"
                        value={values.weight}
                        onChange={handleChange('weight')}
                        startAdornment={<InputAdornment position="start">LastName</InputAdornment>}
                        aria-describedby="weight-helper-text"
                    />
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="adornment-password">Password</InputLabel>
                    <Input
                        id="adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
            <Box className={classes.Sbutton}>
                <Button variant="outlined" color="inherit" className={classes.button}>
                    Submit
                </Button>
            </Box>
        </div>
    );
}
