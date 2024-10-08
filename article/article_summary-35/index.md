---
layout: post
type: 'Design'
title:  '옵션을 숨길까, Disable 처리할까?'
subtitle: 번역 및 요약 👉 Hide vs Disable — The Hidden Truth
tags: [UI 컴포넌트, 가이드, 사용성]
date: 2021-10-18 14:30:00
article: true
is_list-img: true
list-img: 'https://miro.medium.com/max/626/1*Dw-41r5JiyfrOkw2eH4qVw.jpeg'
post-header: false
order: 35
---

<p class="text-gray">
 🔗 이 글은 Aashiq Babu님이 <a href='https://aashiqb.medium.com/' target='blank' rel='nofollow' id='outlink1' onclick='clickedOutlink(outlink1)'><img src='https://www.google.com/s2/favicons?sz=64&domain=https://aashiqb.medium.com/' style='display:inline; height: 1em; position: relative; bottom: -2px; margin-right: 2px;'>미디엄</a>에 올린 <a href='https://aashiqb.medium.com/hide-vs-disable-the-hidden-truth-f392c9f536d5' target='blank' rel='nofollow' id='outlink2' onclick='clickedOutlink(outlink2)'>아티클</a>을 번역, 요약한 글입니다.
</p>

대시보드를 디자인 하면서 사용자의 권한이나 태스크의 상태에 따라 몇몇 옵션을 사용하지 못하는 경우가 발생하게 됩니다. 이 떄 메뉴에서 해당 옵션을 **숨기는게** 좋을까요, **Disable** 처리하는게 좋을까요?

### Disable 처리했을때는,

* `장` 해당 옵션의 발견 가능성을 높이고, 학습 용이성을 높이는 장점이 있지만
* `단` 인지 부하가 높을 수 있고, 클릭 가능한 요소로 오해할 수 있으며 접근성 측면(WCAG)에서 충분한 대비를 주지 못한다는 단점이 있습니다.

### 숨김 처리했을때는,

* `장` 인지 부하를 낮출 수 있고, 단순함을 확보할 수 있다는 장점이 있지만
* `단` 계속 옵션이 나타났다 사라졌다를 반복하면 주의를 뺐어갈 수 있고, 발견 가능성이 낮다는 단점이 있습니다.

### ⛄️ Disabled 처리는 다음 경우에 사용하면 좋습니다:

* 해당 옵션이 일시적으로 사용되지 못하는 경우나 활성화를 위해서는 사용자의 행동이 필요한 경우. 이 때 툴팁 등으로 원인과 해야 할 액션에 대해 설명해주어야 합니다.
* 사용자에게 옵션이 존재함을 알리고 싶은 경우

### 🙈 숨김 처리는 다음 경우에 사용하면 좋습니다:

* 사용자에게 사용 권한이 없어 항상 사용하지 못하는 경우
* 활성화 상태로 제공되는 경우가 극히 드문 경우
* 한 페이지 내에 사용하지 못하는 옵션이 많은 경우

### 📝 노트

B2B 디자인을 하면서 대부분의 경우 Disabled 처리하는 편이 더 낫다고 느꼈습니다.

1. B2B 프로덕트는 인터랙티브한 모습이 아닌 정지한 모습에서도 사용자가 할 수 있는 행동과 그렇지 않은 행동이 명확하게 인지되어야 하기 때문입니다.
2. 또 여러 이해관계자가 서로 다른 화면으로 커뮤니케이션 했을 때 발생하는 비용을 최소화 하기 위해 권한이 없는 화면이나 옵션이 어디에 존재하는지 확인할 수 있어야 하기 때문입니다.