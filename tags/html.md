---
layout: tag_page
tags: [html]
permalink: /tag/html
---
<!--
<div class='o-wrapper'>
    <div class='o-grid'>
    {% for post in tag[html] %}
        <div class='o-grid__col'>
          <a href='{{ post.url | prepend: site.baseurl }}' class='c-post-card {% if forloop.first == true %} c-post-card--first {% endif %} {% if forloop.last == true %} c-post-card--last {% endif %}'>
          <h3 class='c-post-card__title'>{{ post.title }}</h3>
            {% if post.image %}
              <img src='{{ post.image | prepend: site.baseurl }}' class='c-post__image' alt='{{ post.title }}'>
            {% endif %}
            <p class='c-post-card__excerpt u-font-medium'>
              {{ post.content | strip_html | truncatewords:35 }}
            </p>
            <span class='c-post-card__date'>{{ post.date | date: '%d %b %Y' }}</span>
            </a>
        </div>
    {% endfor %}
    </div>
-->