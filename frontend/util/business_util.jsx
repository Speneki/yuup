export const indexBusinesses = () => (
    $.ajax({
        type: 'GET',
        url: `/api/businesses`,
    })
);

export const showBusiness = (id) => (
    $.ajax({
        type: 'GET',
        url: `/api/businesses/${id}`,
        data: { business: { id } }
    })
);