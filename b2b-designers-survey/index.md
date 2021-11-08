---
layout: default
title: "B2B 디자이너들의 모임 설문 결과 🎙"
subtitle: "멤버만 접근 가능합니다"
header-img: "b2b_graphic_cover_600x300.png"
---
<script>
    window.onload = function() {
        document.getElementById('c-header').remove();
        document.getElementById('c-footer').remove();
    };
</script>
{% include verification.html %}
<div class="o-wrapper">
    <div class="o-grid">
        <div class="m-center">
            <img src="./lock-left.png" class="survey-image">
            <p class="survey-title">B2B 디자이너들의 모임 설문 결과</p>
            <input id="passwordInput" name="passwordInput" placeholder="비밀번호를 입력해주세요" type="password">
            <input type="button" id="passwordSubmit" value="🔒 잠금 해제 " onclick="verification()">
        </div>
    </div>
</div>
<div id="snackbar">비밀번호가 일치하지 않습니다</div>