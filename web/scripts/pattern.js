/*jslint browser: true, ass: true, white: true */
(function(){
	"use strict";
	var html, css, script;

	html = $(".pattern-example").html();
	css = $("#Pattern-Style").text();
	script = $("#Pattern-Script").text();

	$("#Code-HTML").text(html);
	$("#Code-CSS").text(css);
	$("#Code-JavaScript").text(script);

}());