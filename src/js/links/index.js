import React from 'react';
import { Link } from 'react-router-dom';

export default (
    <ul className="nav navbar-nav pull-right">
        < li >
            <Link to="/dashboard">Dashboard</Link>
        </li >
        <li>
            <Link to="/teams">Teams</Link>
        </li>
        <li>
            <Link to="/projects">Projects</Link>
        </li>
        <li>
            <Link to="/profile">Profile</Link>
        </li>
        
    </ul >
);