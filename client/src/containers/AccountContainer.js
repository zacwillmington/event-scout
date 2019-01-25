import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

class AccountContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentDidMount(){
        if (!this.props.isAuthenticated && !this.props.isAuthenticating) {
            this.props.history.push('/signin');
        }
    }

    render() {
        return(
            <div className='AccountContainer'>
                AccountContainer 
                Edit account info button
                <Link to={`/users/${this.props.currentUser.id}`}>Edit Account Info</Link> 
                <a>Delete Account</a>                 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state, 
        currentUser: state.authReducer.currentUser,
        isAuthenticated: state.authReducer.isAuthenticated,
        isAuthenticating: state.authReducer.isAuthenticating
    }
}

export default withRouter(connect(mapStateToProps)(AccountContainer))