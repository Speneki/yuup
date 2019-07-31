import React from "react";
import { Link } from 'react-router-dom';
import UserNav from './usernav'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state
    }

    render() {    
        const propToLoad = this.props.currentUser ? (
        (
            <div>
                    < UserNav 
                        currentUser={this.props.currentUser}
                        logout={this.props.logout}
                    />
            </div>
        )
    )
    :
        (
            <div className="navBar">
                <h3>Yuup</h3>
                {/* LINKS TO PERSONAL PAGES */}
                <div className='buttons'>
                    <Link className="login" to="/login">Log In</Link>
                    <Link className="signup" to="/signup">Sign Up</Link>
                </div>
            </div>
        )
        return propToLoad
    }
}

export default Navbar;