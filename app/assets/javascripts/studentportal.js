/* Copyright (C) 2012 Sylvain Hamel
Project: https://github.com/redhotsly/simple-expand
MIT Licence: https://raw.github.com/redhotsly/simple-expand/master/licence-mit.txt */
// THis is the -old code for simple expand:  (function($){"use strict";function SimpleExpand(){var that=this;that.defaults={hideMode:"fadeToggle",defaultSearchMode:"parent",defaultTarget:".content",throwOnMissingTarget:true,keepStateInCookie:false,cookieName:"simple-expand"};that.settings={};$.extend(that.settings,that.defaults);that.findLevelOneDeep=function(parent,filterSelector,stopAtSelector){return parent.find(filterSelector).filter(function(){return!$(this).parentsUntil(parent,stopAtSelector).length})};that.setInitialState=function(expander,targets){var isExpanded=that.readState(expander);if(isExpanded){expander.removeClass("collapsed").addClass("expanded");that.show(targets)}else{expander.removeClass("expanded").addClass("collapsed");that.hide(targets)}};that.hide=function(targets){if(that.settings.hideMode==="fadeToggle"){targets.hide()}else if(that.settings.hideMode==="basic"){targets.hide()}};that.show=function(targets){if(that.settings.hideMode==="fadeToggle"){targets.show()}else if(that.settings.hideMode==="basic"){targets.show()}};that.checkKeepStateInCookiePreconditions=function(){if(that.settings.keepStateInCookie&&$.cookie===undefined){throw new Error("simple-expand: keepStateInCookie option requires $.cookie to be defined.")}};that.readCookie=function(){var jsonString=$.cookie(that.settings.cookieName);if(jsonString===null||jsonString===""){return{}}else{return JSON.parse(jsonString)}};that.readState=function(expander){if(!that.settings.keepStateInCookie){return expander.hasClass("expanded")}var id=expander.attr("Id");if(id===undefined){return}var cookie=that.readCookie();var cookieValue=cookie[id];if(typeof cookieValue!=="undefined"){return cookie[id]===true}else{return expander.hasClass("expanded")}};that.saveState=function(expander,isExpanded){if(!that.settings.keepStateInCookie){return}var id=expander.attr("Id");if(id===undefined){return}var cookie=that.readCookie();cookie[id]=isExpanded;$.cookie(that.settings.cookieName,JSON.stringify(cookie),{raw:true,path:window.location.pathname})};that.toggle=function(expander,targets){var isExpanded=that.toggleCss(expander);if(that.settings.hideMode==="fadeToggle"){targets.fadeToggle(150)}else if(that.settings.hideMode==="basic"){targets.toggle()}else if($.isFunction(that.settings.hideMode)){that.settings.hideMode(expander,targets,isExpanded)}that.saveState(expander,isExpanded);return false};that.toggleCss=function(expander){if(expander.hasClass("expanded")){expander.toggleClass("collapsed expanded");return false}else{expander.toggleClass("expanded collapsed");return true}};that.findTargets=function(expander,searchMode,targetSelector){var targets=[];if(searchMode==="absolute"){targets=$(targetSelector)}else if(searchMode==="relative"){targets=that.findLevelOneDeep(expander,targetSelector,targetSelector)}else if(searchMode==="parent"){var parent=expander.parent();do{targets=that.findLevelOneDeep(parent,targetSelector,targetSelector);if(targets.length===0){parent=parent.parent()}}while(targets.length===0&&parent.length!==0)}return targets};that.activate=function(jquery,options){$.extend(that.settings,options);that.checkKeepStateInCookiePreconditions();jquery.each(function(){var expander=$(this);var targetSelector=expander.attr("data-expander-target")||that.settings.defaultTarget;var searchMode=expander.attr("data-expander-target-search")||that.settings.defaultSearchMode;var targets=that.findTargets(expander,searchMode,targetSelector);if(targets.length===0){if(that.settings.throwOnMissingTarget){throw"simple-expand: Targets not found"}return this}that.setInitialState(expander,targets);expander.click(function(){return that.toggle(expander,targets)})})}}window.SimpleExpand=SimpleExpand;$.fn.simpleexpand=function(options){var instance=new SimpleExpand;instance.activate(this,options);return this}})(jQuery);





function myFunction() {
    $("#toggle-menu").toggleClass("show-menu");

    var newsWindowEl = $('#this');
	$('.portal-nav').animate({
	        scrollTop: newsWindowEl.position().top
	}, 'slow');
}

$( document ).ready(function() {
    var newsWindowEl = $('#this');
	$('.portal-nav').animate({
	        scrollTop: newsWindowEl.position().top
	}, 'slow');


});



