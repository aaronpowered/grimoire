var regex = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/,
arizona = document.getElementById("arizona"),
mesaLayers = arizona.querySelectorAll("path"),
SVGoffsettop = arizona.getBoundingClientRect().top,
vertHeight = arizona.getBoundingClientRect().height,
sun = document.getElementById("sun");

function scrollHandler() {
	  if (window.scrollY < vertHeight) {
	  Array.prototype.forEach.call(mesaLayers, function(layer) { 
		  var layerFill = layer.getAttribute("fill"),
		  vertRoll = Math.abs(window.scrollY - vertHeight) / vertHeight;
		  hslComponents = layerFill.match(regex).slice(1),
		  newHSL = parseFloat(hslComponents[2]) * vertRoll;
		  layer.style.fill = "hsl(" + hslComponents[0] +", "+ hslComponents[1] + "%, " +  newHSL + "%)";
		  arizona.style.background = "hsl(48, " + 100 * vertRoll + "%, " + 88 * vertRoll + "%)";
		  sun.style.transform = "translate3d(0," + window.scrollY / 10 + "px, 0)";
		})
		} else {
			arizona.style.transform = "translateY(-"+ (window.scrollY - vertHeight)+"px)";
	}
}

window.onscroll = function() {
		window.requestAnimationFrame(scrollHandler);
}