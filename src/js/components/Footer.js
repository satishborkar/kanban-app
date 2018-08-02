import React from 'react';
import { isLogged } from '../helpers/lib';

const Footer = ({ hidden }) => {
    if (hidden || !isLogged()) {
        return null
    }
    return (
        <div>
            footer
        </div>
    );
};

export default Footer;