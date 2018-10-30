$(document).ready(function($) {

	$('.select').click(function(e){
		e.preventDefault();
		var this_ = $(this);
		$('.search_list').slideToggle(200,function(){});
		$('.search_list li').each(function(index, el) {	
			if($(this).html() ==  this_.html()){
				$(this).css({background:'#3da8f6',color:'#fff'});
			}else{
				$(this).css({background:'#fff',color:'#101010'});
			}
		});
 
	})
	// $('.search_list li').each(function(index, el) {
	// 	$(this).mouseenter(function(event) {
	// 		$(this).css({background:'#3da8f6',color:'#fff'});
	// 	});
	// 	$(this).mouseleave(function(event) {
	// 			$(this).css({background:'#fff',color:'#101010'});
	// 	});
	// });

	$('.search_list').mouseleave(function(event) {
		$(this).hide();
	});
	$('.search_list li').click(function(){
		$('.search_list').hide();
		$('.select').html($(this).html())
		$('.select').removeClass('color_1');
	})
	$("#table tbody tr td:first-child input").change(function(){
		console.log($(this).prop("checked"))
	})
});
