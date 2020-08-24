---
layout: default
work: true
title: Selected Projects
description: 🎁 지금까지 작업한 프로젝트
project-header: true
header-img: "./img/project-header.jpg"
---
<div class='o-grid'>
    <div class='o-grid__col o-grid__col--ful'>
        <hr style='visibility:hidden'>
            <h1 class='c-page__title'>{{ page.title }}</h1>
            <p class='c-page__subtitle'>{{ page.description }}</p>
        <hr style='visibility:hidden'>
        <ul class='c-list'>
            {% assign sorted = site.pages | sort: 'order' | reverse %}
            {% for page in sorted %}
                {% if page.project == true %}
                    {% include post-list.html %}
                {% endif %}
            {% endfor %}
        </ul>
    </div>
</div>