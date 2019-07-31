import React from "react";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state
    }

    render() {    
        const propToLoad = this.props.currentUser ? (
        (
            <div className="navBar">
                <div className="buttons">
                    <h3>Heyooo, {this.props.currentUser.firstName}</h3>
                    <button onClick={this.props.logout}>LOGOUT</button>
                </div>
            </div>
        )
    )
    :
        (
            <div className="navBar">
                <h3>Yuup</h3>
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