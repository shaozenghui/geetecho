$(document).ready(function($) {
	
	$('.con_list li').each(function(index, el) {
		if (( $(this).index()+1) % 2 == 0 ){
			$(this).css({marginRight:0});
		}
	});
	function input_color(a){
		$(a).focus(function(){
			$(this).addClass('input_focus');
		})
		$(a).blur(function(){
			$(this).removeClass('input_focus');
		})

	}
	input_color($('.custom_from input'));
	// 保存提示信息
	$('#next_step').click(function(){
		$('#push').html('信息已保存').fadeIn(1000,function(){
		 	setTimeout(function(){
		 	 	 $('#push').fadeOut(5000);
		 	 },5000)
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
});