$(document).ready(function($) {
	// 表格
	var H = $('#s_table').height();
    $('#table1').bootstrapTable({
      height: H-50,
          columns: [
            {'checkbox':true,field:'state'},
            { field: 'type'},
            { field: 'cycle'},
            { field: 'member'},
            { field: 'amount',class:'editableClass'},
            { field: 'comments',class:'commentClass'},
            {field:'id',visible:false},
        ],
    });
    $('#s_table thead tr th:nth-child(2)').append('<span style="float: right;" class="screen"><i class="iconfont icon-htmal5icon30"></i></span>');
    $('#s_table thead tr th:nth-child(3)').append('<span style="float: right;" class="screen"><i class="iconfont icon-htmal5icon30"></i></span>');
    $('#s_table thead tr th:nth-child(4)').append('<span style="float: right;" class="screen"><i class="iconfont icon-htmal5icon30"></i></span>')
    // 固定支出
	$('#del_select_o').change(function(event) {
		var str = $('#del_select_o option:selected').html();
		if(str == "固定支出"){
			$('#custom_modal2 .custom_modal2_body p').eq(1).show();
		}else{
			$('#custom_modal2 .custom_modal2_body p').eq(1).hide();
		}
	});
	$('#select_o').change(function(event) {
		var str = $('#select_o option:selected').html();
		if(str == "固定支出"){
			$('#custom_modal .custom_modal_body p').eq(1).show();
			
		}else{
			$('#custom_modal .custom_modal_body p').eq(1).hide();
		}
	});
	$("#custom_modal .custom_modal_body p").eq(1).hide();
	$("#custom_modal2 .custom_modal2_body p").eq(1).hide();
	var arr = [];

	// 筛选
    $("#checkbox1").selectCheck({
       allId:"checkAll1",
    });
    $("#checkbox2").selectCheck({
       allId:"checkAll2",
    });
    $("#checkbox3").selectCheck({
       allId:"checkAll3",
    });
    // 点击筛选确定按钮
    $('.sure').eq(0).click(function(){
          var arr1 = [];
          $('#checkbox1 input:checkbox:checked').each(function(){
          		arr1.push($(this).val())
          })  
          var arr1_ = arr1.filter(function(x){
          	return x != "on"
          })
          console.log(arr1_)
    });
    $('.sure').eq(1).click(function(){
    	  var arr2 = [];
          $('#checkbox2 input:checkbox:checked').each(function(){
          		console.log($(this).val())
          		arr2.push($(this).val())
          })  
          var arr2_ = arr2.filter(function(x){
          	return x != "on"
          })
          console.log(arr2_)
    });
  	$('.sure').eq(2).click(function(){
          var arr3 = [];
          $('#checkbox3 input:checkbox:checked').each(function(){
          		arr3.push($(this).val())      
          })   
           var arr3_ = arr3.filter(function(x){
          	return x != "on"
          })
          console.log(arr3_)
    });
    // 点击取消
    $('.cancel').each(function(index){
    	$(this).click(function(){
    		$(this).parent().parent().hide();
        $(this).parent().parent().find('span').removeClass("check_span--checked");
        $(this).parent().parent().find('input:checkbox').removeAttr("checked");
    		$('#s_table thead tr th .screen').eq(index).removeClass("screen_active_con");
    	})
    })
    // 点击筛选图标
    $('#s_table thead tr th .screen').each(function(index){
      // 阻止冒泡
    	 $(this).click(function(e){
        e.stopPropagation();
	    	$(this).toggleClass("screen_active_con");
	    	$('#s_table thead tr th .screen').not($(this)).removeClass("screen_active_con");
	    	
	    	$('#screen>div').eq(index).fadeToggle();
	    	$('#screen>div').not($('#screen>div').eq(index)).hide();

	    })
    })
    // 点击页面所有下来收起
    $(document).click(function(){
      $('#screen>div').hide();
       $('#s_table thead tr th .screen').removeClass("screen_active_con");
    })
    // 阻止冒泡
     $('#screen>div').click(function(e){
       e.stopPropagation();
    })
})
