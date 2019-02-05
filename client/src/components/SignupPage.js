import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { withAlert } from "react-alert";
import { signupUser } from '../actions/authActions';
import { displayErrors } from './Errors'


class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
        email: "",
        password: ""
    }
  }


  componentDidUpdate(prevProps, prevState) {
    if(this.props.hasErrors && prevProps.isAuthenticating){
      displayErrors(this.props.errors, this.props.alert);
    } else if(this.props.isAuthenticated) { 
      this.props.history.push('/');
    }
  }

  handleOnChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
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
            <div className='signupInput'>
            
                <form id='signup-form' onSubmit={event => this.handleSubmit(event)} > 
                <div id='signup-title'><h1>SIGN UP</h1></div>
                  <div id='signup-form-div'>
                      <input id='signup-user_name' onChange={event => this.handleOnChange(event)} name='user_name' type='text' value={this.state.user_name}
                      placeholder='User Name'/>
                      

                      <input id='signup-email' onChange={event => this.handleOnChange(event)} name='email' type='text' value={this.state.email} placeholder='Email'/>
                      
                  
                      <input id='signup-password' onChange={event => this.handleOnChange(event)} name='password' type='password' value={this.state.password} placeholder='Password' />
                  </div>
                    <input className='signup-user-btn' type='submit' value='SUBMIT'/>
                </form>
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

  const mapStateToProps = state => {
    return {
       isAuthenticating: state.authReducer.isAuthenticating,
        isAuthenticated: state.authReducer.isAuthenticated,
        hasErrors: state.authReducer.hasErrors,
        errors: state.authReducer.errors
    }
  }


export default withAlert(withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupPage)));