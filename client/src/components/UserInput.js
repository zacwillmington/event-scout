import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAlert } from "react-alert";

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
                this.renderErrors();
          }
      }

      renderErrors = () => {
        if(Object.keys(this.props.errors).length > 0){
            Object.keys(this.props.errors).map((key, index) => {
                    let errorText = `${key}: ${this.props.errors[key]}`
                    return this.props.alert.error(errorText);
              })
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
                <form onSubmit={event => this.handleSubmit(event)} > 
                    <label htmlFor='user_name'>Username</label><br></br>
                    <input id='user_name' onChange={event => this.handleOnChange(event)} name='user_name' type='text' value={this.state.user_name}/>
                    <br></br>
                    <label htmlFor='password'>Password</label><br></br>
                    <input id='password' onChange={event => this.handleOnChange(event)} name='password' type='password' value={this.state.password}/>
                    <input className='btn btn-primary' type='submit' value='Submit'/>
                </form>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        ...state, 
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