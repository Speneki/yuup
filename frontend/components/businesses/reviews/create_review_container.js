import { createReview } from '../../../actions/review_actions'
import { fetchBusiness } from '../../../actions/business_actions'
import ReviewForm from "../reviews/review-form"
import { connect } from 'react-redux';

const msp = (state, ownProps) => {
    debugger
    return ({
        currentUser: state.entities.users[state.session.id]
    })  
}

const mdp = dispatch => ({
    action: (review) => dispatch(createReview(review)),
    fetchBusiness: id => dispatch(fetchBusiness(id))
})

export default connect(msp, mdp)(ReviewForm);