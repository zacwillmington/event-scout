import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logoutUser } from '../actions/authActions';


class LogoutPage extends Component {

    componentWillMount() {
        debugger
         this.props.logoutUser(this.props.currentUser)
    }
  
    render() {
        return null 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: user => {
                dispatch(logoutUser(user));
        }
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.usersReducer.currentUser,
        isAuthenticating: state.authReducer.isAuthenticating,
        isAuthenticated: state.authReducer.isAuthenticated
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogoutPage))