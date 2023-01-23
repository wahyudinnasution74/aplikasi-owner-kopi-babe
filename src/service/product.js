import axios from "axios";
import config from "../app.config";

export default class SupplierService {
  list() {
    return axios
      .get(config.extra.apiUrl + "/supplier/list")
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }
}
