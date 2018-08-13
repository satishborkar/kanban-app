import React from 'react';
import { isLogged } from '../helpers/lib';

const Footer = ({ hidden }) => {
    if (hidden || !isLogged()) {
        return null
    }
    return (
        <div className="container-fluid">
            footer
        </div>
    );
};

export default Footer;