import React from 'react';
import Map from '../maps/map'
import RatingStars from "./reviews/rating-stars"
import ReviewsShow from './reviews/reviews'
import { Link } from 'react-router-dom';
import ReviewForm from '../businesses/reviews/create_review_container'

class Business extends React.Component {

    constructor(props) {
        super(props)
        this.state = {cityName: ""} 
    }
    
    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.id)
        window.scrollTo(0, 0);
        this.props.currentUser ? $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.props.currentUser.location + '&key=' + window.key + '&sonsor=true').then((response) => {
            this.setState({ cityName: response.results[0].address_components[2].long_name })
        }) : (null)
    }

    handleFile(e) {
        
    }

    render() {
        const currentUserReviewed = (this.props.reviews && this.props.currentUser) ? (
            this.props.reviews.filter(review => review.user_id === this.props.currentUser.id)
        ) : (null)


        const writeOrEdit = (this.props.currentUser && currentUserReviewed.length > 0) ? (
            <Link to={{
                pathname: `/reviews/${currentUserReviewed[0].id}`,
                biz: this.props.business
            }}>
                <button className="review-button"> ★ Edit Your Review</button>
            </Link>
            ) :  (
                    <Link to={{
                        pathname: "/reviews",
                        biz: this.props.business
                    }}>
                        <button className="review-button"> ★ Write A Review</button>
                    </Link>
                )

        
        return(
            <div>

                {/* from here --- */}
                <div className="showPageNav">
                    <div className="showBizSearch">
                        <form className="top-search">
                            <label className="top-search-find">
                                Find
                                <input type="text" className="top-search-food" id=""/>
                            </label>
                            <label className="top-search-near">
                                Near
                                <input type="text" className="top-search-location" defaultValue={this.state.cityName}/>
                            </label>
                            <button type="submit" className="top-search-button"><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
                {/* to here will be a container */}
                <div className="whole-top">
                    <div className="whole-top-container">
                        <div className="business-with-buttons">
                            <div className="top-of-business-show">
                                <div>
                                    <p className="business-name">{this.props.business.business_name} <i className="fas fa-check-circle"></i> </p>
                                    <RatingStars business={this.props.business}/>
                                </div>
                                <div className="businessButtons">
                                    {writeOrEdit}
                                    {/* <button className="secondary-buttons"><i className="fas fa-camera"></i>  Add Photo</button>
                                    <button className="secondary-buttons"><i className="fas fa-share-square"></i>  Share</button> */}
                                </div>
                            </div>

                            {/* from here down should also be a container */}

                            <div className="middle-business-show">
                                <div className="map-container" ref='map'>

                                    <Map
                                        business={this.props.business}  
                                        fetchBusiness={this.props.fetchBusiness}
                                        />

                                    <p className="mid-part-title"><i className="fas fa-map-pin"></i>  {this.props.business.address}</p>
                                    <p><i className="fas fa-phone"></i>  {this.props.business.number}</p>
                                    <p><i className="fas fa-external-link-alt"></i>  <a href={this.props.business.website}>{this.props.business.website}</a></p>
                                </div>
                                <div className="biz-pix">
                                    <img className="biz_pic" src={this.props.business.photos[1]} alt="restaurant"/>
                                    <img className="biz_pic" src={this.props.business.photos[2]} alt="restaurant"/>
                                    <img className="biz_pic" src={this.props.business.photos[this.props.business.photos.length - 1]} alt="restaurant"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    {/* CONtaIN THAT! */}

                {/* Biz content */}
                <div className="actual-biz-content">
                    <ReviewsShow 
                        review_ids = {this.props.business.review_ids} 
                        biz= {this.props.business}
                    />
                </div>
            </div>
        )
    }
}

export default Business;