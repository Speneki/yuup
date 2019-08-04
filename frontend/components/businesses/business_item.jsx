import React from 'react';
import { Link } from 'react-router-dom';

class BusinessItem extends React.Component {
    constructor(props) {
        super(props)
        // console.log(this.props.business.photoUrl)
    }

    render() {
        return(
        <li className="splash-biz-list-item">
            <img src={this.props.business.photoUrl} alt=""/>
            <p><Link to={`api/businesses/${this.props.business.id}`}>{this.props.business.business_name}</Link></p>
            <p>{this.props.business.address}</p>
            <p>{this.props.business.rating} stars, {this.props.business.reviews} reviews</p>
        </li>
        )
    }
}

export default BusinessItem;