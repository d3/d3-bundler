if (typeof requestAnimationFrame === "undefined") {
  requestAnimationFrame = typeof window !== "undefined"
      && (window.msRequestAnimationFrame
      || window.mozRequestAnimationFrame
      || window.webkitRequestAnimationFrame
      || window.oRequestAnimationFrame)
      || function(callback) { return setTimeout(callback, 17); };
}
