import React from 'react';
import { NavLink } from 'react-router-dom';

export default (
    <ul className="nav navbar-nav pull-right">
        < li >
            <NavLink exact to="/dashboard">Dashboard</NavLink>
        </li >
        <li>
            <NavLink to="/teams" activeClassName="active">Teams</NavLink>
        </li>
        <li>
            <NavLink to="/projects" activeClassName="active">Projects</NavLink>
        </li>
        <li>
            <NavLink to="/profile" activeClassName="active">Profile</NavLink>
        </li>

    </ul >
);