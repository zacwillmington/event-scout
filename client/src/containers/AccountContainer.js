import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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

const mapDispatchToProps = dispatch => {
    editUser: () => {
        dispatch()
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountContainer))