import { combineReducers } from 'redux';
import usersReducer from './users_reducer'
import businessReducer from './business_reducer';
import reviewsReducer from './reviews_reducer';

export default combineReducers({
    users: usersReducer,
    businesses: businessReducer,
    reviews: reviewsReducer
})