import React, { Component } from 'react';

// Can this component be stateless?
class EventComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.event.url}
            </div>
        )
    }
}

export default EventComponent