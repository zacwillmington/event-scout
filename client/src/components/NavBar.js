import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/events'>Events</NavLink>
            <NavLink to='/account'>Account</NavLink>
            <NavLink to='/logout'>Logout</NavLink>
        </div>
    )
}

export default NavBar