import debounce from "debounce";
export default {
  mounted() {
    window.addEventListener("resize", this.chartResize);
  },
  methods: {
    chartResize() {
      debounce(() => {
        this.chart && this.chart.resize();
      }, 100)();
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.chartResize);
    this.chart && this.chart.dispose();
    this.chart = null;
  }
};
