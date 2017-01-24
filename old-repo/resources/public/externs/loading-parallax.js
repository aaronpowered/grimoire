var x = xGoal = y = yGoal = 0, easingRatio = 0.01, raf, d = document, wrap = d.querySelector('.js-parallax');
raf = function (){
  x += (xGoal - x) * easingRatio; y += (yGoal - y) * easingRatio;
  wrap.style.transform = 'translate3d(' + -x + 'px, ' + -y + 'px, 0)';
  requestAnimationFrame(raf);
};
raf();
d.addEventListener('mousemove', function(e){
  xGoal = e.pageX; yGoal = e.pageY;
});