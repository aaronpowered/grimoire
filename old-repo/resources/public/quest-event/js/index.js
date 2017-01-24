// when the eye is clicked...
$(".eye").click(function() {
	// open or close the eye...
	$(this).toggleClass("all-seeing");
	// reveal or hide the secret book...
	$(".secret-book").toggleClass("revealed");
	// hide any secret messages still showing...
	$(".secret-book label + input[type='radio']").prop('checked', false);
	// and unlight any amulets
	$('input:radio').parents().find(".lit").removeClass("lit");
});

// when a keeper is selected...
$('input:radio').click(function(){
	// first remove the light from any other amulets
	$(this).parents().find(".lit").removeClass("lit");
	// then light the selected amulets
	if( $(this).is(':checked')) {
		$(this).prev().addClass("lit")
	}
})