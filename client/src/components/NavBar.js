import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { withAlert } from 'react-alert';
import { withRouter } from 'react-router-dom';


class NavBar extends Component {

    handleCreateEventForNontLoggedinUser = () => {
        this.props.alert.info("You Mush have an account before you can create an event.")
        this.props.history.push('/signup');
    }

    renderCreateEventLink = () =>{
       if (this.props.isAuthenticated){
            return (
                <li><NavLink to={`/users/${this.props.currentUser.id}/events/new`}>Create Event
             </NavLink></li>
            )
       } else{
            return (
                <li><NavLink to={''} onClick={() => this.handleCreateEventForNontLoggedinUser()}>
                    Create Event
                </NavLink></li>
            )
       }
    }

    renderAccountLink = () => {
        if(this.props.isAuthenticated){
            return (
                <li><NavLink to='/Account'>Account</NavLink></li>
            )
        }
    }
    renderLogoutLink = () => {
        if(this.props.isAuthenticated){
            return (
                <li><NavLink to='/logout'>Logout</NavLink></li>
            )
        }
    }
    render(){
        return (
            <div className='navBar'>
                <ul className='nav nav-tabs'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/events'>Events</NavLink></li>
                    { this.renderAccountLink() }
                    { this.renderCreateEventLink() }
                    { this.renderLogoutLink() }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.authReducer.currentUser,
        isAuthenticated: state.authReducer.isAuthenticated
    }
}
export default withAlert(withRouter(connect(mapStateToProps)(NavBar)))