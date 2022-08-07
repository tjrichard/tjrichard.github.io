---
layout: default
title: "채널 프론트 데스크 테스트"
subtitle: "라이언의 채널톡 테스트 환경입니다"
---
{% include channel.html %}
<script>
    window.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById('c-header').remove();
        document.getElementById('c-footer').remove();
    });
</script>
<div class="o-wrapper">
    <div class="o-grid">
        <div class="m-wrapper__row">
            <div class="m-left">
                <p class="survey-title">이벤트 발생기</p>
                <div class="f-wrapper">
                    <div class="f-input-wrapper">
                        <select name="channelEventType" id="channelEventType" onChange="getEventType(this)">
                            <option value="showMessenger">showMessenger</option>
                            <option value="hideMessenger">hideMessenger</option>
                            <option value="addTags">addTags</option>
                            <option value="removeTags">removeTags</option>
                            <option value="custom">custom</option>
                        </select>
                        <span class="c-social-nav__icon" data-icon="ei-chevron-down" data-size="s"></span>
                    </div>
                </div>
                <input type="button" id="trackChannelEvent" class="button" value="이벤트 발생시키기" onclick="trackChannelEvent()">
            </div>
            <div class="m-left">
                <p class="survey-title">프로퍼티 입력기</p>
                <div class="f-wrapper">
                    <div class="f-input-wrapper">
                        <div class="f-title">
                        프로퍼티 타이틀
                        </div>
                        <div class="f-description">
                        프로퍼티 설명
                        </div>
                        <input type="text" id="property-1" class="input" placeholder="프로퍼티 플레이스 홀더">
                    </div>
                </div>
                <input type="button" id="trackChannelProperty" class="button" value="프로퍼티 발생시키기" onclick="trackChannelProperty()">
            </div>
        </div>
    </div>
</div>
<div id="snackbar-top"></div>