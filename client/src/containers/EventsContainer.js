import React, { Component } from 'react';

class EventsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: []
        }
    }

    render() {
        return(
            <div className='eventsContainer'>
                EventsContainer 
            </div>
        )
    }
}

export default EventsContainer