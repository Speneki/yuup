import { connect } from 'react-redux';
import Businesses from './businesses'
import {fetchBusinesses, fetchBusiness} from '../../actions/business_actions'

const msp = state => ({
    businesses: Object.values(state.entities.businesses)
})

const mdp = dispatch => ({
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    fetchBusiness: (id) => dispatch(fetchBusiness(id))
})

export default connect(msp, mdp)(Businesses)