import { combineReducers } from "redux";
import LoginReducer from "./login";
import AlertReducer from "./alert";
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  user: LoginReducer,
  alert: AlertReducer,
  router: routerReducer
});

export default rootReducer;
