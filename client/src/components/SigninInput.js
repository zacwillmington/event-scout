import React, { Component } from 'react';

class SigninInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleOnChange = event => {
        debugger
        this.setState({
            email: event.target.email.value,
            password: event.target.password.value
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
                    <input name='email' type='text' value={this.state.email}/>
                    <input name='password' type='password' value={this.state.password}/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default SigninInput;