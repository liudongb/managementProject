import Vue from "vue";

Vue.filter("dateFormat", function(originVal) {
  const dt = new Date(originVal);
  //年的时间
  const y = dt.getFullYear();
  //月的时间  .padStart 不足两位自动补0  2位长度
  const m = (dt.getMonth() + 1 + "").padStart(2, "0");
  //日的时间
  const d = (dt.getDate() + "").padStart(2, "0");

  //小时
  const hh = (dt.getHours() + "").padStart(2, "0");
  //分钟
  const mm = (dt.getMinutes() + "").padStart(2, "0");
  //秒数
  const ss = (dt.getSeconds() + "").padStart(2, "0");

  //将它们拼接成完整的字符串
  //return 'yyyy-mm-dd hh:mm:ss'  可以改成下面的方法
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
});
