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
      // 添加完成的确认按钮
    $('#creat').click(function(){
        $('#custom_modal').fadeOut(200);
        $('#custom_modal .custom_modal_con').animate({top:'40%'},400);
        $('body').css({overflowY:'visible'})
        var str = $('#select_o option:selected').html();
        var str2 = $('#select_t option:selected').html();
        var val = $('.custom_from input').val();  
        $('.con_list_tab div').each(function(index, el) {
          if(str == $(this).html()){
            selectIndex = $(this).index();
            selectIndexFlag = true ;
          }
        });

        if(str == "固定支出"){

          $('.con_list_con_list_item1 span').each(function(index, el) {
            if(str2 == $(this).html()){
              $('<li>'+val+'</li>').appendTo($(this).next());
            }
          });
        }else{

          $('.con_list_tab div').each(function(index, el) {
            if(str == $(this).html()){
              $('<li>'+val+'</li>').appendTo($(".con_list_con_list_item").eq($(this).index()).find('ul'));
              return false;
            }
          })
        }
        $('.con_list_>li').eq(0).fadeOut(300);
        $('.con_list_>li').eq(1).fadeIn(300);
        $('#con_list_add_con_project').val(val);
        $('.con_list_con_list_item li').click(function(){
          $('.con_list_>li').eq(0).fadeOut(300);
          $('.con_list_>li').eq(1).fadeIn(300);
          $('#con_list_add_con_project').val($(this).html());
          selectIndex = $(this).parents(".con_list_con_list_item").index();
        })
    })
    var selectIndex ;
    var selectIndexFlag = false ;
    // 点击三级类目切换
    $('.con_list_con_list_item li').click(function(){
        $('.con_list_>li').eq(0).fadeOut(300);
        $('.con_list_>li').eq(1).fadeIn(300);
        $('#con_list_add_con_project').val($(this).html());
        selectIndex = $(this).parents(".con_list_con_list_item").index();
    })
    $('.con_list_add_tit p').click(function(){
        $('.con_list_>li').eq(1).fadeOut(300);
        $('.con_list_>li').eq(0).fadeIn(300);
        if(selectIndexFlag){
          $(".con_list_tab div").eq(selectIndex).addClass('con_list_tab_active');
          $(".con_list_tab div").not($(".con_list_tab div").eq(selectIndex)).removeClass('con_list_tab_active');
          $('.con_list_con_list .con_list_con_list_item').hide();
          $('.con_list_con_list .con_list_con_list_item').eq(selectIndex).show();
        }
    })
     // 添加自定义项目
    $('#select_o').change(function(event) {
       var str = $('#select_o option:selected').html();
       if(str == "固定支出"){
         $('#custom_modal .custom_modal_body p').eq(1).show();
        
       }else{
          $('#custom_modal .custom_modal_body p').eq(1).hide();
       }
    });
    // 删除自定义项目
    $('#del_select_o').change(function(event) {
        var str = $('#del_select_o option:selected').html();
        if(str == "固定支出"){
          $('#custom_modal2 .custom_modal2_body p').eq(1).show();
        }else{
          $('#custom_modal2 .custom_modal2_body p').eq(1).hide();
        }
    });
    $("#custom_modal .custom_modal_body p").eq(1).hide();
    $("#custom_modal2 .custom_modal2_body p").eq(1).hide();
})
