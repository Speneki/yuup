    export const login = user => (
    $.ajax({
        url: `/api/session`,
        method: "post",
        data: { user }
    })
)

export const signup = user => (
    $.ajax({
        method: "POST",
        url: '/api/users',
        data: { user }
    })
)


export const logout = () => (
    $.ajax({
        url: `/api/session`,
        method: "DELETE",
    })
)