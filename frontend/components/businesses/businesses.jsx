import React from 'react';
import BusinessItem from './business_item'
import {Link} from 'react-router-dom';

class Businesses extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBusinesses()
    }

    render() {
        const businesses = this.props.businesses.map(business => {
            return (    
                <BusinessItem 
                    key={business.id}
                    business={business}
                />
            )
        })
        debugger
        return(
        <div className="under-splash">
            <h3>Hot & New Businesses</h3>
            <ul className="splash-biz-list">
                {businesses[0]}
                {businesses[1]}
                {businesses[2]}
            </ul>
            <Link to={{ pathname: "businesses/all"}}>See more hot and new businesses</Link>
        </div>)
    }
}

export default Businesses;