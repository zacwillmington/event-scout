import React, { Component } from 'react'; 
import { connect } from 'react-redux';

import MusicEvents from '../components/MusicEvents';
import BusinessEvents from '../components/BusinessEvents';
import FoodAndDrinksEvents from '../components/FoodAndDrinksEvents';
import { register } from '../serviceWorker';
import { getEvents } from '../actions/eventsActions';
import { withRouter } from 'react-router-dom';



class EventCategoriesContainer extends Component {
    constructor() {
        super();
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        // debugger
    }

    componentDidUpdate(){
        if(this.state.events.length > 0){
            this.props.history.push('/events');
        }
    }

    handleDisplayEvents = event => {
        this.props.getEvents(event.target.innerText, this.props.usersLocation)
        this.setState({
            events: this.props.events
        })
    }

    render() {
        return (
            <div className='categories-events-container'>
                <h1>Categories</h1>
                    <div className='events-components'>
                        <MusicEvents
                        handleDisplayEvents={this.handleDisplayEvents}
                        />

                        <FoodAndDrinksEvents 
                        handleDisplayEvents={this.handleDisplayEvents}
                        />
                        
                        <BusinessEvents 
                        handleDisplayEvents={this.handleDisplayEvents}
                        />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        events: state.eventsReducer.events,
        usersLocation: state.usersReducer.usersLocation,
        locationSet: state.usersReducer.locationSet
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getEvents: (searchTerm, loc) => {
            dispatch(getEvents(searchTerm, loc))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventCategoriesContainer));