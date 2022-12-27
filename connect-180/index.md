---
layout: default
---
<script>
    openTab('evt', 'surfit');
    function openTab(evt, tabName) {
        var i, tabContent, tabLinks;
        // 전체 tabContent를 display: none 으로 변경함
        tabContent = document.getElementsByClassName("tabContent");
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }
        // 탭 네비게이션 전체를 class를 active에서 normal로, 클릭한 탭의 class를 normal 에서 active로 변경함
        tabLinks = document.getElementsByClassName("tabLinks");
        for (i = 0; i < tabLinks.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(" active", " normal");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className = evt.currentTarget.className.replace(" normal", " active");
    }
</script>
<div class="o-grid">
    <div class='c-header o-grid__col o-grid__col--full'>
      <div class='c-header__inner' style='display: flex; justify-content: space-between;'>
        <ul class='c-nav c-nav-list'>
          <li role='presentation'>
            <a class="c-nav__link tabLinks active" onclick="openTab(event, 'surfit')">Surfit</a>
          </li>
          <li role='presentation'>
            <a class="c-nav__link tabLinks normal" onclick="openTab(event, 'oneoneone')">OneOneOne</a>
          </li>
        </ul>
      </div>
    </div>
</div>
<div id="surfit" class="tabContent" style="display: block">
    <iframe src="https://surfit.io/" class="iframe-content"></iframe>
</div>
<div id="oneoneone" class="tabContent" style="display: none">
    <iframe src="https://oneoneone.kr/" class="iframe-content"></iframe>
</div>