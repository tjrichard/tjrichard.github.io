---
layout: post
type: 'Product'
title:  '[쿠팡] 테스트 결과가 예상과 다를 때'
subtitle: 요약 👉 쿠팡 UX Club 3. 테스트 결과가 예상과 다를 때
tags: [A/B테스팅, 경험 공유, 데이터 분석, 디자인 분석, 사용자 조사, 실 사례, 프로덕트 분석, 프로덕트 전략]
date: 2021-10-27 14:30:00
article: true
is_list-img: true
list-img: 'https://t1.daumcdn.net/brunch/service/user/89Po/image/nOsURej53UFAD3jlwMMvyEoPcRM.png'
post-header: false
order: 42
---

<p class="text-gray">
 🔗 이 글은 쿠팡 디자인이 <a href='https://brunch.co.kr/@coupangdesign/' target='blank' rel='nofollow' id='outlink1' onclick='clickedOutlink(outlink1)'><img src='https://www.google.com/s2/favicons?sz=64&domain=https://brunch.co.kr/' style='display:inline; height: 1em; position: relative; bottom: -2px; margin-right: 2px;'>브런치</a>에 올린 <a href='https://brunch.co.kr/@coupangdesign/73' target='blank' rel='nofollow' id='outlink2' onclick='clickedOutlink(outlink2)'>아티클</a>을 요약한 글입니다.
</p>

문제를 명확하게 가정했고, 이를 검증하기 위한 가설과 솔루션을 마련했다면, 개선을 위한 솔루션이 제대로 가정했던 문제를 해결하는지를 확인하기 위해 테스트를 진행합니다. 테스트 결과는 미리 설정해 둔 주요 지표가 어떤 값으로 변화했는지에 따라 테스트의 성공 여부를 판단하게 됩니다. 만약 테스트 결과가 예상과 다를 경우 기존에 정의한 문제와 가설, 솔루션이 제대로 되었는지 면밀하게 분석해야 합니다.

실패한 테스트를 그저 지나가는 결과로 바라보지 않고 새로운 인사이트를 얻기 위해서 활용한다면 몇 번의 이터레이션을 거쳐 성공적인 결과로 이끌어낼 수 있습니다. 쿠팡은 '`패션 상품을 구매를 시도했으나 구매하지 않은 고객`'을 대상으로 사용자 조사를 거쳐 문제를 정의하고 그 문제를 해결할 것이라고 생각한 솔루션을 개발해 테스트 해보았습니다.

### 🤔

대다수의 고객이 패션 제품을 구매하는데 사이즈를 중요한 요소로 꼽았으며 구매를 포기한 이유로는 **`내게 맞는 사이즈를 확인할 수 있는 정보가 부족하다`**는 응답이 많았습니다. 패션 제품의 구매 전환율을 높이기 위해 상품 페이지 상단에 '사이즈 안내' 버튼을 추가해 테스트를 진행했지만 클릭율은 현저하게 낮았습니다.

### 🔄

여기서 문제나 솔루션이 잘못되었다고 생각하고 그만두지 않고, 왜 솔루션이 실패했는지 다시 한 번 UT를 진행한 결과, 고객에게 상품 페이지 상단은 **가격과 결제 혜택을 파악하는 영역으로 익숙해**져 있어 새로 추가된 기능을 발견하기 어려웠다는 점을 발견할 수 있었습니다. 또한 새로 추가된 '사이즈 안내' 버튼을 **한 번 이상 눌러본 고객의 구매 전환율이** 그렇지 않은 고객보다 **2배 이상 높았다**는 긍정적인 시그널도 발견할 수 있었습니다.

### 💡

이런 새로운 발견으로 구매 의사가 있는 고객에게 이 버튼을 적절한 시기에 제공할 수 있도록 수정해 PO와 비즈니스 리더에게 다시 설득했고, 주요 지표가 상승하고 상품군의 총 거래액까지 증가하는 결과를 가져올 수 있었습니다.

테스트가 실패했다고 바로 좌절하지 않고 기존 결과를 활용해 다음 이터레이션을 설계하는데 데이터 드리븐한 근거 자료로 활용하여 새로운 인사이트를 계속해서 얻어가는것이 중요하겠습니다.