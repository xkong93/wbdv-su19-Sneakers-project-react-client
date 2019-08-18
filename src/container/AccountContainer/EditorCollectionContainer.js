import React, {Component} from 'react';
import PortfolioComponent from '../../component/AccountComponents/UserPortfolioComponent'
import UserService from "../../services/UserService"
import Cookies from 'js-cookie'
import EditorCollectionComponent from "../../component/AccountComponents/EditorCollectionComponent";

class EditorCollectionContainer extends Component {

    constructor(props) {
        super(props)
        this.userService = UserService.getInstance()
        this.state = {
            portfolioItems: [],
        }
    }

    componentDidMount() {
        const uid = this.props.match.params.uid
        this.userService.getPortfolioForEditorByEditorId(uid)
            .then(response => {
                this.setState({
                    portfolioItems: response,
                })
            })

    }

    render() {
        return (
            <div>

                {this.state.portfolioItems.length > 0 &&
                <EditorCollectionComponent uid={this.props.match.params.uid} portfolio={this.state}/>}
            </div>
        );
    }
}

export default EditorCollectionContainer;
