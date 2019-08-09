import React, {Component} from 'react';
import ProfileComponent from '../component/ProfileComponent'
class ProfileContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }


    }

    render() {
        return (
            <div>
                <ProfileComponent/>
            </div>
        );
    }
}

export default ProfileContainer;
