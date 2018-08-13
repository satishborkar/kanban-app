import { combineReducers } from "redux";
import LoginReducer from "./login";
import AlertReducer from "./alert";

const rootReducer = combineReducers({
  user: LoginReducer,
  alert: AlertReducer
});

export default rootReducer;
