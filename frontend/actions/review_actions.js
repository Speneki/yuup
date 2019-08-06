import * as ReviewApiUtil from '../util/review_util'

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const DELETE_REVIEW = "DELETE_REVIEW"


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

// const makeReview = (review) => {
//     return ({
//         type: RECEIVE_REVIEW,
//         payload: {review}
//     })
// }

export const fetchReviews = () => dispatch => (
    ReviewApiUtil.showReviews().then(reviews => dispatch(recieveReviews(reviews)))
)

export const fetchReview = (id) => dispatch => (
    ReviewApiUtil.showReview(id).then(review => dispatch(recieveReview(review)))
)

export const createReview = (review) => dispatch => (
    ReviewApiUtil.postReview(review).then(review => dispatch(recieveReview(review)))
)

// export const editReview = (review) => dispatch => (
//     ReviewApiUtil.editReview(review).then(review => dispatch(recieveReview(review)))
// )

export const deleteReview = (reviewId) => dispatch => (
    ReviewApiUtil.deleteReview(reviewId).then(review => dispatch(recieveReview(reviewId)))
)