var $buoop = {};
var initBuoop = function(msg) {
  $buoop = {
    reminder: 0,
    text: msg,
    vs: {i:9} 
  };
  $buoop.ol = window.onload;
  window.onload = function() {
    try {
      if ($buoop.ol) {
        $buoop.ol();
      }
    } catch (e) {}
    var e = document.createElement("script");
    e.setAttribute("type", "text/javascript");
    e.setAttribute("src", "//browser-update.org/update.js");
    document.body.appendChild(e);
  }
};
