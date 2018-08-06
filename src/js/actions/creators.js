import api from "../api";
import * as ACTION from "./types";

export function login(userInfo) {
  return function(dispatch) {
    return api.login().then(data => {
      if (Array.isArray(data)) {
        const userDetails = data.filter(item => {
          return (
            item.username === userInfo.username &&
            item.password === userInfo.password
          );
        });
        if (userDetails[0] != undefined) {
          dispatch({ type: ACTION.LOGIN, payload: userDetails });
        } else {
          dispatch({
            type: ACTION.ALERT_ERROR,
            payload: {
              status: "404",
              message: "No record found!",
              type: "error"
            }
          });
        }
      } else {
        dispatch({
          type: ACTION.ALERT_ERROR,
          payload: {
            status: "502",
            message: "API service is unavailable..",
            type: "error"
          }
        });
      }
    });
  };
}

export function clearAlert() {
  return function(dispatch) {
    dispatch({ type: ACTION.ALERT_CLEAR });
  };
}
