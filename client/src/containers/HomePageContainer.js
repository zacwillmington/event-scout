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
            musicEvents: [],
            foodAndDrinkEvents: [],
            businessEvents: []
        }
    }

    componentWillMount() {
        //fetch events categories 
        if(!this.props.preLoadedEventsDone){
            // const usersLocation = this.props.usersLocation;
            // const geoLocation = {
            //     longitude: '32.7157',
            //     latitude: '117.1611'
            // }
            const geoLocation = 'San Diego'
            this.props.getPreLoadedEvents('Music', geoLocation)
            this.props.getPreLoadedEvents('Food and Drink', geoLocation)
            this.props.getPreLoadedEvents('Business', geoLocation)            
        }
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
        } else if(this.props.preLoadedEventsDone && !prevProps.preLoadedEventsDone){
            this.setState({
                musicEvents: this.props.preLoadedEventCategories.musicEvents.events,
                foodAndDrinkEvents: this.props.preLoadedEventCategories.foodAndDrinkEvents.events,
                businessEvents: this.props.preLoadedEventCategories.musicEvents.events
            })
            debugger
            //give props to geo to setGeolocation
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
        usersLocation: state.usersReducer.usersLocation,

        preLoadedEventsDone: state.eventsReducer.preLoadedEventsDone,
        preLoadedEventCategories: state.eventsReducer.preLoadedEventCategories
    }
}

const mapDispatchToprops = dispatch => {
    return {
        getPreLoadedEvents: (searchTerm, geoLocation) => dispatch(getPreLoadedEvents(searchTerm, geoLocation))
    }
}

const HomeWithGeoloc = geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(HomePageContainer);

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(HomeWithGeoloc)) 