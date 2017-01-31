TweenMax.set('svg', {
	visibility: 'visible'
});

TweenMax.set('circle', {
	transformOrigin: 'center center'
});

var $ring = $('circle');

$ring.each(function(index) {
	TweenMax.fromTo(this, 1.5, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, ease: Back.easeOut, delay: index/9, yoyo: true, repeat: -1 });
})