import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router-dom";


import { getEvents } from '../actions/eventsActions';
import EventsSearchPage from '../components/EventsSearchPage';
import Events from '../components/Events';



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
                <EventsSearchPage getSearchTerm={this.getSearchTerm} />
                 {/* <Switch>
                    <Route exact path='/events' component={Events} />
                    <Route path='users/:id/events/:id' component={EventComponent} />
                    <Route path='users/:id/events' component={Events} />
                     <Route path='events/:id' component={EventComponent}/>
                </Switch> */}
                <Events events={this.props.events} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedin: state.usersReducer.isLoggedin,
        eventsAreLoading: state.eventsReducer.eventsAreLoading,
        events: state.eventsReducer.events,
        eventsHasErrors: state.eventsReducer.eventsHasErrors

    }
}

const mapDispatchToProps = dispatch => {
    return {
        getEvents: (searchTerm) => {
            return dispatch(getEvents(searchTerm))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsContainer))