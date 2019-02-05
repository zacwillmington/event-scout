import React, { Component } from 'react';

class EventsSearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            locationAdress: null
        }
    }

    handleOnChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.getSearchTerm(this.state.searchTerm);
        this.setState({
            searchTerm: ''
        })
    }

    render() {
        return (
            <div className='eventsInputPage'>
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <input id='searchTerm' onChange={event => this.handleOnChange(event)}type='text' name='searchTerm' value={this.state.searchTerm} placeholder='Event Type'/>

                    <input id='location-searchTerm' onChange={event => this.handleOnChange(event)}type='text' name='searchTerm' value={this.state.searchTerm} placeholder='Location'/>
                    
                    <input id='date-searchTerm' onChange={event => this.handleOnChange(event)}type='text' name='searchTerm' value={this.state.searchTerm} placeholder='Date'/>

                    <input id='search-events-btn' type='submit' value='SEARCH'/>
                </form>
            </div>
        )
    }
}

export default EventsSearchPage