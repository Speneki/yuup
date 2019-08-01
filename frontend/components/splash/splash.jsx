import React from 'react';
import Businesses from '../businesses/businesses_container'

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
        <div>
            <div className='splish-splash'> 
                <p className="title-icon">Yuup</p>
                <input className="food-search" type="text"/>
            </div>
            < Businesses />
        </div>
        )
    }
}


export default Splash;