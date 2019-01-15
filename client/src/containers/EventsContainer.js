import React, { Component } from 'react';

class EventsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        debugger;
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