<template>
  <div class="mail">
    <div class="mail_left">
      <ul>
        <li v-for="(item, inx) in navList" :key="inx">
          <router-link :to="{ path: item.path }">
            <i class="iconfont" :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="mail_right">
      <div class="right_headar">
        <span></span>
        {{ $route.meta.title }}
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          path: "/menu3/consultation",
          name: "consultation",
          id: 1,
          title: "子菜单1",
          icon: "iconbhjmeeting"
        },
        {
          path: "/menu3/reform",
          name: "reform",
          id: 2,
          title: "子菜单2",
          icon: "iconguanxi"
        },
        {
          path: "/menu3/democratic",
          name: "democratic",
          id: 3,
          title: "子菜单3",
          icon: "iconsanhuiyike"
        },
        {
          path: "/menu3/meetings",
          name: "meetings",
          id: 4,
          title: "子菜单4",
          icon: "iconhujirenkou"
        },
        {
          path: "/menu3/pooled",
          name: "pooled",
          id: 5,
          title: "子菜单5",
          icon: "iconshouye"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.mail {
  height: 100%;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  .mail_left {
    width: 326px;
    height: 100%;
    background-color: #ffffff;
    > ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      > li {
        width: 260px;
        height: 61px;
        border-radius: 4px;
        border: solid 1px #c26164;
        font-size: 18px;
        font-weight: bold;
        color: #c2272c;
        background-color: #ffffff;
        margin-top: 30px;
        a {
          display: flex;
          align-items: center;
          // justify-content: center;
          padding-left: 30px;
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          color: #c2272c;
          i {
            margin-right: 10px;
          }
        }
        .router-link-active {
          color: #fff;
          background: #c2272c;
          i {
            color: #fff;
          }
        }
      }
    }
  }
  .mail_right {
    width: 1534px;
    height: 100%;
    background-color: #ffffff;
    margin-left: 20px;
    overflow-y: scroll;
    .right_headar {
      margin-bottom: 20px;
      padding: 10px 0px 10px 10px;
      > span {
        display: inline-block;
        height: 22px;
        width: 6px;
        background: #dc2b31;
        margin-right: 5px;
      }
      font-size: 24px;
      font-weight: bold;
    }
  }
  .mail_right::-webkit-scrollbar {
    display: none;
  }
}
</style>
