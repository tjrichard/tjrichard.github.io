---
layout: default
title: Thoughts and Intrests
description: 관심 분야의 글을 올려요
project-header: true
header-img: img/about.jpg
---

<ul class="c-list">
{% assign sorted = site.pages | sort: 'order' | reverse %}

{% for page in sorted %}
    {% if page.blog == true %}
        {% include post-list.html %}
    {% endif %}
{% endfor %}
</ul>