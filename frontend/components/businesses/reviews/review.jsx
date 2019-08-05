import React from 'react';


class Review extends React.Component {
    
    rating() {
        switch(this.props.review.rating) {
            case 1:
                return "uno"
            case 1.5:
                return 'uno-half'
            case 2:
                return 'dos'
            case 2.5:
                return 'dos-half'
            case 3:
                return 'tres'
            case 3.5:
                return 'tres-half'
            case 4:
                return 'quatro'
            case 4.5:
                return 'quatro-half'
            case 5:
                return 'cinco'
            default: 
                return 'zero'
        }
    }

    render() {
        return (
            <div className="rating-container">
                <p>{this.props.review.user_id}</p>
                <div className="stars-and-body">
                    <p id={this.rating()} className="review-ratings"></p>
                    <p className="review-body">{this.props.review.body}</p>
                </div>
            </div>
        )
    }
}

export default Review;