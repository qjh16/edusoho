webpackJsonp(["app/js/my/course-set-teacher-list/index"],{"9c595ffc5a9384e3b1a6":function(s,c,a){"use strict";$(".js-course-sticky").on("click",function(s){var c=$(this);c.attr("disabled",!0),$.ajax({url:c.data("url"),type:"post",success:function(s){cd.message({type:"success",message:Translator.trans("course.stick.success")}),window.location.reload()},error:function(s){c.attr("disabled",!1)}})}),$(".js-course-unsticky").on("click",function(){var s=$(this);s.attr("disabled",!0),$.ajax({url:s.data("url"),type:"post",success:function(s){cd.message({type:"success",message:Translator.trans("course.cancel.stick.success")}),window.location.reload()},error:function(c){s.attr("disabled",!1)}})})}},["9c595ffc5a9384e3b1a6"]);