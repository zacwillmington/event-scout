import React from 'react';

const MusicEvents = props => {
    return (
        <div className='music-events-container'>
            <a onClick={event => props.handleDisplayEvents(event)}>
                <h1>Music</h1>
            </a>
        </div>
    );
}
    
export default MusicEvents