// ==UserScript==
// @name            Trevor's Reddit Spoilers
// @version         0.1
// @description     Disable spoiler formatting for Reddit
// @author          Trevor Duke
// @match           *://www.reddit.com/*/comments/*
// @run-at          document-end
// @namespace       TrevorDuke
// @grant           GM_addStyle
// ==/UserScript==

/*jshint multistr: true */

GM_addStyle('                                             \
    a[href="/s"] {                                        \
        background-color: #808080 !important;             \
    }                                                     \
    a[href="#s"] {                                        \
        background-color: #808080 !important;             \
    }                                                     \
    a[href="/s"]::after, a[href="#s"]::after {            \
        background: #808080 !important;                   \
    }                                                     \
');

/*
var anchors = document.getElementsByTagName('a');
for (var i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];
    if (   anchor.href === 'https://www.reddit.com/s'
        || anchor.href === 'https://www.reddit.com/spoiler'
        || anchor.href === '/s'
        || anchor.href === '#s'
        || anchor.href === '/spoiler') {
        var spoiler = document.createElement('span');
        spoiler.innerHTML = anchor.title || anchor.textContent;
        spoiler.style.backgroundColor = '#999999';
        spoiler.onmouseover = function() { this.style.backgroundColor = 'white'; };
        spoiler.onmouseout  = function() { this.style.backgroundColor = '#999999'; };
        anchor.parentNode.replaceChild(spoiler, anchor);
    }
}
*/