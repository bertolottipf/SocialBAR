/*
	* SocialBAR.js
	* by BERTOLOTTI Paolo Francesco
	*
	* shadow : shadow (true/false) [deault = true]
	* facebook_isVisible : FACEBOOK (true/false) [deault = true]
	* facebook_place : FACEBOOK (place) [deault = 1]
	* youtube_isVisible : YOUTUBE (true/false) [deault = true]
	* youtube_place : YOUTUBE (place) [deault = 2]
	* twitter_isVisible : TWITTER (true/false) [deault = true]
	* twitter_place : TWITTER (place) [deault = 3]
	* linkedin_isVisible : LINKEDIN (true/false) [deault = true]
	* linkedin_place : LINKEDIN (place) [deault = 4]
	* flickr_isVisible : FLICKR (true/false) [deault = true]
	* flickr_place : FLICKR(place) [deault = 5]
	* rss_isVisible : RSS (true/false) [deault = true]
	* rss_place : RSS (place) [deault = 6]
	* delicious_isVisible : DELICIOUS (true/false) [deault = true]
	* delicious_place : DELICIOUS (place) [deault = 7]
	* stumble_isVisible : STUMBLE (true/false) [deault = true]
	* stumble_place : STUMBLE (place) [deault = 8]
	* myspace_isVisible : MYSPACE (true/false)
	* myspace_place : MYSPACE (place) [deault = 9]
*/

