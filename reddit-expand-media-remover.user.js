// ==UserScript==
// @name        Reddit Expand Media Remover
// @namespace   TTD
// @version     2
// @include     http://www.reddit.com/*
// @include     https://www.reddit.com/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant       GM_addStyle
// ==/UserScript==

var expandMediaNodes = $(".expand-media");
expandMediaNodes.removeClass("expand-media");

$(".happening-now-wrap").remove();
$(".happening-now").remove();

$(".expando-button").remove();

$(".hover-bubble").remove();

$(".author-tooltip").remove();
$(".author-tooltip_common").remove();

//mouseover www.redditstatic.com/author-tooltip.*.js

//document['getElementsByRegex'] = function(pattern){
//   var arrElements = [];   // to accumulate matching elements
//   var re = new RegExp(pattern);   // the regex to match with
//
//   function findRecursively(aNode) { // recursive function to traverse DOM
//      if (!aNode)
//          return;
//      if (aNode.id !== undefined && aNode.id.search(re) != -1)
//          arrElements.push(aNode);  // FOUND ONE!
//      for (var idx in aNode.childNodes) // search children...
//          findRecursively(aNode.childNodes[idx]);
//   };
//
//   findRecursively(document); // initiate recursive matching
//   return arrElements; // return matching elements
//};

//var arrMatches = document.getElementsByRegex('^statusMessage_.*');
//alert('found ' + arrMatches.length + ' matches - expected 3.')