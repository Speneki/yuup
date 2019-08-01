import React from 'react';

class BusinessItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
        <li className="splash-biz-list-item">
            <p>{this.props.business.business_name}</p>
            <p>{this.props.business.address}</p>
            <p>{this.props.business.rating} stars, {this.props.business.reviews} reviews</p>
        </li>
        )
    }
}

export default BusinessItem;