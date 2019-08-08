import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteReview} from '../../../actions/review_actions' 
import { withRouter } from "react-router";

const msp = (state, ownProps) => {
    return ({
        user: Object.values(state.entities.users).filter(user => {
            if (user.id === ownProps.review.user_id) {
                return user;
            }}),
        currentUser: state.entities.users[state.session.id],
        currentBusiness: Object.values(state.entities.businesses).filter(business => {
            if (business.id === ownProps.review.business_id) {
                return business;
            }
        })
    })
}

const mdp = dispatch => {
    return ({
        deleteReview: (id) => dispatch(deleteReview(id))
    })
}

class Review extends React.Component {
    constructor(props) {
        super(props)
        this.deleteMine = this.deleteMine.bind(this)
        this.state = {cityName: ""};
    }

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

    componentDidMount () {
        $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.props.user[0].location + '&key=' + window.key + '&sonsor=true').then((response) => {
            this.setState({cityName: response.results[0].address_components[2].long_name})
        })
    }

    deleteMine() {
        this.props.deleteReview(this.props.review.id)
        // .then(() => this.props.history.push(`/businesses/${this.props.review.business_id}`))
    }

    render() {


        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"]
        const nums = ["2019", "2018", "2016"]
        //Brayn Developed this


        const thisMine = this.props.currentUser ? (
            this.props.currentUser.id === this.props.user[0].id ? (
                <div className="user-review-buttons">
                    {/* <p><Link to={`/reviews/${this.props.review.id}`}><i class="fas fa-edit"></i></Link></p> */}
                    <p className="trashcan" onClick={this.deleteMine}><i className="fas fa-trash-alt"></i></p>
                </div>
            ) : (null)
        ) : (null)

        return (
            <div className="rating-container">
                <img className="profile-pics" src={this.props.user[0].photoUrl} alt=""/>
                <div className="profile-deets">
                    <p className="personsName">{this.props.user[0].firstName} {this.props.user[0].lastName[0]}.</p>
                    <p className="nameOfCity">{this.state.cityName}</p>
                </div>
                <div className="stars-and-body">
                    <div>
                        <p id={this.rating()} className="review-ratings"></p>
                         <p className="review-body">{this.props.review.body}</p>
                    </div>
                        <p className="timeOfReview">
                            {months[Math.floor(Math.random() * months.length)]}&nbsp;{days[Math.floor(Math.random() * days.length)]}&nbsp;&#183;&nbsp;{nums[Math.floor(Math.random() * nums.length)]}    
                        </p>

                </div>
                {thisMine}
            </div>
        )
    }
}

export default withRouter(connect(msp, mdp)(Review));