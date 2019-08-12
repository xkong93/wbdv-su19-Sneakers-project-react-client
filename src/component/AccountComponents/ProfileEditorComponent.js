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
import UserService from "../../services/UserService";
import Cookies from "js-cookie";

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

export default function ProfileEditorComponent({user, first, last}) {
    const classes = useStyles();
    const userService = UserService.getInstance();
    const uid = (JSON.parse(localStorage.getItem(Cookies.get("JSESSIONID")))).uid

    const [values, setValues] = React.useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        username: user.username,
        showPassword: false,
    });



    // const [values, setValues] = React.useState(()=>{
    //     const firstName = user.firstName
        // lastName: last,
        // email: 'user.email',
        // password: 'user.password',
        // username: 'user.username',
        // showPassword: false,
    // });



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
        userService.updateUser(user, uid)

    return (
        <div>
            <div className={classes.root}>
                {/*{console.log(values)}*/}
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


                {user.username != undefined &&<TextField
                    id="standard-read-only-input"
                    label="FIRST NAME"
                    className={classes.textField}
                    margin="normal"
                    value={user.firstName}
                    onChange={first}

                />}
                {user.username != undefined && <TextField
                    id="standard-read-only-input"
                    label="LAST NAME"
                    className={classes.textField}
                    margin="normal"
                    value={user.lastName}
                    onChange={last}
                />}

                {user.username !=undefined && <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="adornment-password">PASSWORD</InputLabel>
                    <Input
                        id="adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={user.password}
                        InputProps={{
                            readOnly: true,
                        }}
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
                <Button onClick={ ()=> updateUser(values, uid)} variant="outlined" color="inherit" className={classes.button}>
                    Submit
                </Button>
            </Box>
        </div>
    );
}
