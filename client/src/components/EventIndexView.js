import React, { Component } from 'react';
import HeartCheckbox from 'react-heart-checkbox';
import { removeEvent, addEvent } from '../actions/eventsActions';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { withAlert } from 'react-alert';
import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';


// const Bounce = styled.button`animation: 2s ${keyframes`${bounce}`} infinite`;



class EventIndexView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.id,
            name: this.props.name,
            venue_id: this.props.venue_id,
            logo: this.props.logo,
            description: this.props.description,
            url: this.props.url,
            start: this.props.start,
            end: this.props.end,
            status: this.props.status,
            currency: this.props.currency,
            checked: this.props.checked
        }
    }

    truncate = (description) => {
        if (description){
            return (
                description.slice(0, 200) + '...'
            )
        }
    }


    viewEvent = () => {
        this.props.history.push({
            pathname: `/events/${this.props.id}`, 
            state: { currentEvent: this.state } 
        })
    } 

    render() {
        return (
            <div id={this.state.id} className='event-index'>
                <h1>{this.state.name}</h1>
                <div className='event-index-main-content'>
                    <img src={this.state.logo} alt='event-logo'/>

                    <div className='index-view-description'><p>{this.truncate(this.props.description)}</p></div>
                </div> 
                <button className='event-index-view-event-btn' onClick={event => this.viewEvent()}>View Event</button>
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
        isAuthenticated: state.authReducer.isAuthenticated
    }
}

export default withAlert(withRouter(connect(mapStateToProps, mapDispatchToProps)(EventIndexView)));