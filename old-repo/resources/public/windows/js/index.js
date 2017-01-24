$(document).ready(function() {

	$("#window").mousemove(function(e) {

		var velocity = 180;
		var height = velocity / $(window).height();
		var width = velocity / $(window).width();

		console.log(velocity)
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var X = width * pageX * -1;
		var Y = height * pageY * -1;
		$('#window > .innerWindow').css("background-position", X + "px     " + Y + "px");
		$('#window2 > .innerWindow2').css("background-position", (X - 530) + "px     " + Y + "px");
	});

});