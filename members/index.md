---
layout: default
title: "B2B 디자이너들의 모임 멤버"
subtitle: "커뮤니티 멤버 베이스입니다"
header-img: "b2b_graphic_cover_600x300.png"
---
{% include member-list.html %}
<script>
    window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('c-header').remove();
    document.getElementById('c-footer').remove();
    });
</script>
<div class="o-wrapper">
    <div class="o-grid">
        <div class="m-center">
            <ul id="member-list" class='c-list'>
            </ul>
        </div>
    </div>
</div>