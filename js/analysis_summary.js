$(document).ready(function($) {
	$('.creat_plan_book').click(function(){
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
		$('#plan_modal1').fadeIn(200);
		$('#plan_modal1 .plan_modal1_con').animate({top:'50%'},400);
		$('body').css({overflowY:'hidden'})
	})
	// 点击叉号
	$('#plan_modal1 .plan_modal1_title .img').click(function(){
		$('#plan_modal1').fadeOut(200);
		$('#plan_modal1 .plan_modal1_con').animate({top:'40%'},400);
		$('body').css({overflowY:'visible'})
	})
	// 点击删除按钮
	$('#plan_modal1 .plan_modal1_footer button').click(function(){
		$('#plan_modal1').fadeOut(200);
		$('#plan_modal1 .next_modal3_con').animate({top:'40%'},400);
		$('body').css({overflowY:'visible'})
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
    // 点击叉号
    $('#prompt_modal .prompt_modal_title .img').click(function(){
    	$('#prompt_modal').fadeOut(200);
    	$('#prompt_modal .prompt_modal_con').animate({top:'40%'},400);
    	$('body').css({overflowY:'visible'})
    })
    // 点击选择按钮
    $('#prompt_modal .prompt_modal_body button').click(function(){
    	$('#prompt_modal').fadeOut(200);
    	$('#prompt_modal .next_modal3_con').animate({top:'40%'},400);
    	$('body').css({overflowY:'visible'});
    	if($(this).html() != "word格式"){
            $('#select_pro_modal .select_pro_modal').show();
    		$('#select_pro_modal').fadeIn(200);
	    	$('#select_pro_modal .select_pro_modal').animate({top:'40%'},400);
	    	$('body').css({overflowY:'hidden'})
    	}
    })
   // 点击叉号
    $('#select_pro_modal .img').click(function(){
    	$('#select_pro_modal').fadeOut(200);
    	$('#select_pro_modal .select_pro_modal').animate({top:'40%'},400);
    	$('body').css({overflowY:'visible'})
    })
    // 点击选择按钮
    $('#select_pro_modal .select_pro_modal_footer button').click(function(){
    	$('#select_pro_modal').fadeOut(200);
    	$('#select_pro_modal .select_pro_modal').animate({top:'40%'},400);
    	$('body').css({overflowY:'visible'})
    });


    $(document).click(function(){
        $('.d_s_add ul').hide();
        $('.d_s_add .img').hide();
        $('.guanbi').css({transform:'rotate(-100deg)',transform:'scale(0)'});
        $('.caidan').css({transform:'rotate(-100deg)',transform:'scale(1)'});
        d_s_flag = true;
    })

    //点击下载加载动画

    $('.select_pro_modal_footer div').click(function(){
        $('#select_pro_modal .select_pro_modal').hide();
        $('#select_pro_modal .select_pro_modal').animate({top:'40%'},400,function(){
            $('#select_pro_modal .select_pro_modal').fadeOut(200);
            $('.down_loading').show();
            setTimeout(function(){
                $('#select_pro_modal').fadeOut(200);
                $('body').css({overflowY:'visible'});
                $('.down_loading').hide();
            },100)
        });
   });
    (function(){
    	// 基于准备好的dom，初始化echarts实例
    	var myChart = echarts.init(document.getElementById('pie'));
    	var user1 ='张 '+ 22900;
    	var user2 = '李 '+ 100000;

    	option = {
    	    legend: {  
                orient : 'vertical',  
                top:54,
                left:307,
                itemWidth:18,
                itemHeight:18,
                selectedMode:false,
                itemGap:20,
                formatter: '{name}',
                textStyle:{
                    color: '#424242',
                    fontSize:18
                },
                data:[
                     {name:user1,icon:'rect'},
                     {name:user2,icon:'rect'},
                ]  
            },
    	    series : [
    	        {
    	            hoverAnimation:false,
    	            type: 'pie',
    	            radius : '55%',
    	            center: ['30%', '50%'],
    	            label:{
    	            	normal:{
                            position:'inner', 
    	            		textStyle:{
    	            			color:'#fff'
    	            		},
                            formatter:'{d}%'  
    	            	}
    	            },
    	            data:[ 
    	                 {
    		               	value:22900,
    		                name:user1,
    		                itemStyle:{
    		                	normal:{
    		                		color:'#ffe157'
    		                	},
    		                },
    	                },
    	                {
    	                	value:10000,
    	                	name:user2,
    	                	itemStyle:{
    		                	normal:{
    		                		color:'#3da8f5'
    		                	},
    		                },
    	                }
    	            ],
    	   
    	        }
    	    ]
    	};
    	myChart.setOption(option);	
    })()

});