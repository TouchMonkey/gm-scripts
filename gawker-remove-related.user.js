// ==UserScript==
// @name        Gawker Remove Related
// @namespace   TTD
// @version     1
// @include     /^https?://(?:.*\.)?lifehacker\.com/.*$/
// @include     /^https?://(?:.*\.)?gawker\.com/.*$/
// @include     /^https?://(?:.*\.)?gizmodo\.com/.*$/
// @include     /^https?://(?:.*\.)?kotaku\.com/.*$/
// @include     /^https?://(?:.*\.)?deadspin\.com/.*$/
// @include     /^https?://(?:.*\.)?jalopnik\.com/.*$/
// @include     /^https?://(?:.*\.)?io9\.com/.*$/
// @include     /^https?://(?:.*\.)?jezebel\.com/.*$/
// @include     /^https?://(?:.*\.)?kinja\.com/.*$/
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant       GM_addStyle
// ==/UserScript==

$(".js_related-module").remove();
$(".related-module").remove();
$(".sidebar").remove();
$(".site-footer").remove();

var main=$(".main");
main.css("width", "100%");
main.css("float", "none");

var mainContent=$(".main__content");
mainContent.css("float", "none");
//mainContent.css("max-width", "100%");

//var jsMainContent=$(".js_main__content");
//jsMainContent.css("float", "none");
//jsMainContent.css("max-width", "100%");
