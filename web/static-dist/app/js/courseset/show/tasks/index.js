!function(l){function t(t){for(var e,i,n=t[0],o=t[1],r=t[2],s=0,a=[];s<n.length;s++)i=n[s],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&a.push(c[i][0]),c[i]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(l[e]=o[e]);for(h&&h(t);a.length;)a.shift()();return p.push.apply(p,r||[]),u()}function u(){for(var t,e=0;e<p.length;e++){for(var i=p[e],n=!0,o=1;o<i.length;o++){var r=i[o];0!==c[r]&&(n=!1)}n&&(p.splice(e--,1),t=s(s.s=i[0]))}return t}var i={},c={154:0},p=[];function s(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return l[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=l,s.c=i,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],n=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var h=n;p.push([586,0]),u()}({141:function(t,e,i){"use strict";var n=i(6),s=i.n(n),o=i(0),r=i.n(o),a=i(1),l=i.n(a),u=i(96),c=i(15),p=function(){function e(t){r()(this,e),void 0===t&&(t={}),this._init(t)}return l()(e,[{key:"_init",value:function(t){var e=$.extend(this._getDefaultOptions(t),t);e.wrapDom=t.wrapTarget,e.pageSize=this._getPageSizeByMaxLessonsNumOfChapter(e),new u.a(e),this._displayAllImmediately&&this._destroyPaging()}},{key:"_getPageSizeByMaxLessonsNumOfChapter",value:function(e){var t=e.data;if(!Object(c.d)(t)){var i=0,n=0;return t.forEach(function(t){e.context.isChapter(t)?(i=i<n?n:i,n=0):n++}),i<25?25:i+1}}},{key:"_getDefaultOptions",value:function(t){var e=this._wrapTarget(t.wrapTarget,".js-hidden-cached-data"),i=this._wrapTarget(t.wrapTarget,".js-hidden-course-info"),n=this._wrapTarget(t.wrapTarget,".js-hidden-i18n"),o=this._wrapTarget(t.wrapTarget,".js-hidden-activity-metas"),r=this._wrapTarget(t.wrapTarget,".js-hidden-current-timestamp");return{data:this._toJson(e.html()),context:{course:this._toJson(i.html()),i18n:this._toJson(n.html()),metas:this._toJson(o.html()),currentTimeStamp:s()(r.html(),10),isChapter:function(t){return"chapter"==t.itemType},isUnit:function(t){return"unit"==t.itemType},isLesson:function(t){return"lesson"==t.itemType},isTask:function(t){return"task"==t.itemType},getChapterName:function(t,e){return Translator.trans("course.chapter",{chapter_name:e.i18n.i18nChapterName,number:t.number,title:t.title,colon:t.title?":":""})},getUnitName:function(t,e){return Translator.trans("course.unit",{part_name:e.i18n.i18nUnitName,number:t.number,title:t.title,colon:t.title?":":""})},getLessonName:function(t,e){return e.isItemDisplayedAsOptional(t,e)?t.title:Translator.trans("course.lesson",{part_name:e.i18n.i18nLessonName,number:e.getLessonNum(t,e),title:t.title})},isItemDisplayedAsOptionalOrUnpublished:function(t,e){return e.isItemDisplayedAsOptional(t,e)||e.isItemDisplayedAsUnpublished(t,e)},isItemDisplayedAsOptional:function(t,e){return"1"==t.isOptional&&e.isLessonNode(t,e)},isItemDisplayedAsUnpublished:function(t,e){return!e.isPublished(t,e)&&e.isLessonNode(t,e)},isLessonNode:function(t){return"task"==t.itemType&&t.isSingleTaskLesson||"lesson"==t.itemType&&!t.isSingleTaskLesson},getTaskName:function(t,e){return t.isSingleTaskLesson?"1"==t.isOptional?t.title:Translator.trans("course.lesson",{part_name:e.i18n.i18nLessonName,number:e.getLessonNum(t,e),title:t.title}):Translator.trans("course.catalogue.task_status.task",{taskName:e.i18n.i18nTaskName,taskNumber:t.number,taskTitle:t.title})},hasWatchLimitRemaining:function(t){return!1!==t.watchLimitRemaining},highlightTaskClass:function(t,e){return t.taskId==e.course.currentTaskId?"active":""},taskClass:function(t,e){var i="es-icon left-menu";return e.isTaskLocked(t,e)?i+=" es-icon-lock":""==t.result||"false"==e.course.isMember?i+=" es-icon-undone-check color-gray":"start"==t.resultStatus?i+=" es-icon-doing color-primary":"finish"==t.resultStatus&&(i+=" es-icon-iccheckcircleblack24px color-primary"),i},lessonContainerClass:function(t,e){var i="color-gray bg-gray-lighter";return e.isTask(t,e)?t.isSingleTaskLesson?i:"":e.isLesson(t,e)?i:void 0},isTaskLocked:function(t,e){return e.course.isMember?"lockMode"==e.course.learnMode&&t.lock:"lockMode"==e.course.learnMode},isPublished:function(t){return"published"==t.status},isPublishedTaskUnlocked:function(t,e){return e.isPublished(t,e)&&!e.isTaskLocked(t,e)},isCloudVideo:function(t){return"video"==t.type&&"cloud"==t.fileStorage},getMetaIcon:function(t,e){return void 0!==e.metas[t.type]?e.metas[t.type].icon:""},getMetaName:function(t,e){return void 0!==e.metas[t.type]?e.metas[t.type].name:""},isLiveReplayGenerated:function(t){return"ungenerated"!=t.replayStatus},isLive:function(t){return"live"==t.type},isLiveNotStarted:function(t,e){return e.isLive(t,e)&&e.currentTimeStamp<e.toInt(t.activityStartTime)},isLiveStarting:function(t,e){return e.isLive(t,e)&&e.currentTimeStamp>=e.toInt(t.activityStartTime)&&e.currentTimeStamp<=e.toInt(t.activityEndTime)},isLiveFinished:function(t,e){return e.isLive(t,e)&&e.currentTimeStamp>e.toInt(t.activityEndTime)},toInt:function(t){return s()(t,10)},getLessonNum:function(t,e){var i=t.number;return"1"==e.course.isHideUnpublish&&(i=t.published_number),i}},dataTemplateNode:".js-infinite-item-template"}}},{key:"_wrapTarget",value:function(t,e){return t?t.find(e):$(e)}},{key:"_destroyPaging",value:function(){for(var t=["js-infinite-item-template","js-hidden-cached-data","js-hidden-course-info","js-hidden-i18n","js-hidden-activity-metas","js-hidden-current-timestamp","infinite-container","js-down-loading-more"],e=0;e<t.length;e++)$("."+t[e]).removeClass(t[e])}},{key:"_toJson",value:function(t){var e={};return t&&(e=$.parseJSON(t.replace(/[\r\n\t]/g,""))),e}}]),e}();e.a=p},268:function(t,e){
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function e(t){if(!t)throw new Error("No options passed to Waypoint constructor");if(!t.element)throw new Error("No element option passed to Waypoint constructor");if(!t.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+i,this.options=e.Adapter.extend({},e.defaults,t),this.element=this.options.element,this.adapter=new e.Adapter(this.element),this.callback=t.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=e.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=e.Context.findOrCreateByElement(this.options.context),e.offsetAliases[this.options.offset]&&(this.options.offset=e.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),r[this.key]=this,i+=1}var i=0,r={};e.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},e.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},e.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete r[this.key]},e.prototype.disable=function(){return this.enabled=!1,this},e.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},e.prototype.next=function(){return this.group.next(this)},e.prototype.previous=function(){return this.group.previous(this)},e.invokeAll=function(t){var e=[];for(var i in r)e.push(r[i]);for(var n=0,o=e.length;n<o;n++)e[n][t]()},e.destroyAll=function(){e.invokeAll("destroy")},e.disableAll=function(){e.invokeAll("disable")},e.enableAll=function(){for(var t in e.Context.refreshAll(),r)r[t].enabled=!0;return this},e.refreshAll=function(){e.Context.refreshAll()},e.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},e.viewportWidth=function(){return document.documentElement.clientWidth},e.adapters=[],e.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},e.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=e}(),function(){"use strict";function e(t){window.setTimeout(t,1e3/60)}function i(t){this.element=t,this.Adapter=g.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+n,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,n+=1,g.windowContext||(g.windowContext=!0,g.windowContext=new i(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var n=0,o={},g=window.Waypoint,t=window.onload;i.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},i.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},i.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,g.requestAnimationFrame(t))})},i.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){e.didScroll&&!g.isTouch||(e.didScroll=!0,g.requestAnimationFrame(t))})},i.prototype.handleResize=function(){g.Context.refreshAll()},i.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var n=e[i],o=n.newScroll>n.oldScroll?n.forward:n.backward;for(var r in this.waypoints[i]){var s,a,l=this.waypoints[i][r];null!==l.triggerPoint&&(s=n.oldScroll<l.triggerPoint,a=n.newScroll>=l.triggerPoint,(s&&a||!s&&!a)&&(l.queueTrigger(o),t[l.group.id]=l.group))}}for(var u in t)t[u].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},i.prototype.innerHeight=function(){return this.element==this.element.window?g.viewportHeight():this.adapter.innerHeight()},i.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},i.prototype.innerWidth=function(){return this.element==this.element.window?g.viewportWidth():this.adapter.innerWidth()},i.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var n=0,o=t.length;n<o;n++)t[n].destroy()},i.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),n={};for(var o in this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var r=t[o];for(var s in this.waypoints[o]){var a,l,u,c,p=this.waypoints[o][s],h=p.options.offset,d=p.triggerPoint,f=0,y=null==d;p.element!==p.element.window&&(f=p.adapter.offset()[r.offsetProp]),"function"==typeof h?h=h.apply(p):"string"==typeof h&&(h=parseFloat(h),-1<p.options.offset.indexOf("%")&&(h=Math.ceil(r.contextDimension*h/100))),a=r.contextScroll-r.contextOffset,p.triggerPoint=Math.floor(f+a-h),l=d<r.oldScroll,u=p.triggerPoint>=r.oldScroll,c=!l&&!u,!y&&(l&&u)?(p.queueTrigger(r.backward),n[p.group.id]=p.group):(!y&&c||y&&r.oldScroll>=p.triggerPoint)&&(p.queueTrigger(r.forward),n[p.group.id]=p.group)}}return g.requestAnimationFrame(function(){for(var t in n)n[t].flushTriggers()}),this},i.findOrCreateByElement=function(t){return i.findByElement(t)||new i(t)},i.refreshAll=function(){for(var t in o)o[t].refresh()},i.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){t&&t(),i.refreshAll()},g.requestAnimationFrame=function(t){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||e).call(window,t)},g.Context=i}(),function(){"use strict";function s(t,e){return t.triggerPoint-e.triggerPoint}function a(t,e){return e.triggerPoint-t.triggerPoint}function e(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),i[this.axis][this.name]=this}var i={vertical:{},horizontal:{}},n=window.Waypoint;e.prototype.add=function(t){this.waypoints.push(t)},e.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},e.prototype.flushTriggers=function(){for(var t in this.triggerQueues){var e=this.triggerQueues[t],i="up"===t||"left"===t;e.sort(i?a:s);for(var n=0,o=e.length;n<o;n+=1){var r=e[n];!r.options.continuous&&n!==e.length-1||r.trigger([t])}}this.clearTriggerQueues()},e.prototype.next=function(t){this.waypoints.sort(s);var e=n.Adapter.inArray(t,this.waypoints);return e===this.waypoints.length-1?null:this.waypoints[e+1]},e.prototype.previous=function(t){this.waypoints.sort(s);var e=n.Adapter.inArray(t,this.waypoints);return e?this.waypoints[e-1]:null},e.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},e.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);-1<e&&this.waypoints.splice(e,1)},e.prototype.first=function(){return this.waypoints[0]},e.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},e.findOrCreate=function(t){return i[t.axis][t.name]||new e(t)},n.Group=e}(),function(){"use strict";function i(t){this.$element=n(t)}var n=window.jQuery,t=window.Waypoint;n.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(t,e){i.prototype[e]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[e].apply(this.$element,t)}}),n.each(["extend","inArray","isEmptyObject"],function(t,e){i[e]=n[e]}),t.adapters.push({name:"jquery",Adapter:i}),t.Adapter=i}(),function(){"use strict";function t(n){return function(){var e=[],i=arguments[0];return n.isFunction(arguments[0])&&((i=n.extend({},arguments[1])).handler=arguments[0]),this.each(function(){var t=n.extend({},i,{element:this});"string"==typeof t.context&&(t.context=n(this).closest(t.context)[0]),e.push(new o(t))}),e}}var o=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}()},312:function(t,e,i){"use strict";i.d(e,"a",function(){return w});var n=i(2),o=i.n(n),r=i(0),s=i.n(r),a=i(1),l=i.n(a),u=i(8),c=i.n(u),p=i(9),h=i.n(p),d=i(5),f=i.n(d),y=i(141),g=i(96);function m(n){return function(){var t,e,i=f()(n);return e=function(){if("undefined"==typeof Reflect||!o.a)return;if(o.a.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(o()(Date,[],function(){})),1}catch(t){return}}()?(t=f()(this).constructor,o()(i,arguments,t)):i.apply(this,arguments),h()(this,e)}}var w=function(t){c()(i,t);var e=m(i);function i(){return s()(this,i),e.apply(this,arguments)}return l()(i,[{key:"_init",value:function(i){var n=this;0<$('input[name="showOptional"]').length&&("true"==window.localStorage.getItem("showOptional")&&$('input[name="showOptional"]').attr("checked","checked"),$('input[name="showOptional"]').change(function(){window.localStorage.setItem("showOptional",$('input[name="showOptional"]').is(":checked")),window.location.reload()}));var t,o=i.target?i.target.find(".js-tasks-show"):$(".js-tasks-show");o.length&&(t=0<$('input[name="showOptional"]').length?{showOptional:window.localStorage.getItem("showOptional")}:{},$.get(o.data("url"),t,function(t){o.html(t);var e=$.extend(n._getDefaultOptions(i),i);e.wrapDom=i.wrapTarget,e.pageSize=n._getPageSizeByMaxLessonsNumOfChapter(e),new g.a(e),n._displayAllImmediately&&n._destroyPaging(),$(".course-tasks-show-more").length<1||e.data.length&&25<e.data.length&&$(".course-tasks-show-more").removeClass("hidden")}))}}]),i}(y.a)},586:function(t,e,i){"use strict";i.r(e),new(i(312).a)},96:function(t,e,i){"use strict";i.d(e,"a",function(){return k});var n=i(2),o=i.n(n),r=i(20),a=i.n(r),s=i(0),l=i.n(s),u=i(1),c=i.n(u),p=i(8),h=i.n(p),d=i(9),f=i.n(d),y=i(5),g=i.n(y),m=i(15),w=(i(268),i(134)),v=i(139);function _(n){return function(){var t,e,i=g()(n);return e=function(){if("undefined"==typeof Reflect||!o.a)return;if(o.a.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(o()(Date,[],function(){})),1}catch(t){return}}()?(t=g()(this).constructor,o()(i,arguments,t)):i.apply(this,arguments),f()(this,e)}}var k=function(t){h()(n,t);var i=_(n);function n(t){var e;return l()(this,n),(e=i.call(this))._options=t,e._initConfig(),e.chapterAnimate(),e._displayAllImmediately?e._displayCurrentPageDataAndSwitchToNext():e._initUpLoading(),e}return c()(n,[{key:"toggleIcon",value:function(n,o,r){var s=this;return new a.a(function(t,e){var i=n.find(".js-remove-icon");n.find(".js-remove-text");i.hasClass(o)?(i.removeClass(o).addClass(r),0==$(".js-only-display-one-page").length&&s._displayCurrentPageDataAndSwitchToNext()):i.removeClass(r).addClass(o),t()})}},{key:"chapterAnimate",value:function(t,e,i,n){var o=1<arguments.length&&void 0!==e?e:".js-task-chapter",r=2<arguments.length&&void 0!==i?i:"es-icon-remove",s=3<arguments.length&&void 0!==n?n:"es-icon-anonymous-iconfont",a=this;$(0<arguments.length&&void 0!==t?t:"body").off("click").on("click",o,function(t){var e=$(t.currentTarget);a.toggleIcon(e,r,s).then(function(){e.nextUntil(o).animate({height:"toggle",opacity:"toggle"},"normal")})})}},{key:"_initUpLoading",value:function(){var e,i;0!=$(".js-down-loading-more").length&&(e=this,i=new Waypoint({element:$(".js-down-loading-more")[0],handler:function(t){"down"==t&&(e._isLastPage||e._canNotDisplayMore()?i.disable():(e._scrollToBottom(),i.disable(),e._displayCurrentPageDataAndSwitchToNext(),Waypoint.refreshAll(),i.enable()))},offset:"bottom-in-view"}))}},{key:"_initConfig",value:function(){this._currentPage=1,this._displayAllImmediately=!!this._options.displayAllImmediately,this._displayAllImmediately?this._pageSize=1e4:this._pageSize=this._options.pageSize?this._options.pageSize:25,25<this._pageSize&&0!=$(".js-only-display-one-page").length&&(this._pageSize=25),this._afterFirstLoad=this._options.afterFirstLoad?this._options.afterFirstLoad:null,this._isFirstLoad=!0,this._options.displayItem?(this._displayItemDisplayed=!1,this._displayItem=this._options.displayItem):(this._displayItemDisplayed=!0,this._displayItem=null),this._isLastPage=!1}},{key:"_displayCurrentPageDataAndSwitchToNext",value:function(){this._displayData(),this._isLastPage||this._currentPage++,this._isFirstLoad&&(this._displayItemDisplayed?(this._isFirstLoad=!1,this._afterFirstLoad&&this._afterFirstLoad()):this._displayCurrentPageDataAndSwitchToNext())}},{key:"_displayData",value:function(){if(!this._isLastPage)for(var t=this._getStartIndex(),e=0;e<this._pageSize;e++){var i,n,o=this._options.data[e+t];this._displayItemDisplayed||(i=this._displayItem.key,n=this._displayItem.value,o[i]==n&&(this._displayItemDisplayed=!0)),Object(m.d)(o)?this._isLastPage=!0:this._generateSingleCachedData(o)}}},{key:"_scrollToBottom",value:function(){var t,e,i,n,o=this,r=this,s=$(".js-sidebar-pane");s.length&&(t=s[0],e=s.height(),i=t.scrollHeight,n=t.scrollTop,r._afterFirstLoad&&t.addEventListener("scroll",Object(v.a)(function(){i<=n+e&&!o._isLastPage&&r._displayCurrentPageDataAndSwitchToNext()},500,!0)))}},{key:"_generateSingleCachedData",value:function(t){var e=this._options.dataTemplateNode,i=this._options.wrapDom?this._options.wrapDom.find(e).html():$(e).html(),n=t,o=this,r=(r=i.replace(/({\w+})/g,function(t){return o._replace(t,n,"{","}")})).replace(/(%7B\w+%7D)/g,function(t){return o._replace(t,n,"%7B","%7D")}),s=$("<div>").append(r);this._removeUnNeedNodes(s),(this._options.wrapDom?this._options.wrapDom.find(".infinite-container"):$(".infinite-container")).append(s.html())}},{key:"_getStartIndex",value:function(){return(this._currentPage-1)*this._pageSize}},{key:"_replace",value:function(t,e,i,n){var o=t.split(i)[1].split(n)[0],r=this._options.context;return"function"==typeof r[o]?r[o](e,r):void 0!==e[o]?e[o]:t}},{key:"_canNotDisplayMore",value:function(){return 1!=this._currentPage&&0!=$(".js-only-display-one-page").length}},{key:"_removeUnNeedNodes",value:function(t){t.find("[display-if=false]").remove(),t.find("[display-if=0]").remove(),t.find("[hide-if=1]").remove(),t.find("[hide-if=true]").remove(),t.find("tmp :first-child").each(function(){var t=$(this).parent();t.hasClass("js-ignore-remove")||"TMP"!=t[0].nodeName||$(this).unwrap()})}}]),n}(w.a)}});