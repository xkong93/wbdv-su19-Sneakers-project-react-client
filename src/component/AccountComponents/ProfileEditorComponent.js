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
import {Box, Snackbar} from "@material-ui/core";
import UserService from "../../services/UserService";
import Cookies from "js-cookie";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Container from "@material-ui/core/Container";

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

export default function ProfileEditorComponent({user, first, last, pass}) {
    const classes = useStyles();
    const userService = UserService.getInstance();
    const uid = (JSON.parse(localStorage.getItem(Cookies.get("JSESSIONID")))).uid

    //for test purpose
    const [values, setValues] = React.useState({
        showPassword: false,
        openSuccess: false,
        openFailure: false,
        re: {}
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

    const updateUser =(user, uid)=>
        userService.updateUser(user, uid).then(response => {
        if (response.status != 200) {
            setValues({...values, openFailure: true})
        } else {
            setValues({...values, openSuccess: true})
        }
    })

    const closeSnackbar = () => {
        setValues({...values, openFailure: false})
        setValues({...values, openSuccess: false})
    }

    return (
        <div>
            <Snackbar
                anchorOrigin={{vertical: "top", horizontal: "right"}}
                open={values.openSuccess}
                autoHideDuration={3000}
                message={<span id="message-id">Update Succeed!</span>}
                ContentProps={{
                    "aria-describedby": "message-id"
                }}
                onClose={closeSnackbar}
                action={[
                    <IconButton onClick={closeSnackbar} color='inherit' key='close' aria-label='close'>
                        <CloseIcon/>
                    </IconButton>
                ]}
            />

            <Snackbar
                anchorOrigin={{vertical: "top", horizontal: "right"}}
                open={values.openFailure}
                autoHideDuration={3000}
                message={<span id="message-id">Update Fail! </span>}
                ContentProps={{
                    "aria-describedby": "message-id"
                }}
                onClose={closeSnackbar}
                action={[
                    <IconButton onClick={closeSnackbar} color='inherit' key='close' aria-label='close'>
                        <CloseIcon/>
                    </IconButton>
                ]}
            />
            <div className={classes.root}>
                {console.log(user)}
                {user.username != undefined && <TextField
                    id="standard-read-only-input"
                    label="USERNAME"
                    className={classes.textField}
                    margin="normal"
                    value={user.username}
                    InputProps={{
                        readOnly: true,
                    }}
                /> }

                {user.email != undefined && <TextField
                    id="standard-read-only-input"
                    label="EMAIL"
                    className={classes.textField}
                    margin="normal"
                    value={user.email}
                    InputProps={{
                        readOnly: true,
                    }}
                /> }


                {user.firstName != undefined &&<TextField
                    id="standard-read-only-input"
                    label="FIRST NAME"
                    className={classes.textField}
                    margin="normal"
                    value={user.firstName}
                    onChange={(e)=>first({...user, firstName: e.target.value})}

                />}
                {user.lastName != undefined && <TextField
                    id="standard-read-only-input"
                    label="LAST NAME"
                    className={classes.textField}
                    margin="normal"
                    value={user.lastName}
                    onChange={(e)=>last({...user, lastName: e.target.value})}
                />}

                {user.password !=undefined && <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="adornment-password">PASSWORD</InputLabel>
                    <Input
                        id="adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={user.password}
                        onChange={(e)=>pass({...user, password: e.target.value})}
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
                </FormControl>}

            </div>
            <Box className={classes.Sbutton}>
                <Button onClick={ ()=> updateUser(user, uid)} variant="outlined" color="inherit" className={classes.button}>
                    Submit
                </Button>
            </Box>
        </div>
    );
}
