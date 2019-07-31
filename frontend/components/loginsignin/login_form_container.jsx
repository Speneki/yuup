import { connect } from "react-redux";
import { login } from "../../actions/session_actions"
import SessionForm from "./session_form";
import { Link } from 'react-router-dom';
import React from 'react';


const msp = (state) => ({
    nav: <Link to="/login">Login</Link>,
    errors: state.errors.session,
    formType: "Login"
})

const mdp = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    demologin: () => dispatch(login({ email: 'test@gmail.com', password: "password" }))
})


export default connect(msp, mdp)(SessionForm)