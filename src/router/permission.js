import router from "./index";
import { Message } from "element-ui";
import { codeLogin } from "@/api/home";
import { setToken, setUser } from "@/utils/auth";
// let navlist = JSON.parse(sessionStorage.getItem('router'))
let data = {};
// let whiteList = ["/login", "/404"];
router.beforeEach((to, from, next) => {
  if (window.location.href.indexOf("code=") !== -1) {
    let a = window.location.href.split("?code=");
    data = {
      code: a[1].split("#")[0]
    };
    codeLogin(data).then(res => {
      let Obj = window.location;
      let url = `${Obj.protocol}//${Obj.host}${Obj.pathname}#`;
      if (res.success) {
        setToken(res.token);
        setUser(JSON.stringify(res.user));
        window.location.href = url + "/home";
      } else {
        Message({
          showClose: true,
          message: "该用户暂无权限",
          type: "error"
        });
      }
    });
  } else {
    if (sessionStorage.getItem("token")) {
      next();
    } else if (to.path === "/login") {
      next();
    } else {
      next("/login");
    }
  }
});
