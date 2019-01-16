import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/userActions';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
          username: this.state.userName,
          email: this.state.email,
          password: this.state.password
      })
      const newUser = this.state;
      debugger
      this.props.signupUser(newUser);
      this.setState({ 
        username: '',
        email: '',
        password: ''
      });
  } 

    render() {
      return (
        <div>
            <div className='signupInput'>
                <form onSubmit={event => this.handleSubmit(event)} > 
                    <label htmlFor='signup-username'>Username</label><br></br>
                    <input id='signup-username' onChange={event => this.handleOnChange(event)} name='username' type='text' value={this.state.username}/>
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