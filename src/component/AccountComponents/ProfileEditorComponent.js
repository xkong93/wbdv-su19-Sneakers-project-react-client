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

export default function ProfileEditorComponent({handleLastName}) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
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
                <TextField
                    id="standard-read-only-input"
                    label="USERNAME"
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />

                <TextField
                    id="standard-read-only-input"
                    label="EMAIL"
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />


                <TextField
                    id="standard-read-only-input"
                    label="FIRST NAME"
                    className={classes.textField}
                    margin="normal"
                    value={values.firstName}
                    onChange={handleChange('firstName')}

                />
                <TextField
                    id="standard-read-only-input"
                    label="LAST NAME"
                    className={classes.textField}
                    margin="normal"
                    value={values.lastName}
                    onChange={handleChange('lastName')}
                />

                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="adornment-password">PASSWORD</InputLabel>
                    <Input
                        id="adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
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
