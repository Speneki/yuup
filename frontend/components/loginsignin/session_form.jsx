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

    // componentWillUnmount() {
    //      this.props.clearErrors()
    // }

    render() {
        const names = this.props.formType === "Sign up" ? (
        <>
            <label>
                <input type="text" placeholder="First name" onChange={this.handleChange('firstName')} required />
                <input type="text" placeholder="Last Name" onChange={this.handleChange('lastName')} required />
            </label>
            <br/>
        </>            
            ) : (null)

        const location = this.props.formType === "Sign up" ? (
            <label>
                <input type="number" className="location" placeholder="Zip Code" onChange={this.handleChange("location")} required/>
            </label>
        ) : (null)

        const topPart = this.props.formType === "Sign up" ? (
            <label>
                <h3>Sign Up for Yuup</h3>
                <h4>Connect with great local businesses</h4>
                <p className="aboveText">By continuing, you agree to Yuup's Terms of Service and acknowledge Yuup's Privacy Policy.</p>
            </label>
        ) : (
            <label>
                <h3>Log In to Yuup</h3>
                <h4>New to Yuup? sign up!</h4>
                <p className="aboveText">By logging in, you agree to Yuups Terms of Service and Privacy Policy</p>
            </label>
        )

        const bottomPart = this.props.formType === "Sign up" ? (
            <p className="bottomPart">
                You also understand that Yuup may send marketing 
                emails about Yuup’s products, services, and local events.
                You can unsubscribe at any time.
            </p>
        ) : (null)

        const image = (
            <div className="imgcontianer">
                <img className="signinImage" src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" alt="signup image" />
            </div>
        ) 

        const loginLink = this.props.formType === "Sign up" ? (
            <div className='loginLink'>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        ) : (
            <div className='loginLink'>
                <p>New to Yuup? <Link to="/signup">Sign In</Link></p>
            </div>
        )

        return (
            <div className="wholepage">
                <div className="entryform">
                    <form onSubmit={this.handleSubmit}>
                        {topPart}
                        {names}
                        <label>
                            <input className="email" type="email" placeholder="Email" onChange={this.handleChange('email')} required />
                        </label>
                        <label>
                            <input className="password" type="password" placeholder="Password" onChange={this.handleChange("password")} required />
                        </label>
                        {location}
                        <br/>
                        {bottomPart}
                        <input type="submit" value={this.props.formType} />
                        <div className="errors">
                            {this.renderErrors()}
                        </div>
                    </form>
                    {loginLink}
                </div>
                {image}
            </div>
        )
    }
}

export default SessionForm