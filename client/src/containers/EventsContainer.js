import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";


import { getEvents } from '../actions/eventsActions';
import EventsSearchPage from '../components/EventsSearchPage';
import Events from '../components/Events';
import { getUsersEvents } from '../actions/eventsActions';
import EventCategoriesContainer from './EventCategoriesContainer';
import { setUsersLocation } from '../actions/userActions';
import usersReducer from '../reducers/usersReducer';


class EventsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: []
        }
    }


    getSearchTerm = (searchTerm) => {
        //Fetches events from eventBrite API based on search term
        this.props.getEvents(searchTerm, this.props.usersLocation);
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

    handleViewEventsClick = event => {
        event.preventDefault();
        this.setState({ 
            events: this.props.usersEvents
        })  
    }

    renderViewYourEventsBtn = () => {
        if(this.props.isAuthenticated) {
            return (
                <button onClick={event => this.handleViewEventsClick(event)}>View Your Events</button>
            )
        }
    }

    render() {
        return(
            <div className='eventsContainer'> 
                {this.renderViewYourEventsBtn()}
                <EventsSearchPage getSearchTerm={this.getSearchTerm} />
                <EventCategoriesContainer />    
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
        getEvents: (searchTerm) => {
            return dispatch(getEvents(searchTerm))
        },
        getUsersEvents: (user) => {
            return dispatch(getUsersEvents(user))
        } 
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsContainer))