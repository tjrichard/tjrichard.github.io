---
layout: post
type: 'Growth'
title:  '점진적 공개'
subtitle: 번역 및 요약 👉 Progressive Disclosure
tags: [프로덕트 전략, 디자인, 프레임워크]
date: 2021-10-05 14:30:00
article: true
is_list-img: true
list-img: 
post-header: false
order: 27
---

<p class="text-gray">
 🔗 이 글은 Jakob Nielson님이 <a href='https://www.nngroup.com/' target='blank' rel='nofollow' id='outlink1' onclick='clickedOutlink(outlink1)'><img src='https://www.google.com/s2/favicons?sz=64&domain=https://www.nngroup.com/' style='display:inline; height: 1em; position: relative; bottom: -2px; margin-right: 2px;'>NN Group 블로그</a>에 올린 <a href='https://www.nngroup.com/articles/progressive-disclosure/' target='blank' rel='nofollow' id='outlink2' onclick='clickedOutlink(outlink2)'>아티클</a>을 번역, 요약한 글입니다.
</p>

## ⚡️ 요약

🤔 사용자는 모든 요구사항을 처리할 수 있는 강력한 기능과 통제감을 원하기도 하지만 현재 요구사항에 가장 적합한 몇 가지만 볼 수 있고 추가적으로 학습하지 않아도 알 수 있는 단순함을 동시에 원하기 때문에 복잡한 프로덕트를 디자인 하는 우리는 종종 딜레마에 직면하게 됩니다.

### 💎 점진적 공개

이 때 사용되는 **'`점진적 공개(Progressive Disclosure)`'**는 고급 기능이나 거의 사용되지 않는 기능을 숨겨둠으로써 핵심 기능을 더 쉽게 배우게 하고 오류 발생을 줄이기 위해 사용되는 방법입니다. 위와같은 상충되는 요구사항을 충족하기 위해 처음엔 가장 중요한 몇 가지 옵션만 제공하고, 사용자가 요청하는 경우에 더 많은 전문 옵션을 제공할 수 있습니다.

### ⚙️ 점진적 공개의 장점

점진적 공개는 사용성의 구성 요소 5가지 중 **1️⃣ 학습 용이성**, **2️⃣ 효율성**, **3️⃣ 오류 방지** 3가지 항목을 개선할 수 있습니다. 사용자는 가장 초기에 제공되는 기능이 가장 중요하고, 메인 태스크를 수행하는데 사용되는 것을 인지할 수 있습니다.

* **`초보 사용자`**는 기본적인 유용한 기능에 집중해 쉽게 학습할 수 있고, 고급 기능의 잘못된 사용으로 인한 오류를 방지할 수 있습니다.
* **`고급 사용자`**는 현재 과업에서 필요 없는 기능을 쉽게 스캔할 수도 있습니다.

### 🚧 점진적 공개를 위해 해야할 일

1. 초기 핵심 기능과 보조 고급 기능을 명확히 분리해야 하고
2. 초기 핵심 기능에서 보조 고급 기능으로 진입하는 플로우를 명확하게 제공해야 합니다.

이는 사용 빈도나 사용 사나리오 관찰으로 구분할 수 있습니다.

## 🍢 '단계적 공개'도 고려하기

점진적 공개와 더불어 함께 고려할 수 있는 개념은 `단계적 공개`입니다.

* **`점진적 공개`**는 기능 간 네비게이션이 계층적이고, 고급 기능은 필요시에만 접근할 수 있는 경우 사용이 유리합니다.
* **`단계적 공개`**는 네비게이션이 선형적이고 사용자가 한 번에 한 단계씩 태스크를 수행하는 경우 사용이 유리합니다. 각 단계가 가지는 목적이 명확하고 단계 별 상호작용이 거의 없는 경우에 유용합니다. 만약 각 단계가 상호 의존적이면 사용성 문제를 야기할 수도 있습니다. 또, 작업 단계가 많으면 사용자가 과도한 탐색을 해야하는 단점도 있을 수 있습니다.

두 가지 방식의 장단점을 고려해 적절한 UX, UI를 제공 해야겠습니다.
