---
layout: post
type: 'Design'
title:  '다국어 프로덕트에서 날짜 표기는 어떻게 해야 할까?'
subtitle: 번역 및 요약 👉 What's the best way to display dates to international users
tags: [UI 컴포넌트, UX Writing, 가이드, 국제화]
date: 2021-10-25 14:30:00
article: true
is_list-img: true
list-img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Date_format_by_country_NEW.svg/700px-Date_format_by_country_NEW.svg.png'
post-header: false
order: 40
---

<p class="text-gray">
 🔗 이 글은 uxdesign.cc가 <a href='https://uxdesign.cc/' target='blank' rel='nofollow' id='outlink1' onclick='clickedOutlink(outlink1)'><img src='https://www.google.com/s2/favicons?sz=64&domain=https://uxdesign.cc/' style='display:inline; height: 1em; position: relative; bottom: -2px; margin-right: 2px;'>미디엄</a>에 올린 <a href='https://uxdesign.cc/whats-the-best-way-to-display-dates-to-international-users-d2a1150d2444' target='blank' rel='nofollow' id='outlink2' onclick='clickedOutlink(outlink2)'>아티클</a>을 번역, 요약한 글입니다.
</p>

B2B SaaS 프로덕트는 글로벌로 진출하기 용이한 프로덕트입니다. SaaS에서 날짜는 자주 사용되는 컴포넌트인데, 국가 별로 날짜를 표기하는 법은 각자 상이합니다. 다국어 프로덕트에서 날짜는 어떤 방법으로 표기해야 할까요?

각 지역 별로 주로 사용하는 날짜 표기법은 다음과 같습니다.
* `년-월-일`(2021-10-25) :: 주로 동북아시아
* `일-월-년`(25-10-2021) :: 남미, 아시아, 오세아니아
* `월-일-년`(10-25-2021) :: 북미
이외에도 여러 방식을 혼용하는 지역도 많습니다.

이런 혼란을 방지하기 위해 만들어진 ISO 8601은 우리에게 익숙한 `YYYY-MM-DD` 방식으로 표기를 하도록 합니다.

하지만 ISO 방식으로 표시하는것이 항상 좋은 방식은 아닙니다. 컨텍스트에 맞는 유용한 정보 형태로 제공해야 할 것입니다.
* 각 국가에 적합한 포맷으로 제공하되, 레이블을 제공하고 필드를 구분해 인지를 돕고 오류를 방지할 수 있습니다
* 캘린더를 활용한 Date Picker를 제공해 사용자 구분 없이 인지를 쉽게 합니다
* 월과 일을 헷갈릴 수 있다면 월 이름을 제공하거나(Oct) 일에 요일(25 Mon)을 함께 제공하여 인지를 구분하고 오류를 방지할 수 있습니다.
* 다국적 팀에서 사용할 때는 기준이 필요하기 때문에 ISO 방식(YYYY-MM-DD)으로 표기하는것이 좋습니다
* 외부로 데이터를 가져가 활용하거나 테크니컬한 사용 케이스에서 역시 ISO 방식으로 표기하는것이 좋습니다.