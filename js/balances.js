$(document).ready(function($) {
	$('.con_list .sm_no .remark>p span:nth-child(2)').click(function(){
		$(this).parents('.remark').children('.remark_con').toggle();
		$(this).children("i").toggleClass('icon-xiangshang');
		$(this).children("i").toggleClass('icon-zhcc_xiangxiajiantou');
		console.log($(this).children("span").html())
	})
})