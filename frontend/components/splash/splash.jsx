import React from 'react';
import Businesses from '../businesses/businesses_container'
import {Link } from 'react-router-dom'
class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    handleSubmit(e){
        e.preveventDefault();

    }

    render() {
        return (
        <div>
            <div className='splish-splash'> 
                <img className="title-icon" src={window.logo} alt="logo"/>
                <form className="" action="">
                    <label className="food-label"> Food
                        <input className="food-search" type="text" placeholder="burgers, pizza, bagels, pizza-bagels..."/>    
                    </label>
                    <label className="location-label"> Near
                        <input className="location-search" type="text" placeholder={`${window.currentUser ? '' : `New York, NY`}`}/>
                    </label>
                    <Link to={{ pathname: "/businesses/all" }}><button type="submit" className="splash-search"><i className="fas fa-search"></i></button></Link>
                </form>
            </div>
            <Businesses/>
        </div>
        )
    }
}


export default Splash;