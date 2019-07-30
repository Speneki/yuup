import React from 'react';
import Greeting from "./loginsignin/greeting";
import LoginFormContainer from "./loginsignin/login_form_container";
import SignupFormContainer from "./loginsignin/signup_form_container";
import { Route } from 'react-router-dom';
// import LoginOrLogout from './loginsignin/loginLogout_container';

const App = () => (
    <div>
        <header>
            <h3>Yuup</h3>
            < Greeting />
        </header>
        < Route path="/login" component={LoginFormContainer} />
        < Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;