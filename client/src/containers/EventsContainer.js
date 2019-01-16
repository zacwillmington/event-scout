import React, { Component } from 'react';

class EventsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        
    }

    renderEvents = events => {
        debugger;
    }

    render() {
        return(
            <div className='eventsContainer'>
                EventsContainer 
                { this.renderEvents() }
            </div>
        )
    }
}

export default connect()(EventsContainer)