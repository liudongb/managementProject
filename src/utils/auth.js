export function getToken() {
  return sessionStorage.getItem("token");
}
export function getUser() {
  return sessionStorage.getItem("user");
}
export function getUsername() {
  return sessionStorage.getItem("nickname");
}
export function getDeptname() {
  return sessionStorage.getItem("deptname");
}
export function getTipMessage() {
  return sessionStorage.getItem("bool");
}
export function getRoles() {
  return sessionStorage.getItem("roles");
}
export function getOrgid() {
  return sessionStorage.getItem("orgid");
}


export function setToken(token) {
  return sessionStorage.setItem("token", token);
}
export function setUser(user) {
  return sessionStorage.setItem("user", user);
}
export function setUsername(username) {
  return sessionStorage.setItem("nickname", username);
}
export function setDeptname(deptname) {
  return sessionStorage.setItem("deptname", deptname);
}
export function setTipMessage(bool) {
  return sessionStorage.setItem("bool", bool);
}
export function setRoles(roles) {
  return sessionStorage.setItem("roles", roles);
}
export function setOrgid(orgid) {
  return sessionStorage.setItem("orgid", orgid);
}
export function clearAll() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem('user')
  sessionStorage.removeItem("nickname");
  sessionStorage.removeItem("deptname");
  sessionStorage.removeItem('bool');
  sessionStorage.removeItem('roles');
  sessionStorage.removeItem("orgid");
  sessionStorage.removeItem("jdhlroutelist");
}
