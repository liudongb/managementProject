import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./utils/filter"
import store from "./store";
import "@/assets/style/reset.css";
import "@/assets/style/chang-element.scss";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/iconfont/iconfont.css";
Vue.use(ElementUI);

import "amfe-flexible/index";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
