import * as ACTION from "../actions/types";
import stateInit from "./initialState";

const ErrorReducer = (state = stateInit.alert, action) => {
  switch (action.type) {
    case ACTION.ALERT_ERROR:
      return Object.assign({}, action.payload);
    case ACTION.ALERT_CLEAR:
      return Object.assign({}, {});
  }
  return state;
};

export default ErrorReducer;
