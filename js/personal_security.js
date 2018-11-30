$(document).ready(function($) {
	 // 缺口调整计算模态框
	 	$('#contnet .content .finance .gap>p span:nth-child(2)').click(function(){
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
		   	$('body').css({overflowY:'visible'});
	    	// 保存提示信息
	    	$('#push span').html('信息已保存')
			$('#push').fadeIn(1000,function(){
			 	setTimeout(function(){
			 	 	 $('#push').fadeOut(5000);
			 	 },5000)
			});
	   })
	 	$('#q_adjustment_modal  .box>div:nth-child(1) input[type="radio"]').change(function(){
	 		var index = $(this).parent().index() - 1 ;
	 		$('#q_adjustment_modal  .box>div:nth-child(2) div').hide().eq(index).show();

	 	})
	// 缺口
	var myChart = echarts.init(document.getElementById('expenditure_echarst'));
	myChart.setOption({
		color:["#FFE138","#3682F4"],
	    tooltip : {
	        trigger: 'item',
	        axisPointer : {
	            type : 'sh 	adow'        
	        }
	    },
	    series : [
	        {
	            type: 'pie',
	            radius : ['70%','90%'],
	            center: ['50%', '50%'],
	            selectedMode: 'single',
	            data:[
	                {value:335, name:'成员1', },
	                {value:310, name:'成员2'},
	            ],
	            label: {
	                normal: {
	                    show: false
	                }
	            },
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	});
	// 预计支出调整计算模态框
		$('#contnet .content .finance .situation>p span:nth-child(2)').click(function(){
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
		  	$('body').css({overflowY:'visible'});
  	    	// 保存提示信息
  	    	$('#push span').html('信息已保存')
  			$('#push').fadeIn(1000,function(){
  			 	setTimeout(function(){
  			 	 	 $('#push').fadeOut(5000);
  			 	 },5000)
  			});
	  })
});