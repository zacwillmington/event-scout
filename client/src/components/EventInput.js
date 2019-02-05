import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';
import DateTime from 'react-datetime';
import ImageUploader from 'react-images-upload';

import { addEvent } from '../actions/eventsActions';
import { displayErrors } from './Errors';

class EventInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            logo: '',
            venue_id: '',
            description: '',
            url: '',
            start: new Date(),
            end: new Date(),
            status: '',
            currency: '',
            user_id: this.props.currentUser.id,
            alerted: false
        }
    }

    componentWillMount() {
        if (!this.props.isAuthenticated && !this.props.isAuthenticating){
            this.props.alert.info("Please Signin to create or edit an event.")
            this.props.history.push('/signin');
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.eventsHasErrors && !this.state.alerted) {
            displayErrors(this.props.eventErrors, this.props.alert)
            this.setState({ alerted: true})
        } else if(this.props.eventSuccess && !this.state.alerted) {
            const userId = this.props.currentUser.id;
            const eventId = this.props.currentEvent.id;
            this.setState({ alerted: true })
            this.props.history.push({
                pathname: `/users/${userId}/events/${eventId}`,
                state: this.props.currentEvent
            })
            this.props.alert.success("Event Added!");
        }
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
      }

      handleOnChangeDateTimeStart = event => {
        this.setState({
            start: event._d
        })
      }

      handleOnChangeDateTimeEnd = event => {
        this.setState({
            end: event._d
        })
      }

      onDrop = picture => {
          debugger
          this.setState({ logo: picture[0].name })
      }

      handleOnSubmit = event => {
        event.preventDefault();
        this.props.addEvent(this.state);
        this.setState({
            name: '',
            venue_id: '',
            logo: '',
            description: '',
            url: '',
            start: new Date(),
            end: new Date(),
            status: '',
            currency: '',
            user_id: this.props.currentUser.id,
            alerted: false
        })    
      }

    render() {
        return (
            <div className='event-input'>
            <div id='create-event-input-title-div'><h1>CREATE YOUR EVENT</h1></div>
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <section className='event-input-section-1'>
                        <div className='event-input-form-section' id='event-name'>
                            <label htmlFor='event-input-name'>Event Name</label>
                            <input id='event-input-name' onChange={event => this.handleOnChange(event)}
                            type='text' 
                            name='name' 
                            value={this.state.name}/>
                        </div>
                        <div className='event-input-form-section'>
                            <label htmlFor='event-input-status'>Event Status</label>
                            <input id='event-input-status' onChange={event => this.handleOnChange(event)}
                            type='text' 
                            name='status' 
                            value={this.state.status}/>
                        </div>   
                 </section>

                    <section className='event-input-section-2'>
                        <div className='event-input-form-section'>
                            <label htmlFor='event-input-currency'>Currency</label>
                            <input id='event-input-currency' onChange={event => this.handleOnChange(event)}
                            type='text' 
                            name='currency' 
                            value={this.state.currency}/>
                        </div>
                        <div className='event-input-form-section'>
                            <label htmlFor='event-input-url'>Event URL</label>
                            <input id='event-input-url' onChange={event => this.handleOnChange(event)}
                            type='text' 
                            name='url' 
                            value={this.state.url}/>
                        </div>
                    </section>

                    <ImageUploader
                        withIcon={true}
                        buttonText='Choose images'
                        onChange={event => this.onDrop(event)}
                        imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
                    />
                    <br></br>
                    <input id='user_id'
                     type='hidden' 
                     name='user_id' 
                     />
                    <label htmlFor='event-input-description'>Description</label>
                    <textarea id='event-input-description' onChange={event => this.handleOnChange(event)}
                     type='text-area' 
                     name='description' 
                     value={this.state.description}/>
                    <br></br>
                    <div className='event-dateTime'>
                        <DateTime value={this.props.start} onChange={event => this.handleOnChangeDateTimeStart(event)}/>
                        <DateTime value={this.props.end} onChange={event => this.handleOnChangeDateTimeEnd(event)}/>
                    </div>
                    <input id='create-event-btn' type='submit' value='Create Event'/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.authReducer.currentUser,
        isAuthenticated: state.authReducer.isAuthenticated,
        isAuthenticating: state.authReducer.isAuthenticating,

        eventsHasErrors: state.eventsReducer.eventsHasErrors,
        eventErrors: state.eventsReducer.errors,
        eventSuccess: state.eventsReducer.eventSuccess,
        currentEvent: state.eventsReducer.currentEvent
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