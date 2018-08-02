import api from "../api";
import * as ACTION from "./types";

export function login(userInfo) {
  return function(dispatch) {
    return api
      .login()
      .then(data => {
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
            type: ACTION.LOGIN_ERROR,
            payload: { status: "404", message: "No record found!" }
          });
        }
      })
      .catch(err => {
        //dispatch({ type: ACTION.LOGIN_ERROR, payload: err });
        console.log(err);
      });
  };
}
