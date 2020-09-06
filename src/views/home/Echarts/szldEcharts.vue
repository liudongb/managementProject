<template>
  <div class="szld">
    <div ref="szldEcharts"></div>
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
      this.chart = echarts.init(this.$refs.szldEcharts);
      var option = {
        // backgroundColor: "#323a5e",
        grid: {
          left: "2%",
          right: "4%",
          bottom: "5%",
          top: "10%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: [
            "民主生活会",
            "述责述廉报告",
            "党内问责",
            "廉政谈话",
            "专项监督检查",
            "以案促改",
            "协助廉政审核",
            "主体责任落实",
            "一把手沟通",
            "列席重要会议"
          ],
          axisLine: {
            lineStyle: {
              color: "#cad7e0"
            }
          },
          axisTick: "false",
          axisLabel: {
            show: true,
            color: "#333",
            fontSize: 16,
            formatter: function(val) {
              var strs = val.split(""); //字符串数组
              var str = "";
              for (var i = 0, s; (s = strs[i++]); ) {
                //遍历字符串数组
                str += s;
                if (!(i % 4)) str += "\n"; //按需要求余
              }
              return str;
            }
          }
        },

        yAxis: {
          type: "value",
          name: "次数",
          nameTextStyle: {
            color: "#333"
          },
          //   max:'150',
          axisLine: {
            show: true,
            lineStyle: {
              color: "#cad7e0"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#e6eef5"
            }
          },
          axisLabel: {
            color: "#333",
            fontSize: 16
          }
        },
        // "dataZoom": [{
        //   "show": true,
        //   "height": 12,
        //   "xAxisIndex": [
        //     0
        //   ],
        //   bottom:'8%',
        //   "start": 10,
        //   "end": 90,
        //   handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        //   handleSize: '110%',
        //   handleStyle:{
        //     color:"#d3dee5",

        //   },
        //   textStyle:{
        //     color:"#fff"},
        //   borderColor:"#90979c"
        // }, {
        //   "type": "inside",
        //   "show": true,
        //   "height": 15,
        //   "start": 1,
        //   "end": 35
        // }],
        series: [
          {
            name: "",
            type: "bar",
            barWidth: "15%",
            label: {
              show: true,
              position: "top",
              color: "#333"
            },
            itemStyle: {
              normal: {
                color: "#23a393"
              }
            },
            data: [46, 40, 36, 28, 28, 23, 21, 18, 14, 8]
          }
        ]
      };
      this.chart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
.szld {
  width: 100%;
  height: 100%;
  > div {
    width: 100%;
    height: 100%;
  }
}
</style>
