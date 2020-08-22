---
layout: default
work: true
title: Selected Projects
description: 지금까지 작업한 프로젝트
project-header: true
header-img: "./img/project-header.jpg"
---
<div class='o-grid'>
    <ul class='o-grid__col'>
    {% assign sorted = site.pages | sort: 'order' | reverse %}
    {% for page in sorted %}
        {% if page.project == true %}
            {% include post-list.html %}
        {% endif %}
    {% endfor %}
    </ul>
</div>