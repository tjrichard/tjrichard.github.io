var totalSeconds;
var secondsRemaining;
var intervalHandle;
var timerCount = 1;
var focusCount = 0;
var breakCount = 0;
var taskCount = localStorage.getItem("taskCount");
var phaseCount = 1;
var faviconClock = 'https://tjrichard.github.io/side-hustle/pomodoro/icons/clock.png'
var faviconPomodoro = 'https://tjrichard.github.io/side-hustle/pomodoro/icons/pomodoro.png'
var faviconBath = 'https://tjrichard.github.io/side-hustle/pomodoro/icons/bath.png'

/*
=================== Common functoins ===================
*/

var referrer;
var referrerHost
var userAgent;
var browser;
/*side-hustle/pomodoro/script.js
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
	title: "Pomodoro Timer"
});
analytics.identify({
  'User Agent': userAgent,
  'Browser': browser
});
}}();

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
};
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
};

function getFocusTask() {
	// get input value from inputTask input to focusTask div
	var x = document.getElementById("task").value;

	// if input value is empty, set to placeholder string
	if (taskCount != null) {
		if (x == "") {
			x = "할일 " + taskCount;
		}
		else {
		}
		return x;
	}
	else {
		taskCount = 1;
		if (x == "") {
			x = "할일 " + taskCount;
		}
		else {
		}
		return x;
	}
}

function setTaskInfo(x, y) {
	var taskNo = localStorage.getItem("taskCount");
	var t = "task" + taskNo + "p" + phaseCount;
	
	var a = {}
	var count1 = localStorage.getObj(t).taskCount;
	var count2 = localStorage.getObj(t).timerCount;
	var count3 = localStorage.getObj(t).focusCount;
	var count4 = localStorage.getObj(t).breakCount;
	var count5 = localStorage.getObj(t).phaseCount;
	var value1 = localStorage.getObj(t).taskValue;

	if (x == "taskCount") { count1 = y; }
	else if (x == "timerCount") { count2 = y; }
	else if (x == "focusCount") { count3 = y; }
	else if (x == "breakCount") { count4 = y; }
	else if (x == "phaseCount") { count5 = y; }
	else if (x == "taskValue") { value1 = y; }
	else {console.log("x 가 지정된 변수를 호출하지 않았습니다 (setTaskInfo(x, y)")}
	a = {
		taskCount: count1,
		timerCount: count2,
		focusCount: count3,
		breakCount: count4,
		phaseCount: count5,
		taskValue: value1
	}
	localStorage.setObj(t, a);
}


/*
=================== Notification ===================
*/

// request notification permission on page load
document.addEventListener('DOMContentLoaded', function() {
	if (!Notification) {
	 alert('Desktop notifications not available in your browser. Try Chromium.');
	 return;
	}
   
	if (Notification.permission !== 'granted') {
		Notification.requestPermission();
	}
});

// notifications fuction
function noti_focus() {
	if (Notification.permission !== 'granted')
		Notification.requestPermission();
	else {
		var notification = new Notification('집중 타이머 시작', {
		icon: "pomodoro/icons/pomodoro.png",
		body: "휴식 끝, 집중 시작",
		});
		
		// close notification when click
		notification.onclick = function () {
			notification.close();
		};
		
		// close notification after 2 seconds
		setTimeout(() => {
			notification.close();
		}, 4 * 1000);
	}
}

function noti_break() {
	if (Notification.permission !== 'granted')
		Notification.requestPermission();
	else {
		var notification = new Notification('휴식 타이머 시작', {
		icon: "pomodoro/icons/bath.png",
		body: "집중 끝, 5분 휴식 시작",
		});

		// close notification when click
		notification.onclick = function () {
			notification.close();
		};
		
		// close notification after 2 seconds
		setTimeout(() => {
			notification.close();
		}, 4 * 1000);
	}
}

function noti_longbreak() {
	if (Notification.permission !== 'granted')
		Notification.requestPermission();
	else {
		var notification = new Notification('휴식 타이머 시작', {
		icon: "pomodoro/icons/bath.png",
		body: "집중 끝, 15분 휴식 시작",
		});

		// close notification when click
		notification.onclick = function () {
			notification.close();
		};
		
		// close notification after 2 seconds
		setTimeout(() => {
			notification.close();
		}, 4 * 1000);
	}
}

