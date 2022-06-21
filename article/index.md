---
layout: default
title: Curated Atricles
description: 성장을 위한 아티클 요약 큐레이션
project-header: true
header-img: '../images/daily-article.png'
---
<script>

    function expandArticle(element) {
        // Atricle height 100%
        var parent = element.parentElement.parentElement;
        parent.getElementsByClassName("a-list__body")[0].style.maxHeight = '100%';

        // 버튼 funtion 변경
        element.setAttribute("onclick","collapseArticle(this)");

        // innerText 변경
        // var child = element.firstElementChild;
        element.innerText = '…접기'
    }
    function collapseArticle(element) {
        // Article height 200px;
        var parent = element.parentElement.parentElement;
        parent.getElementsByClassName("a-list__body")[0].style.maxHeight = '200px';

        // 스크롤 다시 위로 올리기
        var scrollTop = parent.offsetTop - 80;
        window.scrollTo(0,scrollTop);

        // 버튼 funtion 변경
        element.setAttribute("onclick","expandArticle(this)");

        // innerText 변경
        // var child = element.firstElementChild;
        element.innerText = '…펼쳐보기'
    }
</script>
<div class='o-grid'>
    <div class='o-grid__col o-grid__col--full'>
        <div class='o-grid__head o-grid__head--full'>
            <hr style='visibility:hidden'>
            <h1 class='c-page__title'>{{ page.title }}</h1>
            <p class='c-page__subtitle'>{{ page.description }}</p>
            <hr style='visibility:hidden'>
        </div>
    </div>
</div>
<div class='a-grid'>
    <ul class='c-list a-list'>
        {% assign sorted = site.pages | sort: 'order' | reverse %}
        {% for page in sorted %}
            {% if page.article == true %}
                {% include article-list.html %}
            {% endif %}
        {% endfor %}
    </ul>
</div>