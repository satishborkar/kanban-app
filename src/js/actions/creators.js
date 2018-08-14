import api from "../api";
import * as ACTION from "./types";
import { userConfig } from '../helpers/config';

export function login(userInfo) {
  return function (dispatch) {
    return api.login().then(data => {
      if (Array.isArray(data)) {
        const userDetails = data.filter(item => {
          return (
            item.username === userInfo.username &&
            item.password === userInfo.password
          );
        });
        if (userDetails[0] != undefined) {
          const loggedUser = userDetails[0];
          userConfig.user = loggedUser.firstName.toLowerCase();
          userConfig.token = "A4C4VEY61HAH06OIZL54TTS1D";

          if (localStorage) {
            localStorage.setItem("userinfo", JSON.stringify(loggedUser));
            localStorage.setItem("user", loggedUser.firstName.toLowerCase());
            localStorage.setItem("token", "A4C4VEY61HAH06OIZL54TTS1D");
          }

          dispatch({ type: ACTION.LOGIN, payload: userDetails });
          dispatch({ type: ACTION.LOGIN_SUCCESS, payload: { isLogin: true } });

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
  return function (dispatch) {
    dispatch({ type: ACTION.ALERT_CLEAR });
  };
}

export function logOut() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  return function (dispatch) {
    dispatch({ type: ACTION.LOGOUT, payload: { isLogin: false, data: [] } });
  };
}
