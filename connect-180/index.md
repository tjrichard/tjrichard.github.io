---
layout: default
---
<script>
    window.onload = function() {
        // var input = document.getElementById("gsc-i-id1").focus();
        var input = document.getElementById("long_url").focus();
    };
    window.onload = function() {
        var button = document.getElementById("tab_surfit").onclick();
    };

    function tabChange(event, tabName) {
        var i;
        var x = document.getElementsByClassName("tabContent");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(tabName).style.display = "block";
        
        // Get all elements with class="tablinks" and replace the class "active" to "normal"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("active", "normal");
        }
        document.getElementById(tabName).setAttribute("class", "active");
        // event.currentTarget.calssName += "active";
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
<header class="c-header">
    <div class="o-grid">
        <div class="o-grid__col o-grid__col--full">
            <div class="c-header__inner">
                <ul class="c-nav c-nav-list">
                    <li role="presentation">
                        <div class="tablinks c-nav__link active" onclick="tabChange(event, 'surfit')" id="tab_surfit">Surfit</div>
                    </li>
                    <li role="presentation">
                        <div class="tablinks c-nav__link active" onclick="tabChange(event, 'rabbit')" id="tab_rabbit">Rabbit</div>
                    </li>
                </ul> 
            </div>
        </div>
    </div>
</header>
<div id="surfit" class="tabContent">
    <iframe src="https://surfit.io/" class="surit-io"></iframe>
</div>
<div id="rabbit" class="tabContent">
    <iframe src="https://rabbit.so/" class="surit-io"></iframe>
</div>