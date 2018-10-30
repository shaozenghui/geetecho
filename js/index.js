$('#status').click(function(e){
	e.preventDefault();
	var this_ = $(this);
	$(this).next().slideToggle(200,function(){
		if($(this).css('display') == 'block'){
			this_.addClass('color_1');
		}else{
			this_.removeClass('color_1');
		}
	});
	var this_ = $(this)
	$('#search_sel_class_list li').each(function(index, el) {	
		if($(this).html() ==  this_.html()){
			$(this).css({background:'#3da8f6',color:'#fff'});
		}else{
			$(this).css({background:'#fff',color:'#101010'});
		}
	});
    
})
$('#search_sel_class_list li').each(function(index, el) {
	$(this).mouseenter(function(event) {
		$(this).css({background:'#3da8f6',color:'#fff'});
	});
	$(this).mouseleave(function(event) {
			$(this).css({background:'#fff',color:'#101010'});
	});
});

$('#search_sel_class_list').mouseleave(function(event) {
	$(this).hide();
});

$('.car_sel_class a').each(function(index, el) {
	$(this).click(function(){
		$(this).parent().slideUp(200);
	})
});
//用户登录下拉表
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
// 加载更多
$(document).click(function(e){
	if(e.target.className != 'user'){
		$('.user_list').hide();
		$('.top_arrow').hide();
	}
	if(e.target.className != 'search_sel_class'){
		$('#search_sel_class_list').hide();
	}
	$('#status').removeClass('color_1');
});
function conlist(){
	function con_list(){
		$('.con_list li').each(function(index, el) {
			$(this).css({marginRight:40});
			if (( $(this).index()+1) % 4 == 0 ){
				$(this).css({marginRight:0});
			}
		});
	}
	con_list();
	// 卡片hover
	$('.con_list li').mouseenter(function(event) {
		$(this).stop(true,true).stop(true,true).animate({top:-4});
		$(this).children(".car_sel_class").show();
		$(this).children(".box").show();
	});
	$('.con_list li').mouseleave(function(event) {
		$(this).stop(true,true).stop(true,true).animate({top:0});
		$(this).children(".car_sel_class").hide();
		$(this).children(".box").hide();
	});
	// 删除模态框
	$('.con_list .del').click(function(){
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
			$('#del_modal .del_modal_con').stop(true,true).animate({top:'40%'},400);
			$('body').css({overflowY:'visible'})
			this_.parents('li').remove();
			con_list();
		})
	})
	
	function many(){
		var scroll_top = $('html,body').scrollTop();
		if(scroll_top >= 300){
			$('.back_top').show();
		}else{
			$('.back_top').hide();
		}
	}
	many();
	$(document).scroll(function(event) {
		many();
	});

	// 回到顶部

	$('.back_top').click(function(){
		$('html,body').animate({scrollTop:0})
	})

	 	
	 	// 创建客户
	 	
	 	$('.con_list .add').click(function(){
	 		
	 	})

	 	//内勤点击禁止创建提示信息
	 	
	 	$('.con_list .disabled_add').click(function(){
	 		$('#disabled_modal').fadeIn(200);
	 		$('#disabled_modal .disabled_modal_con').fadeIn(100).stop(true,true).animate({top:'50%'},400);
	 		$('body').css({overflowY:'hidden'});
	 	})


	 	// 点击叉号
	 	$('#disabled_modal .disabled_modal_title .img').click(function(){
	 		$('#disabled_modal').fadeOut(200);
	 		$('#disabled_modal .disabled_modal_con').stop(true,true).animate({top:'40%'},400);
	 		$('body').css({overflowY:'visible'})
	 	})

	 	// 点击删除按钮
	 	$('#disabled_modal .disabled_modal_footer button').click(function(){
	 		$('#disabled_modal').fadeOut(200);
	 		$('#disabled_modal .disabled_modal_con').stop(true,true).animate({top:'40%'},400);
	 		$('body').css({overflowY:'visible'})
	 	})

	 	function focus_color(obj){
	 		$(obj).focus(function(){
	 			$(this).addClass('input_focus');
	 		})
	 		$(obj).blur(function(){
	 			$(this).removeClass('input_focus');
	 		})
	 	}
	 	focus_color('input');
	 	focus_color('select');
 		$(".demoUp").mouseover(function(){
 	        var _this = $(this);
 	        _this.justToolsTip({
 	            animation:"moveInTop",
 	            contents:_this.attr('tit'),
 	            gravity:'top',    
 	            animation: 'none'
 	        });
 	     })
}