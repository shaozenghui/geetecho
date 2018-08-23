$(document).ready(function($) {
	$('.user').click(function(){
		$('.user_list').slideToggle(200);
		$('.top_arrow').slideToggle(60);
	})
	$('.user_list').mouseleave(function(event) {
		$(this).hide();
		$('.top_arrow').hide();
	});
	$('.user_list li a').click(function(){
		$(this).parent().parent().slideUp(200);
		$('.top_arrow').hide();
	})
})