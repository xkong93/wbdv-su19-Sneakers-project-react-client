import React, {Component} from 'react';
import ProfileComponent from '../component/ProfileComponents/ProfileComponent'
import Container from '@material-ui/core/Container'
import UserService from "../services/UserService"
import LoginSignUpContainer from "./LoginSignUpContainer";
const userService = UserService.getInstance()
class ProfileContainer extends Component {

    constructor(props) {
        super(props)
        const uId = this.props.match.params.uid
        this.state={
            uid:uId,
            isLoggedIn: false
        }
    }
    componentWillMount() {
       userService.validate()
            .then(res => this.setState({
                    isLoggedIn: res
                })
            )}

    handleLogout = () =>
        userService.logout()
            .then(res => this.setState({
                    isLoggedIn: res
                }))

    render() {
        if (this.state.isLoggedIn) {
            console.log(this.state.isLoggedIn)
            return (
                <Container>
                    <div>
                        <ProfileComponent
                            uid={this.state.uid}
                            handleLogout={this.handleLogout}
                        />
                    </div>
                </Container>
            )        }
        else {
            console.log(this.state.isLoggedIn)
            return (<LoginSignUpContainer/>)
        };
    }
}
export default ProfileContainer
