import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogged } from '../helpers/lib';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isLoggedUser = isLogged();
    return <Route {...rest} render={props => (
        isLoggedUser ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />;
}

export default PrivateRoute;