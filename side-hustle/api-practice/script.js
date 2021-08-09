// getHoliday().catch(error => {
//     console.error(error);
// })

// async function getHoliday() {
//     const response = await fetch("https://date.nager.at/api/v3/PublicHolidays/2021/kr", { mode: "no-cors"})
//     console.log(response);
// }

/*
=================== Common functoins ===================
*/

!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="QmVYyLedpWWw5IGRhwvxW0DhG1Py1BCG";analytics.SNIPPET_VERSION="4.13.2";
analytics.load("QmVYyLedpWWw5IGRhwvxW0DhG1Py1BCG");
analytics.page();
}}();

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
};
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
};


function getCurrentTime() {
    var time = new Date();
    var y = time.getFullYear();
    var m = time.getMonth();
    var d = time.getDate();
    var hh = time.getHours();
    if (hh < 10) {
        hh = "0" + hh;
    }
    var mm = time.getMinutes();
    if (mm < 10) {
        mm = "0" + mm;
    }
    var ss = time.getSeconds();
    if (ss < 10) {
        ss = "0" + ss;
    }
    
    var currentTime = y + "년 " + m + "월 " + d + "일 | " + hh + ":" + mm + ":" + ss
    document.getElementById("apiReqeustTime").innerHTML = "API 정보 갱신 일시: " + currentTime;
}

function CreateTableFromJSON(json) {
    var json = [json];
    // EXTRACT VALUE FOR HTML HEADER.
    var col = [];
    for (var i = 0; i < json.length; i++) {
        for (var key in json[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < json.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            var value = json[i][col[j]];
            if (typeof(value) == "object") {
                value = JSON.stringify(value);
            }
            else{}
            tabCell.innerHTML = value;
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var apiResponse = document.getElementById("apiResponse");
    apiResponse.innerHTML = "";
    apiResponse.appendChild(table);
}

function appendList(json) {
    var ul = document.createElement("ul");
    ul.setAttribute("id", "ul");
    var liKeyHeader = document.createElement("li");
        liKeyHeader.setAttribute("id", "key");
        liKeyHeader.innerHTML = "Key";
    var liValueHeader = document.createElement("li")
        liValueHeader.setAttribute("id", "value");
        liValueHeader.innerHTML = "Value";

    document.getElementById("apiRespons").innerHTML = "";
    document.getElementById("apiResponse").appendChild(ul);
    document.getElementById("ul").appendChild(liKeyHeader);
    document.getElementById("ul").appendChild(liValueHeader);

    var x = Object.keys(json).length;
    console.log("Key: 총 " + x + "개");
    console.log(JSON.stringify(json));

    for (i = 0; i < x; i++) {
        var key = Object.keys(json)[i];
        var value;
            if (typeof(Object.values(json)[i]) == "object") {
                var y = Object.values(json)[i];
                value = JSON.stringify(y);
            }
            else {
                var y = Object.values(json)[i];
                value = y;
            }

        var liKeyRow = document.createElement("li");
            liKeyRow.setAttribute("class", "key");
            liKeyRow.innerHTML = key;
        var liValueRow = document.createElement("li")
            liValueRow.setAttribute("class", "value");
            liValueRow.innerHTML = value;

        document.getElementById("ul").appendChild(liKeyRow);
        document.getElementById("ul").appendChild(liValueRow);
    }
}

function responseToAnalytics(json) {
    var x = Object.keys(json).length;
    // console.log("Key: 총 " + x + "개");
    // console.log(JSON.stringify(json));
    var responseObject = {}

    for (i = 0; i < x; i++) {
        var key = Object.keys(json)[i];
        var value;
        if (typeof(Object.values(json)[i]) == "object") {
            var y = Object.values(json)[i];
            value = JSON.stringify(y);
        }
        else {
            var y = Object.values(json)[i];
            value = y;
        }
        responseObject[key] = value;
    }
    analytics.track('Fetch API Response', {
        responseObject
    })
}

/*
=================== API Fetch functoins ===================
*/

function getApi_ipInfo() {
    let url = "https://freegeoip.app/json/"

    fetch(url, {
        mode: "cors",
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(json => {
        var currentUrl = window.location.href;
        analytics.track("Get IP Info",{
            "url": currentUrl,
            "target": json
            })
        console.log(json);
        getCurrentTime();
        // appendList(json);
        CreateTableFromJSON(json);
        responseToAnalytics(json);
    })
}

function getApi_currentWeather() {
    fetch('https://freegeoip.app/json/', {
        mode: "cors",
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(json => {
        var currentUrl = window.location.href;
        analytics.track("Get Current Weather",{
        "url": currentUrl,
        "target": json
        })
        var lat = Object.values(json)[8];
        var lon = Object.values(json)[9];
        let key = "18ad4f9360c88c9ebd053c46af11eb08"
        let url = "https://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon=" +lon + "&appid=" + key
    
        fetch (url, {
            mode: "cors",
            mothod: "GET",
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            getCurrentTime();
            // appendList(json);
            CreateTableFromJSON(json);
            responseToAnalytics(json);
        })
    })
}