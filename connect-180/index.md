---
layout: default
---
<script>
    window.onload = function() {
        document.getElementById("defaultOpen").click();
    }
    window.onload = function() {
        // var input = document.getElementById("gsc-i-id1").focus();
        var input = document.getElementById("long_url").focus();
    };
    window.onload = function() {
        document.getElementsbyClassName("c-header").style.display = "none";
    }

    function tabChange(event, tabName) {
        // Declare all variables
        var i, tabContent, tablinks;

        // Get all elements with class="tabContent" and hide them
        tabCcontent = document.getElementsByClassName("tabContent")
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("active", "normal");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block";
        event.currentTarget.className += " active";
    }
}
</script>
<!-- 'https://tinyurl.com/api-create.php?url='.'http://www.example.com/'); -->
<header class="c-header">
    <div class="o-grid">
        <div class="o-grid__col o-grid__col--full" style="">
            <div class="c-header__inner" style="">
                <ul class="c-nav c-nav-list" style="">
                    <li role="presentation">
                        <button class="tablinks c-nav__link active" onclick="tabChange(event, 'surfit')" id="defaultOpen">Surfit</button>
                    </li>
                    <li role="presentation">
                        <button class="tablinks c-nav__link normal" onclick="tabChange(event, 'rabbit')">Rabbit</button>
                    </li>
                </ul> 
            </div>
        </div>
    </div>
</header>
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
    <iframe src="https://surfit.io/" class="surit-io"></iframe>
</div>
<div id="rabbit" class="tabContent">
    <iframe src="https://rabbit.so/" class="surit-io"></iframe>
</div>