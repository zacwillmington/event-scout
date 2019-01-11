import React, { Component } from 'react';

class SignupInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            email: "",
            password: ""
        }
    }

    handleOnChangeUserName = event => {
        this.setState({
            userName: event.target.value
        })
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
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password
        })
    } 

    render() {
        return (
            <div className='sigupInput'>
                <form className='form-group'
                      onSubmit={event => this.handleSubmit(event)}>
                    {/* UserName input */}
                    <label htmlFor='userName'>
                        User Name
                    </label>
                    <br></br>
                    <input id='userName'
                        className='form-control' 
                        onChange={event => this.handleOnChangeUserName(event)} name='userName' 
                        type='text' 
                        value={this.state.userName}
                     />
                    <br></br> 
                    {/* email input */}
                    <label htmlFor='signup-email'>
                        Email
                    </label>
                    <br></br>
                    <input id='signup-email' 
                           className='form-control'
                           onChange={event => this.handleOnChangeEmail(event)} 
                           name='email' 
                           type='text' 
                           value={this.state.email}/>
                    <br></br>
                    {/* password input */}
                    <label
                    htmlFor='signup-password'>
                        Password
                    </label>
                    <br></br>
                    <input id='signup-password'
                           onChange={event => this.handleOnChangePassword(event)}
                           name='password' type='password'
                           value={this.state.password} className=''/>
                    <br></br>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default SignupInput;