import Vue from "vue";
import VueRouter from "vue-router";
import LayOut from "@/components/Layout";

Vue.use(VueRouter);

// 防止路由多次点击之后报错
// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err);
// };
const routes = [{
  path: "/",
  name: "default",
  redirect: "/login"
},
{
  path: "/login",
  name: "Login",
  component: () => import("@/views/Login.vue")
},
{
  path: "/home",
  name: "home",
  component: LayOut,
  redirect: "/home/index",
  children: [
    {
      path: "/home",
      name: "Home",
      meta: {
        title: "首页",
        icon: "iconshouye"
      },
      component: () => import("@/views/home")
    },
    {
      path: "/wisdom",
      name: "Wisdom",
      meta: {
        title: "沟通会商",
        icon: "iconwenjianguanli"
      },
      redirect: "/wisdom/consultation",
      component: () => import("@/views/Wisdom"),
      children: [{
        path: "/wisdom/consultation",
        name: "consultation",
        meta: {
          title: "重要监督事项会商会议",
          icon: "iconbhjmeeting"
        },
        component: () => import("@/views/Wisdom/consultation")
      },
      {
        path: "/wisdom/reform",
        name: "reform",
        meta: {
          title: "以案促改联席会议",
          icon: "iconguanxi"
        },
        component: () => import("@/views/Wisdom/reform")
      },
      {
        path: "/wisdom/democratic",
        name: "democratic",
        meta: {
          title: "民主生活会督导协商会议",
          icon: "iconsanhuiyike"
        },
        component: () => import("@/views/Wisdom/democratic")
      },
      {
        path: "/wisdom/meetings",
        name: "meetings",
        meta: {
          title: "协商参加重要会议",
          icon: "iconhujirenkou"
        },
        component: () => import("@/views/Wisdom/meetings")
      },
      {
        path: "/wisdom/pooled",
        name: "pooled",
        meta: {
          title: "汇总分析",
          icon: "iconshouye"
        },
        component: () => import("@/views/Wisdom/pooled")
      }
      ]
    },
    {
      path: "/menu1",
      name: "menu1",
      meta: {
        title: "菜单1",
        icon: "iconwenjianguanli"
      },
      redirect: "/menu1/consultation",
      component: () => import("@/views/menu1"),
      children: [{
        path: "/menu1/consultation",
        name: "consultation",
        meta: {
          title: "重要监督事项会商会议",
          icon: "iconbhjmeeting"
        },
        component: () => import("@/views/menu1/consultation")
      },
      {
        path: "/menu1/reform",
        name: "reform",
        meta: {
          title: "以案促改联席会议",
          icon: "iconguanxi"
        },
        component: () => import("@/views/menu1/reform")
      },
      {
        path: "/menu1/democratic",
        name: "democratic",
        meta: {
          title: "民主生活会督导协商会议",
          icon: "iconsanhuiyike"
        },
        component: () => import("@/views/menu1/democratic")
      },
      {
        path: "/menu1/meetings",
        name: "meetings",
        meta: {
          title: "协商参加重要会议",
          icon: "iconhujirenkou"
        },
        component: () => import("@/views/menu1/meetings")
      },
      {
        path: "/menu1/pooled",
        name: "pooled",
        meta: {
          title: "汇总分析",
          icon: "iconshouye"
        },
        component: () => import("@/views/menu1/pooled")
      }
      ]
    },
  ]
},
// 如果一个大类下面有多个页面请用children
{
  path: "/404",
  component: () => import("@/views/404")
},
{
  path: "/test",
  component: () => import("@/views/test")
},
{
  path: "*",
  redirect: "/404"
}
];

const router = new VueRouter({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes
});

export default router;