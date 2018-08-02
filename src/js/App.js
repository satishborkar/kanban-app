import React, { Component } from 'react';
import Routes from './routes';

import { isLogged } from './helpers/lib';

import Header from './components/Header';
import Footer from './components/Footer';


import '../scss/style.scss';


class App extends Component {
    render() {
        if (!isLogged()) {
            return (
                <div>
                    {Routes}
                </div>
            )
        }
        return (
            <div className="app-wrapper">
                <Header title="Welcome to Kanban Dashboard" />
                {Routes}
                <Footer />
            </div>
        )
    }
};

export default App;