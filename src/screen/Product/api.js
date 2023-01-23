import axios from "axios";
import appConfig from "../../app.config";

export function getProducts() {
  return axios
    .get(appConfig.extra.apiUrl + "/product/list")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
}

export function deleteProducts(id) {
  return axios
    .delete(appConfig.extra.apiUrl + "/product/delete?productId=" + id)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
}

export function editProduct(id, payload) {
  return axios
    .put(appConfig.extra.apiUrl + "/product/update?productId=" + id, {
      newData: { ...payload },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
}

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

export function createProduct(payload) {
  return axios
    .post(appConfig.extra.apiUrl + "/product/create", { ...payload })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
}
