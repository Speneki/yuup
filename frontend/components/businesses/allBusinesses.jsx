import React from 'react';

class BusinessIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBusinesses()
    }

    render() {
        const allBusinesses = this.props.allBusinesses.map(business=> (
            <p>heyo</p>
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
                {allBusinesses}
            </div>
            </>
        )
    }
}

export default BusinessIndex