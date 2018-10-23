$(document).ready(function($) {
	 
	// $('.con_list .children').each(function(index, el) {
	// 	if (($(this).index()+1) % 2 != 0 ){
	// 		$(this).css({marginLeft:0});
	// 	}

	// });
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
		$('#push span').html('信息已保存')
		$('#push').fadeIn(1000,function(){
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
     $('#push i').click(function(){
		$(this).parent().hide();
	})
     
     // 补充公积金
    var $table= $('.table_gjin').bootstrapTable({ 
    	showHeader:false,  
	   	columns: [
		   	{
	          field: 'project',
	          title: '社保类型',
	        },
	        {
	          field: 'money',
	          title: '金额',
	        },
	        {
	          field: 'proportion',
	          title: '比例',
	          editable: true
	        },
	        { 
	        	field: 'select', 
	        	title: '方案',
	        } 
        ],
        data:[ 
			{ 
			"project":"补充公积金",
			"money":"300,00", 
			"proportion":"编辑填写", 
			"select":"——",
			}
		]
    }) 
    var $table2= $('.table').bootstrapTable({ 
	   	columns: [
		   	{
	          field: 'project',
	          title: '社保类型',
	        },
	        {
	          field: 'money',
	          title: '缴纳金额',
	        },
	        {
	          field: 'proportion',
	          title: '缴纳比例',
	        },
	        { 
	        	field: 'select', 
	        	title: '缴纳方案',
	        	editable: {
	               type: 'select',
	               title:"缴费方案",
	               mode: "popup",

	               source: [{ value: "1", text: "缴纳" }, { value: "0", text: "不缴纳" }]
	            },
	        } 
        ],
        data:[ 
			{ 
			"project":"养老",
			"money":"300,00", 
			"proportion":"8.00%", 
			"select":"1",
			},
			{ 
			"project":"医疗",
			"money":"300,00", 
			"proportion":"8.00%", 
			"select":"1",
			},
			{ 
			"project":"失业",
			"money":"300,00", 
			"proportion":"8.00%", 
			"select":"1",
			},
			{ 
			"project":"工伤",
			"money":"300,00", 
			"proportion":"8.00%", 
			"select":"1",
			},
			{ 
			"project":"生育",
			"money":"300,00", 
			"proportion":"8.00%", 
			"select":"1",
			},
			{ 
			"project":"公积金",
			"money":"300,00", 
			"proportion":"8.00%", 
			"select":"1",
			},
			
		]
    }) 
    $(" li .con_list_from .con_list_from_item table tbody tr").each(function(el,index){
			// console.log(el);
			// console.log(index);
			
			$(this).children('td').click(function(){
				console.log($(this).html())
			})
	 })
});