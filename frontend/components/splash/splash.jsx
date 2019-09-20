import React from 'react';
import Businesses from '../businesses/businesses_container'
import {Link } from 'react-router-dom'
class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            query: "",
            cityName: "",
            location: ""};
        this.queryChange = this.queryChange.bind(this)
        this.locationChange = this.locationChange.bind(this)
    }

    handleSubmit(e){
        e.preveventDefault();
    }

    componentDidMount() {
        this.props.currentUser ? $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.props.currentUser.location + '&key=' + window.key + '&sonsor=true').then((response) => {
            this.setState({ cityName: response.results[0].address_components[2].long_name })
        }) : (null)
    }

    queryChange(e) {
        this.setState({ query: e.target.value})
    }

    locationChange(e) {
        this.setState({ cityName: e.target.value})
    }

    render() {
        return (
        <>
            <div className='splish-splash'> 
                <img className="title-icon" src={window.logo} alt="logo"/>
                <form className="splash-form-fillout" action="">
                    <label className="food-label"> Food
                        <input className="food-search" type="text" placeholder="burgers, pizza, bagels, pizza-bagels..." value={this.state.query} onChange={this.queryChange}/>    
                    </label>
                    <label className="location-label"> Near
                        <input className="location-search" type="text" defaultValue={this.state.cityName} onChange={this.locationChange} />
                    </label>
                    <Link to={{ pathname: "/businesses/search/" + this.state.cityName + '/' + this.state.query }}><button type="submit" className="splash-search"><i className="fas fa-search"></i></button></Link>
                </form>
                    <ul>
                        <li className="photo-title">Briarpatch Restaurant</li>
                        <li>Photo by <span className="photo-cred">Kerry H.</span></li>
                    </ul>

            </div>

            <Businesses/>
        </>
        )
    }
}


export default Splash;