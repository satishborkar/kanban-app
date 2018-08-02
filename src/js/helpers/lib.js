import appConfig from '../helpers/config';

export function isLogged() {
    return ((localStorage.getItem('user') && localStorage.getItem('user') === appConfig.user) &&
        (localStorage.getItem('token') && localStorage.getItem('token') === appConfig.token))
};

export function logOutLocalUser() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
};