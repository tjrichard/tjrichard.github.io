---
layout: post
type: 'Growth'
title:  '사용자를 화나지 않게 하면서 기능 제거하기'
subtitle: 번역 및 요약 👉 Removing Features Without Pissing Off Your Users
tags: [데이터 분석, 비즈니스 전략, 사용자 조사, 프로덕트 전략]
date: 2021-11-16 14:30:00
article: true
is_list-img: true
list-img: 'https://miro.medium.com/max/700/0*Bj6ySxZgJaKm2jWn.png'
post-header: false
order: 54
---

<p class="text-gray">
 🔗 이 글은 Richard Yang님이 <a href='https://uxdesign.cc/' target='blank' rel='nofollow' id='outlink1' onclick='clickedOutlink(outlink1)'><img src='https://www.google.com/s2/favicons?sz=64&domain=https://uxdesign.cc/' style='display:inline; height: 1em; position: relative; bottom: -2px; margin-right: 2px;'>미디엄</a>에 올린 <a href='https://uxdesign.cc/removing-features-without-pissing-off-your-users-and-why-you-should-19b4ee595e33' target='blank' rel='nofollow' id='outlink2' onclick='clickedOutlink(outlink2)'>아티클</a>을 번역, 요약한 글입니다.
</p>

기능이 너무 많은 프로덕트는 대부분의 경우 UX를 저해합니다. 모두가 이를 알고 있지만 대부분의 프로덕트, 특히 B2B 프로덕트는 기능 비대 상태가 되어버리곤 합니다. 최 상위 가치를 가진 기업 고객들을 잃지는 않겠지만(보통 그들이 그 기능들을 요구했기 때문에), 일반적인 사용자 대부분에게 거리감을 두게 됩니다. 이런 경우 비싸고 비대해진 프로덕트가 커버하지 못하는 작은 핵심 영역을 '언번들링'한 경쟁 프로덕트가 나타나곤 합니다.

### 기능이 비대해지면 새로운 사용자가 첫 '아하' 모먼트를 경험하게 되기 어려워 집니다.
→ 이는 결국 `TTV(Time To Value)`를 상승시키고, `사용자 리텐션`에도 영향을 줍니다.

하지만 핵심 경험을 제외하고 나머지 기능들을 모조리 덜어내야 한다는 것은 아닙니다. 우리는 어떤 기능을 제거했을 때 몇몇 사용자에게 어떤 임팩트가 있을지를 알아야 합니다.

### 🎙 Hyrum's Law

구글 엔지니어인 Hyrum Wright는 `API를 사용하는 사용자가 충분하다면, 그것이 어떤 기능을 제공하기로 계획되어있든 상관 없이 시스템의 모든 확인 가능한 행동들은 누군가에게 의해 결정될 것이다` 라고 말했습니다.

이를 프로덕트 레벨으로 다시 해석해보자면, `충분한 크기에서, 프로덕트가 제공하는 모든것은 누군가가 원하는 방식으로 (옳은 방식이든 아니든) 사용되게 될 것이다`가 될 것입니다.

우리가 어떤 목적으로 기능을 제공한다고 하더라도, 실제 사용자는 우리의 의도대로 사용할 수도 있고, 각자의 의도대로 그 기능을 (우리의 입장에서)잘못 사용하고 있을수도 있습니다. 그렇다면 기능을 제거할 때 어떤 기준을 사용해야 할까요?

### 👑 최소 사용률 (Minimum Usage)

* 팀이 계획한 최소 사용률을 한참이나 밑돌거나, 리텐션율을 높이는데 영향이 없는 기능들은 제거되어야 합니다
* 만약 두 조건을 모두 만족했으나 우리의 의도대로 기능을 사용하지 않는다면 그 기능은 리디자인이 필요한 기능입니다
* 리디자인 할 때는 기존 TTV에 부정적인 영향을 주지 않도록 유의해야 하고, 리디자인 된 기능은 동일한 페이지에서(이상적으로는 같은 위치에서) 제공되어야 합니다