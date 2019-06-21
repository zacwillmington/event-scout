import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import EventsSearchPage from '../components/eventsSearchPage';
import Events from '../components/Events';
import { getUsersEvents, getEventsBySearchBar, getPaginatedEvents } from '../actions/eventsActions';
var Spinner = require('react-spinkit');


class EventsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: this.props.events
        }
    }
    
    componentDidMount(){
        window.scrollTo(0, 0);
    } 

    componentWillReceiveProps(prevProps){
    }

    componentDidUpdate(prevProps){
        //If a user's event has been deleted then update state with new array.
        if(prevProps.usersEvents.length !== this.props.usersEvents.length){
            this.setState({
                events: this.props.usersEvents 
            })
        }
        if(prevProps.events.length < this.props.events.length){
            this.setState({events: this.props.events});
        }
         if(prevProps.events.length > 0){
            //Check to see of events have been updated to new array or update the events state to the new events 
            if (this.props.events.length > 0){
                if(prevProps.events[0].name.text !== this.props.events[0].name.text) {
                    this.setState({
                        events: this.props.events
                    })
                }
            } else {
                this.setState({events: []});
            }
        } else if(prevProps.eventsAreLoading){
            this.setState({
                events: this.props.events
            })
        }
    }
    
    getSearchTerm = (loc, searchTerm, eventDate) => {
        //Fetches events from eventBrite API based on search term
        this.props.getEventsBySearchBar(loc, searchTerm, eventDate);
    }

    handleViewEventsClick = event => {
        event.preventDefault();
        this.props.getUsersEvents(this.props.currentUser)
        this.setState({ 
            events: this.props.usersEvents
        })  
    }

    renderViewYourEventsBtn = () => {
        if(this.props.isAuthenticated) {
            return (
                <button id='view-users-events' onClick={event => this.handleViewEventsClick(event)}>Your Events</button>
            )
        }
    }

    handleViewMoreEvents = () => {
        this.props.getPaginatedEvents(this.props.pagination);
    }

    backToTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <div className='eventsContainer'> 
                {this.renderViewYourEventsBtn()} 
                {this.props.eventsAreLoading ? 
                <div id='spinner-div'>
                    <Spinner  name="ball-scale-ripple-multiple" color="#4ff462"/>
                </div> :  <Events events={this.state.events} />}
                <EventsSearchPage getSearchTerm={this.getSearchTerm} />
                {this.props.pagination.has_more_items && !this.props.eventsAreLoading ? <button className='view-more-events-btn' onClick={() => this.handleViewMoreEvents()}>View More</button> : ""}
                <button className='view-more-events-btn' onClick={() => this.backToTop()}>^Back To Top^</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.authReducer.currentUser,
        isAuthenticated: state.authReducer.isAuthenticated,
        eventsAreLoading: state.eventsReducer.eventsAreLoading,
        events: state.eventsReducer.events,
        usersEvents: state.eventsReducer.usersEvents,
        usersLocation: state.usersReducer.usersLocation,
        eventsHasErrors: state.eventsReducer.eventsHasErrors,
        pagination: state.eventsReducer.pagination
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getEventsBySearchBar: (loc, searchTerm, eventDate) => {
            return dispatch(getEventsBySearchBar(loc, searchTerm, eventDate))
        },
        getUsersEvents: (user) => {
            return dispatch(getUsersEvents(user))
        },
        getPaginatedEvents: (paginationData) => {
            return dispatch(getPaginatedEvents(paginationData))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsContainer))