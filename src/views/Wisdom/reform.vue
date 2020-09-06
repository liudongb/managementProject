<template>
  <div class="reform">
    <div class="search">
      <el-form :inline="true" label-width="90px">
        <el-form-item label="会议名称：">
          <el-input v-model="form.val"></el-input>
        </el-form-item>
        <el-form-item label="会议类别：">
          <el-select v-model="form.val" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发起单位：">
          <el-select v-model="form.val" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-form-item>
        <el-form-item style="float:right">
          <el-button type="success" icon="el-icon-plus" @click="add">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="publicTable">
      <ul v-if="tableData.length>0">
        <li v-for="(item,index) in tableData" :key="index">
          <div class="con_title">
            <div>{{item.title}}</div>
            <div>
              <!-- <i class="iconfont icon-liucheng" @click.stop="flowpath(item)"></i> -->
              <i class="el-icon-edit-outline"></i>
              <i class="el-icon-close"></i>
              <!-- <i class="iconfont icon-chehui" @click.stop="withdraw(item)" v-if="item.status==3"></i> -->
            </div>
            <!-- <div class="statusbox statusbox1" v-if="item.status==1||item.status==null">未回复</div>
            <div class="statusbox statusbox2" v-if="item.status==2">已回复</div>
            <div class="statusbox statusbox3" v-if="item.status==3">待核实</div>
            <div class="statusbox statusbox4" v-if="item.status==4">已完成</div>-->
          </div>
          <div>
            <span>发起单位：{{item.fqdw}}</span>
            <span>会议时间：{{item.date}}</span>
            <!-- <span>会议类型：领导班子会议</span> -->
          </div>
          <div class="timebox">
            <span>参会单位：{{item.chdw}}</span>
          </div>
        </li>
      </ul>
      <div class="nodata" v-else>暂无数据</div>
    </div>
    <div class="Pagination">
      <pagination
        :total="total"
        :pageIndex.sync="query.pageIndex"
        :pageSize.sync="query.pageSize"
        @PageIndexChange="PageIndexChange"
      ></pagination>
    </div>
    <meetingsdiadog :dialogVisible.sync="dialogVisible"></meetingsdiadog>
  </div>
</template>

<script>
import meetingsdiadog from "./dialog/meetingsdiadog";
import pagination from "@/components/Pagination";
export default {
  components: {
    pagination,
    meetingsdiadog
  },
  data() {
    return {
      form: {
        val: ""
      },
      total: 0,
      query: {
        pageIndex: 1,
        pageSize: 10
      },
      tableData: [
        {
          title: "以案促改联席会议",
          fqdw: "第六监督检查室",
          date: "2020-08-10",
          chdw: "派驻一组"
        },
        {
          title: "以案促改联席会议",
          fqdw: "第六监督检查室",
          date: "2020-08-11",
          chdw: "派驻二组"
        },
        {
          title: "以案促改联席会议",
          fqdw: "第六监督检查室",
          date: "2020-08-12",
          chdw: "派驻三组"
        },
        {
          title: "以案促改联席会议",
          fqdw: "第六监督检查室",
          date: "2020-08-13",
          chdw: "派驻四组"
        },
        {
          title: "以案促改联席会议",
          fqdw: "第六监督检查室",
          date: "2020-08-14",
          chdw: "派驻五组"
        },
        {
          title: "以案促改联席会议",
          fqdw: "第六监督检查室",
          date: "2020-08-15",
          chdw: "派驻一组"
        }
      ],
      options: [
        // {
        //   value: "选项1",
        //   label: "黄金糕"
        // },
        // {
        //   value: "选项2",
        //   label: "双皮奶"
        // },
        // {
        //   value: "选项3",
        //   label: "蚵仔煎"
        // },
        // {
        //   value: "选项4",
        //   label: "龙须面"
        // },
        // {
        //   value: "选项5",
        //   label: "北京烤鸭"
        // }
      ],
      dialogVisible: false
    };
  },
  methods: {
    add() {
      this.dialogVisible = true;
    },
    PageIndexChange() {}
  }
};
</script>

<style lang="scss" scoped>
.reform {
  padding: 20px 30px;
  .search {
    width: 100%;
  }
  .publicTable {
    width: 100%;
    ul {
      display: flex;
      flex-wrap: wrap;
      margin: 0px 10px;
      justify-content: space-between;
      > li {
        margin-bottom: 20px;
        width: 700px;
        height: 140px;
        border-radius: 8px;
        border: solid 1px #ced8e5;
        box-sizing: border-box;
        padding: 15px;
        align-items: center;
        cursor: pointer;
        position: relative;
        .con_title {
          font-size: 20px;
          margin: 10px 0px 20px 0px;
          font-weight: bold;
          display: flex;
          justify-content: space-between;
          > div:first-of-type {
            width: 600px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          > div {
            i {
              color: #1779dd;
              margin-right: 5px;
            }
          }
          > div:last-of-type {
            > span:first-of-type {
              > i {
                color: #006bd6;
              }
            }
          }
          > .statusbox {
            position: absolute;
            right: 30px;
            top: 60px;
            transform: rotate(-20deg);
            font-size: 15px;
            padding: 3px;
            font-weight: 400;
          }
          > .statusbox1 {
            color: #eb6868;
            border: 1px solid #eb6868;
          }
          > .statusbox2 {
            color: #4a99ea;
            border: 1px solid #4a99ea;
          }
          > .statusbox3 {
            color: #ff9328;
            border: 1px solid #ff9328;
          }
          > .statusbox4 {
            color: #1db47d;
            border: 1px solid #1db47d;
          }
        }
        > div:nth-child(2) {
          color: #808080;
          font-size: 16px;
          > span:first-of-type,
          span:nth-child(2) {
            margin-right: 50px;
          }
        }
        .timebox {
          margin-top: 10px;
          font-size: 15px;
          color: #808080;
          span:nth-of-type(2) {
            color: red;
          }
        }
      }
    }
    .nodata {
      text-align: center;
      font-size: 15px;
      padding: 50px;
      color: #0aa3a3;
    }
  }
}
</style>
