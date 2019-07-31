import React from "react";
import { Link } from 'react-router-dom';
import UserNav from './usernav'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state
        //todo set up dropdown
    }

    render() {    
        const appearOrNah = (this.props.location.pathname === '/login') || (this.props.location.pathname === '/signup') ? ("makeItRed") : ("keepItClear")
        const propToLoad = this.props.currentUser ? (
        (
            <div>
                <div className="buttons">
                    < UserNav 
                        currentUser={this.props.currentUser}
                        logout={this.props.logout}
                        // onClick={}
                    />
                </div>
            </div>
        )
    )
    :
        (
            <div className={`navBar ${appearOrNah}`}>
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