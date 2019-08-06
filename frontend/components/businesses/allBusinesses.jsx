import React from 'react';
import {Link} from 'react-router-dom';
import BusinessIndexItem from './buisiness-index-item'
import IndexMap from '../maps/index_map_container'
class BusinessIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBusinesses()
        window.scrollTo(0, 0)
    }

    render() {
        const allBusinesses = this.props.allBusinesses.map(business=> (
            <div key={business.id} className="biz-index">
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
            <div>
                <p></p>
            </div>
            <div className="biz-and-map">
                <div>
                    {allBusinesses}
                </div>
                <div>
                    <div className="index-map">
                        <IndexMap />
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default BusinessIndex