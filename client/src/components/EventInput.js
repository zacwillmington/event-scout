import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';

import { addEvent } from '../actions/eventsActions';

class EventInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            venue_id: '',
            description: '',
            url: '',
            start: '',
            end: '',
            status: '',
            currency: '',
            user_id: this.props.currentUser.id
        }
    }

    componentWillMount() {
        if (!this.props.isAuthenticated && !this.props.isAuthenticating){
            this.props.alert.info("Please Signin to create or edit an event.")
            this.props.history.push('/signin');
        }
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
      }

      handleOnSubmit = event => {
        event.preventDefault();
        this.props.addEvent(this.state);
        this.setState({
            name: '',
            venue_id: '',
            description: '',
            url: '',
            start: '',
            end: '',
            status: '',
            currency: '',
            user_id: ''
        })    
        //After Event has been added, either redirect to user's events or display it below form.
      }

    render() {
        return (
            <div className='EventInput'>
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <label htmlFor='name'>Event Name</label>
                    <input id='name' onChange={event => this.handleOnChange(event)}
                     type='text' 
                     name='name' 
                     value={this.state.name}/>
                    <br></br>
                    <input id='user_id'
                     type='hidden' 
                     name='user_id' 
                     />
                    <label htmlFor='venue_id'>Change to invisible(venue_id)</label>
                    <input id='venue_id' onChange={event => this.handleOnChange(event)}
                     type='text' 
                     name='venue_id' 
                     value={this.state.venue_id}/>
                    <br></br>
                    <label htmlFor='description'>Description</label>
                    <input id='description' onChange={event => this.handleOnChange(event)}
                     type='text' 
                     name='description' 
                     value={this.state.description}/>
                    <br></br>
                    <label htmlFor='url'>Event URL</label>
                    <input id='url' onChange={event => this.handleOnChange(event)}
                     type='text' 
                     name='url' 
                     value={this.state.url}/>
                    <br></br>
                    <label htmlFor='start'>Start Time</label>
                    <input id='start' onChange={event => this.handleOnChange(event)}
                     type='text' 
                     name='start' 
                     value={this.state.start} />
                    <br></br>
                    <label htmlFor='end'>End Time</label>
                    <input id='end' onChange={event => this.handleOnChange(event)}
                     type='text' 
                     name='end' 
                     value={this.state.end}/>
                    <br></br>
                    <label htmlFor='status'>Event Status</label>
                    <input id='status' onChange={event => this.handleOnChange(event)}
                     type='text' 
                     name='status' 
                     value={this.state.status}/>
                    <br></br>
                    <label htmlFor='currency'>Currency</label>
                    <input id='currency' onChange={event => this.handleOnChange(event)}
                     type='text' 
                     name='currency' 
                     value={this.state.currency}/>
                    <br></br>
                    <input type='submit' value='Create Event'/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.authReducer.currentUser,
        isAuthenticated: state.authReducer.isAuthenticated,
        isAuthenticating: state.authReducer.isAuthenticating
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addEvent: eventData => {
            dispatch(addEvent(eventData))
        }
    }
}

export default withAlert(withRouter(connect(mapStateToProps, mapDispatchToProps)(EventInput)))