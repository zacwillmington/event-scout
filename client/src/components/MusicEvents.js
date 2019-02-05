import React, { Component } from 'react';

class MusicEvents extends Component {

    render() {
        return (
            <div className='music-events-container'>
                <a onClick={event => this.props.handleDisplayEvents(event)}>
                    <h1>Music</h1>
                </a>
            </div>
        );
    }
}
    
export default MusicEvents