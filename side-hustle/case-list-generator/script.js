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


/* Case List Generator */
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
        catValue.setAttribute("placeholder", "카테고리 케이스. 콤마로 구분합니다. 필요시 큰/작은 따옴표로 그룹핑 가능합니다 e.g. '안드로이드', 'iOS', '웹'");
        catValue.setAttribute("class","catValue");
        catValue.setAttribute("rows", "4");
        catContainer.appendChild(catTitle);
        catContainer.appendChild(catValue);

    document.getElementById("addCat").remove();
    
    var btn = document.createElement("input");
        btn.setAttribute("id","addCat");    
        btn.setAttribute("type","button");
        btn.setAttribute("value","카테고리 추가");
        
    if (catList.childElementCount >= 9){
        btn.setAttribute("class","disabled");
    }
    else {
        btn.setAttribute("onclick","addCat()");
    }

    cat.appendChild(catContainer);
    cat.appendChild(deleteIcon);
    catList.appendChild(cat);
    catList.appendChild(btn);
}

function deleteCat(element) {
    var catList = document.getElementById("catList")
    var catListCount = catList.childElementCount - 3;
    var parent = element.parentElement;
    if(catListCount == 1){
        document.getElementsByTagName("input")[0].value = '';
        document.getElementsByTagName("textarea")[0].value = ''
    }else{
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
            // 입력한 value의 앞 뒤, ' 혹은 " 앞에 공백 제거
            value = document.getElementById(catId).firstElementChild.lastElementChild.value.replace(/^\s+|(?<=,)\s+|\s+(?='|")|\s+$/gm,'');
            value = value.split(",");
            // 입력한 value가 ' 혹은 "로 감싸진 경우 ', " 제거
            if(value[0].slice(0,1) == "'" | value[0].slice(0,1) == "\""){
                for(a=0; a<value.length; a++){
                    var b = value[a].length - 1;
                    value[a] = value[a].slice(1,b);
                }
            }else{}

            resultTitle.push(title);
            resultValue.push(value);
        }
    }
    // 결과에 Title 먼저 Push, 다음 Value 생성 후 Push
    var generatedValue = [];
    generatedValue.push(resultTitle);
    var generatedRowCount = 0;

    // 입력된 value로 list 생성
    for(a=0; a<resultValue[0].length; a++){
        // 카테고리 1개인 경우
        if(resultValue.length == 1){
            var str = resultValue[0][a];
            generatedValue.push(str);
            generatedRowCount++;
        }else if(resultValue.length == 2){
            // 카테고리 2개인 경우
            for(b=0; b<resultValue[1].length; b++){
                var str = resultValue[0][a] + "," + resultValue[1][b];
                generatedValue.push(str);
                generatedRowCount++;
            }
        }else if(resultValue.length == 3){
            // 카테고리 3개인 경우
            for(b=0; b<resultValue[1].length; b++) {
                for(c=0; c<resultValue[2].length; c++) {
                    var str = resultValue[0][a] + "," + resultValue[1][b] + "," + resultValue[2][c];
                    generatedValue.push(str);
                    generatedRowCount++;
                }
            }
        }else if(resultValue.length == 4){
            // 카테고리 4개인 경우
            for(b=0; b<resultValue[1].length; b++) {
                for(c=0; c<resultValue[2].length; c++) {
                    for(d=0; d<resultValue[3].length; d++) {
                        var str = resultValue[0][a] + "," + resultValue[1][b] + "," + resultValue[2][c] + "," + resultValue[3][d];
                        generatedValue.push(str);
                        generatedRowCount++;
                    }
                }
            }
        }else if(resultValue.length == 5) {
             // 카테고리 5개인 경우
             for(b=0; b<resultValue[1].length; b++) {
                for(c=0; c<resultValue[2].length; c++) {
                    for(d=0; d<resultValue[3].length; d++) {
                        for(e=0; e<resultValue[4].length; e++){
                            var str = resultValue[0][a] + "," + resultValue[1][b] + "," + resultValue[2][c] + "," + resultValue[3][d] + "," + resultValue[4][e];
                            generatedValue.push(str);
                            generatedRowCount++;
                        }
                    }
                }
            }
        }else if(resultValue.length == 6) {
            // 카테고리 6개인 경우
            for(b=0; b<resultValue[1].length; b++) {
               for(c=0; c<resultValue[2].length; c++) {
                   for(d=0; d<resultValue[3].length; d++) {
                       for(e=0; e<resultValue[4].length; e++){
                           for(f=0; f<resultValue[5].length; f++){
                               var str = resultValue[0][a] + "," + resultValue[1][b] + "," + resultValue[2][c] + "," + resultValue[3][d] + "," + resultValue[4][e] + "," + resultValue[5][f];
                               generatedValue.push(str);
                               generatedRowCount++;
                           }
                       }
                   }
               }
            }
        }else if(resultValue.length == 7) {
            // 카테고리 7개인 경우
            for(b=0; b<resultValue[1].length; b++) {
               for(c=0; c<resultValue[2].length; c++) {
                   for(d=0; d<resultValue[3].length; d++) {
                       for(e=0; e<resultValue[4].length; e++){
                           for(f=0; f<resultValue[5].length; f++){
                               for(g=0; g<resultValue[6].length; g++){
                                   var str = resultValue[0][a] + "," + resultValue[1][b] + "," + resultValue[2][c] + "," + resultValue[3][d] + "," + resultValue[4][e] + "," + resultValue[5][f] + "," + resultValue[6][g];
                                   generatedValue.push(str);
                                   generatedRowCount++;
                               }
                           }
                       }
                   }
               }
            }
        }else if(resultValue.length == 8) {
            // 카테고리 8개인 경우
            for(b=0; b<resultValue[1].length; b++) {
               for(c=0; c<resultValue[2].length; c++) {
                   for(d=0; d<resultValue[3].length; d++) {
                       for(e=0; e<resultValue[4].length; e++){
                           for(f=0; f<resultValue[5].length; f++){
                               for(g=0; g<resultValue[6].length; g++){
                                    for(h=0; h<resultValue[7].length; h++){
                                        var str = resultValue[0][a] + "," + resultValue[1][b] + "," + resultValue[2][c] + "," + resultValue[3][d] + "," + resultValue[4][e] + "," + resultValue[5][f] + "," + resultValue[6][g] + "," + resultValue[7][h];
                                        generatedValue.push(str);
                                        generatedRowCount++;
                                    }
                               }
                           }
                       }
                   }
               }
            }
        }else if(resultValue.length == 9) {
            // 카테고리 9개인 경우
            for(b=0; b<resultValue[1].length; b++) {
               for(c=0; c<resultValue[2].length; c++) {
                   for(d=0; d<resultValue[3].length; d++) {
                       for(e=0; e<resultValue[4].length; e++){
                           for(f=0; f<resultValue[5].length; f++){
                               for(g=0; g<resultValue[6].length; g++){
                                    for(h=0; h<resultValue[7].length; h++){
                                        for(i=0; i<resultValue[8].length; i++){
                                            for(j=0; j<resultValue[9].length; j++){
                                                var str = resultValue[0][a] + "," + resultValue[1][b] + "," + resultValue[2][c] + "," + resultValue[3][d] + "," + resultValue[4][e] + "," + resultValue[5][f] + "," + resultValue[6][g] + "," + resultValue[7][h] + "," + resultValue[8][i] + "," + resultValue[9][j];
                                                generatedValue.push(str);
                                                generatedRowCount++;
                                            }
                                        }
                                    }
                               }
                           }
                       }
                   }
               }
            }
        }else if(resultValue.length == 10) {
            // 카테고리 10개인 경우
            for(b=0; b<resultValue[1].length; b++) {
               for(c=0; c<resultValue[2].length; c++) {
                   for(d=0; d<resultValue[3].length; d++) {
                       for(e=0; e<resultValue[4].length; e++){
                           for(f=0; f<resultValue[5].length; f++){
                               for(g=0; g<resultValue[6].length; g++){
                                    for(h=0; h<resultValue[7].length; h++){
                                        for(i=0; i<resultValue[8].length; i++){
                                            for(j=0; j<resultValue[9].length; j++){
                                                var str = resultValue[0][a] + "," + resultValue[1][b] + "," + resultValue[2][c] + "," + resultValue[3][d] + "," + resultValue[4][e] + "," + resultValue[5][f] + "," + resultValue[6][g] + "," + resultValue[7][h] + "," + resultValue[8][i] + "," + resultValue[9][j];
                                                generatedValue.push(str);
                                                generatedRowCount++;
                                            }
                                        }
                                    }
                               }
                           }
                       }
                   }
               }
            }
        }else{console.log("too many categories")}
    }

    // 생성 완료됨으로 result 텍스트 대치
    document.getElementById("result").innerHTML = "총 " + generatedRowCount + "개 케이스 생성 완료";
    
    // 리스트 생성 버튼 secondary 로 하이라키 낮추기
    var btn = document.getElementById("generateList");
    btn.setAttribute("class","secondary");
    
    // 이미 다운로드 버튼이 있는지 확인, 있다면 기존 다운로드 버튼 제거
    var btnArea = document.getElementById("buttonArea");
    if(!document.getElementById("download")){}else{
        document.getElementById("download").remove();
    }
    

    // CSV 다운로드 버튼을 CTA 버튼으로 추가 제공
    var CSV = generatedValue.join('\n');
    window.URL = window.webkitURL || window.URL;
    var contentType = 'text/csv; charset=utf-8';
    var csvFile = new Blob([CSV], {type: contentType});
    var a = document.createElement('a');
        a.setAttribute("id","download");
        // a.setAttribute("type","button");
        // a.setAttribute("value","CSV 다운로드");
        a.textContent = "CSV 다운로드"
        // a.setAttribute("download","generated-list.csv");
        a.download = 'generated-list.csv';
        a.setAttribute("href",window.URL.createObjectURL(csvFile));
        a.dataset.downloadurl = [contentType, a.download, a.href].join(':');
    btnArea.appendChild(a);
}