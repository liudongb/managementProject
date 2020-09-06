<template>
  <div class="login">
    <div class="img_header">
      <!-- <img src="../../assets/images/jjw.png" alt /> -->
    </div>
    <div class="title">
      <p class="title_name">监 督 互 联 平 台</p>
    </div>
    <div class="login_all">
      <div class="login_content">
        <div class="login_main">
          <div class="tab_box">
            <div
              v-for="(item, index) in tabList"
              :key="index"
              :class="{ showactive: activetab === item.id }"
              @click="tabclick(item.id)"
            >
              <p>{{ item.name }}</p>
              <i></i>
            </div>
          </div>
          <div class="input_all" v-if="activetab === '1'">
            <div class="input_one">
              <span>手机号:</span>
              <el-input v-model="form.username" placeholder="请输入手机号" class="username">
                <i slot="prefix" class="iconfont icon-phone-o"></i>
              </el-input>
            </div>
            <div class="input_one">
              <span>验证码:</span>
              <el-input
                placeholder="请输入验证码"
                v-model="form.password"
                @keyup.enter.native="PhoneSubmit"
                class="input password"
              >
                <i slot="prefix" class="iconfont icon-yanzhengma"></i>
                <button
                  slot="suffix"
                  class="code"
                  :class="{ btndisabled: codeloading }"
                  @click="GetCode"
                  v-if="showcode"
                  :disabled="codeloading"
                >获取验证码</button>
                <button slot="suffix" class="code" v-else>{{ rTime + "秒后重新获取" }}</button>
              </el-input>
            </div>
            <div class="input_one">
              <el-button type="danger" @click="PhoneSubmit">点&nbsp;击&nbsp;登&nbsp;录</el-button>
            </div>
          </div>
          <div class="input_all" v-else>
            <div class="input_one">
              <span>账号：</span>
              <el-input placeholder="请输入账号" v-model="form.username">
                <i slot="prefix" class="iconfont icon-zhanghao"></i>
              </el-input>
            </div>
            <div class="input_one">
              <span>密码：</span>
              <el-input placeholder="请输入密码" v-model="form.password" show-password>
                <i slot="prefix" class="iconfont icon-mima"></i>
              </el-input>
            </div>
            <div class="input_one">
              <el-button type="danger" @click="loginFun">点&nbsp;击&nbsp;登&nbsp;录</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codeloading: false,
      activetab: "2",
      tabList: [
        {
          name: "手机登录",
          id: "1"
        },
        {
          name: "账号登录",
          id: "2"
        }
      ],
      rTime: 60,
      form: {
        username: "",
        password: ""
      },
      showcode: true
    };
  },
  created() {},
  methods: {
    //切换
    tabclick(i) {
      this.activetab = i;
      this.form = {
        username: "",
        password: ""
      };
    },
    // 获取验证码
    GetCode() {},
    //手机
    PhoneSubmit() {},
    //账号
    loginFun() {
      if (this.form.username == "admin" && this.form.password == "123456") {
        this.$router.push({
          path: "/home"
        });
      } else {
        this.$message.warning("账号密码错误！");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 1080px;
  background: #000;
  background: url(../assets/images/loginbg.jpg) no-repeat;
  background-size: 100% 100%;
  .img_header {
    width: 505px;
    height: 68px;
    padding: 50px 0 0 50px;
  }
  .title {
    display: flex;
    justify-content: center;
    padding: 80px 0 60px 0;
    box-sizing: border-box;
    .title_name {
      font-size: 60px;
      font-weight: bold;
      color: #e72b34;
      letter-spacing: 11px;
    }
  }
  .login_all {
    display: flex;
    justify-content: center;
    .login_content {
      width: 567px;
      height: 454px;
      // background-color: #f7d097;
      background-color: rgba(247, 208, 151, 0.4);
      display: flex;
      padding: 14px;
      box-sizing: border-box;
      // justify-content: center;
      .login_main {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        background-color: #ffffff;
        .tab_box {
          display: flex;
          justify-content: space-around;
          > div {
            > p {
              font-size: 24px;
              color: #999999;
              cursor: pointer;
            }
          }
          .showactive {
            text-align: center;
            > p {
              color: #333333;
            }
            > i {
              display: inline-block;
              width: 30px;
              height: 1px;
              background-color: #666666;
            }
          }
        }
        /deep/ .radio_all {
          text-align: center;
          .el-radio__inner {
            background: transparent;
          }
          .el-radio__label {
            font-size: 22px;
            color: #ffffff;
          }
          .is-checked {
            .el-radio__inner {
              background: #409eff;
            }
          }
        }
        .input_all {
          padding: 0 50px;
          box-sizing: border-box;
          /deep/ .input_one {
            margin-top: 20px;
            .el-input__inner {
              background: transparent;
              padding-left: 35px;
              color: #000000;
              border: solid 1px #e72b34;
            }
            .el-input__prefix {
              padding-top: 10px;
              .iconfont {
                font-size: 24px;
                color: #f65e53;
              }
            }
            > span {
              font-size: 24px;
              color: #333333;
              margin-bottom: 10px;
              display: inline-block;
            }
            .code {
              color: #0055c8;
              font-size: 18px;
              margin-top: 12px;
              cursor: pointer;
              border: none;
              outline: none;
              background: transparent;
              padding-right: 10px;
            }
            .btndisabled {
              color: #ccc;
            }
            .el-button {
              width: 100%;
              height: 60px;
              margin-top: 30px;
              font-size: 20px;
              color: #ffffff;
              font-weight: bold;
              background-color: #e72b34;
            }
          }
        }
      }
    }
  }
}
</style>
