import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { deleteUser } from '../actions/userActions';
import { logoutUser } from '../actions/authActions';

class AccountContainer extends Component {
  
    componentWillMount(){
        if (!this.props.isAuthenticated && !this.props.isAuthenticating) {
            this.props.history.push('/signin');
        }
    }

    handleDelete = (event) => {
        this.props.logoutUser(this.props.currentUser);
        this.props.deleteUser(this.props.currentUser);
        this.props.history.push('/signup');

    }

    handleEditEventLink = () => {
        this.props.history.push(`/users/${this.props.currentUser.id}`);
    }

    render() {
        return(
            <div className='account-container'>
                    <button id='delete-account-btn' onClick={(event) => this.handleDelete(event)}>
                        Delete
                    </button>
                    <button id='edit-account-btn' onClick={event => this.handleEditEventLink()}>Edit Account Info</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        currentUser: state.authReducer.currentUser,
        isAuthenticated: state.authReducer.isAuthenticated,
        isAuthenticating: state.authReducer.isAuthenticating
    }
}

const mapDispatchToProps = dispatch => {
    return {
         deleteUser: user => {
            dispatch(deleteUser(user))
          },
           
        logoutUser: user => {
            dispatch(logoutUser(user))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountContainer))