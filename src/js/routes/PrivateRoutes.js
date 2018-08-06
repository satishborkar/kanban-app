import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogged } from "../helpers/lib";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        (localStorage.getItem("user") != undefined) ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
