var secondsRemaining;
var intervalHandle;
var referrer;
var referrerHost
var userAgent;
var browser;
/*
받은 referrer url에서 www에서 / 까지를 host로 리턴합니다
www.가 포함된 경우와 아닌 경우를 고려해 splitUrl을 리턴합니다.
User Agent의 값에서 값을 분리해 
*/
window.onload = function () {
  referrer = document.referrer;
  if (referrer.split("://")[1].substring(0, 3) == "www") {
	  referrerHost = referrer.split("www.")[1];
	  referrerHost = referrerHost.split("/")[0];
  }
  else {
	  referrerHost = referrer.split("://")[1];
	  referrerHost = referrerHost.split("/")[0];
  }

  userAgent = navigator.userAgent.toLowerCase();
  if(userAgent.indexOf('edge')>-1){
	browser='Microsoft Edge';
  }else if(userAgent.indexOf('whale')>-1){
	browser='Naver Whale';
  }else if(userAgent.indexOf('chrome')>-1){
	browser='Google Chrome';
  }else if(userAgent.indexOf('firefox')>-1){
	browser='Mozilla Firefox';
  }else{
	browser='Internet Explorer';
  }
}

!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="QmVYyLedpWWw5IGRhwvxW0DhG1Py1BCG";analytics.SNIPPET_VERSION="4.13.2";
analytics.load("QmVYyLedpWWw5IGRhwvxW0DhG1Py1BCG");
analytics.page({
  'Referrer Host': referrerHost,
  title: "Timer"
});
analytics.identify({
  'User Agent': userAgent,
  'Browser': browser
});
}}();

function resetPage(){
	document.getElementById("buttonArea").style.display = "none";
	document.getElementById("inputArea").style.display = "flex";

}

function tick(){
	// grab the h1
	var timeDisplay = document.getElementById("time");

	// turn the seconds into mm:ss
	var min = Math.floor(secondsRemaining / 60);
	var sec = secondsRemaining - (min * 60);

	//add a leading zero (as a string value) if seconds less than 10
	if (sec < 10) {
		sec = "0" + sec;
	}

	// concatenate with colon
	var message = min.toString() + ":" + sec;

	// now change the display
	timeDisplay.innerHTML = message;

	// stop is down to zero
	if (secondsRemaining === 0){
		// alert("Done!");
		clearInterval(intervalHandle);
		resetPage();
	}

	//subtract from seconds remaining
	secondsRemaining--;

}

function startCountdown(){

	function resetPage(){
		document.getElementById("inputArea").style.display = "flex";
	}

	// get countents of the "minutes" text box
	var minutes = document.getElementById("minutes").value;
	
	// check if not a number
	if (isNaN(minutes)){
		alert("Please enter a number");
		return; // stops function if true
	}

	// how many seconds
	secondsRemaining = minutes * 60;
	
	// every second, call the "tick" function
	// have to make it into a variable so that you can stop the interval later!!!
	intervalHandle = setInterval(tick, 1000);
	
	// show stop button area
	document.getElementById("buttonArea").style.display = "flex";
	
	// hide input area
	document.getElementById("inputArea").style.display = "none";
}

function resetCountdown() {
	// alert("timer stopped");
	clearInterval(intervalHandle);
	resetPage();

	// grab the h1
	var timeDisplay = document.getElementById("time");
	
	// change value to 0:00
	timeDisplay.innerHTML = "0:00";
}

window.onload = function(){

	// create input text box and give it an id of "min"
	var inputMinutes = document.createElement("input");
	inputMinutes.setAttribute("id", "minutes");
	inputMinutes.setAttribute("type", "text");
   	inputMinutes.setAttribute("autocomplete", "off");
	
   // create min text
   var minText = document.createTextNode("분");


	//create a button
	var startButton = document.createElement("input");
	startButton.setAttribute("id", "startButton");
	startButton.setAttribute("class", "btn");
	startButton.setAttribute("type","button");
	startButton.setAttribute("value","시작");
	startButton.onclick = function(){
		startCountdown();
	};
	
	// create stop button
	var stopButton = document.createElement("input");
	stopButton.setAttribute("id", "stop");
	stopButton.setAttribute("class", "btn");
	stopButton.setAttribute("type", "button");
	stopButton.setAttribute("value", "중지");
	stopButton.onclick = function() {
		resetCountdown();
	}
	
	//add to the DOM, to the div called "inputArea", "buttonArea"
	document.getElementById("inputArea").appendChild(inputMinutes);
	document.getElementById("inputArea").appendChild(minText);
	document.getElementById("inputArea").appendChild(startButton);	
	document.getElementById("buttonArea").appendChild(stopButton);

	// hide stop button area
	document.getElementById("buttonArea").style.display = "none";
}
