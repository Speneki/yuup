import { editReview } from '../../../actions/review_actions'
import { fetchBusiness } from '../../../actions/business_actions'
import ReviewForm from "../reviews/review-form"
import { connect } from 'react-redux';

const msp = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        formType: " ★ Edit Review",
        errors: state.errors.reviews,
        thisReview: state.entities.reviews[ownProps.match.params.id]
    })  
}

const mdp = dispatch => ({
    action: (review) => dispatch(editReview(review)),
})

export default connect(msp, mdp)(ReviewForm);