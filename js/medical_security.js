$(document).ready(function(){
	$('#contnet .content .medical_status .con ul li ').each(function(el,index){
		var H = $(this).height();
		$(this).children('div').css({height:H+"px",lineHeight:H+"px"})
	})
	// 医保详情
	 	$('#mdetail_adjustment_modal .mdetail_adjustment_modal_title .img').click(function(){
	 		$('#mdetail_adjustment_modal').fadeOut(200);
	 		$('#mdetail_adjustment_modal .mdetail_adjustment_modal_con').stop(true,true).animate({top:'40%'},400);
	 		$('body').css({overflowY:'visible'})
	 	})
	 	$('#mdetail_adjustment_modal .mdetail_adjustment_modal_footer button').click(function(){
			$('#mdetail_adjustment_modal').fadeOut(200);
			$('#mdetail_adjustment_modal .mdetail_adjustment_modal_con').stop(true,true).animate({top:'40%'},400);
			$('body').css({overflowY:'visible'});
		})	
  	  $('#contnet .content .medical_status .con ul li div:nth-child(5)').click(function(){
  	 	$('#mdetail_adjustment_modal').fadeIn(200);
  	 	$('#mdetail_adjustment_modal .mdetail_adjustment_modal_con').animate({top:'50%'},400);
  	 	$('body').css({overflowY:'hidden'})
  	 })
  	 // 暂无保险提示信息

		// 点击叉号
		$('#no_insurance_modal .no_insurance_modal_title .img').click(function(){
			$('#no_insurance_modal').fadeOut(200);
			$('#no_insurance_modal .no_insurance_modal_con').animate({top:'40%'},400);
			$('body').css({overflowY:'visible'})
		})
		// 点击删除按钮
		$('#no_insurance_modal .no_insurance_modal_footer button').click(function(){
			$('#no_insurance_modal').fadeOut(200);
			$('#no_insurance_modal .no_insurance_modal_con').animate({top:'40%'},400);
			$('body').css({overflowY:'visible'})
		});

	 // 结论与建议
  	 	$('#jy_adjustment_modal .jy_adjustment_modal_title .img').click(function(){
  	 		$('#jy_adjustment_modal').fadeOut(200);
  	 		$('#jy_adjustment_modal .jy_adjustment_modal_con').stop(true,true).animate({top:'40%'},400);
  	 		$('body').css({overflowY:'visible'})
  	 	})
  	 	$('.jy_adjustment_modal_footer button').click(function(){
			$('#jy_adjustment_modal').fadeOut(200);
			$('#jy_adjustment_modal .jy_adjustment_modal_con').stop(true,true).animate({top:'40%'},400);
			$('body').css({overflowY:'visible'});
		})	
	  $('.btn4').click(function(){
	 	$('#jy_adjustment_modal').fadeIn(200);
	 	$('#jy_adjustment_modal .jy_adjustment_modal_con').animate({top:'50%'},400);
	 	$('body').css({overflowY:'hidden'})
	 })

})