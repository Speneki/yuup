import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER} from '../actions/session_actions';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_BUSINESS } from '../actions/business_actions'

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.id]: action.currentUser })
        case RECEIVE_BUSINESS:
            return merge({}, state, action.payload.users)
        default:
            return state;
    }
}

export default usersReducer