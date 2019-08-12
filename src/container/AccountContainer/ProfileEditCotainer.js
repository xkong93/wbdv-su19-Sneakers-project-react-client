import React, {Component} from 'react';
import Container from '@material-ui/core/Container'
import {withStyles} from '@material-ui/core/styles';
import UserService from "../../services/UserService"
import ProfileEditorComponent from "../../component/AccountComponents/ProfileEditorComponent";
import Cookies from "js-cookie"

class ProfileEditCotainer extends Component {

    constructor(props) {
        super(props);
        this.userSerivice = UserService.getInstance()
        this.state = {
            user: {},
            uid: this.props.match.params.uid
        }


    }

    componentDidMount() {
            this.userSerivice.getPrivateProfileForUserByUserId(this.state.uid)
            .then(response => this.setState({
                user: response
            }))
        }





    render() {
        return (

            <Container maxWidth="md">
                <div>
                    {Cookies.get("JSESSIONID") != undefined && <ProfileEditorComponent
                        user={this.state.user}/>

                    }
                </div>

            </Container>
        );
    }
}


export default ProfileEditCotainer;
