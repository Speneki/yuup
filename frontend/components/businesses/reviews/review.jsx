import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteReview} from '../../../actions/review_actions' 

const msp = (state, ownProps) => {
    return ({
        user: Object.values(state.entities.users).filter(user => {
            if (user.id === ownProps.review.user_id) {
                return user;
            }}),
        currentUser: state.entities.users[state.session.id]
    })
}
const mdp = dispatch => {
    return ({
        deleteReview: (id) => dispatch(deleteReview(id))
    })
}

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

    getCityName() {
        $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + $zip + '&key=' +  + '&type=json&_=')
    }

    deleteMine() {
        this.props.deleteReview(this.props.review.id).then(this.props.history.push(`/businesses`))
    }

    render() {
        const thisMine = this.props.currentUser ? (
            this.props.currentUser.id === this.props.user[0].id ? (
                <div className="user-review-buttons">
                    <p><Link to={`/reviews/${this.props.review.id}`}><i class="fas fa-edit"></i></Link></p>
                    <p onClick={this.props.deleteMine}><i class="fas fa-trash-alt"></i></p>
                </div>
            ) : (null)
        ) : (null)

        return (
            <div className="rating-container">
                <img className="profile-pics" src={this.props.user[0].photoUrl} alt=""/>
                <div className="profile-deets">
                    <p>{this.props.user[0].firstName}</p>
                    <p>{this.props.user[0].location}</p>
                </div>
                <div className="stars-and-body">
                    <p id={this.rating()} className="review-ratings"></p>
                    <p className="review-body">{this.props.review.body}</p>
                </div>
                {thisMine}
            </div>
        )
    }
}

export default connect(msp, mdp)(Review);