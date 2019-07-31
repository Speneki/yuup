import React from 'react';
import Greeting from "./loginsignin/greeting";
import LoginFormContainer from "./loginsignin/login_form_container";
import SignupFormContainer from "./loginsignin/signup_form_container";
import { Route } from 'react-router-dom';


const App = () => (
    <div>
        < Greeting />
        < Route exact path="/login" component={LoginFormContainer} />
        < Route exact path="/signup" component={SignupFormContainer} />

    </div>
);

export default App;