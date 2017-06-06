// ==UserScript==
// @name         SpeccySnapshotSolarized
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       desgen
// @match        http://speccy.piriform.com/results/*
// @grant        GM_addStyle
// @grant       GM_getResourceText
// @require  https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @require https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js
// @resource    customCSS https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css
// ==/UserScript==

(function() {
    'use strict';

    var newCSS = GM_getResourceText ("customCSS");
    GM_addStyle (newCSS);

    GM_addStyle ('#wrapper,.indent,body{background:#002b36}.blue>div,.mainsection,img{display:none}*{font-family:dejavu sans;font-size:15px}.clear{clear:both}body{color:#fff;font-family:Verdana,Arial,Helvetica;font-size:8pt;padding:10px 15px}#wrapper{width:950px;border:none}.blue,.blue a{color:#268bd2;margin-top:5px}.indent{padding-left:24px}.mainsection{margin:15px;padding-top:10px;clear:both}.datakey{float:left;color:#839496}.datavalue{float:left;color:#b58900}.btn-info{color:#839496;background-color:#073642;border-color:#586e75;margin-top:10px}.btn-info.focus,.btn-info:focus,.btn-info:hover{color:#839496;background-color:#fdf6e3;border-color:#586e75}');

    $( '<br><button type="button" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(2)">Summary</button> <div id=".mainsection:nth-of-type(2)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(2)" );



    $( '<br><button type="button" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(4)">Operating System</button> <div id=".mainsection:nth-of-type(4)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(4)" );
// $( '<br><button type="button" class="btn btn-info" data-toggle="collapse" data-target="div:nth-of-type(2) > .indent:nth-of-type(32)">Services</button> <div id="div:nth-of-type(2) > .indent:nth-of-type(32)" class="collapse"></br>' ).insertAfter( "div:nth-of-type(2) > .indent:nth-of-type(32)" );
// $( '<br><button type="button" class="btn btn-info" data-toggle="collapse" data-target="div:nth-of-type(2) > .indent:nth-of-type(49)">Proccess List</button> <div id="div:nth-of-type(2) > .indent:nth-of-type(49)" class="collapse"></br>' ).insertAfter( "div:nth-of-type(2) > .indent:nth-of-type(49)" );


    $( '<br><button type="button" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(6)">CPU</button> <div id=".mainsection:nth-of-type(6)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(6)" );



    $( '<br><button type="button" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(8)">RAM</button> <div id=".mainsection:nth-of-type(8)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(8)" );



    $( '<br><button type="button" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(10)">Motherboard</button> <div id=".mainsection:nth-of-type(10)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(10)" );



    $( '<br><button type="button" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(12)">Graphics</button> <div id=".mainsection:nth-of-type(12)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(12)" );



    $( '<br><button type="button" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(14)">Storage</button> <div id=".mainsection:nth-of-type(14)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(14)" );



    $( '<br><button type="button" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(16)">Optical Drives</button> <div id=".mainsection:nth-of-type(16)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(16)" );



    $( '<br><button type="button" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(18)">Audio</button> <div id=".mainsection:nth-of-type(18)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(18)" );



    $( '<br><button type="button" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(20)">Peripherals</button> <div id=".mainsection:nth-of-type(20)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(20)" );



    $( '<br><button type="button" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(22)">Network</button> <div id=".mainsection:nth-of-type(22)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(22)" );
    // Your code here...
})();