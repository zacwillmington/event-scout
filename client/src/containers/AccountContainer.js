import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import DeleteAccount from '../components/DeleteAccount';
import { deleteUser } from '../actions/userActions';

class AccountContainer extends Component {
  
    componentWillMount(){
        if (!this.props.isAuthenticated && !this.props.isAuthenticating) {
            this.props.history.push('/signin');
        }
    }

    handleDelete = (event) => {
        event.preventDefault();
        this.props.deleteUser(this.props.currentUser);
        this.props.history.push('/signup');

    }

    render() {
        return(
            <div className='AccountContainer'>
                AccountContainer 
                <React.Fragment>
                    <DeleteAccount handleDelete={this.handleDelete} />               
                    <Link className='btn btn-primary' 
                    to={`/users/${this.props.currentUser.id}`}>
                        Edit Account Info
                    </Link>
                </React.Fragment>
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
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountContainer))