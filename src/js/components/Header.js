import React from 'react';
import Links from '../links';
import { isLogged } from '../helpers/lib';

const Header = ({ title, hidden }) => {
    if (hidden || !isLogged()) {
        return null
    }
    return (
        <div>
            <h1>{title}</h1>
            {Links}
        </div>
    );
};

export default Header;