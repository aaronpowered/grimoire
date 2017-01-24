var graphic = document.getElementById("graphic");

function moveChart(origin, end) {
  $(origin).on("click", function() {
    var moveTo = document.getElementById(end);
    var s = moveTo.getBBox();
    var amt = 75;
    newView = "" + (s.x - amt) + " " + (s.y - amt) + " " + (s.width + amt*2) + " " + (s.height + amt*2);
    TweenMax.to(graphic, 1.5, {
        attr: { viewBox: newView },
        ease:Circ.easeOut
      });
  });
}

function moveTwice(origin, mid, end) {
  $(origin).on("click", function() {
    var moveMid = document.getElementById(mid);
    var moveEnd = document.getElementById(end);
    var endRect = "#" + end + " path";
    var m = moveMid.getBBox();
    var e = moveEnd.getBBox();
    var amt = 75;
    midView = "" + (m.x - amt) + " " + (m.y - amt) + " " + (m.width + amt*2) + " " + (m.height + amt*2);
    endView = "" + (e.x - amt) + " " + (e.y - amt) + " " + (e.width + amt*2) + " " + (e.height + amt*2);
    var tl = new TimelineLite();
    tl.to(graphic, 1.5, {
        attr: { viewBox: midView },
        ease:Circ.easeOut
      });
    tl.to(graphic, 1.5, {
        attr: { viewBox: endView },
        ease:Circ.easeOut
      }, "+=1");
    tl.staggerFromTo(endRect, 3, {
      drawSVG:"0 0"
    }, {
      drawSVG:true
    }, 0.1);
    tl.fromTo(endRect, 1, {
      fill:"#242326"
    }, {
      fill:"#468391",
      ease:Circ.easeOut
    });
  });
}

function endChart(origin, end) {
  $(origin).on("click", function() {
    var moveTo = document.getElementById(end);
    var aRect = "#" + end + " path";
    var s = moveTo.getBBox();
    var amt = 75;
    newView = "" + (s.x - amt) + " " + (s.y - amt) + " " + (s.width + amt*2) + " " + (s.height + amt*2);
    var tl = new TimelineLite();
    tl.to(graphic, 1.5, {
        attr: { viewBox: newView },
        ease:Circ.easeOut
      });
    tl.staggerFromTo(aRect, 3, {
      drawSVG:"0 0"
    }, {
      drawSVG:true
    }, 0.1);
    tl.fromTo(aRect, 1, {
      fill:"#242326"
    }, {
      fill:"#468391",
      ease:Circ.easeOut
    });
  });
}

moveChart(".start-yes", "variation");
moveChart(".start-no", "delorean");

moveChart(".tonal-no", "super-complex");
moveChart(".tonal-yes", "move");

moveChart(".email-no", "move");
moveChart(".email-yes", "animate-it");

endChart(".super-complex-no", "svg-compendium");
moveChart(".super-complex-yes", "specific");

moveTwice(".specific-no", "srcset", "jpg-webp");
moveTwice(".specific-yes", "picture", "jpg-webp");

moveChart(".delorean-no", "tonal-2");
moveChart(".delorean-yes", "fancy");

moveChart(".tonal-q-yes", "transparency");
endChart(".tonal-q-no", "use-svg"); 

moveChart(".transparency-yes", "complex");
endChart(".transparency-no", "jpg-webp"); 

endChart(".transparency-q-yes", "png"); 
endChart(".transparency-q-no", "gif"); 

moveChart(".move-yes", "experience"); 
moveChart(".move-no", "specific"); 

moveChart("#animation", "DOM"); 
moveChart("#movie", "movie-2");

endChart(".DOM-yes", "svg-compendium"); 
endChart(".DOM-no", "canvas"); 

endChart("#fragment", "gif-pronounce"); 
endChart("#video-2", "video");