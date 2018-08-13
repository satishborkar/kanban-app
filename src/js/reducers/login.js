import * as ACTION from '../actions/types';
import stateInit from './initialState';

const LoginReducer = (state = stateInit.user, action) => {
    switch (action.type) {
        case ACTION.LOGIN:
            return { ...state, data: [...action.payload] };
        case ACTION.LOGIN_SUCCESS:
            return { ...state, ...action.payload };
        case ACTION.LOGOUT:
            return { ...state, ...action.payload };
    }
    return state;
};

export default LoginReducer;

