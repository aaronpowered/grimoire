Background = new View({
	x: 0, y: 0,
	width: 720,
	height: 1216,
	image: 'http://cemre-framer-examples.s3-website-us-east-1.amazonaws.com/framer-parallax/images/Background.jpg'
})

Content = new View({
	x: 0, y: 0,
	width: 640,
	height: 1136,
	image: 'http://cemre-framer-examples.s3-website-us-east-1.amazonaws.com/framer-parallax/images/Content.png'
});


accXraw = 0;
accYraw = 0;

accXsmooth = 0;
accYsmooth = 0;
factor = 0.7;


window.addEventListener("devicemotion", function(event) {
	// raw accelerometer data
	accXraw = event.accelerationIncludingGravity.x;  
	accYraw = event.accelerationIncludingGravity.y * -1;  

	accXsmooth = factor * accXsmooth + (1 - factor) * accXraw;
	accYsmooth = factor * accYsmooth + (1 - factor) * accYraw;

	Background.x = accXsmooth * -3 - 40;
	Background.y = accYsmooth * -3 - 40;

	Content.x = accXsmooth * 3;
	Content.y = accYsmooth * 3;
});






// Simulate on desktop

if (!Utils.isMobile()) {
	// Place phone in the middle of the screen
	Phone = new View({
		midX: window.innerWidth / 2,
		midY: window.innerHeight / 2,
		width: 768,
		height: 1606,
		scale: 0.5,
		image: 'http://cemre-framer-examples.s3-website-us-east-1.amazonaws.com/framer-parallax/images/phone.png',
	});	

	Super = new View({
		x: 64,
		y: 236,
		width: 640,
		height: 1136,
		superView: Phone
	})
	Super.style.backgroundColor = 'black'

	Background.superView = Super
	Content.superView = Super


	Controls = new View({
		x: 0,
		y: 0,
		width: window.innerWidth,
		height: window.innerHeight,
     backgroundColor: 'transparent'
	})

	Controls.on('mousemove', function(e) {
		// simulate with mouse
		// compare mouse position relative to width of screen
		accXraw = ((e.offsetX / window.innerHeight) - 0.5) * 10;
		accYraw = ((e.offsetY / window.innerWidth) - 0.5) * 10;

		Background.x = accXraw * -5 - 30;
		Background.y = accYraw * -5 - 30;

		Content.x = accXraw * 5;
		Content.y = accYraw * 5;

		e.stopPropagation();
	});
}