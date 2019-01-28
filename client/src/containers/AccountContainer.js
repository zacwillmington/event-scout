import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import DeleteAccount from '../components/DeleteAccount';
import { deleteUser } from '../actions/userActions';

class AccountContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentWillMount(){
        if (!this.props.isAuthenticated && !this.props.isAuthenticating) {
            this.props.history.push('/signin');
        }
    }

    handleDelete = (event) => {
        event.preventDefault();

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