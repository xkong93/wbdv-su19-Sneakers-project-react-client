import React, {Component} from 'react';
import reviewService from '../services/ReviewService'
import ReviewComponent from "../component/ReviewComponents/ReviewComponent";
import RatingComponent from "../component/ReviewComponents/RatingComponent"
import Container from '@material-ui/core/Container'
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
        const urlKey = this.props.params.urlKey;
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
            <div>
            <Container className={this.props.classes.root} maxWidth="lg">
                <div>
                {
                    this.state.rating != null ? <RatingComponent rating={this.state.rating}/>
                        : <h2>No Ratings</h2>
                }
                </div>
            </Container>
                <div className={this.props.classes.div}>
                    {
                        this.state.reviews != null ? this.state.reviews.map(review => <ReviewComponent
                                key={review.id} review={review}/>)
                            :<h2>No Review</h2>
                    }

                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ProductReviewContainer);
