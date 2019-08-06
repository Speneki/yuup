import React from "react";
import { Link } from 'react-router-dom';
import UserNav from './usernav'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }
    

    render() {    
        const appearOrNah = (this.props.location.pathname != '/') ? ("makeItRed") : ("keepItClear")
        const propToLoad = this.props.currentUser ? (
        (
            <div>
                <div className="nav-bar-objects"> 
                    < UserNav 
                        currentUser={this.props.currentUser}
                        logout={this.props.logout}
                    />
                </div>  
            </div>
        )
    )
    :
        (
        <div className="nav-bar-objects">
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
        </div>
        )
        return propToLoad
    }
}

export default Navbar;