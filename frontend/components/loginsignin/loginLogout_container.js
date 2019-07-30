import { connect } from "react-redux";
import {logout} from '../../actions/session_actions'
import LoginLogout from './loginOrLogout';

const msp = state => ({
    currentUser: state.session.currentUser
})

const mdp = dispatch => ({ 
    logout: () => dispatch(logoutUser())
})

export default connect(msp, mdp)(LoginLogout)