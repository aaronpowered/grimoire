$( document ).ready(function() {

	$('.dice-container').draggable();
	
	var previous;

	function randomizeNumber() {
		//Randimizes a number between 1 and 6
		var random = Math.floor((Math.random() * 6) + 1);
		return random;
	}

	function rollDice(side) {
		//Removes old class and adds the new
		var dice = $('#dice');
		var currentClass = dice.attr('class');
		var newClass = 'show-' + side;
		
		dice.removeClass();
		dice.addClass(newClass);
		
		if (currentClass == newClass) {
			dice.addClass('show-same');
		}
			
	}
	
	function soundEffect() {
		var audio = $("audio")[0];
		audio.pause();
		audio.currentTime = 0;
		audio.play();
	}
	
	$('.dice-container').on('dragstop ', function() {
		//Function triggered on dice dragstop
		var number = randomizeNumber();

		if (number == 1) { rollDice('front'); }
		else if (number == 2) { rollDice('back'); }
		else if (number == 3) { rollDice('right'); }
		else if (number == 4) { rollDice('left'); }
		else if (number == 5) { rollDice('top'); }
		else if (number == 6) { rollDice('bottom'); }
		
		soundEffect();
		
	});
	
	$('#help').on('click', function() {
		//Toggles the instructions
		var help = $('#help');
		var instructions = $('#instructions')
		
		instructions.fadeToggle();
		
		if (help.text() == '?') {
			help.text('X');
		} else {
			help.text('?');
		}
	});

});