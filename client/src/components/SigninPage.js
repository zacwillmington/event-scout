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
            <h1>Sign In</h1>
                <form onSubmit={event => this.handleSubmit(event)} > 
                    <label htmlFor='signin-email'>Email</label><br></br>
                    <input id='sigin-email' onChange={event => this.handleOnChange(event)} name='email' type='text' value={this.state.email}/>
                    <br></br>
                    <label htmlFor='signin-password'>Password</label><br></br>
                    <input id='signin-password' onChange={event => this.handleOnChange(event)} name='password' type='password' value={this.state.password}/>
                    <input className='btn btn-primary' type='submit' value='Sign in'/>
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
