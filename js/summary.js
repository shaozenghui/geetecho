window.onload = function(){
	$('#userList li').each(function(index,el){
		if( (index+1) % 4 == 0){
			$('#userList li').eq(index).css({marginRight:0})
		}
	})
	$(".table .tab ul li").click(function(){
		$(this).addClass("tab_class");
		$(this).parents(".table").find(".tab").find('li').not($(this)).removeClass('tab_class');
		var container = $(this).parents(".table").find(".tab_content ul");
		var scrollTo = $(this).parents(".table").find(".tab_content").find('li').eq($(this).index());
		var scroll = scrollTo.offset().top - container.offset().top + container.scrollTop();
		container.animate({scrollTop:scroll})
	});
	// 支出
	 $(".demoUp").mouseover(function(){
        var _this = $(this);
        _this.justToolsTip({
            animation:"moveInTop",
            contents:_this.attr('tit'),
            gravity:'top',    
            animation: 'none'
        });
     })
	var myChart = echarts.init(document.getElementById('expenditure_echarst'));
	myChart.setOption({
		color:["#ffe138","#fe7358","#43a0ff"],
	    tooltip : {
	        trigger: 'item',
	        axisPointer : {
	            type : 'shadow'        
	        }
	    },
	    series : [
	        {
	            type: 'pie',
	            radius : '70%',
	            center: ['50%', '50%'],
	            selectedMode: 'single',
	            data:[
	                {value:335, name:'自由支出', },
	                {value:310, name:'还贷支出'},
	                {value:234, name:'固定支出',},
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
	$("#expenditure .list_content_item .list_tit").click(function(){
		$(this).next().slideToggle();
		$(this).toggleClass('list_tit_bg_right');
	})
	// 资产负债
	var myChart2 = echarts.init(document.getElementById('assets_echarst'));
	myChart2.setOption({
	    xAxis: {
	        type: 'category',
	        data: ['流动资产', '固定资产', '实业资产', '负债'],
	        axisLabel: {
                show: true,
                textStyle: {
                    color: '#909090'
                }
            },
	        nameTextStyle:{
	        	color:'#909090',
	        	fontSize:14
	        },
	        axisLine:{
	        	lineStyle:{
	        		color:"#dbdbdb",
	        	}
	        }
	    },
	    yAxis: {
	        type: 'value',
	        axisLabel: {
                show: true,
                textStyle: {
                    color: '#909090'
                }
            },
	        axisLine:{
	        	lineStyle:{
	        		color:"#dbdbdb",
	        	}
	        }
	    },
	    grid: {
	        left: '0%',
	        right: '0%',
	        bottom: '0%',
	        containLabel: true
	    },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {
	            type : 'shadow'        
	        }
	    },
	    series: [{
	    	barWidth : 20,
	        itemStyle: { 
	            normal: { 
	                barBorderRadius:[4, 4, 4,4],
	                color: function(params) { 
	                    var colorList = [ 
	                    '#5aee98','#43a0ff','#ffe138','#ff6b38']; 
	                    return colorList[params.dataIndex] 
	                },
	                label: { 
	                    show: true ,
	                    position:'top'
	                } 
	            } 
	        } ,
	        data: [
		        {
		        	value:10000,
		        	name:'流动资产'
		        }, 
		        {
		        	value:300000,
		        	name:'固定资产'
		        }, 
		        {
		        	value:20000,
		        	name:'实业资产'
		        }, 
		         {
		        	value:-120000,
		        	name:'负债',
		        	label: {
    	                normal: {
    	                    show: true,
    	                    position: 'bottom'
    	                }
    	            },
		        }
		    ],
	        type: 'bar',
	    }]
	});
	// 支出详情模态框
		$('#expenditure .detail').mousemove(function(event) {
			$('#expen_modal').show();
			$(this).css({color: "#3da8f5"});
		});
		$('#expenditure .detail').mouseout(function(event) {
			$('#expen_modal').hide();
			$(this).css({color: "#909090"});
		});
		$('#expen_modal').mousemove(function(event) {
			$('#expen_modal').show();
			$('#expenditure .detail').css({color: "#3da8f5"});
		});
		$('#expen_modal').mouseout(function(event) {
			$('#expen_modal').hide();
			$('#expenditure .detail').css({color: "#909090"});
		});
	// 收入详情模态框
	$('#income .detail').mousemove(function(event) {
		$('#income_modal').show();
		$(this).css({color: "#3da8f5"});
	});
	$('#income .detail').mouseout(function(event) {
		$('#income_modal').hide();
		$(this).css({color: "#909090"});
	});
	$('#income_modal').mousemove(function(event) {
		$('#income_modal').show();
		$('#income .detail').css({color: "#3da8f5"});
	});
	$('#income_modal').mouseout(function(event) {
		$('#income_modal').hide();
		$('#income .detail').css({color: "#909090"});
	});
	// 负债详情模态框
	$('#assets_liabilities .detail').mousemove(function(event) {
		$('#assets_modal').show();
		$(this).css({color: "#3da8f5"});
	});
	$('#assets_liabilities .detail').mouseout(function(event) {
		$('#assets_modal').hide();
		$(this).css({color: "#909090"});
	});
	$('#assets_modal').mousemove(function(event) {
		$('#assets_modal').show();
		$('#assets_liabilities .detail').css({color: "#3da8f5"});
	});
	$('#assets_modal').mouseout(function(event) {
		$('#assets_modal').hide();
		$('#assets_liabilities .detail').css({color: "#909090"});
	});
}
