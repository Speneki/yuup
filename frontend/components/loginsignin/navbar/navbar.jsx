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
                <div>
                    < UserNav 
                        currentUser={this.props.currentUser}
                        logout={this.props.logout}
                        // onClick={dropdown}
                    />
                </div>
            </div>
        )
    )
    :
        (
            <div className={`navBar ${appearOrNah}`}>
                <div className="buttons">
                    <a href="#">My Site</a>
                    <a href="https://github.com/Speneki">Git Hub</a>
                    <a href="https://www.linkedin.com/in/spencer-tassone-80a6218b/">LinkedIn</a>
                </div>
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