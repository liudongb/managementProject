<template>
  <div class="shareDetailDialog publicDialog">
    <el-dialog
      :visible.sync="Dialogshow"
      width="1100px"
      @open="open"
      title="共享信息详情"
    >
      <div class="title">
        <i></i>
        <span>共享流程</span>
        <i></i>
      </div>
      <div class="svg">
        <shareSvg></shareSvg>
      </div>
      <div class="form">
        <el-form ref="form" :model="form" label-width="120px">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="协同方式：">
                <el-input v-model="form.name" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="发起部门：">
                <el-input v-model="form.name" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="接收时间：">
                <el-input v-model="form.name" disabled></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="问题来源：">
                <el-input v-model="form.name" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="16">
              <el-form-item label="问题类型：">
                <el-input v-model="form.name" disabled></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-form-item label="问题描述：">
                <el-input
                  v-model="form.name"
                  type="textarea"
                  :rows="3"
                  disabled
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-form-item label="相关材料：">
                <div class="file">
                  <ul>
                    <li>
                      <span>问题办理附件</span>
                      <span class="fileBtn">下载</span>
                      <span class="fileBtn">预览</span>
                    </li>
                  </ul>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="btn_close">
        <el-button type="primary" @click="Dialogshow = false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import shareSvg from "./shareSvg";
export default {
  name: "shareDetailDialog",
  components: {
    shareSvg
  },
  props: {
    displayDialog: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    Dialogshow: {
      get() {
        return this.displayDialog;
      },
      set(v) {
        this.$emit("update:displayDialog", v);
      }
    }
  },
  data() {
    return {
      form: {}
    };
  },
  methods: {
    open() {}
  }
};
</script>

<style lang="scss" scoped>
.shareDetailDialog {
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    > i {
      width: 100%;
      height: 1px;
      background-color: #dbdbdb;
      display: block;
      background-image: linear-gradient(to right, #fff, #dbdbdb);
    }
    > i:last-child {
      background-image: linear-gradient(to left, #fff, #dbdbdb);
    }
    > span {
      display: block;
      width: 300px;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      font-family: "kaiti";
      color: #c2272c;
    }
  }
  .svg {
    text-align: center;
  }
  .form {
    margin-top: 50px;
    /deep/ {
      .el-form-item__label {
        font-size: 20px;
        font-family: "kaiti";
        font-weight: bold;
        color: #333;
      }
      .el-textarea__inner,
      .el-input.is-disabled .el-input__inner {
        background-color: #f7f7f7;
        border: solid 1px #c7c7c7;
      }
    }
    .file {
      > ul {
        display: flex;
        flex-wrap: wrap;
        li {
          > span {
            margin-right: 20px;
          }
          .fileBtn {
            color: #0080ff;
            cursor: pointer;
          }
        }
      }
    }
  }
  .btn_close {
    text-align: center;
  }
}
</style>
