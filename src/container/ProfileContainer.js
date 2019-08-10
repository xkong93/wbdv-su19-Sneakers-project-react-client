import React, {Component} from 'react';
import ProfileComponent from '../component/ProfileComponents/ProfileComponent'
import PortfolioComponent from '../component/ProfileComponents/PortfolioComponent'
import PortfolioContainer from "./PortfolioContainer";
import Container from '@material-ui/core/Container'
import {withStyles} from '@material-ui/core/styles';

class ProfileContainer extends Component {

    constructor(props) {
        super(props);
        const uid = this.props.match.params.uid;
        this.state = {}

    }

    componentDidMount() {

    }

    render() {
        return (

            <Container>
                <div>

                </div>
                <div>
                    <ProfileComponent params={this.props.match.params}/>
                </div>

            </Container>
        );
    }
}

export default ProfileContainer;
