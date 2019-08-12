import React, {Component} from 'react';
import Container from '@material-ui/core/Container'
import {withStyles} from '@material-ui/core/styles';
import UserService from "../../services/UserService"
import ProfileEditorComponent from "../../component/AccountComponents/ProfileEditorComponent";

class ProfileEditCotainer extends Component {

     constructor(props) {
        super(props);
        this.match = this.props.match
        this.userSerivice = UserService.getInstance()
         this.state = {
            user: "",
            uid: this.props.match.params.uid
        }


    }

   componentDidMount() {
        this.userSerivice.getPrivateProfileForUserByUserId(this.state.uid)
            .then(response => this.setState({
                user:response
            }))
    }


    render() {
        return (

            <Container maxWidth="md">
                <div>
                    {<ProfileEditorComponent
                        user={this.state.user}/>

                    }
                </div>

            </Container>
        );
    }
}

export default ProfileEditCotainer;
