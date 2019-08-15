import React, {Component} from 'react';
import ReviewEditorComponent from "../../component/AccountComponents/ReviewEditorComponent";
import ReviewService from "../../services/ReviewService";

class ReviewEditorContainer extends React.Component{
    constructor(props) {
        super(props);
        this.reviewService = ReviewService.getInstance()
        this.state= {
            reviews:[]
        }
    }

    componentDidMount() {
        this.findAllReview()
    }

    findAllReview=()=>
        this.reviewService.findAllReview().then(response => this.setState({reviews: response}))

    deleteReview =(rid)=>
        this.reviewService.deleteReview(rid).then(this.findAllReview)

    render() {
        return(
            <div className={"overflow-auto"}>
                <ReviewEditorComponent reviews={this.state.reviews} deleteR={this.deleteReview}/>
            </div>
        )
    }
}

export default ReviewEditorContainer;
