$(document).ready(function($) {
		// 虚线
      	var dashedH = $(".con_list .sm_no .sm_no_container >div").height();
      	$(".con_list .sm_no .dashed").height(dashedH);

      	// 收入图标
      	var myChart = echarts.init(document.getElementById('expenditure_echarst'));
		myChart.setOption({
			color:["#47E184","#4CDFE8","#3682F4"],
		    tooltip : {
		        trigger: 'item',
		        axisPointer : {
		            type : 'shadow'        
		        },
		        formatter: '{b}:{d}%'
		    },
		    series : [
		        {
		            type: 'pie',
		            radius : ['65%','87%'],
		            center: ['50%', '50%'],
		            selectedMode: 'single',
		            data:[
		                {value:10000, name:'全年工资', },
		                {value:10000, name:'全年奖金'},
		                {value:5000, name:'其他收入'},
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
		// 支出图标
		var myChart2 = echarts.init(document.getElementById('expenditure_echarst2'));
		myChart2.setOption({
			color:["#FFE138","#FF9B39","#FB5D77"],
		    tooltip : {
		        trigger: 'item',
		        axisPointer : {
		            type : 'shadow'        
		        },
		        formatter: '{b}:\n{d}%'
		    },
		    series : [
		        {
		            type: 'pie',
		            radius : ['65%','87%'],
		            center: ['50%', '50%'],
		            selectedMode: 'single',
		            data:[
		                {value:20000, name:'固定支出', },
		                {value:10000, name:'还贷支出'},
		                {value:20000, name:'自由支出'},
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
})