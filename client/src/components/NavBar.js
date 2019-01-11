import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navBar'>
            <ul className='nav nav-tabs'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/events'>Events</NavLink></li>
                <li><NavLink to='/account'>Account</NavLink></li>
                <li><NavLink to='/logout'>Logout</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar