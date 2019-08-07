import { combineReducers } from "redux";
import sessionErrorsReducer from './session_errors_reducer'
import reviewErrorsFormReducer from './review_form_errors_reducer'
export default combineReducers({
    session: sessionErrorsReducer,
    reviews: reviewErrorsFormReducer
})