<template>
  <el-container class="Layout">
    <el-header height="100px" class="header">
      <div class="title">四个监督协同共享</div>
      <div class="nav">
        <ul>
          <li
            v-for="item in List"
            :key="item.name"
            :class="{ isactive: active === item.meta.title }"
          >
            <router-link :to="item.path">
              <i class="iconfont" :class="item.meta.icon"></i>
              <span>{{ item.meta.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="user" @click="Logout">
        <i class="el-icon-video-play"></i>
        <span>Admin</span>
      </div>
    </el-header>
    <el-main class="app_main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  watch: {
    $route: {
      handler() {
        this.active = this.$route.matched[1].meta.title;
      },
      immediate: true
    }
  },
  created() {
    this.List = this.$router.options.routes[2].children;
  },
  data() {
    return {
      List: [],
      active: ""
    };
  },
  methods:{
    //退出登录
    Logout(){
      this.$confirm('是否退出?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message.success('退出成功');
          this.$router.push({
            path:"/"
          })
        }).catch(() => {
          this.$message.info('已取消退出');          
        });
    }
  }
};
</script>
<style lang="scss">
.Layout {
  height: 100%;
  // background-color: #ebe6f5;
  .header {
    height: 100px;
    background: url("../../assets/images/nav.png") no-repeat;
    // background-size: 100% 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 50px;
    .title {
      font-size: 46px;
      font-weight: bold;
    }
    .nav {
      height: 100%;
      > ul {
        height: 100%;
        display: flex;
        .isactive {
          background-color: #a82226;
          // border-bottom: 5px solid #fff;
          .White {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            height: 5px;
            width: 50px;
            border-radius: 5px;
            display: block;
            background-color: #fff;
          }
        }
        li {
          height: 100%;
          line-height: 100px;
          font-size: 24px;
          font-weight: bold;
          width: 180px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          .iconfont {
            color: #fff;
            display: block;
            font-size: 24px;
            margin: 0 5px;
          }
          > span {
            display: block;
          }
          > a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            color: #fff;
          }
        }
      }
    }
    .user {
      font-size: 18px;
      display: flex;
      align-items: center;
      > i {
        display: block;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background-color: #b32428;
        border-radius: 50%;
        color: #ffd400;
        font-size: 22px;
        margin-right: 10px;
      }
    }
  }
  .app_main {
    height: 100%;
    padding: 0;
    // margin: 20px;
    background: url("../../assets/images/ty_bg.png") no-repeat;
  }
}
</style>
