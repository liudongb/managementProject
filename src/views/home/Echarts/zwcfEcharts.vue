<template>
  <div class="zwcf">
    <div ref="zwcfEcharts"></div>
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
      this.chart = echarts.init(this.$refs.zwcfEcharts);
      let option = {
        color: [
          "#ef4848",
          "#f7b42f",
          "#1ec512",
          "#22bba8",
          "#3070f0",
          "#10b0eb"
        ],
        title: {
          text: "1520\n总数",
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
            radius: ["30%", "80%"],
            center: ["50%", "50%"],
            roseType: "area",
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
                value: 88,
                name: "开除"
              },
              {
                value: 146,
                name: "撤职"
              },
              {
                value: 186,
                name: "降级"
              },
              {
                value: 272,
                name: "记大过"
              },
              {
                value: 348,
                name: "记过"
              },
              {
                value: 435,
                name: "警告"
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
.zwcf {
  width: 100%;
  height: 100%;
  > div {
    width: 100%;
    height: 100%;
  }
}
</style>
