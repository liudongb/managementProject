import axios from "axios";
import router from "@/router";
import { Message } from "element-ui";

const SERVICEDEFAULT = axios.create({
  timeout: 60000
});
SERVICEDEFAULT.interceptors.request.use(
  config => {
    let authToken = sessionStorage.getItem("access_token");
    if (authToken != null) {
      config.headers.Authorization = `Bearer ` + authToken;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
SERVICEDEFAULT.interceptors.response.use(
  response => {
    if (response.data.code === "401" && !response.data.success) {
      Message.error(response.response.data.error);
      router.push({ path: "/login" });
      sessionStorage.clear();
    }
    return response.data;
  },
  error => {
    if (error && error.response) {
      if (error.response.data.code === "401") {
        Message.error(error.response.data.error);
        router.push({ path: "/login" });
      }
    }
    return Promise.reject(error);
  }
);

SERVICEDEFAULT.all = axios.all; // all方法没有挂载到 axios 实例对象中

function UploadFile(url, data) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data;charset=UTF-8"
        }
      })
      .then(
        res => {
          let data = res.data;
          let hasOwnProperty = Object.prototype.hasOwnProperty;
          if (hasOwnProperty.call(res, "data")) {
            let result = res.data;
            if (result.success) {
              resolve(result);
            } else {
              Message({
                message: result.msg || result.message || "上传失败",
                type: "warning"
              });
              reject(result.msg);
            }
          } else {
            Message({
              message: data.message,
              type: "warning"
            });
          }
        },
        err => {
          reject(err);
          Message({
            message: "上传失败",
            type: "warning"
          });
        }
      );
  });
}

export { SERVICEDEFAULT, UploadFile };
