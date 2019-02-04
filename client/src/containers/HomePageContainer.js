import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { geolocated } from 'react-geolocated';
import Geolocate  from '../components/Geolocate'




class HomePageContainer extends Component {

    componentWillMount() {
        //fetch events category 
    }

    componentDidMount() {
        if (!this.props.isAuthenticated && !this.props.isAuthenticating){
            this.props.history.push('/signin');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        debugger
        if (!this.props.isAuthenticated && !this.props.isAuthenticating){
            this.props.history.push('/signin');
        }
    }

    render() {
        return(
            <div className='homePageContainer'>
                <Geolocate {...this.props}/>
                HomePageContainer 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.authReducer.currentUser,
        isAuthenticating: state.authReducer.isAuthenticating,
        isAuthenticated: state.authReducer.isAuthenticated,
        locationSet: state.usersReducer.locationSet,
        usersLocation: state.usersReducer.usersLocation
    }
}

const HomeWithGeoloc = geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(HomePageContainer);

export default withRouter(connect(mapStateToProps)(HomeWithGeoloc)) 