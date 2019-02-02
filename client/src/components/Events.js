import React, { Component } from 'react';
import EventComponent from './EventComponent';
import { connect } from 'react-redux';

class Events extends Component {

    renderEvents = () => {
        const events = this.props.events;
        if ( !this.props.eventsAreLoading && events){  
            return  events.map(event => {
                let url = event.logo != null ? event.logo.url : ''
                return <EventComponent 
                key={event.id} 
                name={event.name.text} 
                description={event.description.text}
                timezoneStart={event.start.timezone} 
                start={event.start.local}
                timezoneEnd={event.end.timezone} 
                end={event.end.local}
                logo={url}
                url={event.url} 
                shareable={event.shareable} 
                venueId={event.venueId}/>
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