---
layout: default
---
<script>
    window.onload = function() {
        document.getElementById('c-header').remove();
        document.getElementById('c-footer').remove();
    };
</script>
<div class="o-wrapper">
    <div class="o-grid">
        <div class="m-center">
            <img src="./lock-left.png" class="survey-image">
            <p class="survey-title">B2B 디자이너들의 모임 설문 결과</p>
            <input id="passwordInput" name="passwordInput" placeholder="비밀번호를 입력해주세요" type="password">
            <input type="button" id="passwordSubmit" value="🔒 잠금 해제ㅤ" onclick="verification()">
        </div>
    </div>
</div>