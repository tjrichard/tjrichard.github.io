---
layout: post
type: 'Product'
title:  'B2B 프로덕트 코호트 분석 제대로 하기'
subtitle: 번역 및 요약 👉 B2B Cohort Analysis
tags: [리텐션, 프로덕트 분석]
date: 2021-11-24 14:30:00
article: true
is_list-img: true
list-img: 'https://miro.medium.com/max/1400/1*jGstfgw6uzE7-XGka4CJ8Q.png'
post-header: false
order: 60
---

<p class="text-gray">
 🔗 이 글은 Clement Kao님이 <a href='https://medium.com/product-manager-hq/' target='blank' rel='nofollow' id='outlink1' onclick='clickedOutlink(outlink1)'><img src='https://www.google.com/s2/favicons?sz=64&domain=https://medium.com/' style='display:inline; height: 1em; position: relative; bottom: -2px; margin-right: 2px;'>미디엄</a>에 올린 <a href='https://medium.com/product-manager-hq/b2b-cohort-analysis-cf85a13520c6' target='blank' rel='nofollow' id='outlink2' onclick='clickedOutlink(outlink2)'>아티클</a>을 번역, 요약한 글입니다.
</p>

B2B 프로덕트는 B2C 프로덕트와 가지는 성향이 달라 B2C 프로덕트를 분석하던 방식을 사용할 경우 잘못된 분석을 하게 될 가능성이 있습니다. B2C 프로덕트와 B2B 프로덕트 사용자들은 크게 두 가지 다른점을 가지고 있습니다.

1. **새로운 사용자가 계속해서 들어오지 않음**
  - B2B 프로덕트는 '도입 시기'가 정해져 있는 경우가 많고, 한 번에 많은 사용자가 들어오는 날이 정해져 있습니다.

2. **자주 사용하지 않음**
  - B2C 프로덕트처럼 매일 일정하게 사용하기 보다는 워크플로우의 특징에 따라 사용하는 빈도와 주기가 정해져 있습니다.

<p class="text-gray">(여기서부터는 원 글의 이미지와 함께 보시면 더 좋습니다)</p>

ABC 회사는 1월 첫 주에 많은 사용자가 들어왔고, 각 주별 코호트는 거의 동일한 양상을 보입니다.
XYZ 회사는 2월 마지막 주에 많은 사용자가 들어왔고, 역시 각 주별 코호트는 거의 동일한 양상을 보입니다. ABC 보다는 리텐션율이 떨어집니다.

하지만 이 두 회사를 합쳐서 확인했을 땐 1월 첫 주 코호트의 리텐션은 높고, 2월 마지막 주 코호트의 리텐션은 낮다는 분석 결과가 도출됩니다. 또, 일자별 리텐션을 확인했을 땐 모든 코호트가 동일한 양상을 보이기 때문에 코호트별 특징을 발견할 수 없습니다. 만약 두 회사가 어떤 특징으로 프로덕트를 사용하고 있는지 알지 못했다면 잘못된 분석을 바탕으로 의사결정 했을지도 모릅니다.

### 💡  B2B 프로덕트에서 실제 인사이트를 발견할 수 있는 코호트 분석 방식은 다음과 같습니다.

* **고객 특징으로 분류** (회사 규모, 비즈니스 모델, 플랜)
  - 내 프로덕트가 어떤 사이즈의 고객에게 더 잘 먹히는지 발견해 로드맵 우선순위를 정하는데 도움이 될 수 있습니다.
  - 내 프로덕트가 목표로한 시장에 잘 먹히는지 확인해 PMF를 달성하는지 확인할 수 있습니다.
  - 내 프로덕트를 구매한 사용자가 어떤 행동양상을 보이는지 확인할 수 있습니다.
* **사용자 역할으로 분류**
  - 각 사용자는 본인의 역할에 따라 서로다른 업무적 니즈를 프로덕트를 통해 해결하고 있습니다. 프로덕트의 변경사항이 각 사용자에게 어떤 역할을 미치는지 발견할 수 있습니다.
  - 프로덕트의 개선은 결국 한 역할을 강화하고, 다른 역할에 영향이 갈 수 밖에 없습니다. 사용자 역할에 따른 코호트 분석으로 이 Tradeoff를 감수할만 한 지 결정할 수 있습니다.

### ⭐️  B2B 코호트를 시간 단위로 더 잘 분석할 수 있는 방법은 다음과 같습니다.
* **더 큰 시간 단위로 자르기** (월 단위 이상)
  - 사용자 행태에 따른 노이즈를 감소시킬 수 있습니다.
* **중요한 이벤트와 자르는 시간을 일치시키기**
  - '날짜'는 얼마나 오래 사용자가 프로덕트를 사용했는지 알려주지 않습니다.
  - 출시일, 도입일, 캠페인 집행일 등 중요한 이벤트로부터 얼마동안 프로덕트를 사용했는지를 알 수 있습니다.