import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";


import { getEvents } from '../actions/eventsActions';
import EventsSearchPage from '../components/EventsSearchPage';
import Events from '../components/Events';
import { getUsersEvents, getEventsBySearchBar } from '../actions/eventsActions';





class EventsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: []
        }
    }


    componentWillMount(){
        if(this.props.isAuthenticated){
            //Fetches user's events from event scout api if user is logged in. 
            this.props.getUsersEvents(this.props.currentUser)
        }
        if(this.props.events.length > 0){
            this.setState({
                events: this.props.events
            })
        }  
    }

    componentDidUpdate(prevProps){
        //If a user's event has been deleted then update state with new array.

        if(prevProps.usersEvents.length > this.props.usersEvents.length){
            this.setState({
                events: this.props.usersEvents 
            })
        }else {
            debugger
        }
    }
    

    getSearchTerm = (loc, searchTerm, eventDate) => {
        //Fetches events from eventBrite API based on search term
        this.props.getEventsBySearchBar(loc, searchTerm, eventDate);
    }

    handleViewEventsClick = event => {
        event.preventDefault();
        this.setState({ 
            events: this.props.usersEvents
        })  
    }

    renderViewYourEventsBtn = () => {
        if(this.props.isAuthenticated) {
            return (
                <button id='view-users-events' onClick={event => this.handleViewEventsClick(event)}>View Your Events</button>
            )
        }
    }

    render() {
        return(
            <div className='eventsContainer'> 
                {this.renderViewYourEventsBtn()}
                <EventsSearchPage getSearchTerm={this.getSearchTerm} />
                <Events events={this.state.events} />
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
        eventsHasErrors: state.eventsReducer.eventsHasErrors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getEventsBySearchBar: (loc, searchTerm, eventDate) => {
            return dispatch(getEventsBySearchBar(loc, searchTerm, eventDate))
        },
        getUsersEvents: (user) => {
            return dispatch(getUsersEvents(user))
        } 
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsContainer))