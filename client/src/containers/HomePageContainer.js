import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { geolocated } from 'react-geolocated';
import { setUsersLocation } from '../actions/userActions';

import { getPreLoadedEvents } from '../actions/eventsActions';

import EventCategoriesContainer from './EventCategoriesContainer';
import Events from '../components/Events'
import EventsSearchPage from '../components/EventsSearchPage';
import MovieComponent from '../components/MovieComponent';




class HomePageContainer extends Component {
    constructor(){
        super();
        this.state = {
            musicEvents: [],
            foodAndDrinkEvents: [],
            businessEvents: []
        }
    }

    componentWillMount() {
        //fetch events categories 
        if(!this.props.preLoadedEventsDone){            
        }
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
        //Pre-load events
        if (this.props.coords !== null && this.props.locationSet && !this.props.preLoadedEventsDone){
            const usersGeoLocation = {
                latitude: this.props.coords.latitude,
                longitude: this.props.coords.longitude
            }
            this.props.getPreLoadedEvents('Music', usersGeoLocation)
            this.props.getPreLoadedEvents('Food and Drink', usersGeoLocation)
            this.props.getPreLoadedEvents('Business', usersGeoLocation)
        } 
        //Once events are loaded, save to state.
        if(this.props.preLoadedEventsDone && this.state.musicEvents.length <= 0){
            this.setState({
                musicEvents: this.props.preLoadedEventCategories.musicEvents.events,
                foodAndDrinkEvents: this.props.preLoadedEventCategories.foodAndDrinkEvents.events,
                businessEvents: this.props.preLoadedEventCategories.musicEvents.events
            })
        }
    }

    displayedEvents = () => {
        // debugger
        console.log("displayed events func")
    }

    render() {
        return(
            <div className='homePageContainer'>
                <EventsSearchPage />
                <MovieComponent />
                <EventCategoriesContainer musicEvents={this.props.musicEvents} foodAndDrinkEvents={this.props.foodAndDrinkEvents} businessEvents={this.state.businessEvents}/>
                <Events events={this.displayedEvents()}/>
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
        isAuthenticated: state.authReducer.isAuthenticated,

        preLoadedEventsDone: state.eventsReducer.preLoadedEventsDone,
        preLoadedEventCategories: state.eventsReducer.preLoadedEventCategories
    }
}

const mapDispatchToprops = dispatch => {
    return {
        getPreLoadedEvents: (searchTerm, geoLocation) => {
         dispatch(getPreLoadedEvents(searchTerm, geoLocation))
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