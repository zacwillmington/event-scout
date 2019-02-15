import React from 'react';

const BusinessEvents = props => {
    return (
        <div className='business-events-container'>
            <a onClick={event => props.handleDisplayEvents(event)}>
                <h1>Business</h1>
            </a>
        </div>
    );
}

export default BusinessEvents;