import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { getEvents } from '../actions/eventsActions';
import EventsSearchPage from '../components/EventsSearchPage';
import Events from '../components/Events';
import Event from '../components/Event';



class EventsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: []
        }
    }


    getSearchTerm = (searchTerm) => {
        this.props.getEvents(searchTerm);
    }


    render() {
        return(
            <div className='eventsContainer'>
                <Switch>
                    <Route exact path='/events' component={Events} />
                    <Route path='events/:id' component={Event}/>
                    <Route path='users/:id/events/:id' component={Event} />
                    <Route path='users/:id/events' component={Events} /> {/*Exact path maybe ^^*/}
                     {/*Exact path maybe ^^*/}
                </Switch>
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