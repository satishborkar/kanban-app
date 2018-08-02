import { combineReducers } from 'redux';
import LoginReducer from './login';

const rootReducer = combineReducers({
    user: LoginReducer
    //error: []
});

export default rootReducer;