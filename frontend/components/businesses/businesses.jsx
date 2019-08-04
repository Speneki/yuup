import React from 'react';
import BusinessItem from './business_item'

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
        return(
        <div className="under-splash">
            <h3>Hot & New Businesses</h3>
            <ul className="splash-biz-list">
                {businesses}
            </ul>
            <a href="">See more hot and new businesses</a>
        </div>)
    }
}

export default Businesses;