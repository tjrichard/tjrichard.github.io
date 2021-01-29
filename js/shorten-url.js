function UrlShorten() {
    var suffixUrl = "https://tinyurl.com/api-create.php?url=";
    
    /* input에서 value를 가져옵니다 */
    var longUrl = document.getElementById('long_url').value;

    /* longUrl의 Scheme을 구합니다 */
    var scheme = longUrl;
    scheme = scheme.split(".")[1];
    
    /* 구한 Scheme이 notion일 경우 notion 딥링크 url로 변경하여 요청합니다 */
    if (scheme = "notion") {
        var notionUrl = longUrl;
        notionUrl = notionUrl.split("://")[1]
        var requestUrl = suffixUrl + "notion://" + notionUrl;

        fetch(requestUrl)
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
            document.getElementById('long_url').value = myJson;
            document.getElementById('submit').setAttribute("value", "Copy");
            document.getElementById('submit').setAttribute("onclick", "CopyUrlToClipboard()");
        })
    }
    
    /* 구한 Scheme이 figma일 경우 figma 딥링크 url로 변경하여 요청합니다 */
    else if (scheme = "figma") {
        var figmaUrl = longUrl;
        figmaUrl = figmaUrl.split("/file/")[3]
        var requestUrl = suffixUrl + "figma://file/" + figmaUrl;

        fetch(requestUrl)
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
            document.getElementById('long_url').value = myJson;
            document.getElementById('submit').setAttribute("value", "Copy");
            document.getElementById('submit').setAttribute("onclick", "CopyUrlToClipboard()");
        })
    }

    /* 이외의 경우 받은 url을 그대로 사용해 요청합니다 */
    else {
            var requestUrl = suffixUrl + longUrl;
        
            fetch(requestUrl)
                .then((response) => {
                    return response.text();
                })
                .then((myJson) => {
                    console.log(myJson);
                    document.getElementById('long_url').value = myJson;
                    document.getElementById('submit').setAttribute("value", "Copy");
                    document.getElementById('submit').setAttribute("onclick", "CopyUrlToClipboard()");
                })
        }
    return;
};

function CopyUrlToClipboard() {
    /* Get the text field */
    var copyText = document.getElementById('long_url');

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");
    // copyText.blur(); // 선택된 것을 다시 선택안된것으로 바꿈니다.

    /* Change Button to Shorten again */
    document.getElementById('submit').setAttribute("value", "Shorten");
    document.getElementById('submit').setAttribute("onclick", "UrlShorten()");
};