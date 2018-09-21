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

	$('.head_list_tab a').eq(0).on("mousemove",function(){
		$('.header_second_m').show();
		$('.head_list_tab a').eq(0).addClass('head_list_tab_hover')
	}).on("mouseout",function(){
		$('.header_second_m').hide();
		$('.head_list_tab a').eq(0).removeClass("head_list_tab_hover")
	})
	$('.header_second_m').on("mousemove",function(){
		$('.header_second_m').show();
		$('.head_list_tab a').eq(0).addClass('head_list_tab_hover')
	}).on("mouseout",function(){
		$('.header_second_m').hide();
		$('.head_list_tab a').eq(0).removeClass("head_list_tab_hover")
	})

	$('.head_list_tab a').eq(1).on("mousemove",function(){
		$('.header_second_b').show();
		$('.head_list_tab a').eq(1).addClass('head_list_tab_hover')
	}).on("mouseout",function(){
		$('.header_second_b').hide();
		$('.head_list_tab a').eq(1).removeClass("head_list_tab_hover")
	})
	$('.header_second_b').on("mousemove",function(){
		$('.header_second_b').show();
		$('.head_list_tab a').eq(1).addClass('head_list_tab_hover')
	}).on("mouseout",function(){
		$('.header_second_b').hide();
		$('.head_list_tab a').eq(1).removeClass("head_list_tab_hover")
	})
})