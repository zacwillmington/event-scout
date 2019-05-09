import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { geolocated } from 'react-geolocated';
import { setUsersLocation } from '../actions/userActions';
import EventCategoriesContainer from './EventCategoriesContainer';
import { getUsersEvents, getEventsBySearchBar } from '../actions/eventsActions';
import EventsSearchPage from '../components/eventsSearchPage';
import MainImageComponent from '../components/MainImageComponent';
import styled, { keyframes } from 'styled-components';


const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

// animation to slide out the home page to the left
const slideOutLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;

const Page = styled.div``;

// apply the correct animation based on the transition state class name.
const HomePageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInLeft} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 0.2s forwards;
  }
`;

class HomePageContainer extends Component {
    constructor(props){
        super(props);
    }

    componentDidUpdate(prevProps, prevState) {
        //Set Geolocation
        if (this.props.locationSet && Object.entries(this.props.usersLocation).length === 0) {
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
            <HomePageElm>
                <EventsSearchPage getSearchTerm={this.getSearchTerm}/>
                <MainImageComponent />
                <div id='categories-title'><h1>Categories</h1></div>
                <EventCategoriesContainer />
            </HomePageElm>
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