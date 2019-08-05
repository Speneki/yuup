import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions'
import { merge } from 'lodash'

export default (state={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return merge({}, state, action.payload.reviews)
        case RECEIVE_REVIEW: 
            return merge({}, state, {[action.payload.id]: action.payload})
        default: 
            return state
    }
}

