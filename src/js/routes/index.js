import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';
import history from '../helpers/history';

import Login from '../containers/Login';
import Home from '../containers/Home';
import Teams from '../containers/Teams';
import Projects from '../containers/Projects';
import Profile from '../containers/Profile';


export default (
    <Switch history={history}>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        {/* <Route path="/dashboard" component={Home} />
        <Route path="/teams" component={Teams} />
        <Route path="/projects" component={Projects} />
        <Route path="/profile" component={Profile} /> */}
        <PrivateRoute path="/dashboard" component={Home} />
        <PrivateRoute path="/teams" component={Teams} />
        <PrivateRoute path="/projects" component={Projects} />
        <PrivateRoute path="/profile" component={Profile} />
    </Switch>
)