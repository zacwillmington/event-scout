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
                <form onSubmit={event => this.handleSubmit(event)} >
                    <label for='userName'>User Name</label><br></br>
                    <input id='userName' onChange={event => this.handleOnChangeUserName(event)} name='userName' type='text' value={this.state.userName}/>
                    <br>
                    </br> 
                    <label for='email'>Email</label><br></br>
                    <input id='email' onChange={event => this.handleOnChangeEmail(event)} name='email' type='text' value={this.state.email}/>
                    <br>
                    </br>
                    <label for='password'>Password</label><br></br>
                    <input id='password' onChange={event => this.handleOnChangePassword(event)} name='password' type='password' value={this.state.password}/>
                    <br>
                    </br>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default SignupInput;