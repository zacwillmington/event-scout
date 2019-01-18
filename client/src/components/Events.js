import React, { Component } from 'react';
import EventComponent from './EventComponent';


class Events extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Events
                <EventComponent />
            </div>
        )
    }
}

export default Events