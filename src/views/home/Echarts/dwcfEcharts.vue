<template>
  <div class="dwcf">
    <div ref="dwcfEcharts"></div>
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
      this.chart = echarts.init(this.$refs.dwcfEcharts);
      let option = {
        color: ["#12a4f0", "#23a393", "#f7b42f", "#f04848", "#3070f0"],
        title: {
          text: "1618\n总数",
          x: "center",
          y: "center",
          color: "#333"
        },
        grid: {
          left: "2%",
          top: "1%",
          bottom: 10,
          right: "1%",
          containLabel: true
        },
        tooltip: {
          trigger: "item",
          textStyle: {
            fontSize: 14
          },
          formatter: "{b} : {c} ({d}%)"
        },
        calculable: true,
        series: [
          {
            stack: "a",
            type: "pie",
            radius: ["45%", "70%"],
            center: ["50%", "50%"],
            // roseType: "area",
            zlevel: 10,
            label: {
              normal: {
                formatter: "{b}\n\n{c} ({d}%)",
                borderWidth: 0,
                borderRadius: 4,
                padding: [0, -50],
                height: 40,
                fontSize: 14,
                align: "center",
                color: "#333",
                rich: {
                  b: {
                    fontSize: 13,
                    lineHeight: 5,
                    color: "#41B3DC"
                  }
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 20,
                length2: 55
              },
              emphasis: {
                show: false
              }
            },
            data: [
              {
                value: 478,
                name: "警告"
              },
              {
                value: 218,
                name: "留党察看"
              },
              {
                value: 256,
                name: "开出党籍"
              },
              {
                value: 284,
                name: "撤销党内职务"
              },
              {
                value: 382,
                name: "严重警告"
              }
            ]
          }
        ]
      };
      this.chart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
.dwcf {
  width: 100%;
  height: 100%;
  > div {
    width: 100%;
    height: 100%;
  }
}
</style>
