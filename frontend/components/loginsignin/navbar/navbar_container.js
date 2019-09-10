import { connect } from "react-redux";
import Navbar from "./navbar";
import { logout } from "../../../actions/session_actions"
import {withRouter} from 'react-router-dom'

const msp = state => {

    return ({
    currentUser: state.entities.users[state.session.id]
})}

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(msp, mdp)(Navbar))