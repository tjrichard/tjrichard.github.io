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
    {% if page.category == blog %}
        {% include post-list.html %}
    {% endif %}
{% endfor %}
</ul>