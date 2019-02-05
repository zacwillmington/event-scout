import React, { Component } from 'react';

class BusinessEvents extends Component {
     
    render() {
        return (
            <div className='business-events-container'>
                <a onClick={event => this.props.handleDisplayEvents(event)}>
                    <h1>Business</h1>
                </a>
            </div>
        );
    }
}

export default BusinessEvents;