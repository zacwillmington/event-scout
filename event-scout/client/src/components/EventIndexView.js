import React, { Component } from 'react';
import HeartCheckbox from 'react-heart-checkbox';
import { removeEvent, addEvent } from '../actions/eventsActions';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { withAlert } from 'react-alert';


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

    componentDidMount(){
        
    }

    truncate = (description) => {
        if (description){
            return (
                description.slice(0, 200) + '...'
            )
        }
    }

    // handleOnClick = (event) => {
    //     //User can save a liked event if loggedin.
    //     if(this.props.isAuthenticated){
    //         if(this.state.checked){
    //             this.props.removeEvent(this.state, this.props.currentUser.id)
    //         } else{
    //             this.props.addEvent(this.state, this.props.currentUser.id)
    //         }
    //         this.setState({
    //             checked: !this.state.checked 
    //         })
    //     } else{
    //         this.props.alert.info("Create an account to save events.");
    //     }
    // }

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
                    {/* <HeartCheckbox checked={this.state.checked} onClick={event => this.handleOnClick(event)} /> */}
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