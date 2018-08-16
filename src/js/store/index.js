import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

const middleWare = [];

middleWare.push(thunk);

const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
});

middleWare.push(loggerMiddleware)

export const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleWare)
));