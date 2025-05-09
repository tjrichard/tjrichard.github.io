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
    // 글로벌 등록 (window에 할당) - _includes/channel.html 함수 사용
    window.loginWithKakao = loginWithKakao;
    window.loginWithNaver = loginWithNaver;
    window.socialLoginAndBootChannelIO = socialLoginAndBootChannelIO;
    // 페이지 진입 시 소셜 로그인 체크
    socialLoginAndBootChannelIO();
    // 회원 id로 부트하기 함수
    window.bootWithManualMemberId = function() {
      var memberId = document.getElementById('manual-member-id').value;
      if (!memberId) {
        alert('회원 id를 입력하세요.');
        return;
      }
      ChannelIO('boot', {
        pluginKey: '8ae9b09a-9887-4957-96aa-b7f1ccba06b5',
        memberId: memberId
      }, function onBoot(error, user) {
        if (error) {
          alert('ChannelIO boot 실패: ' + error);
          console.error('ChannelIO boot 실패:', error);
        } else {
          alert('ChannelIO boot 성공!');
          channelUser = user;
        }
      });
    }
</script>

<!-- Start of HubSpot Embed Code -->
<!-- <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/23163731.js"></script> -->
<!-- End of HubSpot Embed Code -->

<!-- 카카오 로그인 -->
<script src="https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js"
  integrity="sha384-kYPsUbBPlktXsY6/oNHSUDZoTX6+YI51f63jCPEIPFP09ttByAdxd2mEjKuhdqn4" crossorigin="anonymous"></script>
<script>
  Kakao.init('389a7ddbc92ba6a6cda26695c6492357'); // 사용하려는 앱의 JavaScript 키 입력
</script>
<script>
  function loginWithKakao() {
    Kakao.Auth.authorize({
      redirectUri: 'https://zoyi.cafe24.com/Api/Member/Oauth2ClientCallback/kakao/', // 사용하려는 앱의 Redirect Uri 입력
    });
  }

  // 아래는 데모를 위한 UI 코드입니다.
  displayToken()
  function displayToken() {
    var token = getCookie('authorize-access-token');

    if(token) {
      Kakao.Auth.setAccessToken(token);
      Kakao.Auth.getStatusInfo()
        .then(function(res) {
          if (res.status === 'connected') {
            document.getElementById('token-result').innerText
              = 'login success, token: ' + Kakao.Auth.getAccessToken();
          }
        })
        .catch(function(err) {
          Kakao.Auth.setAccessToken(null);
        });
    }
  }

  function getCookie(name) {
    var parts = document.cookie.split(name + '=');
    if (parts.length === 2) { return parts[1].split(';')[0]; }
  }
</script>
<!-- 카카오 로그인 끝 -->

<!-- 네이버 로그인 -->
<script type="text/javascript" src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js" charset="utf-8"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<!-- 네이버 로그인 끝 -->

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
                    <div class="f-input-wrapper" id="propertyForm">
                        <input type="button" id="getUserPropertyKeys" class="button" value="프로퍼티 불러오기" onclick="getUserPropertyKeys()">
                      </div>
                </div>
                <input type="button" id="trackChannelProperty" class="button" value="프로퍼티 발생시키기" onclick="updateChannelProperty()">
            </div>
            <div class="m-left">
                <p class="survey-title">회원가입 테스트</p>
                <div class="f-wrapper">
                    <div class="f-input-wrapper">
                        <input type="text" id="manual-member-id" class="input" placeholder="회원 id 입력" />
                        <input type="button" class="button" value="회원으로 부트하기" onclick="bootWithManualMemberId()" />
                    </div>
                </div>
            </div>
            <div class="m-left">
                <p class="survey-title">카카오 테스트</p>
                <div id="kakao-talk-channel-add-button" data-channel-public-id="_IATxiK" data-size="large" data-support-multiple-densities="true"></div>
                <!-- 카카오 채널 추가 -->
                <script>
                  window.kakaoAsyncInit = function() {
                    Kakao.Channel.createAddChannelButton({
                      container: '#kakao-talk-channel-add-button',
                    });
                  };
                  (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s); js.id = id;
                    js.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.channel.min.js';
                    js.integrity = 'sha384-j5TN6EqladB+HIfGV8dVYRIzoJf9Fb4lvrkPmo9KlnDWpN1CZz8yC4rCH1ChRbbh';
                    js.crossOrigin = 'anonymous';
                    fjs.parentNode.insertBefore(js, fjs);
                  })(document, 'script', 'kakao-js-sdk');
                </script>
                <!-- 카카오 채널 추가 끝 -->
                <a id="kakao-login-btn" href="javascript:loginWithKakao()">
                    <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" />
                </a>
                <p id="token-result"></p>
            </div>
            <div class="m-left">
                <p class="survey-title">네이버 테스트</p>
                <div id="naver_id_login"></div>
                <script type="text/javascript">
                    var naver_id_login = new naver_id_login("Lte2TWpAKNCsQNoHJTSR", "https://dwmm.site/channel-test");
                    var state = naver_id_login.getUniqState();
                    naver_id_login.setButton("white", 2,40);
                    naver_id_login.setDomain("https://dwmm.site");
                    naver_id_login.setState(state);
                    naver_id_login.setPopup();
                    naver_id_login.init_naver_id_login();
                    // 네이버 공식 버튼 클릭 시 loginWithNaver() 실행
                    document.addEventListener('DOMContentLoaded', function() {
                      var naverBtn = document.getElementById('naver_id_login');
                      if (naverBtn) {
                        naverBtn.addEventListener('click', function() {
                          loginWithNaver();
                        });
                      }
                    });
                </script>
                <script type="text/javascript" src="https://ua.talk.naver.com/dist/sdk.js"></script>
                <div class="navertalk-friend-button" data-talk-id="w5tukq" data-size-width="188" data-size-height="44" data-device-type="MOBILE" data-type="BASIC" data-channel-no="3004718" ></div>
            </div>
            <div class="m-left">
                <p class="survey-title">Hubspot 테스트</p>
                <button class="hs-cta-trigger-button hs-cta-trigger-button-189137111600">팝업 불러오기</button>
            </div>
        </div>
    </div>
</div>
<div id="snackbar-top"></div>