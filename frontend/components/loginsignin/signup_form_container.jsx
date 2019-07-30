import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { Link } from 'react-router-dom';
import React from 'react';

const msp = (state) => ({
    nav: <Link to="/signup">sign up</Link>,
    errors: state.errors.session,
    formType: "sign up"
})

const mdp = dispatch => ({
    processForm: user => dispatch(signup(user))
})

export default connect(msp, mdp)(SessionForm)