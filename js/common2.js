$(document).ready(function($) {
	function con_list(){
		$('.common li').each(function(index, el) {
			$(this).css({marginRight:14});
			if (( $(this).index()+1) % 2 == 0 ){
				$(this).css({marginRight:0});
			}
		});
	}
	con_list();

	$(document).click(function(){
		$('.con_list_tit_policy_list').hide();
		$('.policy_change i').removeClass('icon-xiangshang').addClass('icon-zhcc_xiangxiajiantou');
     	$('.d_s_add ul').hide();
     	$('.d_s_add .img').hide();
     	$('.guanbi').css({transform:'rotate(-100deg)',transform:'scale(0)'});
     	$('.caidan').css({transform:'rotate(-100deg)',transform:'scale(1)'});
     	d_s_flag = true;
	})

	// 点击箭头table收起来
	$('.common .con_list_tit img').click(function(){
		$(this).parent().next().slideToggle(200);
	})	
	// 预计支出调整计算模态框
		$('.con_list_tit .btn1').click(function(){
			$('#adjustment_modal').fadeIn(200);
			$('#adjustment_modal .adjustment_modal_con').animate({top:'50%'},400);
			$('body').css({overflowY:'hidden'})
		})
	  // 点击叉号
	  $('#adjustment_modal .adjustment_modal_title .img').click(function(){
		  	$('#adjustment_modal').fadeOut(200);
		  	$('#adjustment_modal .adjustment_modal_con').animate({top:'40%'},400);
		  	$('body').css({overflowY:'visible'})
	  })
	  // 点击保存按钮
	  $('#adjustment_modal .adjustment_modal_footer button').click(function(){
		  	$('#adjustment_modal').fadeOut(200);
		  	$('#adjustment_modal .adjustment_modal_con').animate({top:'40%'},400);
		  	$('body').css({overflowY:'visible'})
	  })


	  // 选择产品
	  $('.select_pro_modal_titile li').eq(0).addClass('selct_con');
	  $('.select_pro_modal_titile li').click(function(event) {
	  	  $('.select_pro_modal_titile li').removeClass('selct_con');
	  	  $(this).addClass('selct_con');
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
	  	$('body').css({overflowY:'visible'})
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



	 // 缺口调整计算模态框
	 	$('.q_btn').click(function(){
	 		$('#q_adjustment_modal').fadeIn(200);
	 		$('#q_adjustment_modal .q_adjustment_modal_con').animate({top:'50%'},400);
	 		$('body').css({overflowY:'hidden'})
	 	})
	   // 点击叉号
	   $('#q_adjustment_modal .q_adjustment_modal_title .img').click(function(){
	   	$('#q_adjustment_modal').fadeOut(200);
	   	$('#q_adjustment_modal .q_adjustment_modal_con').animate({top:'40%'},400);
	   	$('body').css({overflowY:'visible'})
	   })
	   // 点击保存按钮
	   $('#q_adjustment_modal .q_adjustment_modal_footer button').click(function(){
	   	$('#q_adjustment_modal').fadeOut(200);
	   	$('#q_adjustment_modal .q_adjustment_modal_con').animate({top:'40%'},400);
	   	$('body').css({overflowY:'visible'})
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
       	input_color('.change_item_form2 input','.change_item_form2 select');
   	    $('select').change(function(event) {
   			$(this).css({color:'#303030'})
   		});
   		$('select').focus(function(event) {
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
		$('.del').click(function(){
			prompt('您选择删除31项内容.删除的内容无法恢复,请谨慎操作');
       	    var obj = $(this).parent().parent().attr("class");
       	    $("."+obj+" input[name='select']").each(function(index, el) {
				if($(this).prop('checked')){
					$(this).parents('tr').remove();
				}
			});
       })

		$(".con_list_tit_policy .policy_change").click(function(e) {
			e.stopPropagation();
			$('.con_list_tit_policy_list').toggle();
			$('.con_list_tit_policy i').toggleClass('icon-xiangshang');
		});

		// 调整保单
		$(".con_list_tit_policy_list li").click(function(){
			$('#change_policy').fadeIn(200);
			$(".con_list_tit_policy_list").hide();
			$('#change_policy .change_policy_con').animate({top:'50%'},400);
			$('#change_policy input').removeAttr('checked');
			$('body').css({overflowY:'hidden'});
			// 不能删除团体险提示信息
			// prompt('团体险不可调整');
		})
	      // 点击叉号
	      $('#change_policy .change_policy_title .img').click(function(){
	      $('#change_policy').fadeOut(200);
		      	$('body').css({overflowY:'visible'});
		      	$('#change_policy .change_policy_con').animate({top:'40%'},400,function(){
		      		$('#change_policy .change_policy_title .fanhui').hide();
		      		$('#change_policy .btn1').show();
		      		$('#change_policy .btn2').hide();
		      		$(".change_item_form2").hide();
		      		$(".change_item_form1").show();
		      	});
	      })
	      // 点击下一步按钮
	      $('#change_policy .change_policy_footer .btn1').click(function(){
	      	$('#change_policy .change_policy_title .fanhui').show();
	      	$(this).hide();
	      	$('#change_policy .btn2').show();
	      	$(".change_item_form1").hide();
	      	$(".change_item_form2").show();
	      	$('.change_item_form_list input:radio').each(function() {
		      	if ($(this).prop('checked')) {
		      		console.log($(this).parents('li').find('.text').html());
		      	}
	      	});
	      })
	      $('#change_policy .change_policy_title .fanhui').click(function(){
	      	$('#change_policy .change_policy_title .fanhui').hide();
	      	$('#change_policy .btn1').show();
	      	$('#change_policy .btn2').hide();
	      	$(".change_item_form2").hide();
	      	$(".change_item_form1").show();
	      })
	      $('#change_policy .btn2').click(function(){
	      	$('#change_policy').fadeOut(200);
	      	$('body').css({overflowY:'visible'});
	      	$('.primary_policy_change_data').show();
	      	$('#change_policy .change_policy_con').animate({top:'40%'},400,function(){
	      		$('#change_policy .change_policy_title .fanhui').hide();
	      		$('#change_policy .btn1').show();
	      		$('#change_policy .btn2').hide();
	      		$(".change_item_form2").hide();
	      		$(".change_item_form1").show();
	      	});

	      })

	      	// 点击最右边的任务栏
	          $('.d_s_add span img').click(function(e){
	             e.preventDefault();
	          })
	          var d_s_flag = true;
	      	$('.d_s_add span').click(function(e){
	      		e.stopPropagation();
	              $('.d_s_add ul').slideToggle(50);
	              $('.d_s_add .img').slideToggle(50);
	              if(d_s_flag){
	                  $('.caidan').css({transform:'rotate(100deg)',transform:'scale(0)'});
	                  $('.guanbi').css({transform:'rotate(100deg)',transform:'scale(1)'});
	                  d_s_flag = false;
	              }else{
	                  $('.guanbi').css({transform:'rotate(-100deg)',transform:'scale(0)'});
	                  $('.caidan').css({transform:'rotate(-100deg)',transform:'scale(1)'});
	                  d_s_flag = true;
	              }
	      	})
      	 $('.btn3').click(function(){
      	    $('.d_s_add ul').slideToggle(50);
      	    $('.d_s_add .img').slideToggle(50);
      	    if(d_s_flag){
      	        $('.caidan').css({transform:'rotate(100deg)',transform:'scale(0)'});
      	        $('.guanbi').css({transform:'rotate(100deg)',transform:'scale(1)'});
      	        d_s_flag = false;
      	    }else{
      	        $('.guanbi').css({transform:'rotate(-100deg)',transform:'scale(0)'});
      	        $('.caidan').css({transform:'rotate(-100deg)',transform:'scale(1)'});
      	        d_s_flag = true;
      	    }
      		$('#select_pro_modal').fadeIn(200);
      		$('#select_pro_modal .select_pro_modal').animate({top:'50%'},400);
      		$('body').css({overflowY:'hidden'})
      	})


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
      	     $('.d_s_add ul').slideToggle(50);
      	     $('.d_s_add .img').slideToggle(50);
      	     if(d_s_flag){
      	         $('.caidan').css({transform:'rotate(100deg)',transform:'scale(0)'});
      	         $('.guanbi').css({transform:'rotate(100deg)',transform:'scale(1)'});
      	         d_s_flag = false;
      	     }else{
      	         $('.guanbi').css({transform:'rotate(-100deg)',transform:'scale(0)'});
      	         $('.caidan').css({transform:'rotate(-100deg)',transform:'scale(1)'});
      	         d_s_flag = true;
      	     }
      	 	$('#jy_adjustment_modal').fadeIn(200);
      	 	$('#jy_adjustment_modal .jy_adjustment_modal_con').animate({top:'50%'},400);
      	 	$('body').css({overflowY:'hidden'})
      	 })

});