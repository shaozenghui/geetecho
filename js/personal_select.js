$(document).ready(function($){
      // 选择产品
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
    $('#next_step').click(function(){
        $('#push span').html('信息已保存')
        $('#push').fadeIn(1000,function(){
            setTimeout(function(){
                    $('#push').fadeOut(5000);
                },5000)
        });
    })

    $('#push i').click(function(){
        $(this).parent().hide();
    })
    //提示信息函数
		function prompt(str){
			$('.prompt_modal_body').html(str)
			$('#prompt_modal').fadeIn(200);
			$('#prompt_modal .prompt_modal_con').stop(true,true).animate({top:'50%'},400);
			$('body').css({overflowY:'hidden'})
		}
		// 删除产品提示信息
		$('.select_pro_modal_table li:nth-child(2) table tbody tr td:nth-child(9) .del').click(function(){
            $(this).parents('tr').remove()
            prompt('您选择删除内容.删除的内容无法恢复,请谨慎操作') 
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
            $('#push span').html('项目删除成功')
            $('#push').fadeIn(1000,function(){
                setTimeout(function(){
                      $('#push').fadeOut(5000);
                 },5000)
           });
		})	
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
    $(".demoUp").mouseover(function(){
        var _this = $(this);
        _this.justToolsTip({
            animation:"moveInTop",
            contents:_this.attr('tit'),
            gravity:'top',    
            animation: 'none'
        });
    })
})