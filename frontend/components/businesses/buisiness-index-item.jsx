import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// const msp = state => {
//     return ({
//         allReviews: Object.values(state.entities.reviews)
//     })
// }

class BusinessItem extends React.Component {
    constructor(props) {
        super(props)
    }

    stars() {
        const avg = Math.floor(this.props.business.avg_rating * 2) / 2;
        switch (avg) {
            case 1:
                return "uno"
            case 1.5:
                return 'uno-half'
            case 2:
                return 'dos'
            case 2.5:
                return 'dos-half'
            case 3:
                return 'tres'
            case 3.5:
                return 'tres-half'
            case 4:
                return 'quatro'
            case 4.5:
                return 'quatro-half'
            case 5:
                return 'cinco'
            default:
                return 'zero'
        }
    }

    render() {
        return (
            <li key={this.props.business.id} className="index-biz-list-item">
                <Link to={`/businesses/${this.props.business.id}`}><img src={this.props.business.photoUrl} /></Link>
                <div className="biz-index-deets">
                    <Link className="biz-link" to={`/businesses/${this.props.business.id}`}>{this.props.business.business_name}</Link>
                    <div className='splash-biz-reviews'>
                        <p id={this.stars()} className="splash-review-ratings"></p>
                        <p className="splash-reviews-count">{this.props.business.review_ids.length} reviews</p>
                    </div>
                    <p className="biz-address-splash" >{this.props.business.address}</p>
                    <p>{this.props.business.number}</p>

                </div>
            </li>
        )
    }
}

export default BusinessItem;