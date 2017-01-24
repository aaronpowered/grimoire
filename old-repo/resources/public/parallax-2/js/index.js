$(document).ready(function(){
	var currentMousePos = { x: -1, y: -1 };
	$(document).mousemove(function(event) {
		currentMousePos.x = event.pageX - (window.innerWidth / 2);
		currentMousePos.y = event.pageY - (window.innerHeight / 2);
		
		$('#one').css('transform', 'translate(' + (30 + (currentMousePos.x * 0.010)) + 'px,' + (30 + (currentMousePos.y * 0.010)) + 'px)');
		$('#two').css('transform', 'translate(' + (80 + (currentMousePos.x * 0.013)) + 'px,' + (55 + (currentMousePos.y * 0.013)) + 'px)');
		$('#thr').css('transform', 'translate(' + (30 + (currentMousePos.x * 0.016)) + 'px,' + (80 + (currentMousePos.y * 0.016)) + 'px)');
	});
});