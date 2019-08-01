import * as BusinessApiUtil from '../util/business_util';

export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';

const receiveBusiness = (business) => {
    return ({
        type: RECEIVE_BUSINESS,
        payload: business,
    });
};

const receiveBusinesses = (businesses) => {
    return ({
        type: RECEIVE_BUSINESSES,
        payload: businesses,
    });
};


export const fetchBusinesses = () => (dispatch) => (
    BusinessApiUtil.indexBusinesses().then(bizez => dispatch(receiveBusinesses(bizez)))
);


export const fetchBusiness = (id) => (dispatch) => (
    BusinessApiUtil.showBusiness(id).then(biz => dispatch(receiveBusiness(biz)))
);