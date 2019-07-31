import React from 'react';
import Greeting from "./loginsignin/navbar";
import LoginFormContainer from "./loginsignin/login_form_container";
import SignupFormContainer from "./loginsignin/signup_form_container";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from "./loginsignin/navbar_container"

const App = () => (
    <div>
        <header>
            < Navbar />
        </header>
        <Switch>
            < AuthRoute exact path="/login" component={LoginFormContainer} />
            < AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;