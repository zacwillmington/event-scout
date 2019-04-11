import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../actions/authActions';
import { withAlert } from "react-alert";
import { withRouter } from 'react-router-dom';

import { displayErrors } from './Errors'


class SigninPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
        alerted: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.hasErrors && !this.state.alerted){
        this.setState({ alerted: true })
      displayErrors(this.props.errors, this.props.alert);
    } else if(this.props.isAuthenticated){
        this.props.history.push('/');
    }
  }
  

  handleOnChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
      event.preventDefault();
      this.props.authenticate(this.state);
      this.setState({
        email: "",
        password: "",
        alerted: false
      })
 }

    render() {
      return (
            <div className='signinInput'>
             <form id='signin-form' onSubmit={event => this.handleSubmit(event)} > 
                <div id='signin-title'><h1>SIGN IN</h1></div>
                  <div id='signin-form-div'>
                     <input id='signin-email' onChange={event => this.handleOnChange(event)} name='email' type='text' value={this.state.email} placeholder='Email'/>
                      
                  
                      <input id='signin-password' onChange={event => this.handleOnChange(event)} name='password' type='password' value={this.state.password} placeholder='Password' />
                  </div>
                    <input className='signin-user-btn' type='submit' value='SUBMIT'/>
                </form>
            </div>
      )
    }
}
  const mapDispatchToProps = dispatch => {
    return { 
        authenticate: (user) => {
            dispatch(authenticate(user));
        } 
    }
}

const mapStateToProps = state => {
    return { 
            currentUser: state.authReducer.currentUser,
            isAuthenticating: state.authReducer.isAuthenticating,
            isAuthenticated: state.authReducer.isAuthenticated,
            isLoading: state.authReducer.isLoading,
            hasErrors: state.authReducer.hasErrors,
            errors: state.authReducer.errors 
            }
}

export default withAlert(withRouter(connect(mapStateToProps, mapDispatchToProps)(SigninPage)));
