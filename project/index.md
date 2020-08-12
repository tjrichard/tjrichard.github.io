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
<<<<<<< HEAD
    {% if page.folder == project %}
=======
    {% if page.project == true %}
>>>>>>> parent of c6ff17c... blog, project as type
        {% include post-list.html %}
    {% endif %}
{% endfor %}
</ul>