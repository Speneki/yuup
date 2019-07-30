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
        debugger 
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
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
                <input type="text" value={this.state.firstName} onChange={this.handleChange('firstName')} />
            </label>
            <label>
                Last Name
                <input type="text" value={this.state.lastName} onChange={this.handleChange('lastName')} />
            </label>
            <br/>
        </>            
            ) : (null)

        const location = this.props.formType === "sign up" ? (
            <label>
                Zip Code
                <input type="number" value={this.state.location} onChange={this.handleChange("location")}/>
            </label>
        ) : (null)

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {names}
                    <label>
                        email
                        <input type="text" value={this.state.email} onChange={this.handleChange('email')} />
                    </label>
                    <br />
                    <label>
                        Password
                        <input type="password" value={this.state.password} onChange={this.handleChange("password")} />
                    </label>
                    {location}
                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        )
    }
}

export default SessionForm