/*
=================== Check if timer was working before freeze ===================
*/

function checkTaskList() {
	//  task가 존재하는지 판단
	if (localStorage.getItem("taskCount") != null) {
		// taskCount 만큼 #HistoryUl 안에 #task{taskCount}, {taskCount}의 value를 가진 li를 붙여넣기
		var i;
		var x = localStorage.getItem("taskCount");
		for (i = 1; i <= x; i++) {
			// task1 부터 전체 task까지 반복
			var taskNo = "task" + i;
			var phaseNo = localStorage.getObj(taskNo).phaseCount;
			var phaseCount = "p" + phaseNo;
			var taskId = taskNo + phaseCount;
			var continueNo = "continueButton" + i + phaseCount;
			var taskValue = localStorage.getObj(taskId).taskValue;
			var stats = " (🍅 " + localStorage.getObj(taskId).focusCount + " 🛀 " + localStorage.getObj(taskId).breakCount + ")";
			// create continue button
			var continueButton = document.createElement("button");
			continueButton.setAttribute("id", continueNo);
			continueButton.setAttribute("class", "btn icon_btn");
			continueButton.setAttribute("type", "button");
			continueButton.setAttribute("data-tooltip", "이어하기");
			continueButton.onclick = function () {
				continueCountdown(this.id);
			}
			continueButton.innerHTML = "➡️";
			// create li and append continue button
			var ul = document.getElementById("historyUl");
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(taskValue + stats));
			li.setAttribute("id", taskId);
			ul.appendChild(li);
			li.appendChild(continueButton);
		}
		
		// show Task History
		document.getElementById("focusHistory").style.display = "";
		document.getElementById("focusHistory").style.opacity = 1;
	}
	else {
		// do sth
	}
}


/*
=================== favicon change ===================
*/

function setFavicon(url) {
	var link = document.querySelector("link[rel~='icon']");
	if (!link) {
		link = document.createElement('link');
		link.rel = 'icon';
		document.getElementsByTagName('head')[0].appendChild(link);
	}
	link.href = url;
}


/*
=================== Timer functions ===================
*/

function resetPage() {
	document.getElementById("focusArea").style.display = "none";
	document.getElementById("inputArea").style.display = "flex";
}

function clearTimer() {
	document.getElementById("resumeButton").style.display = "none";
	document.getElementById("pauseButton").style.display = "";
	document.getElementById("stopButton").style.display = "";
	document.getElementById("time").style.textDecoration = "";
	document.getElementById("time").style.opacity = "";
}

function tick() {
	// 	seconds remainig
	var currentTime = new Date();
	currentTime = currentTime.getTime();
	var timerStartTime = localStorage.getItem("timerStartTime");
	var tickOffset = currentTime - timerStartTime;
	tickOffset = Math.floor(tickOffset/1000)

	// grab the h1
	var timeDisplay = document.getElementById("time");

	//subtract tickOffset from totalSeconds
	secondsRemaining = totalSeconds - tickOffset;
	// console.log("Total Seconds: ", totalSeconds);
	// console.log("Tick offset: ", tickOffset);
	// console.log("Seconds Remaining: ", secondsRemaining);

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
	var taskName = getFocusTask();
	document.title = "[" + message + "] | " + taskName;


	// stop when time is down to zero
	// call focus or break timer when time is down to zero
	if (secondsRemaining <= 0) {
		if (timerCount < 8) {
			if (timerCount % 2 == 0) {
				timerCount++;
				breakCount++;
				setTaskInfo("timerCount", timerCount);
				setTaskInfo("breakCount", breakCount);
				console.log("timerCount: " + timerCount + ", focusCount: " + focusCount +", breakCount: " + breakCount);
				console.log("집중 시작");
				noti_focus();
				NowFocus();
				focus25min();
			} else {
				if (breakCount == 3) {
					timerCount++;
					focusCount++;
					setTaskInfo("timerCount", timerCount);
					setTaskInfo("focusCount", focusCount);
					console.log("timerCount: " + timerCount + ", focusCount: " + focusCount +", breakCount: " + breakCount);
					console.log("긴휴식 시작");
					noti_break();
					Now15Break();
					break15min();
				} else {
					timerCount++;
					focusCount++;
					setTaskInfo("timerCount", timerCount);
					setTaskInfo("focusCount", focusCount);
					console.log("timerCount: " + timerCount + ", focusCount: " + focusCount +", breakCount: " + breakCount);
					console.log("휴식 시작");
					noti_longbreak();
					NowBreak();
					break5min();
				}
			}
		} else {
			timerCount++;
			breakCount++;
			setTaskInfo("timerCount", timerCount);
			setTaskInfo("breakCount", breakCount);

			// Track Segment Event
			analytics.track('Complete Countdown', {
				'Task': taskName,
				'Timer Info': {
					'Focus Count': focusCount,
					'Break Count': breakCount,
					'Timer Count': timerCount,
					'Task Count': taskCount,
					'Phase Count': phaseCount,
				},
				title: "API Practice"
			})
			
			// Reset Timer, & Show Statistics
			resetCountdown();
			alert("🎉 포모도로 1사이클(130분)을 완료했어요!") 
		}
	}
}


