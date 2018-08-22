$(document).ready(function($) {
	var W = $(".container").width() - $(".leftList").width() - 45;
	$(".rightList").width(W);
	var H = $(".container").height() - $(".con_tit_left").height();
	$('.con_list_left').height(H);

	$(".con_list_left li").eq(0).addClass('_left_li_active');
	$('.con_list_right>li').eq(0).show();
	$(".con_list_left li").click(function(){
		$('.rightList2').hide();
		$('.rightList').show();
		var inx = $(this).index();
		$(this).addClass('_left_li_active');
		$(".con_list_left li").not($(this)).removeClass('_left_li_active');
		$('.con_list_right>li').hide();
		$('.con_list_right>li').eq(inx).show();
	})
	// 点击产品
	var flag = true;
	// 选中的数量
	var con = 0;
	var str  = con+'/'+$(".con_list_right_select li").length;
	$('.rightList>p span').eq(1).html(str);
	$('.con_list_right_select li').click(function(){
		flag = true;
		$(this).toggleClass('_pro_li_active');
		var length = $(this).parent().children('li').length;
		var activeLength = $(this).parent().children('._pro_li_active').length
		if(activeLength < length){
			$(this).parents(".con_list_right_select").prev().children('p').eq(1).children('span').removeClass('_pro_li_active');
		}else{
			$(this).parents(".con_list_right_select").prev().children('p').eq(1).children('span').addClass('_pro_li_active');
		}
		con = $(".con_list_right_select").find('._pro_li_active').length;
		str = con+'/'+$(".con_list_right_select li").length;
		$('.rightList>p span').eq(1).html(str);
		$('.rightList2>p span').eq(1).html(str);
	})
	$('.con_list_right>li p:nth-child(2) span').click(function(){
		if(flag){
			$(this).addClass('_pro_li_active');
			$(this).parents('.con_tit_right').next().find('li').addClass('_pro_li_active');
			 flag = false;
		}else{
			$(this).toggleClass('_pro_li_active');
			$(this).parents('.con_tit_right').next().find('li').toggleClass('_pro_li_active');
		}
		con = $(".con_list_right_select").find('._pro_li_active').length;
		str = con+'/'+$(".con_list_right_select li").length;
		$('.rightList>p span').eq(1).html(str);
		$('.rightList2>p span').eq(1).html(str);
	})
	$('.footer button').click(function(){
		window.location = "index.html";
	})
});
