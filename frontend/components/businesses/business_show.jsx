import React from 'react';
import Map from '../maps/map'

class Business extends React.Component {

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.id)
    }

    
    render() {
        return(
            <div>
                {/* from here --- */}
                <div className="showPageNav">
                    <div className="showBizSearch">
                        <input placeholder="thisll be a searchbar in time   " type="text"/>
                    </div>
                </div>
                {/* to here will be a container */}

                <div className="business-with-buttons">
                    <div className="top-of-business-show">
                        <div>
                            <p className="business-name">{this.props.business.business_name} <i className="fas fa-check-circle"></i> </p>
                        </div>
                        <div className="businessButtons">
                            <button className="review-button">★ Write a review</button>
                            <button className="secondary-buttons"><i className="fas fa-camera"></i>  Add Photo</button>
                            <button className="secondary-buttons"><i className="fas fa-share-square"></i>  Share</button>
                            <button className="secondary-buttons"><i className="fas fa-bookmark"></i>  Save</button>
                        </div>
                    </div>

                    {/* from here down should also be a container */}

                    <div className="middle-business-show">
                        <div id="map-container" ref='map'>
                            <Map 
                                business={this.props.business} 
                                fetchBusiness={this.props.fetchBusiness}
                                />

                        <p><i className="fas fa-external-link-alt"></i> {this.props.business.website}</p>
                        </div>
                        <div className="biz-pix">
                            <img src="https://picsum.photos/200" alt="restaurant"/>
                            <img src="https://picsum.photos/200" alt="restaurant"/>
                            <img src="https://picsum.photos/200" alt="restaurant"/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Business;