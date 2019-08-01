import {connect} from 'react-redux';
import BusinessShow from './business_show';
import { withRouter } from "react-router";
import {fetchBusiness} from '../../actions/business_actions'

const msp = (state, ownProps) => {
    return ({
        business: state.entities.businesses[ownProps.match.params.id] || {
            business_name:  "",
            address: "",
            longitude: "",
            latitude: "",
            number: "",
            website: "",
            price: "",
            category: ""
        }
    })}

const mdp = dispatch => ({
    fetchBusiness: id => dispatch(fetchBusiness(id))
})

export default withRouter(connect(msp, mdp)(BusinessShow))