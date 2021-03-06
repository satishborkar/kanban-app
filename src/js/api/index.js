import { BASE_URL } from "../constants";

class apiService {
  static login() {
    return fetch(BASE_URL + "/users")
      .then(res => {
        return res.json();
      })
      .catch(err => {
        return err;
      });
  }

  static getToken() {
    return fetch(BASE_URL + "/token")
      .then(res => {
        return res.json;
      })
      .catch(err => {
        return err;
      });
  }
}

export default apiService;
