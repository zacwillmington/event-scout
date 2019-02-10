import React, { Component } from 'react';
import EventComponent from './EventComponent';
import { connect } from 'react-redux';

class Events extends Component {

    renderEventsFromEventBrite = () => {
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
                venueId={event.venueId}
                checked={false} />
            })
        }

    }

    renderEventsFromEventScoutAPI() {
        const events = this.props.events;
        if ( !this.props.eventsAreLoading && events){  
            return  events.map(event => {
                let url = event.logo !== null ? event.logo.url : ''
                return <EventComponent 
                id={event.id}
                key={event.id} 
                name={event.name} 
                description={event.description}
                start={event.start}
                end={event.end}
                logo={event.logo}
                url={event.url} 
                checked={true} />
            })
        }
    }

    render() {
        return (
            <div>
                <React.Fragment>
                    {this.props.events[0].name.text === undefined ? this.renderEventsFromEventScoutAPI() : this.renderEventsFromEventBrite()}
                </React.Fragment>
            </div>
        )
    }
}


// const mapStateToProps = state => {
//     return {
//         events: state.eventsReducer.events
//     }
// }


export default connect(null)(Events)