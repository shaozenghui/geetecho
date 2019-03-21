$(document).ready(function($) {
	// 成员信息的显示
	$('#contnet .con_title .membe_infor span:nth-child(1)').hover(function(){
		$('#contnet .con_title .membe_infor .content').show();
		$(this).children("i").toggleClass('icon-xiangshang');
		$(this).children("i").toggleClass('icon-zhcc_xiangxiajiantou');
	},function(){
		$('#contnet .con_title .membe_infor .content').hide();
		$(this).children("i").toggleClass('icon-xiangshang');
		$(this).children("i").toggleClass('icon-zhcc_xiangxiajiantou');
	})
	// 回到顶部
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
    $('.back_top').click(function(){
        $('html,body').animate({scrollTop:0})
    })
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
		$('#contnet .content .policy .table>div').hide();
		$('#contnet .content .policy .table>div').eq(index).show();
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
	$('#contnet .content .policy .table .item tbody tr .reduce_td .reduce').click(function(){

		var val = $(this).next().val() ;
			console.log(val)
		$(this).next().val(Number(val) - 1000);
		
	})
	$('#contnet .content .policy .table .item tbody tr .reduce_td .add').click(function(){
		var val = $(this).prev().val() ;
		$(this).prev().val(Number(val) + 1000);
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
        // 项目删除成功提示信息
        $('#push span').html('项目删除成功')
        $('#push').fadeIn(1000,function(){
            setTimeout(function(){
                    $('#push').fadeOut(5000);
                },5000)
        });
    })	
    //提示信息函数
    function prompt(str){
        $('.prompt_modal_body').html(str)
        $('#prompt_modal').fadeIn(200);
        $('#prompt_modal .prompt_modal_con').stop(true,true).animate({top:'50%'},400);
        $('body').css({overflowY:'hidden'})
    }

    // 虚线
    var dashedH = $("#contnet .content  .recommend .recommend-container>div").height();
    $("#contnet .content  .dashed").height(dashedH);
});
