import { RECEIVE_REVIEWS, RECEIVE_REVIEW, DELETE_REVIEW} from '../actions/review_actions'
import { RECEIVE_BUSINESS } from '../actions/business_actions'
import { merge } from 'lodash'

export default (state={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return merge({}, state, action.payload.reviews)
        case RECEIVE_BUSINESS: 
            return merge({}, action.payload.reviews)
        case RECEIVE_REVIEW: 
            return merge({}, state, {[action.payload.id]: action.payload})
        case DELETE_REVIEW:
            newState = merge({}, state);
            delete newState[action.reviewId];
            return newState;
        default: 
            return state
    }
}

