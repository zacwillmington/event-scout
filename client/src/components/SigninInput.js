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

    handleSubmit = event => {
        this.setState({
            email: this.state.email,
            password: this.state.password
        })
    } 

    render() {
        return (
            <div className='siginInput'>
                <form onSubmit={event => this.handleSubmit(event)} > 
                    <label for='email'>Email</label><br></br>
                    <input id='email' onChange={event => this.handleOnChangeEmail(event)} name='email' type='text' value={this.state.email}/>
                    <br></br>
                    <label for='password'>Password</label><br></br>
                    <input id='password' onChange={event => this.handleOnChangePassword(event)} name='password' type='password' value={this.state.password}/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default SigninInput;