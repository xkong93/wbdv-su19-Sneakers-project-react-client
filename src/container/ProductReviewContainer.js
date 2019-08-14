import React, {Component} from 'react';
import reviewService from '../services/ReviewService'
import ReviewComponent from "../component/ReviewComponents/ReviewComponent";
import RatingComponent from "../component/ReviewComponents/RatingComponent"
import Container from '@material-ui/core/Container'
import {withStyles} from '@material-ui/core/styles';

const styles = {
    root: {
        display: "flex",
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
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
            ratings: [], //make it to an array for reusable component (user and product)
            reviewsByUser: []
        }

    }


    componentDidMount() {
        //key point, reusable component demo. need to modified this.state
        if (this.props.params != undefined) {
            var urlKey = this.props.params.urlKey
            this.reviewService.getReviewsForProduct(urlKey)
                .then(res => {
                    //technique to handle review and rating 404
                    if (res.status == 404) {
                    } else {
                        this.setState({
                            reviews: res
                        })
                    }
                })

            this.reviewService.getRatingForPorduct(urlKey)
                .then(res => {
                    if (res.status == 404) {
                    } else {
                        this.setState({
                            ratings: [res] //key point
                        })
                    }
                })
        }

        if (this.props.match != undefined) {
            var uid = this.props.match.params.uid
            this.reviewService.getReviewsByUser(uid)
                .then(res => this.modifiedReviewsByUser(res))

        }
    }

    /**
     * this function will split reviews by a user JSON into two that matches the state.
     */
    modifiedReviewsByUser = (reviewsByUser) => {
        let reviews = []
        let ratings = []
        for (let i = 0; i < reviewsByUser.length; i++) {
            var tempReview = {}
            var tempRating = {}
            tempReview.id = reviewsByUser[i].id
            tempReview.description = reviewsByUser[i].description
            // tempReview.username = reviewsByUser[i].username
            tempRating.id = reviewsByUser[i].id
            tempRating.size = reviewsByUser[i].size
            tempRating.width = reviewsByUser[i].width
            tempRating.comfort = reviewsByUser[i].comfort
            tempRating.quality = reviewsByUser[i].quality
            tempRating.overall = reviewsByUser[i].overall
            tempRating.isRecommend = reviewsByUser[i].isRecommend
            reviews[i] = tempReview;
            ratings[i] = tempRating;
        }
        this.setState({
            reviews: reviews,
            ratings: ratings
        })
    }

    render() {
        return (

            <Container className={this.props.classes.root} maxWidth="lg">
                <div>
                    {
                        this.state.ratings.length != 0 ? <RatingComponent ratings={this.state.ratings}/>
                            : <h2>No Ratings</h2>
                    }
                </div>
                <div className={this.props.classes.div}>
                    {
                        //key point
                        this.state.reviews.length != 0 ? this.state.reviews.map(review => <ReviewComponent
                                key={review.id} review={review}/>)
                            : <h2>No Review</h2>
                    }
                </div>
            </Container>

        );
    }
}

export default withStyles(styles)(ProductReviewContainer);
