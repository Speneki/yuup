import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div>
            <img className='splish-splash' src="assets/splash1.jpg" alt="splash"/>
            <input className="food-search" type="search"/>
        </div>
        )
    }
}


export default Splash;