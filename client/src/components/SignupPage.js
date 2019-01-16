import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
        email: "",
        password: ""
    }
  }

  handleOnChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
      event.preventDefault();
      this.setState({
          userName: this.state.userName,
          email: this.state.email,
          password: this.state.password
      })
      const newUser = this.state;
      debugger
      this.props.signupUser(user);
      this.setState({ 
        userName: '',
        email: '',
        password: ''
      });
  } 

    render() {
      return (
        <div>
            <div className='signupInput'>
                <form onSubmit={event => this.handleSubmit(event)} > 
                    <label htmlFor='signup-email'>Email</label><br></br>
                    <input id='sigup-email' onChange={event => this.handleOnChange(event)} name='email' type='text' value={this.state.email}/>
                    <br></br>
                    <label htmlFor='signup-password'>Password</label><br></br>
                    <input id='signup-password' onChange={event => this.handleOnChange(event)} name='password' type='password' value={this.state.password}/>
                    <input className='btn btn-primary' type='submit' value='Sign up'/>
                </form>
            </div>
        </div>
      )
    }
  }

export default SignupPage;