"use strict";

let watermark = {};

let setWatermark = (str, str2) => {
  let id = "1.23452384164.123412415";

  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id));
  }

  let can = document.createElement("canvas");
  can.width = 380;
  can.height = 380;

  let cans = can.getContext("2d");
  cans.rotate((-20 * Math.PI) / 180);
  cans.font = "16px Vedana";
  cans.fillStyle = "rgba(205, 51, 51, 0.50)";
  cans.textAlign = "center";
  cans.textBaseline = "Middle";
  cans.fillText(str, can.width / 3, can.height / 2);
  cans.fillText(str2, can.width / 3, can.height / 1.8);

  let div = document.createElement("div");
  div.id = id;
  div.style.pointerEvents = "none";
  div.style.top = "70px";
  div.style.left = "0px";
  div.style.position = "fixed";
  div.style.zIndex = "100000";
  div.style.width = document.documentElement.clientWidth - 100 + "px";
  div.style.height = document.documentElement.clientHeight - 100 + "px";
  div.style.background =
    "url(" + can.toDataURL("image/png") + ") left top repeat";
  document.body.appendChild(div);
  return id;
};

// 该方法只允许调用一次
watermark.set = (str, str2) => {
  let id = setWatermark(str, str2);
  setInterval(() => {
    if (document.getElementById(id) === null) {
      id = setWatermark(str, str2);
    }
  }, 500);
  window.onresize = () => {
    setWatermark(str, str2);
  };
};

export default watermark;
