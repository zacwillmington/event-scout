import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/userActions';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
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
          user_name: this.state.user_name,
          email: this.state.email,
          password: this.state.password_digest
      })
      const newUser = this.state;
      this.props.signupUser(newUser);
      this.setState({ 
        user_name: '',
        email: '',
        password: ''
      });
  } 

    render() {
      return (
        <div>
            <div className='signupInput'>
                <form onSubmit={event => this.handleSubmit(event)} > 
                    <label htmlFor='signup-user_name'>Username</label><br></br>
                    <input id='signup-user_name' onChange={event => this.handleOnChange(event)} name='user_name' type='text' value={this.state.user_name}/>
                    <br></br>

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

  const mapDispatchToProps = dispatch => {
    return {
      signupUser: (user) => {
          return dispatch(signupUser(user))
      } 
    }
  }


export default connect(null, mapDispatchToProps)(SignupPage);