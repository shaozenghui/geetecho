     //执行一个laydate实例
     laydate.render({
         elem: '#test1',
         range: true
     });
     $('#search_sel_class_list li').click(function(){
		var str = $(this).html()
		$('#status').html(str).css({color:'#202020'});
		$(this).parent().slideUp(200);
	})

	$(document).click(function(){
         $('.d_s_add ul').hide();
         $('.d_s_add .img').hide();
         $('.guanbi').css({transform:'rotate(-100deg)',transform:'scale(0)'});
         $('.caidan').css({transform:'rotate(-100deg)',transform:'scale(1)'});
         d_s_flag = true;
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

          $('.derived_data').click(function(){
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
          $('#prompt_modal').fadeIn(200);
          $('#prompt_modal .prompt_modal_con').animate({top:'50%'},400);
          $('body').css({overflowY:'hidden'})
         })

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

     $(document).click(function(e){

     	if(e.target.className != 'search_sel_class'){
     		$('#search_sel_class_list').hide();
     	}
     	$('#status').removeClass('color_1');
     });