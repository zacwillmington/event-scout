import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from './actions/eventsActions';

class EventsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: '',
            events: []
        }
    }

    componentDidMount() {
        
    }

    renderEvents = () => {
        // debugger;
    }

    render() {
        return(
            <div className='eventsContainer'>
                EventsContainer 
                { this.renderEvents() }
            </div>
        )
    }
}

const mapStateToProps = state => {
    debugger;
    return {
        eventsIsLoading: state.eventsIsLoading,
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