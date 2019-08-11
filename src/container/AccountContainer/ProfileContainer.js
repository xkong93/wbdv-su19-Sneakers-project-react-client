import React, {Component} from 'react';
import ProfileComponent from '../../component/AccountComponents/ProfileComponent'
import PortfolioComponent from '../../component/AccountComponents/PortfolioComponent'
import PortfolioContainer from "./PortfolioContainer";
import Container from '@material-ui/core/Container'
import {withStyles} from '@material-ui/core/styles';
import UserService from "../../services/UserService"

class ProfileContainer extends Component {

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
        this.userSerivice.getPublicProfileForUserByUserId(this.uid)
            .then(response => this.setState({
                user:response
            }))
    }

    render() {
        return (

            <Container maxWidth="md">
                <div>
                    {this.state.user.username != undefined && <ProfileComponent user={this.state.user}/>}
                </div>

            </Container>
        );
    }
}

export default ProfileContainer;
