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

    function tabChange(tabName) {
        var i;
        var x = document.getElementsByClassName("tabContent");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(tabName).style.display = "block";
    }
}
</script>
<!-- 'https://tinyurl.com/api-create.php?url='.'http://www.example.com/'); -->
<div class="o-grid">
    <form autocomplete="off">
        <input type="text" id="long_url" name="long_url" placeholder="Enter long url">
        <input type="button" id="submit" value="Shorten" onclick="UrlShorten()">
    </form>
</div>
<header class="c-header">
    <div class="o-grid">
        <div class="o-grid__col o-grid__col--full" style="">
            <div class="c-header__inner" style="">
                <ul class="c-nav c-nav-list" style="">
                    <li role="presentation">
                        <button class="tablinks c-nav__link active" onclick="tabChange('surfit')">Surfit</button>
                    </li>
                    <li role="presentation">
                        <button class="tablinks c-nav__link normal" onclick="tabChange('rabbit')">Rabbit</button>
                    </li>
                </ul> 
            </div>
        </div>
    </div>
</header>
<div class="o-grid">
    <script async src="https://cse.google.com/cse.js?cx=d423c88702dea9eb7"></script>
    <div class="gcse-search"></div>
</div>
<div id="surfit" class="tabContent" style="display: block">
    <iframe src="https://surfit.io/" class="surit-io"></iframe>
</div>
<div id="rabbit" class="tabContent" style="display: none">
    <iframe src="https://rabbit.so/" class="surit-io"></iframe>
</div>