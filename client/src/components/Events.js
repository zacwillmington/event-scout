import React, { Component } from 'react';
import EventComponent from './EventComponent';
import { connect } from 'react-redux';

class Events extends Component {
    constructor(props) {
        super(props);
    }

    renderEvents = () => {
        // debugger
        const events = this.props.events;
        if ( !this.props.eventsAreLoading && events){        
            return  events.map(event => {
                return <EventComponent key={event.id} event={event}/>
            })
        }

    }

    render() {
        return (
            <div>
                <React.Fragment>
                    {this.renderEvents()}
                </React.Fragment>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        events: state.eventsReducer.events
    }
}


export default connect(mapStateToProps)(Events)