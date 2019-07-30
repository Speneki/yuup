import React from 'react';

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

    render() {
        
        const names = this.props.formType === "sign up" ? (
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

        const location = this.props.formType === "sign up" ? (
            <label>
                Zip Code
                <input type="number" value={this.state.location} onChange={this.handleChange("location")} required/>
            </label>
        ) : (null)

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        )
    }
}

export default SessionForm