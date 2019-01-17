import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../actions/eventsActions';
import EventsSearchPage from '../components/eventsSearchPage';

class EventsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: []
        }
    }


    getSearchTerm = (searchTerm) => {
        // run dispatch
        this.props.getEvents(searchTerm);
    }


    render() {
        return(
            <div className='eventsContainer'>
                EventsContainer 
                <EventsSearchPage getSearchTerm={this.getSearchTerm} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        eventsAreLoading: state.eventsAreLoading,
        events: state.events

    }
}

const mapDispatchToProps = dispatch => {
    return {
        getEvents: (searchTerm) => {
            return dispatch(getEvents(searchTerm))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)