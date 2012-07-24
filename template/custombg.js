jQuery.noConflict();

jQuery(document).ready(function($){

	$('a[href=#top]').click(function(){
		$('html, body').animate({scrollTop:0}, 400);
        return false;
	});
	
	$('a[href=#wrap]').click(function(){
		$('html, body').animate({scrollTop:0}, 400);
        return false;
	});
	
	$("#nav_background").click(function(){
		$("#toggle_background").slideToggle();
	});
	
	$("#reset_background").click(function(){
		$.cookie('custom_url',null,{path: '/'});
		$("body").removeClass("bg_custom");
		$(".forabg li.header").removeClass("bg_custom");
		$(".forumbg li.header").removeClass("bg_custom");
	});

	$("#custom_background span").click(function(){
		$.cookie('custom_url',null,{ expires: -5, path: '/'});
		var bgid = $(this).attr("id");
		$.cookie('custombg',bgid,{ expires: 365, path: '/'});
		$("body").removeClass().addClass(bgid);
	});
	
	$("#custom_submit").click(function(){
		$.cookie('custombg',"bg_custom",{ expires: 365, path: '/'});
		var customurl = $("#custom_input").val();
		$.cookie('custom_url',customurl,{ expires: 365, path: '/'});
		$("<style type='text/css'>body.bg_custom, .forabg li.header.bg_custom, .forumbg li.header.bg_custom { background-image: url(" + customurl + ")}</style>").appendTo("head");
		$("body").addClass("bg_custom");
		$(".forabg li.header").addClass("bg_custom");
		$(".forumbg li.header").addClass("bg_custom");
	});
		
	if ( ($.cookie('custombg') != null))	{
		$("body").addClass($.cookie('custombg'));
	}
	else{
		$("body").addClass("no_bg");
	}
	
	if ( ($.cookie('custom_url') != null))	{
		$("<style type='text/css'>body.bg_custom, .forabg li.header.bg_custom, .forumbg li.header.bg_custom { background-image: url(" + $.cookie('custom_url') + ")}</style>").appendTo("head");
		$("body").removeClass("no_bg").addClass("bg_custom");
		$(".forabg li.header").addClass("bg_custom");
		$(".forumbg li.header").addClass("bg_custom");
	}
});