import React from 'react';

class Business extends React.Component {

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.id)
    }

    
    render() {
        return(
            <div>
                <div className="showPageNav">
                    <div className="showBizSearch">
                        <input type="text"/>
                    </div>
                </div>
                <div className="business-with-buttons">
                    <div className="top-of-business-show">
                        <p className="business-name">{this.props.business.business_name}</p>
                        <div className="businessButtons">
                            <button className="review-button">★ Write a review</button>
                            <button className="secondary-buttons">Add Photo</button>
                            <button className="secondary-buttons">Share</button>
                            <button className="secondary-buttons">Save</button>
                        </div>
                    </div>
                    <p>{this.props.business.address}</p>
                    <p>{this.props.business.number}</p>
                    <p>{this.props.business.url}</p>
                    <p>{this.props.business.price}</p>
                </div>
            </div>
        )
    }
}

export default Business;