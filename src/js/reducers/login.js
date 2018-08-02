import * as ACTION from '../actions/types';
import stateInit from './initialState';

const LoginReducer = (state = stateInit.user, action) => {
    switch (action.type) {
        case ACTION.LOGIN:
            return [...action.payload];
    }

    return state;
};

export default LoginReducer;

