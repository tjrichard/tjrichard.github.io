---
layout: default
---
<script>
    window.onload = function() {
        // var input = document.getElementById("gsc-i-id1").focus();
        var input = document.getElementById("long_url").focus();
    };
    window.onload = function() {
        document.getElementsbyClassName("c-header").style.display = "none";
    }

    function tabChange(event, tabName) {
        var i;
        var x = document.getElementsByClassName("tabContent");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(tabName).style.display = "block";
        
        // Get all elements with class="tablinks" and replace the class "active" to "normal"
        var tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            // tablinks[i].className = tablinks[i].className.replace("active", "normal");
            tablinks[i].setAttribute("class", "tablinks c-nav__link normal");
        }
        
        // event.currentTarget.calssName += "active";
        var tabId = "tab_" + tabName;
        document.getElementById(tabId).setAttribute("class", "tablinks c-nav__link active");
    }

</script>
<!-- 'https://tinyurl.com/api-create.php?url='.'http://www.example.com/'); -->
<div class="o-grid">
    <form autocomplete="off">
        <input type="text" id="long_url" name="long_url" placeholder="Enter long url">
        <input type="button" id="submit" value="Shorten" onclick="UrlShorten()">
    </form>
</div>
<div class="o-grid">
    <script async src="https://cse.google.com/cse.js?cx=d423c88702dea9eb7"></script>
    <div class="gcse-search"></div>
</div>
<div id="surfit" class="tabContent">
    <iframe src="https://surfit.io/" class="surit-io" style="display: block"></iframe>
</div>