import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";



class HomePageContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.props.isAuthenticated && !this.props.isAuthenticating){
            this.props.history.push('/signin');
        }
    }

    componentDidMount() {
        if (!this.props.isLoggedin && !this.props.isLoading){
            this.props.history.push('/signin');
        }
    }

    render() {
        return(
            <div className='homePageContainer'>
                HomePageContainer 
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.authReducer.currentUser,
        isAuthenticating: state.authReducer.isAuthenticating,
        isAuthenticated: state.authReducer.isAuthenticated
    }
}

export default withRouter(connect(mapStateToProps)(HomePageContainer)) 