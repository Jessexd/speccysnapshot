// ==UserScript==
// @name         SpeccyTheme
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Theme for speccy snapshots.
// @author       desgen + mandevwin
// @match        http://speccy.piriform.com/results/*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @require      https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js
// @resource     customCSS https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css
// @resource     customCSS1 https://raw.githubusercontent.com/Jessexd/speccysnapshot/master/Default.css
// @run-at document-start
// ==/UserScript==
 
(function() {
    'use strict';
 
    // Resource CSS
 
    var newCSS = GM_getResourceText ("customCSS");
    GM_addStyle (newCSS);
 
    var newCSS1 = GM_getResourceText ("customCSS1");
    GM_addStyle (newCSS1);
 
    // Button stuff
    function generate_click_function(toc_index) {
        return function() {
            $(".mainsection").hide();
            $(".mainsection:nth-of-type(" + toc_index + ")").fadeToggle();
        };
    }
   
    var TOC = [
        { label: "Summary", index: 2},
        { label: "Operating System", index: 3},
        { label: "CPU", index: 4},
        { label: "RAM", index: 5},
        { label: "Motherboard", index: 6},
        { label: "Graphics", index: 7},
        { label: "Storage", index: 8},
        { label: "Optical Drives", index: 9},
        { label: "Audio", index: 10},
        { label: "Peripherals", index: 11},
        { label: "Network", index: 12}
    ];
 
    //detach the original speccy content from the DOM
    var $speccy_content = $("div#wrapper").detach();
   
    //create a container to store the table of contents in
    var $toc_anchor = $("<div>").addClass("toc-div").addClass("list-group").addClass("col-sm-2");
   
    for(var toc_index = 0; toc_index < TOC.length; ++toc_index) {
        var toc_entry = TOC[toc_index];
        var $toc_button = $('<button>').addClass("list-group-item").text(toc_entry.label);
        // create onClick action using this index
        $toc_button.click(generate_click_function(toc_entry.index));
        $toc_anchor.append($toc_button);
    }
   
    var $page_container = $("<div>").append($toc_anchor).append($speccy_content);
    $("body").append($page_container);
})();
