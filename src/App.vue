<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import Watermark from "./utils/watermark";
export default {
  name: "App",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let date = new Date();
      Watermark.set("系统管理员", this.time(date));
    },
    time(date) {
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + "年" + m + "月" + d + "日";
    }
  }
};
</script>
<style lang="scss">
.el-tooltip__popper {
  font-size: 16px;
  max-width: 800px;
}
</style>
