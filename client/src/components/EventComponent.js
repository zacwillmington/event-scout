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
        const {
            name,
            id,
            logo,
            start,
            end,
            description,
            url,
            checked
        } = this.state;

        return (
            <div id={id} className='event'>
                <h1>{name}</h1>
                <div className='event-content'>
                <img src={logo} alt='event-logo'/>
                <HeartCheckbox checked={checked} onClick={event => this.handleOnClickAddAndDelete(event)} />
                    <ul>
                        <span>Starts</span>
                        <li>{this.parseTimeDate(start)}</li>
                        <span>Ends</span>
                        <li>{this.parseTimeDate(end)}</li>
                    </ul>
                </div>
                <a className='event-page-link' href={url}><img src="https://img.icons8.com/ultraviolet/26/000000/link.png"></img></a>
                <div className='content-description'>
                    <h3>Description</h3>
                    <p>{description}</p>
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

export default withAlert(
    withRouter(
        connect(mapStateToProps, mapDispatchToProps)(EventComponent)
    )
);
