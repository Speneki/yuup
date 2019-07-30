import React from 'react';
import {Link} from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            location: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) { 
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push('/'));
    }

    handleChange(feild) {
        return (e) => (
            this.setState({ [feild]: e.target.value })
        )
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const names = this.props.formType === "Sign up" ? (
        <>
            <label>
                First name
                <input type="text" value={this.state.firstName} onChange={this.handleChange('firstName')} required />
            </label>
            <label>
                Last Name
                <input type="text" value={this.state.lastName} onChange={this.handleChange('lastName')} required />
            </label>
            <br/>
        </>            
            ) : (null)

        const location = this.props.formType === "Sign up" ? (
            <label>
                Zip Code
                <input type="number" value={this.state.location} onChange={this.handleChange("location")} required/>
            </label>
        ) : (null)

        const topPart = this.props.formType === "Sign up" ? (
            <label>
                <h3>Sign Up for Yuup</h3>
                <h4>Connect with great local businesses</h4>
                <p>By continuing, you agree to Yuup's Terms of Service and acknowledge Yuup's Privacy Policy.</p>
            </label>
        ) : (
            <label>
                <h3>Log In to Yuup</h3>
                <h4>New to Yuup? sign up!</h4>
                <p>By logging in, you agree to Yuups Terms of Service and Privacy Policy</p>
            </label>
        )

        return (
            <div>
                <form className="entryform" onSubmit={this.handleSubmit}>
                    {topPart}
                    {names}
                    <label>
                        email
                        <input type="text" value={this.state.email} onChange={this.handleChange('email')} required />
                    </label>
                    <br />
                    <label>
                        Password
                        <input type="password" value={this.state.password} onChange={this.handleChange("password")} required />
                    </label>
                    {location}
                    <br/>
                    <input type="submit" value={this.props.formType} />
                    {/* {loginLink} */}
                </form>
                {this.renderErrors()}
            </div>
        )
    }
}

export default SessionForm