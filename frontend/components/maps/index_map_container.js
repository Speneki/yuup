import { connect } from 'react-redux';
import indexMap from './indexMap';
import { withRouter } from "react-router";
import { fetchBusinesses } from '../../actions/business_actions'

const msp = state => ({
    businesses: Object.values(state.entities.businesses)
})

const mdp = dispatch => ({

})

export default connect(msp, mdp)(indexMap)