import React, { Component } from 'react';

class SigninInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleOnChangeEmail = event => {
        this.setState({
            email: event.target.value
        })
    }

    handleOnChangePassword = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = () => {
        this.setState({
            email: this.state.email,
            password: this.state.password
        })
        this.props.checkUserDetails(this.state);
    } 

    render() {
        return (
            <div className='siginInput'>
                <form onSubmit={event => this.handleSubmit(event)} > 
                    <label htmlFor='signin-email'>Email</label><br></br>
                    <input id='sigin-email' onChange={event => this.handleOnChangeEmail(event)} name='email' type='text' value={this.state.email}/>
                    <br></br>
                    <label htmlFor='signin-password'>Password</label><br></br>
                    <input id='signin-password' onChange={event => this.handleOnChangePassword(event)} name='password' type='password' value={this.state.password}/>
                    <input className='btn btn-primary' type='submit' value='Sign in'/>
                </form>
            </div>
        )
    }
}

export default SigninInput;