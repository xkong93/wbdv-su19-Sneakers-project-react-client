import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));
//test purpose
const ProfileComponent = ({user}) => {
    const classes = useStyles();

    return (
        <Paper>
                <TextField
                    id="standard-read-only-input"
                    label="USERNAME"
                    value={user.username}
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />

                <TextField
                    id="standard-read-only-input"
                    label="FIRST NAME"
                    value={user.firstName.toUpperCase()}
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="standard-read-only-input"
                    label="LAST NAME"
                    value={user.lastName.toUpperCase()}
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />

        </Paper>
    )
}


export default ProfileComponent;
