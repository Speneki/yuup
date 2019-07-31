import React from "react";
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    const propToLoad = props.currentUser ? (
        (
            <div className="navBar">
                <h3>Yuup</h3>
                <div className="buttons">
                    <h3>Heyooo, {props.currentUser.firstName}</h3>
                    <button onClick={props.logout}>LOGOUT</button>
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

export default Greeting;