import React, { Component } from 'react';

class EventsSearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
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
                    <label htmlFor='searchTerm'>Search Events</label>
                    <input id='searchTerm' onChange={event => this.handleOnChange(event)}type='text' name='searchTerm' value={this.state.searchTerm}/>
                    <input className='btn btn-primary' type='submit'/>
                </form>
            </div>
        )
    }
}

export default EventsSearchPage