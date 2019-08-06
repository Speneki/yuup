import React from 'react';
import {Link} from 'react-router-dom';
import BusinessItem from './business_item'
class BusinessIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBusinesses()
    }

    render() {
        const allBusinesses = this.props.allBusinesses.map(business=> (
            <div className="biz-index">
                <BusinessItem
                    key={business.id}
                    business={business}
                />
            </div>
        ))


        return (
            <>
            <div className="showPageNav">
                <div className="showBizSearch">
                    <form className="top-search">
                        <label className="top-search-find">
                            Find
                            <input type="text" className="top-search-food" id="" />
                        </label>
                        <label className="top-search-near">
                            Near
                            <input type="text" className="top-search-location" placeholder="New York, NY" />
                        </label>
                        <button type="submit" className="top-search-button"><i className="fas fa-search"></i></button>
                    </form>
                </div>
            </div>
            <div >
                {allBusinesses}
            </div>
            </>
        )
    }
}

export default BusinessIndex