import React, { Component } from 'react';
import DateTime  from 'react-datetime';
import { withAlert } from 'react-alert';
import moment from 'moment/moment.js';

class EventsSearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            locationAddress: '',
            eventDate: 'Date'
        }
    }

    componentDidMount(){
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

    validateInputs = inputData => {
       if(inputData.eventDate !== 'Date' && inputData.searchTerm !== '' && inputData.locationAddress !== ''){
            return true
        }else {
            return false
        }
    }

    formatString = (string) => {
        return string.replace(/\s/g, '');
    }

    handleOnSubmit = event => {
        event.preventDefault();
        if(this.validateInputs(this.state)) {
            //Parsed to suit Eventbrite API
            const dateTimeParsed = moment(this.state.eventDate).format("YYYY-MM-DDThh:mm:ss");
            const searchTermFormatted = this.formatString(this.state.searchTerm);

            const locationAddressFormatted = this.formatString(this.state.locationAddress);

            this.props.getSearchTerm(locationAddressFormatted, searchTermFormatted, dateTimeParsed);
        } else{
            this.props.alert.error("Please fill in all search options.")
        }
        this.setState({
            searchTerm: '',
            locationAddress: '',
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
            
                    <input id='search-events-btn' type='submit' value='SEARCH'/>
                </form>
            </div>
        )
    }
}

export default withAlert(EventsSearchPage)