function makeSocialBAR(shasow, 
facebook_isVisible, facebook_place, 
youtube_isVisible, youtube_place, 
twitter_isVisible, twitter_place, 
linkedin_isVisible, linkedin_place, 
flickr_isVisible, flickr_place, 
rss_isVisible, rss_place, 
delicious_isVisible, delicious_place, 
stumble_isVisible, stumble_place, 
myspace_isVisible , myspace_place) {
	
	// script
	
	var script = "$(document).ready(function() {"
	+"// vedo quanti elementi div.social_container vi sono"
	+"var max = $('li').length;"
	+"console.log('max: ' + max);"
	+"$('#socialbar li').mouseover(function(){"
	+"// prendo l'indice dell'oggetto su cui si è col mouse"
	+"var index = $('li').index(this);"
	+"var ind = index;"
	+"console.log('index: ' + index);"
	+"// per i dall'indice successivo a quello in cui si è fino a max"
	+"for (i = index+1; i <= max; i++) {"
	+"//console.log('index: ' + index);"
	+"//verifico se i è dispari"
	+"var isOdd = IsOdd(i);"
	+"console.log(i+'>'+isOdd);"
	+"// si invertono classi left-right per tutti gli indici successivi."
	+"if (isOdd) {"
	+"$('ul#socialbar li:nth-child(' + i + ')').css('transform', 'skew(0deg, -20deg)');"
	+"$('ul#socialbar li:nth-child(' + i + ')').css('-ms-transform:', 'skew(0deg, -20deg)');"
	+"$('ul#socialbar li:nth-child(' + i + ')').css('-webkit-transform', 'skew(0deg, -20deg)');"
	+"$('ul#socialbar li:nth-child(' + i + ')').css('margin', '0');"
	+"} else {"
	+"$('ul#socialbar li:nth-child(' + i + ')').css('transform', 'skew(0deg, 20deg)');"
	+"$('ul#socialbar li:nth-child(' + i + ')').css('-ms-transform:', 'skew(0deg, 20deg)');"
	+"$('ul#socialbar li:nth-child(' + i + ')').css('-webkit-transform', 'skew(0deg, 20deg)');"
	+"$('ul#socialbar li:nth-child(' + i + ')').css('margin', '0');"
	+"}"
	+"}"
	+"// per i da 0 a quello prima di quello in cui si è"
	+"for (i = 1; i <= index; i++) {"
	+"//console.log('index: ' + index);"
	+"//verifico se i è dispari"
	+"var isOdd = IsOdd(i);"
	+"console.log(i+'>'+isOdd);"
	+"// si invertono classi left-right per tutti gli indici successivi."
	+"if (isOdd) {"
	+"$('ul#socialbar li:nth-child(' + i + ')').css('transform', 'skew(0deg, 20deg)');"
	+"$('ul#socialbar li:nth-child(' + i + ')').css('-ms-transform:', 'skew(0deg, 20deg)');"
	+"$('ul#socialbar li:nth-child(' + i + ')').css('-webkit-transform', 'skew(0deg, 20deg)');"
	+"$('ul#socialbar li:nth-child(' + i + ')').css('margin', '0');+"
	+"} else {"
	+"$('ul#socialbar li:nth-child(' + i + ')').css('transform', 'skew(0deg, -20deg)');"
	+"$('ul#socialbar li:nth-child(' + i + ')').css('-ms-transform:', 'skew(0deg, -20deg)');"
	+"$('ul#socialbar li:nth-child(' + i + ')').css('-webkit-transform', 'skew(0deg, -20deg)');"
	+"$('ul#socialbar li:nth-child(' + i + ')').css('margin', '0');"
	+"}"
	+"}"
	+"// metto in orizzontale il div su cui è il mouse"
	+"$(this).css('transform', 'skew(0deg, 0deg)');"
	+"$(this).css('-ms-transform:', 'skew(0deg, 0deg)');"
	+"$(this).css('-webkit-transform', 'skew(0deg, 0deg)');"
	+"if (IsOdd(ind)) {"
	+"$(this).css('margin', '0');"
	+"$(this).css('margin-top', '13');"
	+"}  else {"
	+"$(this).css('margin', '0');"
	+"$(this).css('margin-top', '-13');"
	+"}"
	+"});"
	+"$('.social_container').mouseout(function(){"
	+"});"
	+"// ritorna true se il numero è dispari"
	+"function IsOdd(numero) {"
	+"if (isNaN(numero) == false)"
	+"{"
	+"return (numero %2 == 1 ?  true : false);"
	+"}"
	+"else"
	+"{"
	+"return null;"
	+"}"
	+"}"
	+"});";
	
	document.write('<script type="text/javascript">' + script + '</script>');
	
	
	// style
	
	var style = "#socialbar_container {	margin-top: 50px; } "+
	".social_container { width: 100px; text-align: center; float:left; padding:5px; }" +
	"ul#socialbar li { list-style: none; display: block; width: 64px; float: left; } " +
	"ul#socialbar li:nth-child(2n+1) { transform: skew(0deg,20deg);	-ms-transform: skew(0deg,20deg); -webkit-transform: skew(0deg,20deg); }" +
	"ul#socialbar li:nth-child(2n+0) { transform: skew(0deg,-20deg); -ms-transform: skew(0deg,-20deg); -webkit-transform: skew(0deg,-20deg); }"+
	"/* La riflessione inizia qui */"+
	"ul#socialbar li img{ padding:3px; border-bottom:none; margin-bottom:5px; }"+
	"ul#socialbar li .box-image{ width:500px; margin:40px auto;	}" +
	"ul#socialbar li .reflection { position:relative; }" +
	"ul#socialbar li .reflection img{ transform: scaleY(-1); -webkit-transform: scaleY(-1); -moz-transform: scaleY(-1); -ms-transform: scaleY(-1); -o-transform: scaleY(-1); filter: flipv; opacity:0.30; filter: alpha(opacity='30'); } "+
	"ul#socialbar li .overlay {	position:absolute; top:50px; left:0px; width:508px; height:351px; background-image: -moz-linear-gradient(center bottom, rgb(255,255,255) 60%, rgba(255,255,255,0) 75%); background-image:  -o-linear-gradient(rgba(255,255,255,0) 25%, rgb(255,255,255) 40%); background-image:  -webkit-gradient(linear, left bottom, left top, color-stop(0.60, rgb(255,255,255)), color-stop(0.75, rgba(255,255,255,0))); filter: progid:DXImageTransform.Microsoft.Gradient(gradientType=0,startColor=0, EndColorStr=#ffffff); }";
	
	document.write('<style type="text/css">' + style + '</style>');
	
	
	
	// vedo se shadow è settata nei parametri e se non lo è la setto io
	var shadow = typeof shadow !== 'undefined' ? new Boolean(shadow) : true;
	
	// vedo se facebook_isVisible è settata nei parametri e se non lo è la setto io
	var facebook_isVisible = typeof facebook_isVisible !== 'undefined' ? new Boolean(facebook_isVisible) : true;
	// vedo se facebook_place è settata nei parametri e se non lo è la setto io
	var facebook_place = typeof facebook_place !== 'undefined' ? facebook_place : true;
	// verifico che facebook_place sia un numero e se non lo è lo rimpiazzo con 1
	facebook_place = isNaN(facebook_place) == false ? facebook_place : 1;
	
	
	// vedo se youtube_isVisible è settata nei parametri e se non lo è la setto io
	var youtube_isVisible = typeof youtube_isVisible !== 'undefined' ? new Boolean(youtube_isVisible) : true;
	// vedo se youtube_place è settata nei parametri e se non lo è la setto io
	var youtube_place = typeof youtube_place !== 'undefined' ? youtube_place : true;
	// verifico che youtube_place sia un numero e se non lo è lo rimpiazzo con 1
	youtube_place = isNaN(youtube_place) == false ? youtube_place : 2;
	
}