$(document).ready(function($) {
		$('#search_sel_class_list li').click(function(){
			var str = $(this).html()
			$('#status').html(str).css({color:'#202020'});
			$(this).parent().slideUp(200);
		})
	  // 编辑员工模态框
		$('.content .edit').click(function(){
			$('#edit_modal .edit_modal_title span').html('编辑团队');
			$('#edit_modal').fadeIn(200);
			$('#dropdown-mul-2').fadeIn(0);
			$('#edit_modal .edit_modal_con').stop(true,true).animate({top:'50%'},400);
			$('#dropdown-mul-2').stop(true,true).animate({top:'50%'},400);
			$('body').css({overflowY:'hidden'})
		})
		// 点击叉号
		$('#edit_modal .edit_modal_title .img').click(function(){
			$('#edit_modal').fadeOut(200);
			$('#dropdown-mul-2').fadeOut(200);
			$('#edit_modal .edit_modal_con').stop(true,true).animate({top:'40%'},400);
			$('#dropdown-mul-2').stop(true,true).animate({top:'40%'},400);
			$('body').css({overflowY:'visible'})
		})
		// 点击保存按钮
		$('#edit_modal .edit_modal_footer button').click(function(){
			$('#edit_modal').fadeOut(200);
			$('#dropdown-mul-2').fadeOut(200);
			$('#edit_modal .edit_modal_con').stop(true,true).animate({top:'40%'},400);
			$('#dropdown-mul-2').stop(true,true).animate({top:'40%'},400);
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
 		$('.dropdown-display-label input').focus(function(){
 	 		$(this).removeClass('input_focus');
 	 	})
 	 	$('.dropdown-display-label input').blur(function(){
 	 		$(this).removeClass('input_focus');
 	 	})
	// 添加团队
	$('#add_member').click(function(){
		$('#edit_modal .edit_modal_title span').html('添加团队');
		$('.edit_modal_body input').eq(0).val('')
		.removeAttr('disabled').css({cursor:'pointer'});
		$('#edit_modal').fadeIn(200);
		$('#dropdown-mul-2').fadeIn(0);
		$('#edit_modal .edit_modal_con').stop(true,true).animate({top:'50%'},400);
		$('#dropdown-mul-2').stop(true,true).animate({top:'50%'},400);
		$('body').css({overflowY:'hidden'})
	})
	// 删除模态框
	$('.content .del').click(function(){
		var this_ = $(this);
		$('#del_modal').fadeIn(200);
		$('#del_modal .del_modal_con').stop(true,true).animate({top:'50%'},400);
		$('body').css({overflowY:'hidden'})

		// 点击叉号
		$('#del_modal .del_modal_title .img').click(function(){
			$('#del_modal').fadeOut(200);
			$('#del_modal .del_modal_con').stop(true,true).animate({top:'40%'},400);
			$('body').css({overflowY:'visible'})
		})

		// 点击删除按钮
		$('#del_modal .del_modal_footer button').click(function(){
			$('#del_modal').fadeOut(200);
			this_.parents('tr').remove();
		})
	})
});