/*
Show current timer status
*/

function NowFocus() {
	var message = document.getElementById("CountArea");
	message.innerHTML = "🍅 집중 중";
	setFavicon(faviconPomodoro);
}

function NowBreak() {
	var message = document.getElementById("CountArea");
	message.innerHTML = "🛀 휴식 중";
	setFavicon(faviconBath);
}

function Now15Break() {
	var message = document.getElementById("CountArea");
	message.innerHTML = "🛀 긴 휴식 중";
	setFavicon(faviconBath);
}

/*
Add Focus Count, Break Count, Continue Button
*/

function AddGlobalStat() {
	// clear CountArea
	var countArea = document.getElementById("CountArea");
	countArea.innerHTML = "";

	// create span with id
	var focusSpan = document.createElement("span");
	focusSpan.setAttribute("id", "focusCount");
	var breakSpan = document.createElement("span");
	breakSpan.setAttribute("id", "breakCount");

	// add to the DOM
	document.getElementById("CountArea").appendChild(focusSpan);
	document.getElementById("CountArea").appendChild(breakSpan);

	// change text
	var message1 = document.getElementById("focusCount");
	message1.innerHTML = "🍅 집중 " + focusCount + "번";
	var message2 = document.getElementById("breakCount");
	message2.innerHTML = "🛀 휴식 " + breakCount + "번";
}

function AddTaskStat() {
	var taskNoPh = "task" + taskCount + "p" + phaseCount;
	
	// grab taskHistory li with taskCount
	var taskLi = document.getElementById(taskNoPh);

	// grab task information
	var taskInfo = localStorage.getObj(taskNoPh);
	taskValue = taskInfo.taskValue;
	focusCount = taskInfo.focusCount;
	breakCount = taskInfo.breakCount;
	phaseCount = taskInfo.phaseCount;

	// Change text of li
	taskLi.innerHTML = taskValue + " (🍅 " + focusCount + " 🛀 " + breakCount + ")";
}

function AddContinueButton() {
	var taskNo = "task" + taskCount;
	var phaseNo = localStorage.getObj(taskNo).phaseCount;
	var taskId = taskNo + "p" + phaseNo;
	var continueNo = "continueButton" + taskCount + "p" + phaseNo;
	var continueButton = document.createElement("button");
	continueButton.setAttribute("id", continueNo);
	continueButton.setAttribute("class", "btn icon_btn");
	continueButton.setAttribute("type", "button");
	continueButton.setAttribute("data-tooltip", "이어하기");
	continueButton.onclick = function () {
		continueCountdown(this.id);
	}
	continueButton.innerHTML = "➡️";

	// grab current task li
	// check if there is button
	var c = document.getElementById(taskId).childElementCount;
	if (c == 0) {
		// 버튼이 없으면 추가한다
		var li = document.getElementById(taskId)
		li.appendChild(continueButton);
	}
	// 버튼이 있으면 아무 행동하지 않는다
	else {}
}

