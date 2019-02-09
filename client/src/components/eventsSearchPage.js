import React, { Component } from 'react';
import DateTime  from 'react-datetime';

class EventsSearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            locationAddress: null,
            eventDate: 'Date'
        }
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnChangeEventDate = event => {
        this.setState({
            eventDate: event._d
        })
    } 

    handleOnSubmit = event => {
        event.preventDefault();
        // this.props.getSearchTerm(this.state.searchTerm);
        this.setState({
            searchTerm: '',
            locationAddress: null,
            eventDate: ''           
        })
    }

    render() {
        return (
            <div className='eventsInputPage'>
                <form id='events-search-bar' onSubmit={event => this.handleOnSubmit(event)}>

                    <DateTime className='eventDate' value={this.state.eventDate} onChange={event => this.handleOnChangeEventDate(event)}/>

                    <input id='searchTerm' onChange={event => this.handleOnChange(event)}type='text' name='searchTerm' value={this.state.searchTerm} placeholder='Event Type'/>

                    <input id='locationAddress' onChange={event => this.handleOnChange(event)}type='text' name='locationAddress' value={this.state.locationAddress} placeholder='Location'/>
            
                    {/* <br></br> */}
                    <input id='search-events-btn' type='submit' value='SEARCH'/>
                </form>
            </div>
        )
    }
}

export default EventsSearchPage