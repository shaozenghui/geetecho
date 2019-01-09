$(document).ready(function($){
	$('.cont_f_list>li').each(function(index, el) {
		if (( $(this).index()+1) % 3 == 0 ){
			$(this).css({marginRight:0});
		}
	});
	// 编辑删除
	$('.cont_f_list>li .cont_f_list_con ._item ._list span').mouseenter(function(){
		$(this).next().show();
		$(this).children("i").css({color:'#3da8f5'})
	})
	$('.cont_f_list>li .cont_f_list_con ._item ._list span').mouseleave(function(){
		$(this).next().hide();
		$(this).children("i").css({color:'#919191'})
	})
	$('.cont_f_list>li .cont_f_list_con ._item ._list ul').mouseenter(function(){
		$(this).show();
		$(this).prev().children("i").css({color:'#3da8f5'})
	})
	$('.cont_f_list>li .cont_f_list_con ._item ._list ul').mouseleave(function(){
		$(this).hide();
		$(this).prev().children("i").css({color:'#919191'})
	})

	// 选择颜色
	$('.cont_f_list>li ._item .cont_f_list_edit .color_list span').click(function(){
		$(this).parents('._item').find('.cont_f_list_edit .color_list span').removeClass("con_select");
		$(this).addClass("con_select");
	})

	// 添加备注

	$('#cont_f_list_add .cont_f_list_add').click(function(){
		$(this).hide();
		$(this).parents('._item').find('.cont_f_list_edit').show();
	})

	//保存编辑,获取选中的颜色

	$('.cont_f_list>li ._item .cont_f_list_edit ._btn .submit').click(function(){
		$(this).parents('.cont_f_list_edit').find('.color_list span').each(function(el,index){
			if($(this).is('.con_select')){
				var con = $(this).css('background').indexOf(')')+1;
				var color = $(this).css('background').slice(0,con);
				console.log($(this))
				$(this).parents('._item').find('._list').css('borderLeft','5px solid '+color);
			}
		})
		$('#push span').html('信息已保存')
		$('#push').fadeIn(1000,function(){
		 	 setTimeout(function(){
 		 	 	 $('#push').fadeOut(1000);
 		 	 },2000)
		});
		$(this).parents('li').find('#cont_f_list_add').show();
		$(this).parents('li').find('#cont_f_list_add .cont_f_list_add').show();
		$(this).parents('._item').find('.cont_f_list_edit').hide();
		$(this).parents('._item').find("._list").show();
	})

	// 取消编辑
	$('.cont_f_list>li ._item .cont_f_list_edit ._btn .cancel').click(function(){
		$(this).parents('li').find('#cont_f_list_add').show();
		$(this).parents('li').find('#cont_f_list_add .cont_f_list_add').show();
		$(this).parents('._item').find('.cont_f_list_edit').hide();
		$(this).parents('._item').find("._list").show();
		$(this).parents('li').find('#cont_f_list_add .color_list span').removeClass("con_select");
		$(this).parents('li').find('#cont_f_list_add .cont_f_list_edit textarea').val("");
		$(this).parent().find('.submit').attr('disabled',true);
		$(this).parent().find('.submit').addClass('submit_no_active');
	})
	// 判断输入内容是否为空

	$('.cont_f_list>li ._item .cont_f_list_edit textarea').keyup(function(){
		if($(this).val().trim() == ''){
			$(this).parent().find('.submit').attr('disabled',true);
			$(this).parent().find('.submit').addClass('submit_no_active');
		}else{
			$(this).parent().find('.submit').removeAttr('disabled');
			$(this).parent().find('.submit').removeClass('submit_no_active');
		}
	})

	$('#push i').click(function(){
		$(this).parent().hide();
	})
	//点击点进行编辑和删除
	$('.cont_f_list>li .cont_f_list_con ._item ._list ul .edit').click(function(){
		$(this).parents('li').find('._list').show();
		$(this).parents('._item').find('._list').hide();
		$(this).parents('._item').find('.submit').removeAttr('disabled');
		$(this).parents('._item').find('.submit').removeClass('submit_no_active');
		$(this).parents('li').find('.cont_f_list_edit').hide();
		$(this).parents('li').find('#cont_f_list_add').hide();
		$(this).parents('._item').find('.cont_f_list_edit').show();
		$(this).parent().hide();
		var str = $(this).parents('div').children('p').html()
		$(this).parents('._item').find('.cont_f_list_edit').children('textarea').val(str);
		var color = $(this).parents('div').css('borderLeftColor');
		$(this).parents('._item').find('.cont_f_list_edit .color_list span').each(function(){
			var con = $(this).css('background').indexOf(')')+1;
			var str = $(this).css('background').slice(0,con);
			if(color == str){
				$(this).addClass('con_select')
			}else{
				$(this).removeClass('con_select');
			}
		})
	})
   // 点击删除提示信息模态框叉号
	$('#prompt_modal .prompt_modal_title .img').click(function(){
		$('#prompt_modal').fadeOut(200);
		$('#prompt_modal .prompt_modal_con').stop(true,true).animate({top:'40%'},400);
		$('body').css({overflowY:'visible'})
	})
	// 点击删除提示信息模态框按钮
	$('#prompt_modal .prompt_modal_footer button').click(function(){
		$('#prompt_modal').fadeOut(200);
		$('#prompt_modal .prompt_modal_con').stop(true,true).animate({top:'40%'},400);
		$('body').css({overflowY:'visible'});
		$('#push span').html('删除成功')
		$('#push').fadeIn(1000,function(){
			
		 	 setTimeout(function(){
 		 	 	 $('#push').fadeOut(1000);
 		 	 },2000)
		});
	})	
	//提示信息函数
	$('.cont_f_list>li .cont_f_list_con div ul .del').click(function(){
   	    $('.prompt_modal_body').html('删除的内容无法恢复,请谨慎操作')
   	    $('#prompt_modal').fadeIn(200);
   	    $('#prompt_modal .prompt_modal_con').stop(true,true).animate({top:'50%'},400);
   	    $('body').css({overflowY:'hidden'});
		
   })
})