import * as APIUtil from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS"

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutUser = () => ({
        type: LOGOUT_USER,
})

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

// const emptyErrors = () => ({
//     type: CLEAR_ERRORS
// })

export const login = (user) => dispatch => {
    return (
        APIUtil.login(user).then(
            user => dispatch(receiveCurrentUser(user)),
            error => dispatch(receiveErrors(error.responseJSON)))
    )
}

export const signup = user => dispatch => {
    return (APIUtil.signup(user).then(
        user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON)))
    )}

export const logout = () => dispatch => {
    return (
        APIUtil.logout().then(() => dispatch(logoutUser()))
    )
}

// export const clearErrors = () => dispatch => {
//     return () => dispatch(emptyErrors())
// }