import { SERVICEDEFAULT as request, UploadFile } from "./request.js";
export const API = "/sgjd";
// 登录
export function addlogin(query) {
  return request({
    url: `${API}/api/locallogin`,
    method: "post",
    data: query,
  });
}
//获取验证码
export const captchaImgUrl = `${API}/api/numCode`;
//退出
export function cancellation() {
  return request({
    url: `${API}/api/cancellation`,
    method: "get",
  });
}
// 上次附件
export function fileupload(params) {
  return UploadFile(`${API}/file/upload`, params);
}

// code 登录
export function codeLogin(query) {
  return request({
    url: `${API}/login/codeLogin`,
    method: "post",
    params: query,
  });
}

// 业务协同 -- 单位tree
export function getUnit(query) {
  return request({
    url: `${API}/role/getUnit`,
    method: "get",
    params: query,
  });
}

// 业务协同 -- 单位列表 -- 党风政风监督室
export function getProblemHandle(query) {
  return request({
    url: `${API}/share/getProblemHandle`,
    method: "get",
    params: query,
  });
}

// 业务协同 -- 单位列表
export function getShareInfo(query) {
  return request({
    url: `${API}/share/getShareInfo`,
    method: "get",
    params: query,
  });
}
