import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventIndexView from './EventIndexView';

class Events extends Component {
    constructor(props){
        super(props);
    }

    renderEventsFromEventBrite = () => { 
        const events = this.props.events;
        if ( !this.props.eventsAreLoading && events){  
            return  events.map(event => {
                let url = event.logo !== null ? event.logo.url : ''
                return <EventIndexView
                key={event.id}
                id={event.id}
                name={event.name.text} 
                description={event.description.text}
                timezoneStart={event.start.timezone} 
                start={event.start.local}
                timezoneEnd={event.end.timezone} 
                end={event.end.local}
                logo={url}
                url={event.url} 
                shareable={event.shareable} 
                 />
            })
        }

    }

    renderEventsFromEventScoutAPI() {
        const events = this.props.events;
        if ( !this.props.eventsAreLoading && events){  
            return  events.map(event => {
                let url = event.logo !== null ? event.logo.url : ''
                return <EventIndexView 
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

    checkPropsEventsEmpty(){
        if(this.props.events.length > 0){
            if(this.props.events[0].name.text === undefined ){
               return this.renderEventsFromEventScoutAPI()
            } else {    
               return this.renderEventsFromEventBrite()
            }
        }
    }


    render() {
        return (
            <div>
                <React.Fragment>
                   { this.checkPropsEventsEmpty() }
                </React.Fragment>
            </div>
        )
    }
}


export default Events;