/*
=================== Button Actions ===================
*/
function TrackGeneratedTasks() {
	function getGeneratedTask() {
		let TaskCount = localStorage.taskCount;
		let taskXValue, taskArray = [];
		for (let x = 1; x <= TaskCount; x++) {
			taskXValue = "task" + x + "p1";
			taskArray.push(localStorage[taskXValue]);
		}
		return taskArray;
	}
	let taskArray = getGeneratedTask();
	analytics.track("Generated Taks", {
		url: "{{ page.url }}",
		title: "{% if page.title %}{{ page.title }}{% else %}{{ site.title }}{% endif %}",
		ongoingTasks: Object(taskArray)
	})
}

function startCountdown() {
	// check if taskCount is null, then start taskCount from 1
	if (taskCount != null) {
		// 이미 진행중인 task 가 있는 경우
		// check if there is previousTaskCount, then replace it to current askCount
		if (localStorage.getItem("previousTaskCount") != null) {
			// 이어하기를 한 경우
			// current TaskCount is Previous Task Count + 1, and clear
			taskCount = parseInt(localStorage.getItem("previousTaskCount")) + 1;
			phaseCount = 1;
			localStorage.removeItem("previousTaskCount");

			localStorage.setItem("taskCount", taskCount);
			var x = "task" + taskCount;
			var y = x + "p" + phaseCount;
			var taskValue = getFocusTask();
			var a = {
				phaseCount: phaseCount
			}
			var b = {
				taskCount: taskCount,
				timerCount: 0,
				focusCount: 0,
				breakCount: 0,
				phaseCount: 1,
				taskValue: taskValue
			}
			localStorage.setObj(x, a);
			localStorage.setObj(y, b);
		}
		else {
			// 이어하지 않고 계속 task를 추가하는 경우
			taskCount++;
			localStorage.setItem("taskCount", taskCount);
			var x = "task" + taskCount;
			var y = x + "p" + phaseCount;
			var taskValue = getFocusTask();
			var a = {
				phaseCount: 1
			}
			var b = {
				taskCount: taskCount,
				timerCount: 0,
				focusCount: 0,
				breakCount: 0,
				phaseCount: 1,
				taskValue: taskValue
			}
			localStorage.setObj(x, a);
			localStorage.setObj(y, b);
		}
	}
	else {
		// 처음으로 task를 추가하는 경우
		taskCount = 1;
		localStorage.setItem("taskCount", "1");
		var taskValue = getFocusTask();
		var a = {
			phaseCount: 1
		}
		var b = {
			taskCount: 1,
			timerCount: 0,
			focusCount: 0,
			breakCount: 0,
			phaseCount: 1,
			taskValue: taskValue
		}
		localStorage.setObj("task1", a);
		localStorage.setObj("task1p1", b);
	};

	// Track Segment Event
	TrackGeneratedTasks();
	analytics.track('Start Countdown', {
		'Task': taskValue,
		'Timer Info': {
			'Task Count': taskCount,
			'Phase Count': phaseCount,
		},
		title: "API Practice"
	})

	// start pomodoro
	focus25min();

	// every second, call the "tick" function
	// have to make it into a variable so that you can stop the interval later!!!
	intervalHandle = setInterval(tick, 500);

	// show focusTask, button area
	document.getElementById("focusArea").style.display = "";

	// hide input area
	document.getElementById("inputArea").style.display = "none";

	// set Task History Area opacity to 0
	// show Task History
	// document.getElementById("focusHistory").style.opacity = "";

	// set countArea message
	NowFocus();

	// hide all continueCountdown throughout li
	var i;
	var x = document.getElementById("historyUl").querySelectorAll(".icon_btn");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
}

