$(document).ready(function($) {
	// 支出项
		$('#expenditure_item').click(function(e){
			e.stopPropagation();
			$('.con_zhichu_con').slideToggle(100);
	        $('.con_zhouqi_con').hide();
	        $('.con_jiating_con').hide();
	        $('#table1 .popover').each(function(index, el) {
	        	$(this).hide();
	        	$('#table1 .popover-content').eq($(this).index()).hide();
	        });
	        
		})
		$('.con_zhichu_con li').click(function(){
			$('#expenditure_item span').html($(this).html());
			$('#expenditure_item span').css({color:'#303030'});
			$('.con_zhichu_con').slideUp(100);
		})
	// 添加自定义项目
	    $('.con_list_jd span:last-child').click(function(){
	    	$('#custom_modal').fadeIn(200);
	    	$('#custom_modal .custom_modal_con').animate({top:'50%'},400);
	    	$('body').css({overflowY:'hidden'})
	    })
	    $('.custom_modal_title .img').click(function(){
	    	$('#custom_modal').fadeOut(200);
	    	$('#custom_modal .custom_modal_con').animate({top:'40%'},400);
	    	$('body').css({overflowY:'visible'})
	    })
	    
	    var selectIndex ;
	    var selectIndexFlag = false ;
	    $('#creat').click(function(){
			$('#custom_modal').fadeOut(200);
			$('#custom_modal .custom_modal_con').animate({top:'40%'},400);
			$('body').css({overflowY:'visible'})
			var str = $('#select_o option:selected').html();
			var str2 = $('#select_t option:selected').html();
			var val = $('.custom_from input').val();	
			$('.con_list_tab div').each(function(index, el) {
				if(str == $(this).html()){
					selectIndex = $(this).index();
					selectIndexFlag = true ;
				}
			});
			if(str == "固定支出"){
				$('.con_list_con_list_item1 span').each(function(index, el) {
					if(str2 == $(this).html()){
						$('<li>'+val+'</li>').appendTo($(this).next());
					}
				});
			}else{

				$('.con_list_tab div').each(function(index, el) {
					if(str == $(this).html()){
						$('<li>'+val+'</li>').appendTo($(".con_list_con_list_item").eq($(this).index()).find('ul'));
						return false;
					}
				})
			}
			$('.con_list_>li').eq(0).fadeOut(300);
			$('.con_list_>li').eq(1).fadeIn(300);
			$('#con_list_add_con_project').val(val);
			
		})
	// 删除自定义模态框
	    
	    $('.con_list_jd span:first-child').click(function(){
	    	$('#custom_modal2').fadeIn(200);
	    	$('#custom_modal2 .custom_modal2_con').animate({top:'50%'},400);
	    	$('body').css({overflowY:'hidden'})
	    })
	    $('.custom_modal2_title .img').click(function(){
	    	$('#custom_modal2').fadeOut(200);
	    	$('#custom_modal2 .custom_modal2_con').animate({top:'40%'},400);
	    	$('body').css({overflowY:'visible'})
	    })
	    $('#creat2').click(function(){
			$('#custom_modal2 .custom_modal2_title i:nth-child(1)').show();
			$('#custom_modal2 .custom_modal2_body>div:nth-child(2)').show();
			$('#custom_modal2 .custom_from').hide();
			$('#creat2').hide();
			$('#creat2_').show();
		})
	    $('#custom_modal2 .custom_modal2_title i:nth-child(1)').click(function(){
			$('#custom_modal2 .custom_modal2_title i:nth-child(1)').hide();
			$('#custom_modal2 .custom_modal2_body>div:nth-child(2)').hide();
			$('#custom_modal2 .custom_from').show();
			$('#creat2_').hide();
			$('#creat2').show();
		})
	    $('#creat2_').click(function(){
			$('#custom_modal2').fadeOut(200);
			$('#custom_modal2 .custom_modal2_con').animate({top:'40%'},400);
			$('body').css({overflowY:'visible'})

		})
		$('#table1 td a').click(function(){
			$('#table1 .popover-content').eq($(this).index()).show();
	        $('#table1 .popover').eq($(this).index()).show();
		})

	// 加千分号
	function comdify(n){
	　　var re=/\d{1,3}(?=(\d{3})+$)/g;
	　　var n1=n.replace(/^(\d+)((\.\d+)?)$/,function(s,s1,s2){return s1.replace(re,"$&,")+s2;});
	　　return n1;
	}
	$('#table1 a').each(function(index, el) {
		$(this).html(comdify($(this).html()));
	});
	$('#table1 a').click(function(){
		var this_ = $(this);
		$(this).next().find('form').submit(function(){
			var str = this_.next().find('input').val();
			str = comdify(str);
			this_.html(str);
		});
		var box = this_.next().find('input');
		box.attr({'type':'number'});
		var str1 = box.val();
		$(this).val(str1)
	})
    $('select').change(function(event) {
		$(this).css({color:'#303030'})
	});
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
	})	
	//提示信息函数
	function prompt(str){
		$('.prompt_modal_body').html(str)
		$('#prompt_modal').fadeIn(200);
		$('#prompt_modal .prompt_modal_con').stop(true,true).animate({top:'50%'},400);
		$('body').css({overflowY:'hidden'})
	}
	// 删除提示信息
	$('.con_tab_del').click(function(){
		prompt('您选择删除31项内容.删除的内容无法恢复,请谨慎操作');
	})

	// 项目添加提示信息
		$('.con_list_add').click(function(){
			// 1.项目添加重复提示信息
			// prompt('您已添加该项目,请误重复添加');
			// 2.项目添加信息成功提示信息
			 // $('#push').html('项目已添加').fadeIn(1000,function(){
			 	 setTimeout(function(){
 	 		 	 	 $('#push').fadeOut(1000);
 	 		 	 },3000)
			 // });
			// 3.项目添加信息不完善提示信息
			$('#push span').html('请完善信息')
			$('#push').fadeIn(1000,function(){
			 	 setTimeout(function(){
			 	 	 $('#push').fadeOut(1000);
			 	 },3000)
			 });
		})
	// 保存提示信息
	$('#next_step').click(function(){
		$('#push span').html('信息已保存')
		$('#push').fadeIn(1000,function(){
		 	 setTimeout(function(){
		 	 	 $('#push').fadeOut(1000);
		 	 },3000)
		 });
	})
	//input框边框颜色
	function chang_selectColor(obj1,obj2){
		obj1.focus(function(){
			$(this).addClass('input_focus');
		})
		obj1.blur(function(){
			$(this).removeClass('input_focus');
		})
		obj2.focus(function(){
			$(this).addClass('input_focus');
		})
		obj2.blur(function(){
			$(this).removeClass('input_focus');
		})
	}
	chang_selectColor($('#custom_modal input'),$('#custom_modal select'));
	chang_selectColor($('#custom_modal2 input'),$('#custom_modal2 select'));
	chang_selectColor($('.con_list_add_con input'),$('.con_list_add_con select'));

	// 月度支出详情模态框
		$('.detail').mousemove(function(event) {
			$('#adjustment2_modal').show();
			$(this).css({color: "#3da8f5"});
		});
		$('.detail').mouseout(function(event) {
			$('#adjustment2_modal').hide();
			$(this).css({color: "#909090"});
		});
		$('#adjustment2_modal').mousemove(function(event) {
			$('#adjustment2_modal').show();
			$('.detail').css({color: "#3da8f5"});
		});
		$('#adjustment2_modal').mouseout(function(event) {
			$('#adjustment2_modal').hide();
			$('.detail').css({color: "#909090"});
		});
	  // 一级类目的切换
	  
	  $(".con_list_tab div").click(function(){
	  	var index = $(this).index();
	  	$(this).addClass('con_list_tab_active');
	  	$(".con_list_tab div").not($(this)).removeClass('con_list_tab_active');
	  	$('.con_list_con_list .con_list_con_list_item').hide();
	  	$('.con_list_con_list .con_list_con_list_item').eq(index).show();
	  })

	  // 点击三级类目切换
	  $('.con_list_con_list_item li').click(function(){
	  		$('.con_list_>li').eq(0).fadeOut(300);
	  		$('.con_list_>li').eq(1).fadeIn(300);
	  		$('#con_list_add_con_project').val($(this).html());
	  		selectIndex = $(this).parents(".con_list_con_list_item").index();
	  })
	  $('.con_list_add_tit p').click(function(){
	  		$('.con_list_>li').eq(1).fadeOut(300);
	  		$('.con_list_>li').eq(0).fadeIn(300);
	  		if(selectIndexFlag){
	  			$(".con_list_tab div").eq(selectIndex).addClass('con_list_tab_active');
	  			$(".con_list_tab div").not($(".con_list_tab div").eq(selectIndex)).removeClass('con_list_tab_active');
	  			$('.con_list_con_list .con_list_con_list_item').hide();
	  			$('.con_list_con_list .con_list_con_list_item').eq(selectIndex).show();
	  		}
	  })
	  $('.con_list_>li .con_list_add_con .add').click(function(){
	  		$('.con_list_>li').eq(1).fadeOut(300);
	  		$('.con_list_>li').eq(0).fadeIn(300);
	  		$('#push span').html('项目添加成功');
	  		$('#push').fadeIn(1000,function(){
	  		 	 setTimeout(function(){
	  		 	 	 $('#push').fadeOut(1000);
	  		 	 },3000)
	  		 });
	  })
	  $('#push i').click(function(){
		$(this).parent().hide();
	})
  $(".demoUp").mouseover(function(){
       var _this = $(this);
       _this.justToolsTip({
           animation:"moveInTop",
           contents:_this.attr('tit'),
           gravity:'top',    
           animation: 'none'
       });
    })
});
