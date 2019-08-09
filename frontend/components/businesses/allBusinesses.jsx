import React from 'react';
import {Link} from 'react-router-dom';
import BusinessIndexItem from './buisiness-index-item'
import IndexMap from '../maps/index_map_container'
class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = { cityName: "" };
    }

    componentDidMount() {
        this.props.fetchBusinesses()
        window.scrollTo(0, 0)
        this.props.currentUser ? $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.props.currentUser.location + '&key=' + window.key + '&sonsor=true').then((response) => {
            this.setState({ cityName: response.results[0].address_components[2].long_name })
        }) : (null)
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
                            <input type="text" className="top-search-location" value={this.state.location} />
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