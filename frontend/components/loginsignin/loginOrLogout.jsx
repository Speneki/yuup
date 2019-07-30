import LoginFormContainer from "./loginsignin/login_form_container";
import SignupFormContainer from "./loginsignin/signup_form_contain";
import React from 'react';
import {Route} from 'react-router-dom';

export const loggedInLoggedout = (props) => {
    
    const loggedIn = this.props.currentUser ? (
        <div>
            <p>Hello {this.props.currentUser.firstName}</p>
            <button onClick={this.props.logout}>Logout</button>
        </div>
    ) : (
    <div>
        < Route path="/login" component={LoginFormContainer} />
        < Route path="/signup" component={SignupFormContainer} />
    </div>
    );

    render() {
        return (
            ()
        )
    }
}