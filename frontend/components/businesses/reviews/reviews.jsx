import React from 'react';


class ReviewsShow extends React.Component {
    constructor(props) {
        super(props)
    }

    reviews() {
        // debugger
        // return (Object.values(this.props.reviews))
    }

    render() {
        return(
        <div>
            <ul>
                {/* {this.reviews().map(review => review.body)} */}
            </ul>
        </div>
        )
    }
}

export default ReviewsShow