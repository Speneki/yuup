export const indexUsers = () => (
    $.ajax({
        type: 'GET',
        url: `/api/users`,
    })
);
export const showUser = (id) => (
    $.ajax({
        type: 'GET',
        url: `/api/users/${id}`,
        data: { users: { id } }
    })
);