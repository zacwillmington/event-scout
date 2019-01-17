import React, { Component } from 'react';

class EventsSearchPage extends Component {
    constructor(props) {
        super();
        this.state = {
            searchTerm: ''
        }
    }

    render() {
        return (
            <div className='eventsInputPage'>
                <form>
                    <label htmlFor='searchTerm'>Search Events</label>
                    <input id='searchTerm' type='text' name='searchTerm' value={this.state.searchTerm}/>
                    <input className='btn btn-primary' type='submit'/>
                </form>
            </div>
        )
    }
}

export default EventsSearchPage