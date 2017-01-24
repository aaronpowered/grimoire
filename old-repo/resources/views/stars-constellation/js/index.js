
// Vars

var svg = document.querySelector('svg');
var select = document.getElementById('select');

var tlStars = new TimelineMax();
var tlСonstellations = new TimelineMax({paused: true});

// Set

TweenMax.set([
	'#goat', '#owl', '#raccoon', '#bear'
	], {
		css: {
			visibility: 'visible'
		}
	});

TweenMax.set(['#goat *', '#owl *', '#raccoon *', '#bear *'], {transformOrigin: 'center'});
TweenMax.set(['#owl *', '#raccoon *', '#bear *'], {scale: 0});

// Timelines

function constellation(newVal, oldVal) {

	tlСonstellations
		.to(oldVal, 1.2, {
			scale: 1,
			transformOrigin: 'center',
			ease: Power4.easeIn
		})

		.to(oldVal + ' path', 1.2, {
			scale: 0
		}, '-=.6')

		.to(oldVal + ' circle', .6, {
			scale: 0,
			ease: Bounce.easeIn
		}, '-=1.2')

		.staggerTo(newVal + ' path', .3, {
			scale: 1
		}, .02)
	
		.to(newVal + ' circle', 1.2, {
			scale: 1,
			ease: Bounce.easeOut
		}, '-=.4')

		.to(newVal, 1.4, {
			scale: 1.06,
			transformOrigin: 'center',
			ease: Power2.easeInOut
		}, '-=.54')
}

TweenMax.to('#Objects', 4, {
		y: -40,
		ease: Power1.easeInOut,
		repeat: -1,
		yoyo: true
	});

tlStars
	.staggerTo('#stars circle', 10, {
		cycle: {
			x: random,
			y: random
		},
		repeat: -1,
		yoyo: true,
		ease: Power1.easeInOut
	})

// Select

var oldVal;

select.addEventListener('focus', function() {
	oldVal = this.value;
});

select.addEventListener('change', function() {
	constellation(this.value, oldVal);
	tlСonstellations.play();
	this.blur();
})

// Helpers

function random(i) {
	return (Math.random() * 2 - 1) * (i + 120);
};