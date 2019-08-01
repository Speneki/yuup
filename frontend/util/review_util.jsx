
export const postReview = (review) => {
    return $.ajax({
        type: 'POST',
        url: '/api/reviews',
        data: { review }
    });
};

export const patchReview = (review) => (
    $.ajax({
        type: 'PATCH',
        url: `/api/reviews/${review.id}`,
        data: { review }
    })
);

export const deleteReview = (id) => (
    $.ajax({
        type: 'DELETE',
        url: `/api/reviews/${id}`,
        data: { id }
    })
);