import React, {Component} from 'react';
import ProfileContainer from './ProfileContainer'
import PortfolioContainer from './PortfolioContainer'
import AccountComponent from "../../component/AccountComponents/AccountComponent";
import {withStyles} from '@material-ui/core/styles';


const styles = {
    root: {
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap:'wrap'
    },
    div: {
        display: "flex",
        flexDirection: "column",
    },

}


class AccountContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user:"",
        }


    }


    render() {
        const match = this.props.match


        return (
            <div >
                <AccountComponent match={match} user={this.state.user}/>
            </div>
        );
    }
}

export default withStyles(styles)(AccountContainer);
