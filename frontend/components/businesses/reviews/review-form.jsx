import React from 'react';

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
    }

    handleUpdate(field) {

        return e => this.setState({ [field]: e.target.value })
    }

    render() {
        debugger
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
                <form onSubmit={this.handleSubmit}>
                    <input type="radio" name="rating" onChange={this.handleUpdate('rating')} checked/>
                    <input type="radio" name="rating" onChange={this.handleUpdate('rating')}/>
                    <input type="radio" name="rating" onChange={this.handleUpdate('rating')}/>
                    <input type="radio" name="rating" onChange={this.handleUpdate('rating')}/>
                    <input type="radio" name="rating" onChange={this.handleUpdate('rating')}/>
                    <input type="radio" name="rating" onChange={this.handleUpdate('rating')}/>
                    <input className="reviewFormBody" type="textarea" value={this.state.body} 
                        placeholder="Your review helps others learn about great local businesses \n 
                            Please don\'t review this business if you received a freebie for writing this review, 
                            or are connected in any way to the owner or employees." onChange={this.handleUpdate('body')}/>
                    <input type="submit"/>
                </form>
            </div>
            </>
        )
    }
}

export default ReviewForm;