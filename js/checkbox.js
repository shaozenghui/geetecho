(function ($) {
    $.fn.extend({        
        selectCheck: function (options) {          
            var defaults = {parentSelect:"p",allId: 'checkAll',toggleClass: 'check_span--checked',checkCallBack:function(obj,bool){}};
			var options = $.extend(defaults, options);			
			function checkAll(getcheckbox,check,bool,obj){
				var o = options,call=$("#"+o.allId),len=getcheckbox.length-1;				
				if(o.checkCallBack && $.isFunction(o.checkCallBack)) o.checkCallBack.call(this,obj,bool);
				check.attr("id")==o.allId ? ( bool ? (getcheckbox.prop("checked",true),getcheckbox.parent().addClass(o.toggleClass),check.prop("checked",true)):(getcheckbox.removeAttr("checked"),getcheckbox.parent().removeClass(o.toggleClass),check.removeAttr("checked"))) :　
				( bool ? (check.prop("checked",true),check.parent().addClass(o.toggleClass),(len==obj.find("input:checkbox:checked").length) ? (call.parent().addClass(o.toggleClass),call.prop("checked",true)) :null) : (check.removeAttr("checked"),check.parent().removeClass(o.toggleClass),call.parent().removeClass(o.toggleClass),call.removeAttr("checked")));
			}			
            return this.each(function () {
                var o = options,obj = $(this),that=this,getcheckbox = $('input:checkbox',obj);
				o.parentSelect ? (getcheckbox.parents(o.parentSelect).click(function(e){o.allId ? ($(e.target).attr("type")=="checkbox" ? checkAll(getcheckbox,$(e.target),e.target.checked,obj) : checkAll(getcheckbox,$(this).find("input:checkbox"),!$(this).find("input:checkbox").is(":checked"),obj)) : 
					($(e.target).attr("type")=="checkbox" ? ($(e.target).parent().toggleClass(o.toggleClass),(o.checkCallBack && $.isFunction(o.checkCallBack)) ? (o.checkCallBack.call(that,obj,e.target.checked)) :null) :($('input:checkbox',$(this)).parent().toggleClass(o.toggleClass),(o.checkCallBack && $.isFunction(o.checkCallBack)) ? (o.checkCallBack.call(that,obj,e.target.checked)) :null))})
					): (getcheckbox.click(function(){o.allId ? checkAll(getcheckbox,$(this),this.checked.obj) : ($(this).parent().toggleClass(o.toggleClass),(o.checkCallBack && $.isFunction(o.checkCallBack)) ? (o.checkCallBack.call(that,obj,e.target.checked)) :null)}));
            });
        },		
    });
})(jQuery);