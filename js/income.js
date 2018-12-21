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
    var selectIndex ;
    var selectIndexFlag = false ;
    var select_value,type_value,pro_value;
    // 添加自定义项目
    $('#select_o').change(function(event) {
       var val = $('#select_o option:selected').val();
       selectIndex = val;
      if(selectIndex == 0){
        $('#select_type1').show();
        $('#select_type2').hide();
      }
      if(selectIndex == 1){
         $('#select_type2').show();
        $('#select_type1').hide();
      }
    });
      // 添加完成的确认按钮
    $('#creat').click(function(){
        $('#custom_modal').fadeOut(200);
        $('#custom_modal .custom_modal_con').animate({top:'40%'},400);
        $('body').css({overflowY:'visible'})
        select_value = $('#select_o option:selected').val();
        if(selectIndex == 0){
           type_value =  $('#select_type1 select option:selected').val();
        }
        if(selectIndex == 1){
           type_value = $('#select_type2 select option:selected').val();
        }
        pro_value = $('#pro_value').val();
        $('.con_list_tab div').each(function(index, el) {
          if(select_value == index){
            selectIndex = index;
            selectIndexFlag = true ;
            $('.con_list_con_list .con_list_con_list_item1').eq(selectIndex).children('div').each(function(index, el) {
                if(type_value == $(this).index()){
                  $('<li>'+pro_value+'</li>').appendTo($(this).children('ul'));
                }
              });
          }
        });
        $('.con_list_>li').eq(0).fadeOut(300);
        $('.con_list_>li').eq(1).fadeIn(300);
        $('#con_list_add_con_project').val(pro_value);
        $('.con_list_con_list_item li').click(function(){
          $('.con_list_>li').eq(0).fadeOut(300);
          $('.con_list_>li').eq(1).fadeIn(300);
          $('#con_list_add_con_project').val($(this).html());
          selectIndex = $(this).parents(".con_list_con_list_item").index();
        })
    })
// 删除自定义项目
    $('#del_select_o').change(function(event) {
         var val = $('#del_select_o option:selected').val();
         selectIndex = val;
        if(selectIndex == 0){
          $('#del_select_type1').show();
          $('#del_select_type2').hide();
        }
        if(selectIndex == 1){
           $('#del_select_type2').show();
           $('#del_select_type1').hide();
        }
    });
    
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
})
