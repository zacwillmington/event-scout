import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAlert } from "react-alert";

import { displayErrors } from './Errors';
import { editUser } from '../actions/userActions';

class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.currentUser.id,
          user_name: this.props.currentUser.user_name,
            email: this.props.currentUser.email,
            password: this.props.currentUser.password
        }
      }
    
      componentDidUpdate(prevProps) {
          if(this.props.hasErrors && prevProps.isLoading){
              displayErrors(this.props.errors, this.props.alert);        
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
              password: this.state.password
          })
          const user = this.state;
          
          this.props.editUser(user);
      } 

    render() {
        return (
            <div className='userInput'>
               <form id='user-edit-form' onSubmit={event => this.handleSubmit(event)} > 
                <div id='user-edit-title'><h1>EDIT ACCOUNT</h1></div>
                  <div id='user-edit-form-div'>
                     <input id='user-edit-email' onChange={event => this.handleOnChange(event)} name='email' type='text' value={this.state.email} placeholder='New Email'/>
                      
                    <input id='user-edit-password' onChange={event => this.handleOnChange(event)} name='password' type='password' value={this.state.password} placeholder='New Password' />
                  </div>
                    <input className='user-edit-btn' type='submit' value='SUBMIT'/>
                </form>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        currentUser: state.authReducer.currentUser,
        isLoading: state.usersReducer.isLoading,
        errors: state.usersReducer.errors,
        hasErrors: state.usersReducer.hasErrors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editUser: (user) => {
            dispatch(editUser(user))
        }
    }
}

export default withAlert(withRouter(connect(mapStateToProps, mapDispatchToProps)(UserInput)));