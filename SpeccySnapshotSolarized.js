// ==UserScript==
// @name         SpeccySnapshotSolarized
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
// @resource     customCSS1 https://raw.githubusercontent.com/Jessexd/speccysnapshot/master/Style.css
// ==/UserScript==

(function() {
    'use strict';

    // Resource CSS

    var newCSS = GM_getResourceText ("customCSS");
    GM_addStyle (newCSS);

    var newCSS1 = GM_getResourceText ("customCSS1");
    GM_addStyle (newCSS1);

    // Button stuff

    $( '<br><button type="button" id="sum" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(2)">Summary</button> <div id=".mainsection:nth-of-type(2)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(2)" );

    $( '<br><button type="button" id="os" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(4)">Operating System</button> <div id=".mainsection:nth-of-type(4)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(4)" );

    $( '<br><button type="button" id="cpu" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(6)">CPU</button> <div id=".mainsection:nth-of-type(6)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(6)" );

    $( '<br><button type="button" id="ram" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(8)">RAM</button> <div id=".mainsection:nth-of-type(8)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(8)" );

    $( '<br><button type="button" id="mobo" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(10)">Motherboard</button> <div id=".mainsection:nth-of-type(10)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(10)" );

    $( '<br><button type="button" id="gpu" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(12)">Graphics</button> <div id=".mainsection:nth-of-type(12)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(12)" );

    $( '<br><button type="button" id="hdd" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(14)">Storage</button> <div id=".mainsection:nth-of-type(14)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(14)" );

    $( '<br><button type="button" id="opt" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(16)">Optical Drives</button> <div id=".mainsection:nth-of-type(16)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(16)" );

    $( '<br><button type="button" id="aud" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(18)">Audio</button> <div id=".mainsection:nth-of-type(18)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(18)" );

    $( '<br><button type="button" id="peri" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(20)">Peripherals</button> <div id=".mainsection:nth-of-type(20)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(20)" );

    $( '<br><button type="button" id="net" class="btn btn-info" data-toggle="collapse" data-target=".mainsection:nth-of-type(22)">Network</button> <div id=".mainsection:nth-of-type(22)" class="collapse"></br>' ).insertAfter( ".mainsection:nth-of-type(22)" );

    //  Default Hide

    //$(".mainsection").hide();

    // Toggle Buttons

    var animation_delay_time = 1000;

    $("#sum").click(function(){
        $(".mainsection").hide();
        $(".mainsection:nth-of-type(2)").slideToggle(animation_delay_time);
    });

    $("#os").click(function(){
        $(".mainsection").hide();
        $(".mainsection:nth-of-type(4)").slideToggle(animation_delay_time);
    });

    $("#cpu").click(function(){
        $(".mainsection").hide();
        $(".mainsection:nth-of-type(6)").slideToggle(animation_delay_time);
    });

    $("#ram").click(function(){
        $(".mainsection").hide();
        $(".mainsection:nth-of-type(8)").slideToggle(animation_delay_time);
    });

    $("#mobo").click(function(){
        $(".mainsection").hide();
        $(".mainsection:nth-of-type(10)").slideToggle(animation_delay_time);
    });

    $("#gpu").click(function(){
        $(".mainsection").hide();
        $(".mainsection:nth-of-type(12)").slideToggle(animation_delay_time);
    });

    $("#hdd").click(function(){
        $(".mainsection").hide();
        $(".mainsection:nth-of-type(14)").slideToggle(animation_delay_time);
    });

    $("#opt").click(function(){
        $(".mainsection").hide();
        $(".mainsection:nth-of-type(16)").slideToggle(animation_delay_time);
    });

    $("#aud").click(function(){
        $(".mainsection").hide();
        $(".mainsection:nth-of-type(18)").slideToggle(animation_delay_time);
    });

    $("#peri").click(function(){
        $(".mainsection").hide();
        $(".mainsection:nth-of-type(20)").slideToggle(animation_delay_time);
    });

    $("#net").click(function(){
        $(".mainsection").hide();
        $(".mainsection:nth-of-type(22)").slideToggle(animation_delay_time);
    });

    // Your code here...
})();
