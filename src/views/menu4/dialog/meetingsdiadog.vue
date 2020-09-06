<template>
  <el-dialog
    width="970px"
    title="新增"
    :visible.sync="isDialog"
    @close="handleClose"
    :close-on-click-modal="false"
    @open="open"
  >
    <div class="meetings">
      <el-form label-width="90px">
        <el-row>
          <el-col :span="24">
            <el-form-item label="会议名称：">
              <el-input v-model="form.val"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="发起单位：">
              <el-input v-model="form.val"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="会议时间：">
              <el-date-picker
                v-model="form.val"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm"
                placeholder="选择日期时间"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="参会单位：">
              <el-input v-model="form.val" type="textarea" :rows="2"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="参会人员">
              <el-input v-model="form.val" type="textarea" :rows="4"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="附件">
          <el-button type="success">
            <i class="el-icon-upload el-icon--left"></i>上传文件
          </el-button>
          <ul class="filelist">
            <li v-for="(it,inx) in form.systemFiles" :key="inx">
              <span>{{it.filename}}{{it.subfix}}</span> &nbsp;&nbsp;&nbsp;
              <!-- <span @click="FileDel(it.id,inx)">删除</span> -->
              <!-- <span @click="previe(it.id)">预览</span>
              <span @click="downfile(it)">下载</span>-->
            </li>
          </ul>
          <input
            type="file"
            name="file"
            ref="fileInput"
            id="file"
            style="display:none;"
            accept=".doc, .docx, .pdf, .xls, .xlsx"
          />
        </el-form-item>
      </el-form>
      <div style="text-align: center;padding-bottom: 30px;">
        <el-button type="primary" @click="clicksave()">保存</el-button>
        <el-button @click="handleClose">取消</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isDialog: {
      get() {
        return this.dialogVisible;
      },
      set(v) {
        this.$emit("update:dialogVisible", v);
      }
    }
  },
  data() {
    return {
      form: {
        val: ""
      }
    };
  },
  watch: {},
  methods: {
    // // 弹窗打开
    open() {},
    // // 弹窗右上角关闭
    handleClose() {}
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-dialog__header {
  text-align: center;
  background: #c43236;
  .el-dialog__title,
  .el-dialog__close {
    color: #fff;
  }
}
/deep/ .el-date-editor--datetime {
  width: 100%;
}
</style>