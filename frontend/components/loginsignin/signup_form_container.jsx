import { connect } from "react-redux";
import { signup , login } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { Link } from 'react-router-dom';
import React from 'react';

const msp = (state) => ({
    nav: <Link to="/signup">sign up</Link>,
    errors: state.errors.session,
    formType: "Sign up"
})

const mdp = dispatch => ({
    processForm: user => dispatch(signup(user)),
    demologin: () => dispatch(login({ email: 'Spencerwilliamtassone@gmail.com', password: "password" }))
    // clearErrors: () => dispatch(clearErrors())
})

export default connect(msp, mdp)(SessionForm)