function resetCountdown() {
	// Track Segment Event
	analytics.track('Reset Countdown', {
		'Timer Info': {
			'Task Count': taskCount,
			'Phase Count': phaseCount,
		},
		title: "API Practice"
	})

	// alert("timer stopped");
	clearInterval(intervalHandle);
	resetPage();
	
	// remove highlight
	var taskNo = "task" + taskCount + "p" + phaseCount;
	document.getElementById(taskNo).style.backgroundColor = "";
	
	// grab the h1
	var timeDisplay = document.getElementById("time");
	
	// change value to 0:00
	timeDisplay.innerHTML = "25:00";
	document.getElementById("time").style.color = "var(--color_normal)";
	
	// Show Statistics
	AddGlobalStat();
	AddTaskStat();

	// add Continue button
	AddContinueButton();
	
	// rest title, Timer Focus, Break Count
	document.title = "Pomodoro Timer";
	timerCount = 1;
	focusCount = 0;
	breakCount = 0;

	// local Storage timestamp of StartCountdown
	localStorage.removeItem("timerStartTime");

	// set Favicon to original
	setFavicon(faviconClock);

	// show all continueCountdown throughout li
	var i;
	var x = document.getElementById("historyUl").querySelectorAll(".icon_btn");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "";
	}
}

function pauseCountdown() {
	// Track Segment Event
	analytics.track('Pause Countdown', {
		'Timer Info': {
			'Task Count': taskCount,
			'Phase Count': phaseCount,
		},
		title: "API Practice"
	})

	// 일시정지 duration 만큼 timerStartTime에 더해주는 작업
	var timerPauseTime = Date.now();
	localStorage.setItem("timerPauseTime", timerPauseTime);
	// console.log("Paused at: ", timerPauseTime);

	// stop timer
	clearInterval(intervalHandle);

	// style timer
	document.getElementById("time").style.textDecoration = "line-through";
	document.getElementById("time").style.opacity = "0.5";

	// remove pause, stop button
	document.getElementById("pauseButton").style.display = "none";
	document.getElementById("stopButton").style.display = "none";

	// show resume button
	document.getElementById("resumeButton").style.display = "";
}

function resumeCountdown() {
	// 일시정지 duration 만큼 timerStartTime에 더해주는 작업
	var timerResumeTime = Date.now();
	timerPauseTime = localStorage.getItem("timerPauseTime")
	var pauseDuration = timerResumeTime - timerPauseTime;
	// console.log("Resume at: ", timerResumeTime)
	// console.log("paused for: ", pauseDuration);
	var timerStartTime = JSON.parse(localStorage.getItem("timerStartTime"));
	// console.log("기존 Start Time: ", timerStartTime)
	timerStartTime = timerStartTime + pauseDuration;
	// console.log("변경 Start Time: ", timerStartTime);
	localStorage.setItem("timerStartTime", timerStartTime);

	// Track Segment Event
	analytics.track('Resume Countdown', {
		'Timer Info': {
			'Task Count': taskCount,
			'Phase Count': phaseCount,
			'Paused Duration': pauseDuration,
		},
		title: "API Practice"
	})

	// restart timer
	intervalHandle = setInterval(tick, 500);

	// restyle timer
	document.getElementById("time").style.textDecoration = "";
	document.getElementById("time").style.opacity = "";

	// remove resume button
	document.getElementById("resumeButton").style.display = "none";

	// show pause, stop button
	document.getElementById("pauseButton").style.display = "";
	document.getElementById("stopButton").style.display = "";
}

