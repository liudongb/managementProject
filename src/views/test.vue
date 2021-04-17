<template>
<!-- 展开收起案例 -->
  <div>
    <button @click="show = true">方法1</button>
    <button @click="show = false">方法2</button>
    <!-- 方法1 -->
    <div id="main" :style="'overflow:' + overflowText + ';'" v-if="show">
      <div class="box">
        {{ title }}
        <span class="pack" v-show="!isShow" @click="isShow = !isShow"
          >收起</span
        >
        <div
          class="look"
          v-if="isOverflow"
          v-show="isShow"
          @click="isShow = !isShow"
        >
          全文
        </div>
      </div>
    </div>
    <!-- 方法2 -->
    <div class="text" v-else>
      <span>{{ newTitle }}</span>
      <span v-if="isAll">...</span>
      <span class="see" v-if="isAll" @click="change">全文</span>
      <span class="see" v-if="!isAll && isPackup" @click="change">收起</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      show: true,
      // 方法1
      title:
        "好烦的哭声福建烤老鼠的好烦的哭声福建烤老鼠的好烦的哭声福建烤老鼠的好烦的哭声福建烤老鼠的好烦的哭声福建烤老鼠的好烦的哭声福建烤老鼠的好烦的哭声福建烤老鼠的好烦的哭声福建烤老鼠的",
      isShow: true,
      isOverflow: false,
      // 方法2
      isAll: false, //是否全文
      isPackup: false, //是否收起
      newTitle: "",
    };
  },
  mounted() {
    // 方法1
    this.init();
    // 方法2
    this.handleLoad();
  },
  computed: {
    // 方法1
    overflowText() {
      return this.isShow ? "hidden" : "inherit";
    },
  },
  methods: {
    // 方法1
    init() {
      let getEl = this.getEl;
      let main = getEl("#main").offsetHeight;
      let box = getEl(".box").offsetHeight;
      console.log(main, box);
      this.isOverflow = main < box;
    },
    getEl(node) {
      return document.querySelector(node);
    },
    // 方法2
    handleLoad() {
      if (this.title == "" || this.title == null) {
        return;
      }
      if (this.title.length > 35) {
        this.isAll = true;
        this.isPackup = true;
        this.newTitle = this.title.substring(0, 35);
      } else {
        this.isAll = false;
        this.isPackup = false;
        this.newTitle = this.title;
      }
    },
    change() {
      if (this.isAll) {
        this.newTitle = this.title;
      } else {
        this.newTitle = this.title.substring(0, 35);
      }
      this.isAll = !this.isAll;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 方法1 */
#main {
  width: 375px;
  overflow: hidden;
  margin: 20px auto;
  overflow: hidden;
  height: 42px;
  position: relative;
}

.box {
  width: 100%;
  font-size: 14px;
  line-height: 20px;
}

.overflow {
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.look {
  color: #009dff;
  font-size: 14px;
  line-height: 20px;
  position: absolute;
  bottom: 2px;
  right: 0;
  /* padding: 0 6px; */
  background-color: #fff;
  box-shadow: -19px 0px 10px #ffffff;
}

.pack {
  color: #009dff;
}
/* 方法2、 */
.text {
  width: 375px;
  margin: 0px auto;
  font-size: 14px;
  line-height: 20px;
  /* letter-spacing: 1px; */
  position: relative;
}
.see {
  color: blue;
  cursor: pointer;
  /* float: right; */
  position: absolute;
  bottom: 0px;
  right: 0px;
  background: #fff;
  box-shadow: -19px 0px 10px #ffffff;
}
</style>
