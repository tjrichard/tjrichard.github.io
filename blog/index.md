---
layout: default
title: Thoughts and Intrests
description: 관심 분야의 글을 올려요
project-header: true
header-img: img/about.jpg
---

<ul class='o-grid'>
{% assign sorted = site.pages | sort: 'order' | reverse %}

{% for page in sorted %}
<<<<<<< HEAD
    {% if page.folder == blog %}
=======
    {% if page.blog == true %}
>>>>>>> parent of c6ff17c... blog, project as type
        {% include post-list.html %}
    {% endif %}
{% endfor %}
</ul>