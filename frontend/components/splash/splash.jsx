import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
        <div className='splish-splash'> 
            <p className="title-icon">Yuup</p>
            <input className="food-search" type="text"/>
        </div>
        )
    }
}


export default Splash;