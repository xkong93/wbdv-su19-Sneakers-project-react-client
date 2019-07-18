import React, {Component} from 'react';
import StockDetailComponent from "../component/StockDetailComponent";

class StockDetailContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            detail: {}
        }

    }

    componentDidMount() {
        var detail = {}
        const urlKey = this.props.match.params.urlKey
        fetch(`https://cors-anywhere.herokuapp.com/https://stockx.com/api/products/${urlKey}`)
            .then(response => response.json())
            .then(responseJSON => this.setState({
                detail:responseJSON.Product
            }))
    }

    render() {
        return (
            <div>
                <StockDetailComponent detail={this.state.detail}/>
            </div>
        );
    }
}

export default StockDetailContainer;
