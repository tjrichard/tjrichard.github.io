---
layout: default
title: Curated Atricles
description: 성장을 위한 아티클 큐레이션
project-header: true
header-img: '../images/daily-article.png'
---
<div class='o-grid'>
    <div class='o-grid__col o-grid__col--full'>
        <div class='o-grid__head o-grid__head--full'>
            <hr style='visibility:hidden'>
            <h1 class='c-page__title'>{{ page.title }}</h1>
            <p class='c-page__subtitle'>{{ page.description }}</p>
            <hr style='visibility:hidden'>
        </div>
        <ul class='c-list'>
            {% assign sorted = site.pages | sort: 'order' | reverse %}
            {% for page in sorted %}
                {% if page.article == true %}
                    {% include post-list.html %}
                {% endif %}
            {% endfor %}
        </ul>
    </div>
</div>