// 编辑员工模态框
	$('.content .edit span').click(function(){
		$('.edit_modal_title span').html('编辑员工');
		var str = $(this).parents('tr').children('td').eq(0).html();
		$('.edit_modal_body input').eq(0).val(str)
		.attr({disabled:'true'}).css({cursor:'not-allowed'});
		$('#edit_modal').fadeIn(200);
		$('#edit_modal .edit_modal_con').stop(true,true).animate({top:'50%'},400);
		$('body').css({overflowY:'hidden'})
	})
	// 点击叉号
	$('#edit_modal .edit_modal_title .img').click(function(){
		$('#edit_modal').fadeOut(200);
		$('#edit_modal .edit_modal_con').stop(true,true).animate({top:'40%'},400);
		$('body').css({overflowY:'visible'})
	})
	// 点击保存按钮
	$('#edit_modal .edit_modal_footer button').click(function(){
		$('#edit_modal').fadeOut(200);
		$('#edit_modal .edit_modal_con').stop(true,true).animate({top:'40%'},400);
		$('body').css({overflowY:'visible'})
	})


// input框颜色
	$('input').focus(function(){
 		$(this).addClass('input_focus');
 	})
 	$(' input').blur(function(){
 		$(this).removeClass('input_focus');
 	})
 	$('select').focus(function(){
 		$(this).addClass('input_focus');
 		$(this).children('option').eq(0).hide();
 	})
 	$('select').blur(function(){
 		$(this).removeClass('input_focus');
 	})
 	$('select').change(function(){
 		$(this).css({color:'#202020'});
 	})
// 添加员工
$('#add_member').click(function(){
	$('.edit_modal_title span').html('添加员工');
	$('.edit_modal_body input').eq(0).val('')
	.removeAttr('disabled').css({cursor:'pointer'});
	$('#edit_modal').fadeIn(200);
	$('#edit_modal .edit_modal_con').stop(true,true).animate({top:'50%'},400);
	$('body').css({overflowY:'hidden'})
})