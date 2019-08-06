import React from 'react';
import {Link} from 'react-router-dom';
import BusinessIndexItem from './buisiness-index-item'
import IndexMap from '../maps/indexMap'
class BusinessIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBusinesses()
        window.scrollTo(0, 0)
    }

    render() {
        const allBusinesses = this.props.allBusinesses.map(business=> (
            <div className="biz-index">
                <BusinessIndexItem
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
            <div className="biz-and-map">
                <div>
                    {allBusinesses}
                </div>
                <div>
                    <div className="index-map">
                        
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default BusinessIndex