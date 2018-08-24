$(document).ready(function($) {
	$('.cont_f_list>li').each(function(index, el) {
		if (( $(this).index()+1) % 3 == 0 ){
			$(this).css({marginRight:0});
		}
	});
	$(document).click(function(){
		$('.add_policy_list').hide();
		$('.add_policy i').removeClass('icon-xiangshang').addClass('icon-zhcc_xiangxiajiantou');
     	$('.d_s_add ul').hide(10);
		$('.d_s_add .img').hide(10);
		$('.guanbi').css({transform:'rotate(-100deg)',transform:'scale(0)'});
		$('.caidan').css({transform:'rotate(-100deg)',transform:'scale(1)'});
		d_s_flag = true;
	})
	$('.add_policy').click(function(e) {
		e.stopPropagation();
		$('.add_policy_list').toggle();
		$('.add_policy i').toggleClass('icon-xiangshang');
	});
    // 生成规划书
   
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
    		$('.plan_book').show();
    		$('.plan_book .bar div').animate({width:430},1000,function(){
    			$('.plan_book').hide();
    			$('.plan_book .bar div').css({width:0})
    			$('#plan_modal1').fadeIn(200);
				$('#plan_modal1 .plan_modal1_con').animate({top:'50%'},400);
				$('body').css({overflowY:'hidden'});

    		});
    	})
	    // 生成计划书提示模态框
	
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
	    var d_s_flag = true;
		$('.d_s_add span').click(function(e){
			e.stopPropagation();
			$('.d_s_add ul').slideToggle(10);
			$('.d_s_add .img').slideToggle(10);
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
	     	$('.d_s_add ul').slideToggle(10);
			$('.d_s_add .img').slideToggle(10);

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
	    	$('body').css({overflowY:'hidden'});
	    	
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

	    //点击下载加载动画
        $('.select_pro_modal_footer div').click(function(){
   			$('#select_pro_modal .select_pro_modal').hide();
	    	$('#select_pro_modal .select_pro_modal').animate({top:'40%'},400,function(){ 
				$('#select_pro_modal .select_pro_modal').fadeOut(200);
	            setTimeout(function(){
		            $('#select_pro_modal').fadeOut(200);
		            $('body').css({overflowY:'visible'});
	            },100)
	    	});
       });
        $('select').change(function(event) {
    		$(this).css({color:'#303030'})
    	});
    	$('select').focus(function(event) {
    		$(this).children('option').eq(0).hide()
    	});
	    
	  // 添加项目模态框
	  	$(".add_policy_list p").click(function(){
	  		if($(this).html() == "个人保单"){
	  			$('.add_item_modal_name label').html('产品名称')
	  		}else{
	  			$('.add_item_modal_name label').html('公司名称')
	  		}
	  		$(".add_policy_list").hide();
	  		$('#add_item_modal').fadeIn(200);
	  		$('#add_item_modal .add_item_modal_con').animate({top:'50%'},400);
	  		$('body').css({overflowY:'hidden'});
	  	})
	    // 点击叉号
	    $('#add_item_modal .add_item_modal_title .img').click(function(){
	    	$('#add_item_modal').fadeOut(200);
	    	$('body').css({overflowY:'visible'});
	    	$('#add_item_modal .add_item_modal_con').animate({top:'40%'},400,function(){
	    		$('#add_item_modal .add_item_modal_title .fanhui').hide();
	    		$('#add_item_modal .btn1').show();
	    		$('#add_item_modal .btn2').hide();
	    		$(".add_item_form2").hide();
	    		$(".add_item_form1").show();
	    	});
	    	$('.add_policy i').removeClass('icon-xiangshang').addClass('icon-zhcc_xiangxiajiantou')
	    })
	    // 点击下一步按钮
	    $('#add_item_modal .add_item_modal_footer .btn1').click(function(){
	    	$(".add_item_form1").hide();
	    	$(".add_item_form2").show();
	    	$('#add_item_modal .add_item_modal_title .fanhui').show();
	    	$(this).hide();
	    	$('#add_item_modal .btn2').show();
	    	$('.add_item_modal_title span').html("保额");
	    })
	    $('#add_item_modal .add_item_modal_title .fanhui').click(function(){
	    	$('#add_item_modal .add_item_modal_title .fanhui').hide();
	    	$('#add_item_modal .btn1').show();
	    	$('#add_item_modal .btn2').hide();
	    	$(".add_item_form2").hide();
	    	$(".add_item_form1").show();
	    	$('.add_item_modal_title span').html("添加保单");
	    })
	    $('#add_item_modal .btn2').click(function(){
	    	$('#add_item_modal').fadeOut(200);
	    	$('body').css({overflowY:'visible'});
	    	$('#add_item_modal .add_item_modal_con').animate({top:'40%'},400,function(){
	    		$('#add_item_modal .add_item_modal_title .fanhui').hide();
	    		$('#add_item_modal .btn1').show();
	    		$('#add_item_modal .btn2').hide();
	    		$(".add_item_form2").hide();
	    		$(".add_item_form1").show();
	    	});
	    	// 保存提示信息
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

	    // 删除项目
    	$(".cont_f_list li>p .del").click(function(){
    		$('#del_item_modal').fadeIn(200);
    		$('#del_item_modal .del_item_modal_con').animate({top:'50%'},400);
    		$('#del_item_modal input').removeAttr('checked');
    		$('body').css({overflowY:'hidden'})
    	})
	      // 点击叉号
	      $('#del_item_modal .del_item_modal_title .img').click(function(){
	      $('#del_item_modal').fadeOut(200);
  	      	$('body').css({overflowY:'visible'});
  	      	$('#del_item_modal .del_item_modal_con').animate({top:'40%'},400,function(){
  	      		$('#del_item_modal .del_item_modal_title .fanhui').hide();
  	      		$('#del_item_modal .btn1').show();
  	      		$('#del_item_modal .btn2').hide();
  	      		$(".del_item_form2").hide();
  	      		$(".del_item_form1").show();
  	      	});
	      })
	      // 点击下一步按钮
	      $('#del_item_modal .del_item_modal_footer .btn1').click(function(){
	      	$('#del_item_modal .del_item_modal_title .fanhui').show();
	      	$(this).hide();
	      	$('#del_item_modal .btn2').show();
	      	$(".del_item_form1").hide();
	      	$(".del_item_form2").show();
	      	$('.del_item_form_list input:checkbox').each(function() {
    	      	if ($(this).attr('checked') == "checked") {
    	      		console.log($(this).parents('li').find('.text').html());
    	      	}
	      	});
	      })
	      $('#del_item_modal .del_item_modal_title .fanhui').click(function(){
	      	$('#del_item_modal .del_item_modal_title .fanhui').hide();
	      	$('#del_item_modal .btn1').show();
	      	$('#del_item_modal .btn2').hide();
	      	$(".del_item_form2").hide();
	      	$(".del_item_form1").show();
	      })
	      $('#del_item_modal .btn2').click(function(){
	      	$('#del_item_modal').fadeOut(200);
	      	$('body').css({overflowY:'visible'});
	      	$('#del_item_modal .del_item_modal_con').animate({top:'40%'},400,function(){
	      		$('#del_item_modal .del_item_modal_title .fanhui').hide();
	      		$('#del_item_modal .btn1').show();
	      		$('#del_item_modal .btn2').hide();
	      		$(".del_item_form2").hide();
	      		$(".del_item_form1").show();
	      	});

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
    	input_color('#add_item_modal input','#add_item_modal select');


		
	    // 支出
	    (function(){
	    	    // 基于准备好的dom，初始化echarts实例
	    	    var myChart = echarts.init(document.getElementById('expenditure1'));
	    	    var rs = 1000;
	    	    var yw = 500;
	    	    var zj = 200;
	    	    var yl = 210;
	    	    // 指定图表的配置项和数据
	    	    option = {
	    	   		title:{
	    	   			show:false,
	    	   		    text: '支出',
	    	            x:'center',
	    	            subtext:"总支出：307,936"
	    	   		},
	    		    legend: {  
	    	            orient : 'vertical',  
	    	            x : 'right',  
	    	            top:120,
	    	            left:390,
	    	            itemWidth:18,
	    	            itemHeight:18,
	    	            formatter: '{name}',
	    	            itemGap:20,
	    	            selectedMode:false,
	    	            textStyle:{
	    	                color: '#424242',
	    	                fontSize:18,
	    	            },
	    	            data:[
	    		             {name:yw,icon:'rice'},
	    		             {name:zj,icon:'rice'},
	    		             {name:yl,icon:'rice'},
	    	            ]  
	    	        },
	    		    series: [
	    		        {
	    		            name:'访问来源',
	    		            hoverAnimation:false,
	    		            type:'pie',
	    		            radius: ['40%', '70%'],
	    		            center: ['35%', '43%'],
	    		            label: {
	    		               normal:{
	    		                    show:true,
	    		                    position:'inner', //标签的位置
	    		                    textStyle : {
	    		                        fontWeight : 300 ,
	    		                        fontSize : 12   //文字的字体大小
	    		                    },
	    		                    formatter:'{d}%'  
	    		                }       
	    		            },
	    		            data:[ 
	    			            {
	    			               	value:500,
	    			                name:yw,
	    			                itemStyle:{
	    			                	normal:{
	    			                		color:'#3da8f5'
	    			                	},
	    			                },
	    			            },
	    			            {
	    			            	value:290,
	    			            	name:zj,
	    			            	itemStyle:{
	    			                	normal:{
	    			                		color:'#ffe157'
	    			                	},
	    			                },
	    			            },
	    			            {
	    			            	value:210,
	    			            	name:yl,
	    			            	itemStyle:{
	    			                	normal:{
	    			                		color:'#3fe993'
	    			                	},
	    			                },
	    			            },
	    			        ],
	    		        }
	    		    ]
	    		};

	    	    // 使用刚指定的配置项和数据显示图表。
	    	    myChart.setOption(option);
	    })();
	    (function(){
	    	    // 基于准备好的dom，初始化echarts实例
	    	    var myChart = echarts.init(document.getElementById('expenditure2'));
	    	    var rs = 1000;
	    	    var yw = 500;
	    	    var zj = 200;
	    	    var yl = 210;
	    	    // 指定图表的配置项和数据
	    	    option = {
	    	   		title:{
	    	   			show:false,
	    	   		    text: '支出',
	    	            x:'center',
	    	            subtext:"总支出：307,936"
	    	   		},
	    		    legend: {  
	    	            orient : 'vertical',  
	    	            x : 'right',  
	    	            top:120,
	    	            left:390,
	    	            itemWidth:18,
	    	            itemHeight:18,
	    	            formatter: '{name}',
	    	            itemGap:20,
	    	            selectedMode:false,
	    	            textStyle:{
	    	                color: '#424242',
	    	                fontSize:18,
	    	            },
	    	            data:[
	    		             {name:yw,icon:'rice'},
	    		             {name:zj,icon:'rice'},
	    		             {name:yl,icon:'rice'},
	    	            ]  
	    	        },
	    		    series: [
	    		        {
	    		            name:'访问来源',
	    		            hoverAnimation:false,
	    		            type:'pie',
	    		            radius: ['40%', '70%'],
	    		            center: ['35%', '43%'],
	    		            label: {
	    		               normal:{
	    		                    show:true,
	    		                    position:'inner', //标签的位置
	    		                    textStyle : {
	    		                        fontWeight : 300 ,
	    		                        fontSize : 12    //文字的字体大小
	    		                    },
	    		                    formatter:'{d}%'  
	    		                }
	    		            },
	    		            data:[ 
	    			            {
	    			               	value:500,
	    			                name:yw,
	    			                itemStyle:{
	    			                	normal:{
	    			                		color:'#3da8f5'
	    			                	},
	    			                },
	    			            },
	    			            {
	    			            	value:290,
	    			            	name:zj,
	    			            	itemStyle:{
	    			                	normal:{
	    			                		color:'#ffe157'
	    			                	},
	    			                },
	    			            },
	    			            {
	    			            	value:210,
	    			            	name:yl,
	    			            	itemStyle:{
	    			                	normal:{
	    			                		color:'#3fe993'
	    			                	},
	    			                },
	    			            },
	    			        ],
	    		        }
	    		    ]
	    		};
	    	    // 使用刚指定的配置项和数据显示图表。
	    	    myChart.setOption(option);
	    })();    // 收入income1
	   (function(){
	    	    // 基于准备好的dom，初始化echarts实例
	    	    var myChart = echarts.init(document.getElementById('income1'));
	    	    var rs = 1000;
	    	    var yw = 500;
	    	    var zj = 200;
	    	    var yl = 210;
	    	    // 指定图表的配置项和数据
	    	    option = {
	    	   		title:{
	    	   			show:false,
	    	   		    text: '支出',
	    	            x:'center',
	    	            subtext:"总支出：307,936"
	    	   		},
	    		    legend: {  
	    	            orient : 'vertical',  
	    	            x : 'right',  
	    	            top:120,
	    	            left:390,
	    	            itemWidth:18,
	    	            itemHeight:18,
	    	            formatter: '{name}',
	    	            itemGap:20,
	    	            selectedMode:false,
	    	            textStyle:{
	    	                color: '#424242',
	    	                fontSize:18,
	    	            },
	    	            data:[
	    		             {name:yw,icon:'rice'},
	    		             {name:zj,icon:'rice'},
	    		             {name:yl,icon:'rice'},
	    	            ]  
	    	        },
	    		    series: [
	    		        {
	    		            name:'访问来源',
	    		            hoverAnimation:false,
	    		            type:'pie',
	    		            radius: ['40%', '70%'],
	    		            center: ['35%', '43%'],
	    		            label: {
	    		               normal:{
	    		                    show:true,
	    		                    position:'inner', //标签的位置
	    		                    textStyle : {
	    		                        fontWeight : 300 ,
	    		                        fontSize : 12   //文字的字体大小
	    		                    },
	    		                    formatter:'{d}%'  
	    		                }
	    		            },
	    		            data:[ 
	    			            {
	    			               	value:500,
	    			                name:yw,
	    			                itemStyle:{
	    			                	normal:{
	    			                		color:'#3da8f5'
	    			                	},
	    			                },
	    			            },
	    			            {
	    			            	value:290,
	    			            	name:zj,
	    			            	itemStyle:{
	    			                	normal:{
	    			                		color:'#ffe157'
	    			                	},
	    			                },
	    			            },
	    			            {
	    			            	value:210,
	    			            	name:yl,
	    			            	itemStyle:{
	    			                	normal:{
	    			                		color:'#3fe993'
	    			                	},
	    			                },
	    			            },
	    			        ],
	    		        }
	    		    ]
	    		};

	    	    // 使用刚指定的配置项和数据显示图表。
	    	    myChart.setOption(option);
	    })();
	    (function(){
	    	    // 基于准备好的dom，初始化echarts实例
	    	    var myChart = echarts.init(document.getElementById('income2'));
	    	    var rs = 1000;
	    	    var yw = 500;
	    	    var zj = 200;
	    	    var yl = 210;
	    	    // 指定图表的配置项和数据
	    	    option = {
	    	   		title:{
	    	   			show:false,
	    	   		    text: '支出',
	    	            x:'center',
	    	            subtext:"总支出：307,936"
	    	   		},
	    		    legend: {  
	    	            orient : 'vertical',  
	    	            x : 'right',  
	    	            top:120,
	    	            left:390,
	    	            itemWidth:18,
	    	            itemHeight:18,
	    	            formatter: '{name}',
	    	            itemGap:20,
	    	            selectedMode:false,
	    	            textStyle:{
	    	                color: '#424242',
	    	                fontSize:18,
	    	            },
	    	            data:[
	    		             {name:yw,icon:'rice'},
	    		             {name:zj,icon:'rice'},
	    		             {name:yl,icon:'rice'},
	    	            ]  
	    	        },
	    		    series: [
	    		        {
	    		            name:'访问来源',
	    		            hoverAnimation:false,
	    		            type:'pie',
	    		            radius: ['40%', '70%'],
	    		            center: ['35%', '43%'],
	    		            label: {
	    		               normal:{
	    		                    show:true,
	    		                    position:'inner', //标签的位置
	    		                    textStyle : {
	    		                        fontWeight : 300 ,
	    		                        fontSize : 12    //文字的字体大小
	    		                    },
	    		                    formatter:'{d}%'  
	    		                }
	    		            },
	    		            data:[ 
	    			            {
	    			               	value:500,
	    			                name:yw,
	    			                itemStyle:{
	    			                	normal:{
	    			                		color:'#3da8f5'
	    			                	},
	    			                },
	    			            },
	    			            {
	    			            	value:290,
	    			            	name:zj,
	    			            	itemStyle:{
	    			                	normal:{
	    			                		color:'#ffe157'
	    			                	},
	    			                },
	    			            },
	    			            {
	    			            	value:210,
	    			            	name:yl,
	    			            	itemStyle:{
	    			                	normal:{
	    			                		color:'#3fe993'
	    			                	},
	    			                },
	    			            },
	    			        ],
	    		        }
	    		    ]
	    		};

	    	    // 使用刚指定的配置项和数据显示图表。
	    	    myChart.setOption(option);
	   })();
});