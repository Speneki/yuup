import {connect} from 'react-redux';
import BusinessShow from './business_show';
import { withRouter } from "react-router";
import {fetchBusiness} from '../../actions/business_actions'

const msp = (state, ownProps) => {
    return ({
    // business: state.enteties.businesses[ownProps.match.params.business.id]
})}

const mdp = dispatch => ({
    fetchBusiness: id => dispatch(fetchBusiness(id))
})

export default withRouter(connect(msp, mdp)(BusinessShow))