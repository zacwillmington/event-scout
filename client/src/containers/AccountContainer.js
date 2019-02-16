import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { deleteUser } from '../actions/userActions';
import { logoutUser } from '../actions/authActions';
import UserInput from '../components/UserInput';

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

    render() {
        return(
            <div className='account-container'>
                    <UserInput />
                    <button id='delete-account-button' onClick={(event) => this.handleDelete(event)}>
                        <div class='box-left'>
                            <i class='but-icon fa fa-lg fa-times'></i>
                        </div>
                    </button>
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