function continueCountdown(this_id) {
	// grab taskCount of the button
	var buttonId = this_id;
	var taskButton = document.getElementById(buttonId);
	buttonId = buttonId.split("continueButton")[1];
	var taskNo = buttonId.split("p")[0];
	var phaseNo = buttonId.split("p")[1];
	
	// grab Task Information
	var taskId = "task" + taskNo + "p" + phaseNo;
	var taskLi = document.getElementById(taskId);
	var taskInfo = localStorage.getObj(taskId);
	console.log(taskId);
	console.log(taskInfo);
	
	// send taskValue to #focusTask
	var taskName = taskInfo.taskValue;
	document.getElementById("focusTask").innerHTML = taskName;
	
	// save last Task Count as previous Task Count
	var previousTaskCount = localStorage.getItem("taskCount");
	localStorage.setItem("previousTaskCount", previousTaskCount);

	// highlight task
	document.getElementById(taskId).style.backgroundColor = "var(--background_color_z100)";
	
	// send timerCount, focusCount, breakCount then start Countdown
	taskCount = taskInfo.taskCount;
	timerCount = taskInfo.timerCount;
	focusCount = taskInfo.focusCount;
	breakCount = taskInfo.breakCount;
	phaseCount = taskInfo.phaseCount;
	
	// clear existing TaskInfo
	localStorage.removeItem(taskId);
	
	// add phaseCount to Li, continueButton
	phaseCount = phaseCount + 1;
	taskId = "task" + taskNo + "p" + phaseCount;
	buttonId = "continueButton" + taskNo + "p" + phaseCount;
	taskLi.setAttribute("id", taskId);
	taskButton.setAttribute("id", buttonId);

	// add new TaskInfo
	var x = "task" + taskNo;
	var y =  {
		phaseCount: phaseCount
	}
	localStorage.setObj(x, y);
	var taskInfo = {
		taskCount: taskCount,
		timerCount: timerCount,
		focusCount: focusCount,
		breakCount: breakCount,
		phaseCount: phaseCount,
		taskValue: taskName,
	}
	localStorage.setObj(taskId, taskInfo);
	console.log(taskId);
	console.log(taskInfo);

	// Track Segment Event
	analytics.track('Continue Countdown', {
		'Task': taskInfo.taskValue,
		'Timer Info': {
			'Task Count': taskCount,
			'Phase Count': phaseCount,
			title: "API Practice"
		}
	})

	// clear timer
	clearTimer();

	// start pomodoro
	focus25min();

	// every second, call the "tick" function
	intervalHandle = setInterval(tick, 500);

	// show focusTask, button area
	document.getElementById("focusArea").style.display = "";

	// hide input area
	document.getElementById("inputArea").style.display = "none";

	// set countArea message
	NowFocus();

	// hide all continueCountdown throughout li
	var i;
	var x = document.getElementById("historyUl").querySelectorAll(".icon_btn");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
}

function createFocusTask() {
	// show focusHistory area if focusHistory is display none
	if (document.getElementById("focusHistory").style.display = "none") {
		document.getElementById("focusHistory").style.display = ""
	} else {}

	// get input value from inputTask input to focusTask div
	var taskName = getFocusTask();
	document.getElementById("focusTask").innerHTML = taskName;

	// add to Task History
	var ul = document.getElementById("historyUl");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(taskName));
	li.setAttribute("id", "task"+taskCount+"p"+phaseCount);
	li.setAttribute("style", "background-color: var(--background_color_z100)")
	ul.appendChild(li);

	// add to Local Storage
	localStorage.setItem("taskCount", taskCount);
	setTaskInfo("taskValue", taskName);
}

function resetAllTasks() {
	clearInterval(intervalHandle);
	
	// Track Segment Event
	var x = document.getElementById("historyUl").querySelectorAll("li").length;
	analytics.track('Reset All Task', {
		'Timer Info': {
			'Task Count': x,
			title: "API Practice"
		}
	})
	
	// clear all
	localStorage.clear();
	taskCount = "";
	clearTimer();
	var timeDisplay = document.getElementById("time");
	timeDisplay.innerHTML = "25:00";
	document.getElementById("time").style.color = "var(--color_normal)";
	
	// Get the ul and remove all child nodes
	var ul = document.getElementById("historyUl");
	while (ul.hasChildNodes()) {  
		ul.removeChild(ul.firstChild);
	}
	resetPage();
	
	// hide Task History
	// document.getElementById("focusHistory").style.opacity = 0;
}

/*
25 min focus, 5 min short break, 15 min long break
*/

function focus25min() {
	var minutes = 25;

	// how many seconds
	totalSeconds = minutes * 60;
	secondsRemaining = totalSeconds;
	
	// Session Starage timestamp of StartCountdown
	var timerStartTime = Date.now();
	localStorage.setItem("timerStartTime", timerStartTime);
	
	// style timer
	document.getElementById("time").style.color = "var(--color_focus)";
}

function break5min() {
	var minutes = 5;
	
	// how many seconds
	totalSeconds = minutes * 60;
	secondsRemaining = totalSeconds;

	// Session Starage timestamp of StartCountdown
	var timerStartTime = Date.now();
	localStorage.setItem("timerStartTime", timerStartTime);

	// style timer
	document.getElementById("time").style.color = "var(--color_break)";
}

