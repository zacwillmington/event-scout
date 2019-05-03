import React, { Component } from 'react';
import HeartCheckbox from 'react-heart-checkbox';
import { removeEvent, addEvent, getEvents } from '../actions/eventsActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment/moment.js';
import { withAlert } from 'react-alert';


class EventComponent extends Component {
    constructor(props) {
        super(props)
        this.state = this.props.location.state.currentEvent
    }

    componentDidMount() {
        if(this.isUsersEvent(this.props.location.state.currentEvent)){
            this.setState({
                checked: true
            })
        }
    }

    handleOnClickAddAndDelete = (event) => {
        //User can save a liked event if logged in.
        if(this.props.isAuthenticated){
            if(this.state.checked){
                this.props.removeEvent(this.state, this.props.currentUser.id)
            } else{
                this.props.addEvent(this.state, this.props.currentUser.id)
            }
            this.setState({
                checked: !this.state.checked 
            })
        } else{
                this.props.alert.info("Create an account to save events.");
        }
    }

    parseTimeDate = (time) => {
        return moment(time).format('MMMM Do YYYY @ h:mm a');
    }

    isUsersEvent = (currentEvent) => {
        const currentEventId = Number(currentEvent.id);
         return this.props.usersEvents.some(evnt => evnt.id === currentEventId);
    }

    render() {
        return (
            <div id={this.state.id} className='event'>
                <h1>{this.state.name}</h1>
                <div className='event-content'>
                <img src={this.state.logo} alt='event-logo'/>
                <HeartCheckbox checked={this.state.checked} onClick={event => this.handleOnClickAddAndDelete(event)} />
                    <ul>
                        <span>Starts</span>
                        <li>{this.parseTimeDate(this.state.start)}</li>
                        <span>Ends</span>
                        <li>{this.parseTimeDate(this.state.end)}</li>
                    </ul>
                </div>
                <a className='event-page-link' href={this.state.url}><img src="https://img.icons8.com/ultraviolet/26/000000/link.png"></img></a>
                <div className='content-description'>
                    <h3>Description</h3>
                    <p>{this.state.description}</p>
                </div>
            </div>
        )
    }   
}

const mapDispatchToProps = dispatch => {
    return {
        removeEvent: (eventData, userId) => {
            dispatch(removeEvent(eventData, userId))
        },
        addEvent: (eventData, userId) => {
            dispatch(addEvent(eventData, userId))
        }
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.authReducer.currentUser,
        isAuthenticated: state.authReducer.isAuthenticated,
        usersEvents: state.eventsReducer.usersEvents
    }
}

export default withAlert(withRouter(connect(mapStateToProps, mapDispatchToProps)(EventComponent)))

//Event date receieved per event
// capacity: null
// capacity_is_custom: null
// category_id: "103"
// changed: "2019-01-09T16:17:54Z"
// created: "2018-06-12T11:10:31Z"
// currency: "GBP"
// description: {text: "An introduction on devising music sessions for stu…can be found at www.kent-music.com/privacy-policy", html: "<P>An introduction on devising music sessions for …nt-music.com/privacy-policy</A></SPAN></SPAN></P>"}
// end: {timezone: "Europe/London", local: "2019-01-24T18:30:00", utc: "2019-01-24T18:30:00Z"}
// format_id: "9"
// hide_end_date: false
// hide_start_date: false
// id: "46973208130"
// is_externally_ticketed: false
// is_free: false
// is_locked: false
// is_reserved_seating: false
// is_series: false
// is_series_parent: false
// listed: true
// locale: "en_GB"
// logo: {crop_mask: {…}, original: {…}, id: "45998785", url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%…53%2C580%2C290&s=e8ef9a4dcd0f1b8df02206509c471cfa", aspect_ratio: "2", …}
// logo_id: "45998785"
// name: {text: "Music and Autism", html: "Music and Autism"}
// online_event: false
// organization_id: "136284258300"
// organizer_id: "7963846409"
// privacy_setting: "unlocked"
// resource_uri: "https://www.eventbriteapi.com/v3/events/46973208130/"
// shareable: true
// show_colors_in_seatmap_thumbnail: false
// show_pick_a_seat: false
// show_seatmap_thumbnail: false
// source: "create_2.0"
// start: {timezone: "Europe/London", local: "2019-01-24T16:00:00", utc: "2019-01-24T16:00:00Z"}
// status: "live"
// subcategory_id: null
// tx_time_limit: 1200
// url: "https://www.eventbrite.co.uk/e/music-and-autism-tickets-46973208130?aff=ebapi"
// venue_id: "25201755"
// version: "3.0.