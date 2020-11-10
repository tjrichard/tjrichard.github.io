function UrlShorten() {
    var suffixUrl = "https://tinyurl.com/api-create.php?url=";
    var longUrl = document.getElementById('long_url').value;
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