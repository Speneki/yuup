import React from 'react';
import { Link } from 'react-router-dom';
class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: "", 
            business_id: "",
            user_id: "",
            rating: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.currentUser ? null : this.props.history.push('/login')

        const revId = (this.props.formType === " ★ Edit Review" ? (this.props.thisReview.id) : (1))
        const newReview = {
            body: this.state.body,
            rating: this.state.rating,
            user_id: this.props.currentUser.id,
            business_id: this.props.location.biz.id,
            review_id: revId
        }

        this.props.action(newReview).then(() => this.props.history.push(`/businesses/${this.props.location.biz.id}`))
    }

    handleUpdate(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    
    render() {
        const options = ["Select your rating", "Eek! Me thinks not.", "Meh. I've experienced better.", "A-OK.", "Yay! I'm a fan.", "Woohoo! As good as it gets!"];
        const placeHolder = "Your review helps others learn about great local businesses.\n\n Please don't review this business if you received a freebie for writing this review, or are connected in any way to the owner or employees."

        const reviewBod = this.props.formType === " ★ Edit Review" ? (
            this.props.thisReview.body
        ) : (null)

        return(  
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
                    <div className="reviewForm">
                    <Link to={`/businesses/${this.props.location.biz.id}`} className="bizTitle">{this.props.location.biz.business_name}</Link>
                        <form className="reviewFormfillout" onSubmit={this.handleSubmit}>
                                <div className="stars-and-words">
                                    <ul 
                                        id={`rating-of-${this.state.rating}`}
                                        className="review-form-stars-ul">
                                        <li 
                                            className="review-form-stars-li-1"
                                            >
                                            <input 
                                                id="radio-button"
                                                type="radio" 
                                                value="1"
                                                name="rating-stars"
                                                onChange={this.handleUpdate('rating')} 
                                                />
                                        </li>
                                        <li 
                                            className="review-form-stars-li-2"
                                            >
                                            <input 
                                                id="radio-button"
                                                type="radio" 
                                                value="2" 
                                                name="rating-stars"
                                                onChange={this.handleUpdate('rating')} />
                                        </li>
                                        <li 
                                            className="review-form-stars-li-3"
                                            >
                                            <input 
                                            id="radio-button"
                                                type="radio" 
                                                value="3" 
                                                name="rating-stars"
                                                onChange={this.handleUpdate('rating')} />
                                        </li>
                                        <li 
                                            className="review-form-stars-li-4"
                                            >
                                            <input 
                                            id="radio-button"
                                                type="radio"                                               
                                                value="4" 
                                                name="rating-stars"
                                                onChange={this.handleUpdate('rating')} />
                                        </li>
                                        <li 
                                            className="review-form-stars-li-5"
                                            >
                                            <input 
                                            id="radio-button"
                                                type="radio" 
                                                value="5" 
                                                name="rating-stars"
                                                onChange={this.handleUpdate('rating')} />
                                        </li>
                                    </ul>
                                    <div className="review-form-stars-desctiprion">
                                        <p className="review-text">{options[this.state.rating]}</p>
                                    </div>
                                </div>
                            <textarea className="reviewFormBody" defaultvalue={reviewBod}
                                cols="40" wrap="hard" rows="5" placeholder= {placeHolder}
                                onChange={this.handleUpdate('body')}/>
                            <input type="submit" className="review-submit-button" value={this.props.formType}/>
                            <div className="errors">
                                {this.renderErrors()}
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default ReviewForm;