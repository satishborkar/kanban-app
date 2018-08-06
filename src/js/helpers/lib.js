import appConfig from "../helpers/config";

export function isLogged() {
  if (
    localStorage.getItem("user") &&
    //localStorage.getItem("user") === appConfig.user &&
    localStorage.getItem("token") 
     //&& localStorage.getItem("token") === appConfig.token
  ) {
    return true;
  } 
}

export function logOutLocalUser() {
  console.log("logging out user..");
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}
