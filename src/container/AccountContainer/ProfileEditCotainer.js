import React, {Component} from 'react';
import Container from '@material-ui/core/Container'
import {withStyles} from '@material-ui/core/styles';
import UserService from "../../services/UserService"
import ProfileEditorComponent from "../../component/AccountComponents/ProfileEditorComponent";

class ProfileEditCotainer extends Component {

     constructor(props) {
        super(props);
        this.match = this.props.match
        this.uid = this.match.params.uid
        this.userSerivice = UserService.getInstance()
         this.state = {
            user: "",
        }


    }

   componentDidMount() {
        this.userSerivice.getPrivateProfileForUserByUserId(this.uid)
            .then(response => this.setState({
                user:response
            }))
       // this.userSerivice.findUserById(this.uid).then
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
