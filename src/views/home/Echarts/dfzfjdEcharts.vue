<template>
  <div class="dfzfjd">
    <div ref="dfzfjdEcharts"></div>
  </div>
</template>

<script>
import chart from "@/mixins/chart";
import echarts from "echarts";
export default {
  mixins: [chart],
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initEchart();
  },
  methods: {
    initEchart() {
      this.chart = echarts.init(this.$refs.dfzfjdEcharts);
      var myColor = ["#13a6f1", "#1ba598", "#f59331", "#f44749"];
      let option = {
        // backgroundColor: "#0e2147",
        grid: {
          left: "2%",
          top: "2%",
          right: "2%",
          bottom: "8%",
          containLabel: true
        },
        xAxis: [
          {
            show: false
          }
        ],
        yAxis: [
          {
            axisTick: "none",
            axisLine: "none",
            offset: "0",
            axisLabel: {
              textStyle: {
                color: "#333",
                fontSize: "16"
              }
            },
            data: ["曝光问题", "分办问题", "查处问题", "发现疑似问题"]
          },
          {
            axisTick: "none",
            axisLine: "none",
            axisLabel: {
              textStyle: {
                color: "#333",
                fontSize: "16"
              }
            },
            data: ["96", "271", "487", "2025"]
          },
          {
            name: "",
            nameGap: "50",
            nameTextStyle: {
              color: "#ffffff",
              fontSize: "16"
            },
            axisLine: {
              lineStyle: {
                color: "rgba(0,0,0,0)"
              }
            },
            data: []
          }
        ],
        series: [
          {
            name: "条",
            type: "bar",
            yAxisIndex: 0,
            data: [96, 271, 487, 2025],
            label: {
              normal: {
                show: false,
                position: "right",
                textStyle: {
                  color: "#ffffff",
                  fontSize: "16"
                }
              }
            },
            barWidth: 12,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                }
              }
            },
            z: 2
          },
          {
            name: "白框",
            type: "bar",
            yAxisIndex: 1,
            barGap: "-100%",
            data: [2100, 2100, 2100, 2100],
            barWidth: 23,
            itemStyle: {
              normal: {
                color: "#fff",
                barBorderRadius: 5
              }
            },
            z: 1
          },
          {
            name: "外框",
            type: "bar",
            yAxisIndex: 2,
            barGap: "-100%",
            data: [2100, 2100, 2100, 2100],
            barWidth: 24,
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                },
                barBorderRadius: 5
              }
            },
            z: 0
          }
        ]
      };
      this.chart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
.dfzfjd {
  width: 100%;
  height: 100%;
  > div {
    width: 100%;
    height: 100%;
  }
}
</style>
