import React, {Component} from 'react';
import ProfileComponent from '../../component/AccountComponents/ProfileComponent'
import PortfolioComponent from '../../component/AccountComponents/PortfolioComponent'
import PortfolioContainer from "./PortfolioContainer";
import Container from '@material-ui/core/Container'
import {withStyles} from '@material-ui/core/styles';

class ProfileContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {}


    }

    componentDidMount() {

    }

    render() {
        return (

            <Container>
                <div>
                    <ProfileComponent/>
                </div>

            </Container>
        );
    }
}

export default ProfileContainer;
