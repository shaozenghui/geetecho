$(document).ready(function($) {
	function con_list(){
		$('#con_list .con_form').each(function(index, el) {
			$(this).css({marginRight:38});
			if (( $(this).index()+1) % 3 == 0 ){
				$(this).css({marginRight:0});
			}
		});
	}
	con_list();
	$('select').focus(function(event) {
		$(this).children('option').eq(0).hide();
	});
	$('select').change(function(event) {
		$(this).css({color:'#303030'})
	});
	// 添加成员
		
 	$('#add_member').click(function(){
 		$('.con_form2').eq(0).clone(true).appendTo('#con_list');
		con_list();
 	})
	// input框变颜色
	$('#con_list input').focus(function(){
		$(this).addClass('input_focus');
	})
	$('#con_list input').blur(function(){
		$(this).removeClass('input_focus');
	})
	$('#con_list select').focus(function(){
		$(this).addClass('input_focus');
	})
	$('#con_list select').blur(function(){
		$(this).removeClass('input_focus');
	})
	// 点击模态框叉号
	$('#prompt_modal .prompt_modal_title .img').click(function(){
		$('#prompt_modal').fadeOut(200);
		$('#prompt_modal .prompt_modal_con').stop(true,true).animate({top:'40%'},400);
		$('body').css({overflowY:'visible'})
	})
	// 点击模态框按钮
	$('#prompt_modal .prompt_modal_footer button').click(function(){
		$('#prompt_modal').fadeOut(200);
		$('#prompt_modal .prompt_modal_con').stop(true,true).animate({top:'40%'},400);
		$('body').css({overflowY:'visible'});
		con_list();
	})	
	//提示信息函数
	function prompt(str){
		$('.prompt_modal_body').html(str)
		$('#prompt_modal').fadeIn(200);
		$('#prompt_modal .prompt_modal_con').stop(true,true).animate({top:'50%'},400);
		$('body').css({overflowY:'hidden'})
	}
	// 删除提示信息
	$('#con_list .con_form_del').each(function(index, el) {
		$(this).click(function(){
			var this_ = $(this);
			prompt('删除的客户信息无法找回,确认是否删除');
		})
	});
	// 点击头部链接跳转提示信息
	$('.transparent').click(function(){
		
		prompt('请完善家庭成员信息并保存');
	})
	// 点击下一步跳转提示信息
	$('#next_step').click(function(){
		// 第一种判断
		// prompt('请完善家庭成员信息并保存');
		// 第二种判断
		prompt('家庭成员信息未填写完成,是否离开,离开后信息将不会保存');
	})
	//点击保存提示信息
	$('#save_step').click(function(){
		$('#push span').html('信息已保存')
		$('#push').fadeIn(1000,function(){
			
		 	 setTimeout(function(){
 		 	 	 $('#push').fadeOut(1000);
 		 	 },2000)
		 });
		$('.transparent').hide();
	})
	$('#push i').click(function(){
		$(this).parent().hide();
	})
});
