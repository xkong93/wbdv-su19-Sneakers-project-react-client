import React, {Component} from 'react';
import reviewService from '../services/ReviewService'
import ReviewComponent from "../component/ReviewComponent";

class ProductReviewContainer extends Component {
    constructor(props){
        super(props);
        this.reviewService = reviewService.getInstance();
        this.state = {
            reviews: [],
            // reviewByUser: {}
        }
    }
    componentDidMount() {
        const urlKey = this.props.match.params.urlKey;
        this.reviewService.getReviewsForProduct(urlKey)
            .then(res => this.setState({
                reviews: res
            }))
    }

    render() {

        return (
            <div>
                {
                   this.state.reviews != null && this.state.reviews.map(review => <ReviewComponent review={review}/>)
                }
            </div>
        );
    }
}

export default ProductReviewContainer;
