import { combineReducers } from "redux";
import LoginReducer from "./login";
import ErrorReducer from "./err";

const rootReducer = combineReducers({
  user: LoginReducer,
  error: ErrorReducer
});

export default rootReducer;
