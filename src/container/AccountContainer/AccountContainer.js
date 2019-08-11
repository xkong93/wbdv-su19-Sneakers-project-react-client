import React, {Component} from 'react';
import ProfileContainer from './ProfileContainer'
import PortfolioContainer from './PortfolioContainer'
import AccountComponent from "../../component/AccountComponents/AccountComponent";
import {withStyles} from '@material-ui/core/styles';
import UserService from "../../services/UserService"

const styles = {
    root: {
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: 'wrap'
    },
    div: {
        display: "flex",
        flexDirection: "column",
    },

}


class AccountContainer extends Component {

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
            <div>
                {this.state.user.firstName != undefined &&
                <AccountComponent match={this.match} user={this.state.user}/>}
            </div>
        );
    }
}

export default withStyles(styles)(AccountContainer);
