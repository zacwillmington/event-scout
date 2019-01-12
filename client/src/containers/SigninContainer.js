import React, { Component } from 'react';
import SigninInput from '../components/SigninInput';
import { connect } from 'react-redux';

class SigninContainer extends Component {

  checkUserDetails = (user) => {
    //Send credentials to API for validation.
    fetch('/signin').then(res => res.toJSON()).then(validatedUser => {
      return console.log(validatedUser);
    });
    this.props.addCurrentUser(user);
  }

    render() {
      return (
        <div>
            SigninContainer
            <SigninInput checkUserDetails={this.checkUserDetails} />
        </div>
      )
    }
  }

  const mapDispatchToProps = dispatch => {
    return { 
        addCurrentUser: (user) => {
            dispatch({
                type: 'ADD_CURRENT_USER',
                user: user
            });
        } 
    }
}

export default connect(null, mapDispatchToProps)(SigninContainer);
