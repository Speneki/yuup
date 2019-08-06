import { connect } from 'react-redux';
import BusinessIndex from './allBusinesses';
import { withRouter } from "react-router";
import { fetchBusiness, fetchBusinesses } from '../../actions/business_actions'


const msp = state => ({
    allBusinesses: Object.values(state.entities.businesses)
})

const mdp = dispatch => ({
    fetchBusinesses: () => dispatch(fetchBusinesses())
})

export default connect(msp,mdp)(BusinessIndex)