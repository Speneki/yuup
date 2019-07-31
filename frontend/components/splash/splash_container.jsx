import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import React from 'react';
import Splash from './splash'

const msp = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id]
})}

const mdp = dispatch => ({

})

export default connect(msp, mdp)(Splash)