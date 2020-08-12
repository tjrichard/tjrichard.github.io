---
layout: default
work: true
title: Selected Projects
description: 지금까지 작업한 프로젝트
project-header: true
header-img: "./img/project-header.jpg"
---

<ul class='o-grid'>
{% assign sorted = site.pages | sort: 'order' | reverse %}

{% for page in sorted %}
    {% if page.folder == project %}
        {% include post-list.html %}
    {% endif %}
{% endfor %}
</ul>