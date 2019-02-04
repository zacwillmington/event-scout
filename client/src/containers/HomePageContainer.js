import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { geolocated } from 'react-geolocated';
import Geolocate  from '../components/Geolocate'

import { getPreLoadedEvents } from '../actions/eventsActions';




class HomePageContainer extends Component {
    constructor(){
        super();
        this.state = {
            // musicEvents: this.props.preLoadedEventCategories.musicEvents,
            // foodAndDrinkEvents: this.props.preLoadedEventCategories.foodAndDrinkEvents,
            // businessEvents: this.props.preLoadedEventCategories.businessEvents
        }
    }

    componentWillMount() {
        //fetch events categories 
        if(this.props.locationSet){
            const location = this.props.usersLocation;
            this.props.getPreLoadedEvents('Music', location)
            this.props.getPreLoadedEvents('Food and Drink', location)
            this.props.getPreLoadedEvents('Business', location)            
        }
    }

    componentDidMount() {
        if (!this.props.isAuthenticated && !this.props.isAuthenticating){
            this.props.history.push('/signin');
        }
    }

    componentDidUpdate(prevProps, prevState) {
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
        usersLocation: state.usersReducer.usersLocation,

        preLoadedEventCategories: state.eventsReducer.preLoadedEventCategories
    }
}

const mapDispatchToprops = dispatch => {
    return {
        getPreLoadedEvents: location => {
            return dispatch(getPreLoadedEvents(location))
        }
    }
}

const HomeWithGeoloc = geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(HomePageContainer);

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(HomeWithGeoloc)) 