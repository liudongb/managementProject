<template>
  <div class="home">
    <div class="home_main">
      <div class="main_left bg">
        <ul>
          <li
            v-for="(item, index) in leftList"
            :key="index"
            @click="btnLick(item)"
          >
            <div class="lll">
              <span class="title">{{ item.title }}</span>
              <span class="num">{{ item.num }}</span>
            </div>
            <i class="iconfont" :class="item.icon"></i>
          </li>
        </ul>
      </div>
      <div class="main_center bg">
        <!-- <div class="home_tit">
          <i></i>
          <p>四项监督协同共享流程</p>
        </div>
        <div class="img"></div> -->
        <div class="center_top">
          <div class="center_top_l">
            <div class="home_tit">
              <i></i>
              <p>党风政风监督</p>
            </div>
            <div class="dfzfjd">
              <dfzfjdEcharts></dfzfjdEcharts>
            </div>
          </div>
          <div class="center_top_r">
            <div class="home_tit">
              <i></i>
              <p>巡察监督</p>
            </div>
            <div class="xcjd">
              <ul>
                <li v-for="(item, index) in centerTopList" :key="index">
                  <span class="name">{{ item.name }}</span>
                  <span class="num">{{ item.num }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="center_bom">
          <div class="home_tit">
            <i></i>
            <p>室组联动</p>
          </div>
          <ul>
            <li v-for="(item, index) in centerBomList" :key="index">
              <span class="name">{{ item.name }}</span>
              <span class="num">{{ item.num }}</span>
            </li>
          </ul>
          <div class="echarts">
            <szldEcharts></szldEcharts>
          </div>
        </div>
      </div>
      <div class="main_right bg">
        <div class="home_tit">
          <i></i>
          <p>处分情况</p>
        </div>
        <div class="right_top">
          <p class="right_tit">党务处分</p>
          <dwcfEcharts></dwcfEcharts>
        </div>
        <div class="right_cen">
          <p class="right_tit">政务处分</p>
          <zwcfEcharts></zwcfEcharts>
        </div>
        <div class="right_bom">
          <p class="right_tit">四种形态</p>
          <div class="jzt">
            <div class="jzt_l">
              <p>
                <span class="span_"><i class="one"></i>第一种形态</span
                ><span class="one"><span class="num">35</span>人次</span>
              </p>
              <p>
                <span class="span_"><i class="two"></i>第二种形态</span
                ><span class="two"><span class="num">24</span>人次</span>
              </p>
              <p>
                <span class="span_"><i class="three"></i>第三种形态</span
                ><span class="three"><span class="num">4</span>人次</span>
              </p>
              <p>
                <span class="span_"><i class="four"></i>第四种形态</span
                ><span class="four"><span class="num">3</span>人次</span>
              </p>
            </div>
            <div class="jzt_r"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dfzfjdEcharts from "./Echarts/dfzfjdEcharts"; // 党风政风监督
import dwcfEcharts from "./Echarts/dwcfEcharts"; // 党纪处分
import zwcfEcharts from "./Echarts/zwcfEcharts"; // 政务处分
import szldEcharts from "./Echarts/szldEcharts"; // 室组联动柱状图
export default {
  name: "Home",
  components: {
    dwcfEcharts,
    zwcfEcharts,
    dfzfjdEcharts,
    szldEcharts
  },
  data() {
    return {
      leftList: [
        {
          title: "监督单位数",
          num: "158",
          icon: "iconqiye"
        },
        {
          title: "监督对象数",
          num: "50820",
          icon: "iconjingliren"
        },
        {
          title: "信访数",
          num: "7437",
          icon: "iconduanxin"
        },
        {
          title: "案件数",
          num: "986",
          icon: "iconziyuan2"
        },
        {
          title: "协同事项数",
          num: "7852",
          icon: "iconliandongjianguan"
        },
        {
          title: "协同业务数",
          num: "5439",
          icon: "iconxietong"
        }
      ],
      centerTopList: [
        {
          name: "巡察轮数",
          num: "10"
        },
        {
          name: "巡察党组",
          num: "102"
        },
        {
          name: "发现问题",
          num: "1809"
        },
        {
          name: "问题线索",
          num: "653"
        },
        {
          name: "整改问题",
          num: "760"
        },
        {
          name: "完善制度",
          num: "1304"
        }
      ],
      centerBomList: [
        {
          name: "建立廉政档案",
          num: "984"
        },
        {
          name: "梳理权力事项",
          num: "822"
        },
        {
          name: "关键环节和潜在风险",
          num: "1230"
        },
        {
          name: "室组碰头会",
          num: "32"
        },
        {
          name: "室组联席会",
          num: "20"
        },
        {
          name: "政治生态分析报告",
          num: "158"
        },
        {
          name: "联席走访约谈",
          num: "51"
        }
      ]
    };
  },
  methods: {
    btnLick(item) {
      console.log(item);
    }
  }
};
</script>
<style lang="scss">
.home {
  height: 100%;
  width: 100%;
  background: url("../../assets/images/home_bg.png") no-repeat;
  padding: 20px 70px 20px 20px;
  box-sizing: border-box;
  .home_main {
    height: 100%;
    display: flex;
    .bg {
      height: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      // width: 280px;
      background-color: #fff;
      box-sizing: border-box;
    }
    .home_tit {
      display: flex;
      align-items: center;
      > i {
        display: block;
        width: 7px;
        height: 24px;
        background-color: #189f8e;
        margin-right: 5px;
      }
      > p {
        font-size: 22px;
        font-weight: bold;
      }
    }
    .main_left {
      padding: 40px 20px;
      > ul {
        li {
          width: 240px;
          height: 120px;
          border-radius: 8px;
          border: solid 1px #e5e5e5;
          margin-bottom: 28px;
          padding: 30px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          .lll {
            > span {
              display: block;
            }
            .title {
              font-size: 16px;
              color: #4c4c4c;
            }
            .num {
              font-size: 30px;
              font-weight: bold;
            }
          }
          > i {
            width: 60px;
            height: 60px;
            background-color: #fcf3ee;
            line-height: 60px;
            border-radius: 50%;
            text-align: center;
            font-size: 26px;
            color: #ff4c4c;
          }
        }
        li:last-child {
          margin-bottom: 0;
        }
      }
    }
    .main_center {
      width: 1000px;
      margin: 0 20px;
      padding: 20px;
      background-color: #fff;
      .img {
        margin-top: 30px;
        width: 100%;
        height: 90%;
        background: url("../../assets/images/home_center.png") no-repeat;
        background-size: 100% 100%;
      }
      .center_top {
        height: 300px;
        display: flex;
        .center_top_l {
          height: 100%;
          width: 410px;
          margin-right: 50px;
          .dfzfjd {
            margin-top: 30px;
            height: 240px;
          }
        }
        .center_top_r {
          height: 100%;
          width: 500px;
          .xcjd {
            margin-top: 30px;
            height: 240px;
            > ul {
              display: flex;
              flex-wrap: wrap;
              li {
                width: 230px;
                height: 60px;
                border-radius: 8px;
                border: solid 1px #e5e5e5;
                margin: 0 30px 30px 0;
                padding: 0 20px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: space-between;
                > span {
                  font-size: 18px;
                }
                .num {
                  font-size: 22px;
                  font-weight: bold;
                }
              }
              li:nth-child(2n) {
                margin-right: 0;
              }
              li:nth-child(1),
              li:nth-child(2) {
                .num {
                  color: #0f95da;
                }
              }
              li:nth-child(3),
              li:nth-child(4) {
                .num {
                  color: #f04848;
                }
              }
              li:nth-child(5),
              li:nth-child(6) {
                margin-bottom: 0;
                .num {
                  color: #23a393;
                }
              }
            }
          }
        }
      }
      .center_bom {
        margin-top: 60px;
        > ul {
          margin-top: 30px;
          margin-left: 15px;
          display: flex;
          flex-wrap: wrap;
          li {
            width: 210px;
            height: 50px;
            border-radius: 8px;
            border: solid 1px #e5e5e5;
            padding: 0 15px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-right: 30px;
            margin-bottom: 20px;
            .num {
              font-size: 22px;
              font-weight: bold;
            }
            .name {
              font-size: 16px;
            }
          }
          li:nth-child(7) {
            margin-right: 0;
          }
          li:nth-child(3) {
            margin-right: 0;
            width: 450px;
          }
        }
        .echarts {
          height: 330px;
        }
      }
    }
    .main_right {
      width: 510px;
      padding: 20px;
      .right_tit {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 20px;
        font-weight: bold;
      }
      .right_top {
        margin-top: 30px;
        height: 270px;
        position: relative;
      }
      .right_cen {
        height: 270px;
        margin: 20px 0;
        position: relative;
      }
      .right_bom {
        height: 240px;
        position: relative;
        .jzt {
          display: flex;
          width: 100%;
          height: 100%;
          padding: 20px 20px 0;
          box-sizing: border-box;
          .jzt_l {
            width: 50%;
            margin-top: 30px;
            > p {
              width: 180px;
              margin-bottom: 15px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              .one {
                color: #0f95da;
              }
              .two {
                color: #00bd5e;
              }
              .three {
                color: #ff9124;
              }
              .four {
                color: #ff5757;
              }
              .span_ {
                .one {
                  background-color: #0f95da;
                }
                .two {
                  background-color: #00bd5e;
                }
                .three {
                  background-color: #ff9124;
                }
                .four {
                  background-color: #ff5757;
                }
              }
              > span {
                font-size: 16px;
                color: #333;
                display: flex;
                align-items: center;
                .num {
                  font-size: 20px;
                }
                > i {
                  display: block;
                  width: 16px;
                  height: 16px;
                  margin-right: 10px;
                }
              }
            }
          }
          .jzt_r {
            width: 50%;
            background: url("../../assets/images/jzt.png") no-repeat;
          }
        }
      }
    }
  }
}
</style>
