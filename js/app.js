$(document).ready(function(){

	$("*").keydown(function(input){
		if(input.keyCode==88){
		$('.ryu-cool').show();
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
	}
	})

	.keyup(function(){
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	});

	$('.ryu').mouseenter(function(){
			$('.ryu-still').hide();
			$('.ryu-ready').show();
	})

	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})

	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
		{'left': '1050px'},
		500,
		function() {
			$(this).hide();
			$(this).css('left', '630px');
		}
		);
		//play hadouken sound
		//Show hadouken and animate it to the right of the screen
	})

	.mouseup(function(){
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	//rye goes back to his ready position
	});


});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}