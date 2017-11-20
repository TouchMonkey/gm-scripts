// ==UserScript==
// @name        Disable Hotkey Hijacking
// @namespace   TouchMonkey
// @description Stop websites from hijacking keyboard shortcuts
// @run-at      document-start
// @include     *
// @version     1
// @grant       none
// ==/UserScript==

//JavaScript Keycodes: https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

//              f   s   t
ctrlKeycodes = [70, 83, 84];

//                /
plainKeycodes = [191];

document.addEventListener('keydown', function(e) {
    //alert(e.keyCode ); //uncomment to find more keyCodes
    if (   (( ctrlKeycodes.indexOf(e.keyCode) != -1) && ( e.ctrlKey) && (!e.altKey) && (!e.shiftKey) && (!e.metaKey))
        || ((plainKeycodes.indexOf(e.keyCode) != -1) && (!e.ctrlKey) && (!e.altKey) && (!e.shiftKey) && (!e.metaKey))) {
        e.stopPropagation();
        e.stopImmediatePropagation();
    }
    return false;
}, true);