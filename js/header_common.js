$(document).ready(function($) {
	$('.user').click(function(){
		$('.user_list').slideToggle(200);
	})
	$('.user_list').mouseleave(function(event) {
		$(this).hide();
	});
	$('.user_list li a').click(function(){
		$(this).parent().parent().slideUp(200);
	})
})