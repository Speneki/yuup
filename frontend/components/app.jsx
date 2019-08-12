import React from 'react';
import LoginFormContainer from "./loginsignin/login_form_container";
import SignupFormContainer from "./loginsignin/signup_form_container";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from "./loginsignin/navbar/navbar_container";
import Footer from "./footer/footer";
import Splash from "./splash/splash_container";
import BusinessShow from './businesses/business_show_container';
import ReviewForm from './businesses/reviews/create_review_container';
import BusinessIndex from './businesses/allBusiness_container'
import EditReviewForm from './businesses/reviews/edit_review_container'

const App = () => (
    <div>
        <header>
            < Navbar />
        </header>
        <Switch>
            < AuthRoute exact path="/login" component={LoginFormContainer} />
            < AuthRoute exact path="/signup" component={SignupFormContainer} />
            < Route path="/reviews/:id" component={EditReviewForm} />
            < Route exact path="/reviews" component={ReviewForm} />
            < Route path='/businesses/all' component={BusinessIndex} />
            < Route path='/businesses/:id' component={BusinessShow} />
            < Route exact to="/" component={Splash} />
        </Switch>
        < Footer />
    </div>
);

export default App;