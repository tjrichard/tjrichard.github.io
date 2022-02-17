---
layout: post
type: 'Design'
title:  'Informative vs Decisional 모달 디자인하기'
subtitle: 번역 및 요약 👉 Informative & Decisional
tags: [UI 컴포넌트, 가이드, 사용성, 케이스 스터디]
date: 2021-09-13 14:30:00
article: true
is_list-img: true
list-img: 'https://miro.medium.com/max/2000/1*pmbbHtvPUgJOrhIVA-rFmw.png'
post-header: false
order: 18
---

<p class="text-gray">
 🔗 이 글은 Linzi Berry님이 <a href='https://medium.com/tap-to-dismiss/' target='blank' rel='nofollow' id='outlink1' onclick='clickedOutlink(outlink1)'><img src='https://www.google.com/s2/favicons?sz=64&domain=https://medium.com/' style='display:inline; height: 1em; position: relative; bottom: -2px; margin-right: 2px;'>미디엄</a>에 올린 <a href='https://medium.com/tap-to-dismiss/informative-decisional-b2ed272b4696' target='blank' rel='nofollow' id='outlink2' onclick='clickedOutlink(outlink2)'>아티클</a>을 번역, 요약한 글입니다.
</p>

> B2B 프로덕트를 사용하는 플로우에서는 시스템이 사용자에게 정보를 제공해야 하는 경우가 많습니다. 이 때 정보를 어떤 방식으로 제공하는게 가장 적절할 지 여러 UI 컴포넌트 중에서 고민해본 적이 많으실 것 같아요. 경고 모달, 노티 스낵바, 드로어, 툴팁 등등 정보를 전달 할 방법은 많으니까요.

> 사용자에게 전달해야 할 정보는 사용자의 결정이 필요한 정보인지 vs 정보를 전달하는 메세지인지에 따라 크게 구분할 수 있습니다. 이렇게 나뉜 메세지에서 제공 할 정보의 특징에 따라 사용해야 할 컴포넌트를 결정할 수 있습니다.

> 저자는 로직 트리로 시각화를 해 메세지를 어떤 컴포넌트로 제공해야할 지 쉽게 결정할 수 있도록 하였습니다. 비록 모바일 앱 UI를 중심이긴 하지만 각 컴포넌트의 정의와 예시, 특징도 함께 제공하고 있으니 디자인 프로세스에 참고할 수 있겠습니다.