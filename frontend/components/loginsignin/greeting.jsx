import React from "react";
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    const signedIn = () => (
        <div>
            <h3>Heyooo, {props.currentUser}</h3>
            <button onClick={props.logout}>LOGOUT</button>
        </div>
    )

    const link = () => (
        <div>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
        </div>
    )

    return props.currentUser ? signedIn() : link()
}

export default Greeting;