import axios from "axios";
import appConfig from "../../app.config";

export function getSupplier() {
  return axios
    .get(appConfig.extra.apiUrl + "/supplier/list")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
}

export function editSupplier(id, payload) {
  return axios
    .put(appConfig.extra.apiUrl + "/supplier/update?supplierId=" + id, {
      newData: { ...payload },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
}

export function createSupplier(payload) {
  return axios
    .post(appConfig.extra.apiUrl + "/supplier/create", { ...payload })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
}
