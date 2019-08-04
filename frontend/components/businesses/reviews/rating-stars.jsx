import React from 'react';

class RatingStars extends React.Component {
    constructor(props){
        super(props)
    }

    avgRating() {
        let avg = Math.floor(this.props.business.avg_rating * 2) / 2;
        switch (avg) {
            case 1:
                return 'avg-one';
            case 1.5:
                return 'avg-one-half';
            case 2:
                return 'avg-two';
            case 2.5:
                return 'avg-two-half';
            case 3:
                return 'avg-three';
            case 3.5:
                return 'avg-three-half';
            case 4:
                return 'avg-four';
            case 4.5:
                return 'avg-four-half';
            case 5:
                return 'avg-five';
            default:
                return 'avg-zero';
        }
    };

    price() {
        switch(this.props.business.price) {
            case "1":
                return "$";
            case "2":
                return "$$";
            case "3":
                return "$$$";
            case "4":
                return "$$$$";
            default:
                return "";
        }
    }

    reviewsCount() {
        return (Object.keys(this.props.business.reviews).length)
    }

    render() {
        return (
            <>
                <div id={this.avgRating()} className="stars" />
                <p className="price">{this.price()}</p>
                <p className="reviews-count">{this.reviewsCount()} reviews</p>
            </>
        )
    }
}

export default RatingStars;