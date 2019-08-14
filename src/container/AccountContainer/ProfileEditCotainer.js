import React, {Component} from 'react';
import Container from '@material-ui/core/Container'
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


    firstNameChange=(u)=>
        this.setState({user: u})
    lastNameChange=(u)=>
        this.setState({user: u})
    passwordChange=(u)=>
        this.setState({user: u})




    render() {
        return (

            <Container maxWidth="md">
                <div>
                    {Cookies.get("JSESSIONID") != undefined && <ProfileEditorComponent
                        user={this.state.user} first={this.firstNameChange} last={this.lastNameChange} pass={this.passwordChange}/>

                    }
                </div>

            </Container>
        );
    }
}


export default ProfileEditCotainer;
