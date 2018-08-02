import * as ACTION from "../actions/types";
import stateInit from "./initialState";

const ErrorReducer = (state = stateInit.error, action) => {
  switch (action.type) {
    case ACTION.LOGIN_ERROR:
      return Object.assign({}, action.payload);
  }
  return state;
};

export default ErrorReducer;
