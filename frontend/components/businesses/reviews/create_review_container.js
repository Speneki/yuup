import { createReview } from '../../../actions/review_actions'
import ReviewForm from "../reviews/review-form"
import { connect } from 'react-redux';

const msp = (state, ownProps) => {
    // debugger
}

const mdp = dispatch => ({
    action: (review) => dispatch(createReview(review))
})

export default connect(null, mdp)(ReviewForm);