import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import UserService from "../../services/UserService";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import EditorService from "../../services/EditorService";


const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const userService = UserService.getInstance()
    const editorService = EditorService.getInstance()

    const [User, setValues] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        username: "",
        role:"User",
        code:"",
        success: false
    })

    const createUser = (User) =>{
        userService.createUser(User).then(res => {if(res.status==304 || res.status==200){setValues({...User, success: true})}
        else{alert("signpUp fail")}})



    }

    const createEditor=(Editor, code)=>
         editorService.createEditor(Editor, code).then(res => {if(res.status==304 || res.status==200){setValues({...User, success: true})}
         else{alert("signpUp fail")}})



    const handleChange = prop => event => {
        setValues({...User, [prop]: event.target.value});
    };

    return (
        <Container component="main" maxWidth="xs">
            {console.log(User.success)}
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={handleChange("firstName")}
                                value={User.firstName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={handleChange("lastName")}
                                value={User.lastName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleChange("email")}
                                value={User.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="userName"
                                label="userName"
                                id="userName"
                                autoComplete="userName"
                                value={User.username}
                                onChange={handleChange("username")}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={User.password}
                                onChange={handleChange("password")}
                            />
                        </Grid>

                        <Grid className={classes.form}>
                            <InputLabel shrink htmlFor="age-native-label-placeholder">
                                Role
                            </InputLabel>
                            <NativeSelect
                                fullWidth
                               value={User.role}
                                onChange={handleChange('role')}
                                input={<Input name="age" id="age-native-label-placeholder" />}
                            >
                                <option value="User">User</option>
                                <option value="Editor">Editor</option>
                            </NativeSelect>
                        </Grid>
                        {User.role == "Editor" && <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="code"
                                label="Editor Code"
                                id="code"
                                autoComplete="current-password"
                                value={User.code}
                                onChange={handleChange("code")}
                            />
                        </Grid>}
                    </Grid>
                    {User.role=="User" && <Link {...User.success? {to: '/login'}: {} }><Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => createUser(User)}
                    >
                        Sign Up
                    </Button></Link>}
                    {User.role=="Editor" && <Link to={User.success ? '/login': ''} ><Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => createEditor(User, User.code)}
                    >
                        Sign Up for Editor
                    </Button></Link>}
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link  to='/login' variant="body2">
                                <a>Already have an account? Sign in</a>
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
            </Box>
        </Container>
    );
}
