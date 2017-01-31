$(document).ready(function(){
	
	function editState(thing) {
		var thingColor = thing.parent().attr('value');
		if(!tooggleToTrue) {
			thing.removeClass('active');
			thing.css({
				'background':'#333333'
			});
		} else {
			thing.addClass('active');
			thing.css({
				'background':thingColor
			});
		}
	}
	
	var isDown = false;
	var toggleToTrue = false;
	
	$('.thing li')
		.mousedown(function() {
			isDown = true;
			tooggleToTrue = !$(this).hasClass('active');
		})
		.mouseup(function() {
			isDown = false;
		});
	
	$(document).on('mouseover', '.thing li', function(){
		if(isDown) {
			editState($(this));
		}
	});
	
	$(document).on('mousedown', '.thing li', function(){
		editState($(this));
	});
	
	var colors = [
		"#2AD33F", 
		"#EDF11A", 
		"#D3412A",
		"#2D69E2",
		"#D32AD1",
		"#5F4695",
		"#FB8F17",
		"#FFFFFF",
		"#00FFD4"
	];
	
	var itemAdded = 0;
	
	$('.addThing').click(function(){
		$(".template")
			.clone(true, true)
			.removeClass('template')
			.attr('value', colors[itemAdded])
			.appendTo(".things");
		
		if(itemAdded == 8) {
			itemAdded = 0;
		} else {
			itemAdded++;
		}
	});
	
	$(document).on('click', '.remove', function(){
		$(this).parent().fadeOut(500, function() { 
			$(this).remove();
		});
	});
});