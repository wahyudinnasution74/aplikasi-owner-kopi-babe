import axios from "axios";
import config from "../app.config";

export default class UserService {
  login(payload) {
    return axios
      .post(config.extra.apiUrl + "/auth/login", payload)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }
}
