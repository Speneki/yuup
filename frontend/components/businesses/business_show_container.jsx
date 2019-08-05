import {connect} from 'react-redux';
import BusinessShow from './business_show';
import { withRouter } from "react-router";
import {fetchBusiness} from '../../actions/business_actions'

const msp = (state, ownProps) => {
    return ({
        business: state.entities.businesses[ownProps.match.params.id] || 
        {
            business_name:  "",
            address: "",
            longitude: 0,
            latitude: 0,
            number: "",
            website: "",
            price: "",
            category: "",
            photoUrl: `${window.logo}`,
            rating: '',
            photos: ['', ''],
            reviews: {}
        }
    })}

const mdp = dispatch => ({
    fetchBusiness: id => dispatch(fetchBusiness(id))
})

export default withRouter(connect(msp, mdp)(BusinessShow))