/* Analytics */
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
} else {
    referrerHost = referrer.split("://")[1];
    referrerHost = referrerHost.split("/")[0];
}

userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('edge')>-1){
        browser='Microsoft Edge';
    } else if (userAgent.indexOf('whale')>-1){
        browser='Naver Whale';
    } else if (userAgent.indexOf('chrome')>-1){
        browser='Google Chrome';
    } else if (userAgent.indexOf('firefox')>-1){
        browser='Mozilla Firefox';
    } else {
        browser='Internet Explorer';
    }
}


!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="QmVYyLedpWWw5IGRhwvxW0DhG1Py1BCG";analytics.SNIPPET_VERSION="4.13.2";
    analytics.load("QmVYyLedpWWw5IGRhwvxW0DhG1Py1BCG");
    analytics.page({
        'Referrer Host': referrerHost
    });
    analytics.identify({});
}}();


/* General Functions */
// function createArray(value) {
//     var m = value.split(",");
//     return m;
// }

/* QA List Generator */
var catListCount = 2;

function addCat() {
    var catList = document.getElementById("catList")
    var nextCatListCount = catListCount++;
    var nextCatListId = "cat" + nextCatListCount;
    var nextCatDeleteId = "delete" + nextCatListCount;
    var nextCatListTitle = "카테고리 타이틀 " + nextCatListCount;
    
    var catContainer = document.createElement("div");
        catContainer.setAttribute("class","catContainer");
    var cat = document.createElement("div");
        cat.setAttribute("id", nextCatListId);
        cat.setAttribute("class", "cat");

    var deleteIcon = document.createElement("div");
        deleteIcon.setAttribute("class","delete--button");
        deleteIcon.setAttribute("onclick","deleteCat(this)");
    var deleteP = document.createElement("p")
        deleteP.setAttribute("id",nextCatDeleteId);
        deleteP.innerHTML = "🗑";
        deleteIcon.appendChild(deleteP);
    var catTitle = document.createElement("input");
        catTitle.setAttribute("type", "input");
        catTitle.setAttribute("placeholder", nextCatListTitle);
        catTitle.setAttribute("class","catTitle");
    var catValue = document.createElement("textarea");
        catValue.setAttribute("type", "input");
        catValue.setAttribute("placeholder", "카테고리 케이스 e.g. '안드로이드', 'iOS', '웹'");
        catValue.setAttribute("class","catValue");
        catValue.setAttribute("rows", "4");
        catContainer.appendChild(catTitle);
        catContainer.appendChild(catValue);

    document.getElementById("divider").remove();
    document.getElementById("buttonArea").remove();
    
    var hr = document.createElement("hr");
        hr.setAttribute("id","divider");
    var btnArea = document.createElement("div");
        btnArea.setAttribute("id","buttonArea");
        btnArea.setAttribute("class","buttonArea");
    var btn1 = document.createElement("input");
        btn1.setAttribute("id","addCat");    
        btn1.setAttribute("type","button");
        btn1.setAttribute("value","카테고리 추가");
    var btn2 = document.createElement("input");
        btn2.setAttribute("id","generateList");    
        btn2.setAttribute("type","button");
        btn2.setAttribute("value","리스트 생성");
        btn2.setAttribute("onclick","generateList()")
        
    if (catList.childElementCount >= 9){
        btn1.setAttribute("class","disabled");
    }
    else {
        btn1.setAttribute("onclick","addCat()");
    }

    cat.appendChild(catContainer);
    cat.appendChild(deleteIcon);
    catList.appendChild(cat);
    catList.appendChild(hr);
    btnArea.appendChild(btn1);
    btnArea.appendChild(btn2);
    catList.appendChild(btnArea);
}

function deleteCat(element) {
    var catList = document.getElementById("catList")
    var catListCount = catList.childElementCount - 2;
    var parent = element.parentElement;
    if(catListCount == 1){}else{
        parent.remove();
        var addCat = document.getElementById("addCat");
        addCat.setAttribute("class","");
        addCat.setAttribute("onclick","addCat()");

    }
}

function generateList() {
    var resultTitle = [];
    var resultValue = [];
    for (x=1; x<=catListCount; x++){
        var catId = "cat" + x;
        var title = "";
        var value = [];
        if(!document.getElementById(catId)){}else{
            title = document.getElementById(catId).firstElementChild.firstElementChild.value;
            value = document.getElementById(catId).firstElementChild.lastElementChild.value.split(",");
    
            resultTitle.push(title);
            resultValue.push(value);
        }
    }

    for(a=0; a<resultValue[0].length; a++){
        // 카테고리 1개인 경우
        if(resultValue.length == 1){
            console.log(resultValue[0][a]);
        }else if(resultValue.length == 2){
            // 카테고리 2개인 경우
            for(b=0; b<resultValue[1].length; b++){
                console.log(resultValue[0][a] + ", " + resultValue[1][b]);
            }
        }else if(resultValue.length == 3){
            // 카테고리 3개인 경우
            for(b=0; b<resultValue[1].length; b++) {
                for(c=0; c<resultValue[2].length; c++) {
                    console.log(resultValue[0][a] + ", " + resultValue[1][b] + ", " + resultValue[2][c]);
                }
            }
        }else if(resultValue.length == 4){
            // 카테고리 4개인 경우
            for(b=0; b<resultValue[1].length; b++) {
                for(c=0; c<resultValue[2].length; c++) {
                    for(d=0; d<resultValue[3].length; d++) {
                        console.log(resultValue[0][a] + ", " + resultValue[1][b] + ", " + resultValue[2][c] + ", " + resultValue[3][d]);
                    }
                }
            }
        }else if(resultValue.length == 4){
            // 카테고리 4개인 경우
            for(b=0; b<resultValue[1].length; b++) {
                for(c=0; c<resultValue[2].length; c++) {
                    for(d=0; d<resultValue[3].length; d++) {
                        for(e=0; e<resultValue[4].length; e++)
                            console.log(resultValue[0][a] + ", " + resultValue[1][b] + ", " + resultValue[2][c] + ", " + resultValue[3][d] + ", " + resultValue[4][e]);
                    }
                }
            }
        }else{console.log("too many")}
    }

    // var result = resultTitle + "\n" + resultValue; 
    // console.log(result);
    // console.log(resultValue.length);
    // console.log(resultValue[0].length);
}

// for(x=0; x<catList.length; x++){
//     let id = "cat" + x;
//     let title = ;
//     let value = [];
// }
// var cat1 = ["1. iOS 앱 등록 X (앱 등록 안된 상태)","2. iOS 앱 등록 O (앱 등록한 상태)","2-1. iOS 앱 인증 X (앱 인증 안한 상태)","2-2. iOS 앱 인증 O (앱 인증한 상태)","2-2-1. SKAN CV 설정 X (SKAN CV 설정 안한 상태)","2-2-2. SKAN CV 설정 O (SKAN CV 설정한 상태)"]
// var cat2 = ["A. App Info","B. App Authentication","C. SKAN Conversion Value","D. FB, GG의 SKAdNetwork"]
// var cat3 = ["Owner, Marketer","Agency","Media Partner"]

// for (a=0; a<cat1.length; a++) {
//     for (b=0; b<cat2.length; b++) {
//         for (c=0; c<cat3.length; c++) {
//             console.log('"'+cat1[a]+'", '+'"'+cat2[b]+'", '+'"'+cat3[c]+'"');
//         }
//     }
// }