import { userConfig } from '../helpers/config';


export function isLogged() {
  if (
    localStorage.getItem("user") &&
    localStorage.getItem("user") === userConfig.user &&
    localStorage.getItem("token") &&
    localStorage.getItem("token") === userConfig.token
  ) {
    return true;
  }
  return false
}