function break15min() {
	var minutes = 15;
	
	// how many seconds
	totalSeconds = minutes * 60;
	secondsRemaining = totalSeconds;

	// Session Starage timestamp of StartCountdown
	var timerStartTime = Date.now();
	localStorage.setItem("timerStartTime", timerStartTime);
	
	// style timer
	document.getElementById("time").style.color = "var(--color_longBreak)";
}

/*
=================== Theme ===================
*/

function toggleTheme() {
	if (document.getElementById("toggleTheme").classList == "btn" ) {
		document.getElementById("toggleTheme").setAttribute("class", "btn dark");
		document.getElementById("toggleTheme").innerHTML = "🌞 Light Theme";
		document.body.setAttribute("class", "dark");
		// Track Segment Event
		analytics.track('Toggle Theme', {
			'Previous Theme': 'Light',
			'Current Theme': 'Dark',
			title: "API Practice"
		})
	}
	else {
		document.getElementById("toggleTheme").setAttribute("class", "btn");
		document.getElementById("toggleTheme").innerHTML = "🌘 Dark Theme";
		document.body.setAttribute("class", "");
		// Track Segment Event
		analytics.track('Toggle Theme', {
			'Previous Theme': 'Dark',
			'Current Theme': 'Light',
			title: "API Practice"
		})
	}
}


/*
=================== window.onload. Add Inputs, Buttons to DOM ===================
*/

window.onload = function () {

	// create input text box and give it an id of "task"
	var inputTask = document.createElement("input");
	inputTask.setAttribute("id", "task");
	inputTask.setAttribute("type", "text");
	inputTask.setAttribute("autocomplete", "off");
	inputTask.setAttribute("placeholder", "어떤 Task에 집중하나요?");

	//create start button
	var startButton = document.createElement("input");
	startButton.setAttribute("id", "startButton");
	startButton.setAttribute("class", "btn");
	startButton.setAttribute("type", "button");
	startButton.setAttribute("value", "시작");
	startButton.onclick = function () {
		startCountdown();
		createFocusTask();
	};

	// create stop button
	var stopButton = document.createElement("input");
	stopButton.setAttribute("id", "stopButton");
	stopButton.setAttribute("class", "btn");
	stopButton.setAttribute("type", "button");
	stopButton.setAttribute("value", "중지");
	stopButton.onclick = function () {
		resetCountdown();
	}

	// create pause button
	var pauseButton = document.createElement("input");
	pauseButton.setAttribute("id", "pauseButton");
	pauseButton.setAttribute("class", "btn");
	pauseButton.setAttribute("type", "button");
	pauseButton.setAttribute("value", "일시중지");
	pauseButton.onclick = function () {
		pauseCountdown();
	}

	// create resume button
	var resumeButton = document.createElement("input");
	resumeButton.setAttribute("id", "resumeButton");
	resumeButton.setAttribute("class", "btn");
	resumeButton.setAttribute("type", "button");
	resumeButton.setAttribute("value", "이어하기");
	resumeButton.onclick = function () {
		resumeCountdown();
	};

	//add to the DOM, to the div called "inputArea", "focusTask", "buttonArea"
	document.getElementById("inputArea").appendChild(inputTask);
	document.getElementById("inputArea").appendChild(startButton);
	document.getElementById("buttonArea").appendChild(pauseButton);
	document.getElementById("buttonArea").appendChild(resumeButton);
	document.getElementById("buttonArea").appendChild(stopButton);

	// hide pause button
	document.getElementById("resumeButton").style.display = "none";

	// hide button area
	function hideFocusHistory() {
		document.getElementById("focusHistory").style.display = "none";
	}
	hideFocusHistory();
	resetPage();


	// Theme
	var lightTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

	if(lightTheme == true) {
		document.getElementById("toggleTheme").setAttribute("class", "btn");
		document.getElementById("toggleTheme").innerHTML = "🌘 Dark Theme";
	}
	else {
		document.getElementById("toggleTheme").setAttribute("class", "btn dark");
		document.getElementById("toggleTheme").innerHTML = "🌞 Light Theme";
		document.body.setAttribute("class", "dark");
	}

	// set favicion
	setFavicon(faviconClock);

	// Restore status before browser inactivity
	checkTaskList();
}