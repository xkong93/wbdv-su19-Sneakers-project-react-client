import React, {Component} from 'react';
import reviewService from '../services/ReviewService'
import ReviewComponent from "../component/ReviewComponent";
import RatingComponent from "../component/RatingComponent"
import Container from '@material-ui/core/Container'
import {withStyles} from '@material-ui/core/styles';

const styles = {
    root: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap:'wrap'
    },
    div: {
        display: "flex",
        flexDirection: "column",
    }

}

class ProductReviewContainer extends Component {

    constructor(props) {
        super(props);
        this.reviewService = reviewService.getInstance();
        this.state = {
            reviews: [],
            rating: {}
            // reviewByUser: {}
        }


    }

    componentDidMount() {
        const urlKey = this.props.match.params.urlKey;
        this.reviewService.getReviewsForProduct(urlKey)
            .then(res => this.setState({
                reviews: res}))

        this.reviewService.getRatingForPorduct(urlKey)
            .then(res => this.setState({
                rating: res
            }))
    }


    render() {
        return (
            <Container className={this.props.classes.root} maxWidth="lg">
                {
                    <RatingComponent rating={this.state.rating}/>
                }
                <div className={this.props.classes.div}>
                    {
                        this.state.reviews != null && this.state.reviews.map(review => <ReviewComponent
                            key={review.id} review={review}/>)
                    }
                </div>
            </Container>
        );
    }
}

export default withStyles(styles)(ProductReviewContainer);
