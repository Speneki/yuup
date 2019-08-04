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
                    <img className="title-icon" src={window.logo} alt="logo"/>
                <label> Food
                    <input className="food-search" type="text" placeholder="food"/>    
                </label>
            </div>
            < Businesses />
        </div>
        )
    }
}


export default Splash;