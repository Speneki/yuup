import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/business_actions';
import { merge } from 'lodash'
import { DELETE_REVIEW} from '../actions/review_actions'

export default (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_BUSINESS:
            return merge({}, state, {[action.payload.id]: action.payload})
        case RECEIVE_BUSINESSES:
            return merge({}, state, action.payload.business);
        case DELETE_REVIEW: 
            const newState = merge({}, state)

            const business_id = Object.keys(newState)[0]
            const biz = Object.values(newState)[0]

            const newReviews = biz.review_ids.filter(id => (
                id !== action.payload
            ))

            biz.review_ids = newReviews
            const test = { [business_id]: biz }

            debugger
            
            return {[business_id]: biz}
        default:
            return state
    }
}