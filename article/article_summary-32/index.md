---
layout: post
type: 'Product'
title:  '데이터 분석 기본 지표: DAU, WAU, MAU, rolling metrics'
subtitle: 요약 👉 데이터 분석에 기본이 되는 지표
tags: [KPI, 데이터 분석, 마케팅, 웹 기본, 지표]
date: 2021-10-12 14:30:00
article: true
is_list-img: true
list-img: 'https://t1.daumcdn.net/brunch/service/user/GGz/image/ThJI02DXmDmViPzeKrSRnJJzXXo.png'
post-header: false
order: 32
---

<p class="text-gray">
 🔗 이 글은 Jinhee Park님이 <a href='https://brunch.co.kr/@hijinnyjinny/' target='blank' rel='nofollow' id='outlink1' onclick='clickedOutlink(outlink1)'><img src='https://www.google.com/s2/favicons?sz=64&domain=https://brunch.co.kr/' style='display:inline; height: 1em; position: relative; bottom: -2px; margin-right: 2px;'>브런치</a>에 올린 <a href='https://brunch.co.kr/@hijinnyjinny/17' target='blank' rel='nofollow' id='outlink2' onclick='clickedOutlink(outlink2)'>아티클</a>을 요약한 글입니다.
</p>

## ⚡️ 요약

### 기본적인 데이터 분석 지표: DAU, WAU, MAU, Rolling Metrics

마케터, PM이 가장 기본적으로 보는 프로덕트 데이터 지표로는 활성 사용자 수(Active Users)를 꼽을 수 있습니다. DAU(Daily Active Users), WAU(Weelky Active Users), MAU(Monthly Active Users)는 활성 사용자를 일 단위로 볼 것인지, 주 단위, 월 단위로 볼 것인지에 따라 나눠진 지표입니다.

DAU, WAU, MAU가 유의미한 지표가 되려면 어떤 사용자가 '**`활성 사용자(Active Users)`**'인 지를 **`먼저 프로덕트에 맞게 정의`**하는게 필요합니다.

DAU, WAU, MAU와 같은 지표는 특정 일자에 발생한 데이터를 그대로 보여주기 때문에 일자 별 발생할 수 있는 자연스러운 오차까지 그대로 나타내게 됩니다. '**`이동 평균(Rolling Metrics)`**'을 활용하여 이러한 오차를 줄일 수 있습니다. Rolling Metrics는 **N일 간 발생한 데이터를 평균한 값**이기 때문에 **더 넓은 시야에서 트렌드를 정확히 확인할 수 있도록** 도와줍니다.

→ 7일, 30일 등 사용자의 프로덕트 사용 패턴에 따라 적합한 기간을 설정해야 합니다.