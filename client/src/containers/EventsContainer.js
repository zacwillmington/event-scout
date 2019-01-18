import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router-dom";


import { getEvents } from '../actions/eventsActions';
import EventsSearchPage from '../components/EventsSearchPage';
import Events from '../components/Events';
import EventComponent from '../components/EventComponent';



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
                EventsContainer 
                <EventsSearchPage getSearchTerm={this.getSearchTerm} />
                <Switch>
                    <Route exact path='/events' component={Events} />
                    <Route path='users/:id/events/:id' component={EventComponent} />
                    <Route path='users/:id/events' component={Events} /> {/*Exact path maybe ^^*/}
                     {/*Exact path maybe ^^*/}
                     <Route path='events/:id' component={EventComponent}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    debugger
    return {
        isLoggedin: state.isLoggedin,
        eventsAreLoading: state.eventsAreLoading,
        events: state.events,
        eventsHasErrors: state.eventsHasErrors

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