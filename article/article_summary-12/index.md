---
layout: post
type: 'Design'
title:  '[Slack] 슬랙이 API를 디자인 하는 방법'
subtitle: 번역 및 요약 👉 How We Design Our APIs at Slack
tags: [경험 공유, 실 사례, 일하는 방법]
date: 2021-08-30 14:30:00
article: true
is_list-img: true
list-img: 
post-header: false
draft: true
order: 12
---

슬랙이 API를 디자인하는 설계 원칙에 대한 이야기입니다. API를 디자인하는 일이지만 B2B 프로덕트를 설계하는 원칙이라고 해도 전혀 어색하지 않습니다.

1. 한가지 동작만 아주 잘 할 것
2. 빠르고 쉽게 사용할 수 있게 만들 것
3. 직관적인 일관성을 위해 노력하기
4. 의미있는 에러 리턴하기
5. 확장성과 성능을 고려한 설계
6. 호환성을 깨는 변경 피하기
예상 못한 상황들이 있을 수 있으니 ""Stay Flexible(유연성을 유지하기)""