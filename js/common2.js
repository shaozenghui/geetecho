$(document).ready(function($) {
	// 保单点击箭头
	$('#contnet .content .policy .table .item .tit_td >li .zx>span').click(function(){
		$(this).parents('.zx').next().toggle();
		$(this).children("i").toggleClass('icon-xiangyoujiantou');
		$(this).children("i").toggleClass('icon-zhcc_xiangxiajiantou');
		$('#contnet .content .policy .table .item .tit_td>li .fjx .con').each(function(el,index){
			var H = $(this).height();
			$(this).prev().css({height:H+"px",lineHeight:H+"px"})
		})
	})
	
	// 点击切换个人和团体险
	$('#contnet .content .policy .title ul li').click(function(){

		var index = $(this).index();
		$('#contnet .content .policy .title ul li').removeClass('selct_active');
		$(this).addClass('selct_active');
		$('#contnet .content .policy .table .item').hide();
		$('#contnet .content .policy .table .item').eq(index).show(0,function(){
			$('#contnet .content .policy .table .item .tit_td>li .fjx .con').each(function(el,index){
				var H = $(this).height();
				$(this).prev().css({height:H+"px",lineHeight:H+"px"})
			})
		});

	})
	// 备注
	$('#contnet .content  .recommend .remark>p span:nth-child(2)').click(function(){
		$(this).parents('.remark').children('.remark_con').toggle();
		$(this).children("i").toggleClass('icon-xiangshang');
		$(this).children("i").toggleClass('icon-zhcc_xiangxiajiantou');
	})

	$(document).click(function(){
		$('.con_list_tit_policy_list').hide();
	})
	// 调整保额加减号
	$('#contnet .content .policy .table .item .tit_td>li .zx ul li:nth-child(6) div span:nth-child(1)').click(function(){
		var val = $(this).next().children('input').val() ;
		$(this).next().children('input').val(Number(val) - 1000);
		
	})
	$('#contnet .content .policy .table .item .tit_td>li .zx ul li:nth-child(6) div span:nth-child(3)').click(function(){
		var val = $(this).prev().children('input').val() ;
		$(this).prev().children('input').val(Number(val) + 1000);
	})
	$('#contnet .content .policy .table .item .tit_td>li .fjx .con li span:nth-child(5) div span:nth-child(1)').click(function(){
		var val = $(this).next().children('input').val() ;
		$(this).next().children('input').val(Number(val) - 1000);
		
	})
	$('#contnet .content .policy .table .item .tit_td>li .fjx .con li span:nth-child(5) div span:nth-child(3)').click(function(){
		var val = $(this).prev().children('input').val() ;
		$(this).prev().children('input').val(Number(val) + 1000);
	})
	$('#contnet .content .policy .table .item .tit_td>li .fjx .con li span:nth-child(6)').click(function(){
    	$('#push span').html('信息已保存')
		$('#push').fadeIn(1000,function(){
		 	setTimeout(function(){
		 	 	 $('#push').fadeOut(5000);
		 	 },5000)
		});
	})
	$('#contnet .content .policy .table .item .tit_td>li .zx ul li:nth-child(7)').click(function(){
    	$('#push span').html('信息已保存')
		$('#push').fadeIn(1000,function(){
		 	setTimeout(function(){
		 	 	 $('#push').fadeOut(5000);
		 	 },5000)
		});
	})
	


	  // 选择产品
	  $('#contnet .content  .recommend>p span:nth-child(2)').mouseenter(function(){
	  	$('#contnet .content .recommend .selet').show()
	  })
	  $('#contnet .content  .recommend>p span:nth-child(2)').mouseleave(function(){
	  	$('#contnet .content .recommend .selet').hide()
	  })
	  $('#contnet .content .recommend .selet').mouseenter(function(e){
	  	e.stopPropagation();
	  	$('#contnet .content .recommend .selet').show()
	  })
	  $('#contnet .content .recommend .selet').mouseleave(function(e){
	  	e.stopPropagation();
	  	$('#contnet .content .recommend .selet').hide()
	  })
	  $('.select_pro_modal_titile li').eq(0).addClass('selct_con2');
	  $('.select_pro_modal_titile li').click(function(event) {
	  	  $('.select_pro_modal_titile li').removeClass('selct_con2');
	  	  $(this).addClass('selct_con2');
	  	  $('.select_pro_modal_con>li').hide().eq($(this).index()).show();
	  });
	  $('.select_pro_modal_renshou .select_pro_modal_con_tit ul li').click(function(event) {
	  	  if($(this).html() == '自选'){
	  	  	 $(this).parent().next().show();
	  	  	 $(this).parent().next().next().show();
	  	  }else{
	  	  	 $(this).parent().next().hide();
	  	  	 $(this).parent().next().next().hide();
	  	  }
	  	  $(this).parent().children('li').removeClass('selct_con');
	  	  $(this).addClass('selct_con');
	  	  var index = $(this).parents('li').index();
	  	  $('.select_pro_modal_renshou').eq(index).find('.select_pro_modal_table').children('li').hide().eq($(this).index()).show();
	  });
	   $('.select_pro_modal_yiwai .select_pro_modal_con_tit ul li').click(function(event) {
	   	   if($(this).html() == '自选'){
	  	  	 $(this).parent().next().show();
	  	  	 $(this).parent().next().next().show();
	  	  }else{
	  	  	 $(this).parent().next().hide();
	  	  	 $(this).parent().next().next().hide();
	  	  }
	  	  $(this).parent().children('li').removeClass('selct_con');
	  	  $(this).addClass('selct_con');
	  	    var index = $(this).parents('li').index();
	  	  $('.select_pro_modal_yiwai').eq(index).find('.select_pro_modal_table').children('li').hide().eq($(this).index()).show();
	  });


	  // 点击叉号
	  $('#select_pro_modal .select_pro_modal .img').click(function(){
	  	$('#select_pro_modal').fadeOut(200);
	  	$('#select_pro_modal .select_pro_modal').animate({top:'40%'},400);
	  	$('body').css({overflowY:'visible'})
	  })
	  // 点击保存按钮
	  $('#select_pro_modal .select_pro_modal_footer button').click(function(){
	  	$('#select_pro_modal').fadeOut(200);
	  	$('#select_pro_modal .select_pro_modal').animate({top:'40%'},400);
	  	$('body').css({overflowY:'visible'});
    	// 保存提示信息
    	$('#push span').html('信息已保存')
		$('#push').fadeIn(1000,function(){
		 	setTimeout(function(){
		 	 	 $('#push').fadeOut(5000);
		 	 },5000)
		});
	  })
      // 备注提示信息
     $(".demoUp").mouseover(function(){
		var _this = $(this);
		_this.justToolsTip({
	        animation:"moveInTop",
	        contents:_this.attr('tit'),
	        gravity:'top',    
	        animation: 'none'
	    });
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
	 	$('#push i').click(function(){
			$(this).parent().hide();
		})
       	function input_color(a,b){
       		$(a).focus(function(){
   				$(this).addClass('input_focus');
   			})
   			$(a).blur(function(){
   				$(this).removeClass('input_focus');
   			})
       		$(b).focus(function(){
       			$(this).addClass('input_focus');
       		})
       		$(b).blur(function(){
       			$(this).removeClass('input_focus');
       		})

       	}
   	    $('select').change(function(event) {
   			$(this).css({color:'#303030'})
   		});
   		$('#jy_adjustment_modal select').focus(function(event) {
   			$(this).children('option').eq(0).hide()
   		});
	      // 全选单选事件
	       function allSel(obj){
	      		$(obj+" input[name='allSel']").click(function(){
	   			if($(this).prop('checked')){
	   				$(obj+" input[name='select']").prop("checked",true);
	   			}else{
	   				$(obj+" input[name='select']").prop("checked",false);
	   			}
	   		})
	   		$(obj+" input[name='select']").click(function(){
	   			var allSel = false;
	   			$(obj+" input[name='select']").each(function(index, el) {
	   				if(!$(this).prop('checked')){
	   					allSel = true;
	   				}
	   			});
	   			if(allSel){
	   				$(obj+" input[name='allSel']").prop("checked",false);
	   			}else{
	   				$(obj+" input[name='allSel']").prop("checked",true);
	   			}
	   		})
	       }
	      allSel(".select_pro_modal_renshou");
	      allSel(".select_pro_modal_yiwai");


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
		})	
		//提示信息函数
		function prompt(str){
			$('.prompt_modal_body').html(str)
			$('#prompt_modal').fadeIn(200);
			$('#prompt_modal .prompt_modal_con').stop(true,true).animate({top:'50%'},400);
			$('body').css({overflowY:'hidden'})
		}
		// 删除产品提示信息
		$('.select_pro_modal_con_tit .del').click(function(){
			prompt('您选择删除31项内容.删除的内容无法恢复,请谨慎操作');
       	    var obj = $(this).parent().parent().attr("class");
       	    $("."+obj+" input[name='select']").each(function(index, el) {
				if($(this).prop('checked')){
					$(this).parents('tr').remove();
				}
			});
       })
		


      	 $('.btn3').click(function(){
      	    $('#contnet .content .recommend .selet').slideToggle(50);
      		$('#select_pro_modal').fadeIn(200);
      		$('#select_pro_modal .select_pro_modal').animate({top:'50%'},400);
      		$('body').css({overflowY:'hidden'})
      	})

      	
});
