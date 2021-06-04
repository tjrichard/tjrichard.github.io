function UrlShorten() {
    /* input에서 value를 가져옵니다 */
    var longUrl = document.getElementById('long_url').value;

    /* 받은 url에서 www 다음을 scheme으로, path 부터 링크로 붙입니다 */
    var splitUrl = longUrl.split("www.")[1];
    var schemeName = splitUrl.split(".")[0];
    var pathUrl = splitUrl.split("/")[0].length;
    var requestUrl = schemeName + "://" + splitUrl.substring(pathUrl);

    /* URL과 Scheme URL을 리턴합니다 */
    var updatedUrl = "Link: " + longUrl + "\n" + "Shceme: " + requestUrl;
    console.log(updatedUrl);
    document.getElementById('long_url').value = updatedUrl;
    document.getElementById('submit').setAttribute("value", "Copy");
    document.getElementById('submit').setAttribute("onclick", "CopyUrlToClipboard()");
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