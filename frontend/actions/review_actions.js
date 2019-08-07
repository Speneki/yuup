import * as ReviewApiUtil from '../util/review_util'

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const DELETE_REVIEW = "DELETE_REVIEW"
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS"

const recieveReviews = (reviews) => {
    return ({
        type: RECEIVE_REVIEWS,
        payload: reviews
    })
}

const recieveReview = (review) => {
    return ({
        type: RECEIVE_REVIEW,
        payload: review
    })
}

const receiveReviewErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})


export const fetchReviews = () => dispatch => (
    ReviewApiUtil.showReviews().then(reviews => dispatch(recieveReviews(reviews)))
)

export const fetchReview = (id) => dispatch => (
    ReviewApiUtil.showReview(id).then(review => dispatch(recieveReview(review)))
)

export const createReview = (review) => dispatch => (
    ReviewApiUtil.postReview(review).then(
        review => dispatch(recieveReview(review)),
        error => dispatch(receiveReviewErrors(error.responseJSON)))
)

export const editReview = (review) => dispatch => (
    ReviewApiUtil.patchReview(review).then(
        review => dispatch(recieveReview(review)),
        error => dispatch(receiveReviewErrors(error.responseJSON)))
)

export const deleteReview = (reviewId) => dispatch => (
    ReviewApiUtil.deleteReview(reviewId).then(review => dispatch(recieveReview(reviewId)))
)