import React from 'react';
import { Link } from 'react-router-dom';
class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: "", 
            business_id: "",
            user_id: "",
            rating: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const newReview = {
            body: this.state.body,
            rating: this.state.rating,
            user_id: this.props.currentUser.id,
            business_id: this.props.location.biz.id
        }
        this.props.action(newReview).then(this.props.history.push(`businesses/${this.props.location.biz.id}`))
    }

    mouseEnter() {
        console.log('mouse enter')
    }

    mouseLeave() {
        console.log('mouse leave')
    }

    handleUpdate(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    render() {
        const placeHolder = "Your review helps others learn about great local businesses.\n\n Please don't review this business if you received a freebie for writing this review, or are connected in any way to the owner or employees."
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
                            <div>
                                <ul className="rating-stars">
                                    <li>
                                        <input type="radio" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} value="1" onChange={this.handleUpdate('rating')} />
                                    </li>
                                    <li>
                                        <input type="radio" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} value="2" onChange={this.handleUpdate('rating')} />
                                    </li>
                                    <li>
                                        <input type="radio" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} value="3" onChange={this.handleUpdate('rating')} />
                                    </li>
                                    <li>
                                        <input type="radio" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} value="4" onChange={this.handleUpdate('rating')} />
                                    </li>
                                    <li>
                                        <input type="radio" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} value="5" onChange={this.handleUpdate('rating')} />
                                    </li>
                                </ul>
                                <p></p>
                            </div>
                        <textarea className="reviewFormBody" value={this.state.body} 
                            cols="40" wrap="hard" rows="5"
                            placeholder= {placeHolder} onChange={this.handleUpdate('body')}/>
                        <input type="submit" className="review-submit-button" value={this.props.formType}/>
                    </form>
                </div>
            </div>
            </>
        )
    }
}

export default ReviewForm;