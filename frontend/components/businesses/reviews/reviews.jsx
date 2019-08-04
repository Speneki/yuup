import React from 'react';


class ReviewsShow extends React.Component {
    constructor(props) {
        super(props)
    }

    reviews() {
        debugger
        return (Object.values(this.props.reviews))
    }

    render() {
        return(
        <div>
            <p>{this.reviews().map(review => review.body)}</p>
        </div>
        )
    }
}

export default ReviewsShow