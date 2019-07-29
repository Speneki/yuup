const postUser = user => (
    $.ajax({
        url: '/api/users',
        method: "POST",
        data: { user }
    })
)

const postSession = user => (
    $.ajax({
        url: `/api/session`,
        method: "post",
        data: { user }
    })
)

const postSession = () => (
    $.ajax({
        url: `/api/session`,
        method: "DELETE",
    })
)