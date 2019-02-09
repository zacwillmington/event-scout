import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { geolocated } from 'react-geolocated';
import { setUsersLocation } from '../actions/userActions';

import EventCategoriesContainer from './EventCategoriesContainer';
import { getUsersEvents, getEventsBySearchBar } from '../actions/eventsActions';
import EventsSearchPage from '../components/EventsSearchPage';
import MovieComponent from '../components/MovieComponent';





class HomePageContainer extends Component {
    constructor(){
        super();
        this.state = {
        }
    }

    componentWillMount() {
    }

    componentDidMount() {
        if (!this.props.isAuthenticated && !this.props.isAuthenticating){
            this.props.history.push('/signin');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        //Auth redirect
        if (!this.props.isAuthenticated && !this.props.isAuthenticating){
            this.props.history.push('/signin');
        } 
        //Set Geolocation
        if (!this.props.locationSet) {
            this.props.setUsersLocation(this.props.coords);
        }
    }

    getSearchTerm = (loc, searchTerm, eventDate) => {
        //Fetches events from eventBrite API based on search term
        this.props.getEventsBySearchBar(loc, searchTerm, eventDate);
        this.props.history.push('/events');
    }

    render() {
        return(
            <div className='homePageContainer'>
                <EventsSearchPage getSearchTerm={this.getSearchTerm}/>
                <MovieComponent />
                <EventCategoriesContainer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        usersLocation: state.usersReducer.usersLocation,
        locationSet: state.usersReducer.locationSet,
        currentUser: state.authReducer.currentUser,
        isAuthenticating: state.authReducer.isAuthenticating,
        isAuthenticated: state.authReducer.isAuthenticated
    }
}

const mapDispatchToprops = dispatch => {
    return {
        getEventsBySearchBar: (loc, searchTerm, eventDate) => {
            dispatch(getEventsBySearchBar(loc, searchTerm, eventDate))
        },

        setUsersLocation: (coords) => {
            dispatch(setUsersLocation(coords))
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