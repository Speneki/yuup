import React from 'react';
import {connect} from "react-redux";
import {fetchReviews} from "../../../actions/review_actions"; 
import Review from "./review";
import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) => {
    const reviews = (ownProps.review_ids && Object.values(state.entities.reviews).length === ownProps.review_ids.length) ? 
        (ownProps.review_ids.map(id => state.entities.reviews[id]))
        : ([])
    return { reviews };
}
const mdp = dispatch => {
    return ({
        fetchReviews: () => dispatch(fetchReviews()),
        fetchReview: (id) => dispatch(fetchReview(id))
    })
}

class ReviewsShow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.reviews.length === 0) return  (null)
        const reviews = this.props.reviews.map(review => {
            return (
                <li key={review.id}>
                    <Review
                        key = {review.id}
                        review={review} />
                </li>
            )
        })

        return(
        <div className="reviews-container-container">
            <div>
                <p className="ask-the-community">Ask the Community</p>
                <ul>
                    {reviews}
                </ul>
            </div>
            <div className="hours">
                <h3>Hours</h3>
                    <p>Mon</p><h2>6:00 pm - 12:00 am</h2>
                    <p>Tue</p><h2>6:00 pm - 12:00 am</h2>
                    <p>Wed</p><h2>6:00 pm - 12:00 am</h2>
                    <p>Thu</p><h2>6:00 pm - 12:00 am</h2>
                    <p>Fri</p><h2>6:00 pm - 4:00 am</h2>
                    <p>Sat</p><h2>6:00 pm - 4:00 am</h2>
                    <p>Sun</p><h2>6:00 pm - 12:00 am</h2>
            </div>
        </div>
        )
    }
}

export default withRouter(connect(msp, mdp)(ReviewsShow))