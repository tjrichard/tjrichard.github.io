---
layout: post
type: "Design"
title:  "오류 메세지 문장 작성법 간단히 살펴보기"
subtitle: "번역 및 요약 👉 Error state stasis: a quick visit to the syntax of an error message"
tags: [아티클 요약, UX, UX Writing, Design]
date: 2020-09-08 22:37:45
article: true
is_list-img: true
list-img: "article_summary-2/img/error_message_example.png" 
post-header: false
order: 2
---

<p class="text-gray">
🔗 이 글은 Jason Fox가 <a href='https://uxdesign.cc/' target='blank' rel='nofollow' id='outlink1' onclick='clickedOutlink(outlink1)'><img src='https://www.google.com/s2/favicons?sz=64&domain=https://uxdesign.cc' style='display:inline; height: 1em; position: relative; bottom: -2px; margin-right: 2px;'>UX Collective</a>에 올린 <a href="https://abit.ly/article_16" target='blank' rel='nofollow' id='outlink2' onclick='clickedOutlink(outlink2)'>미디엄 글</a>을 번역, 요약한 글입니다.
</p>

### ⚡️요약

> 1. Constant Component에 제공되어야 할 정보를 작성하기
2. Dynamic Component에서 오류 상황의 컨텍스트를 더 잘 이해시킬 수 있도록 보강하기  
* 최소 요구 조건은 Constant Component이다. 잘 작성된 Constant Component만 있어도 유저의 오류 상황을 명확히 인지시키고 해결할 수 있다.
* Constant Component는 사용자가 취할 수 있는 액션 경로와 무엇이 왜 발생했는지 명시
* Dynamic Component는 오류 상황에 대한 

### 오류 메세지 작성을 위한 건축 블록

디지털 프로덕트를 만드는 과정에서 오류 메세지는 끊임없이 작성되어야 한다. 오류 메세지 작성의 핵심 건축 블록으로 오류 상황에서 제공되어야 할 정보를 경제적이고 사용자 중심적으로 디자인할 수 있다.

모든 오류 메세지는 두 가지 종류의 핵심 컴포넌트로 구분할 수 있다.

```
1. Constant Components
```

Constant Component는 필수 요소이다. 여기엔 사용자에게 어떤 일이 일어났고, 왜 일어났고, 어떻게 진행할 수 있는지에 대한 정보를 제공한다.

이 컴포넌트는 다음 정보를 포함할 수 있을 것이다:

- 사용자가 취할 수 있는 액션 경로 (Action path)
- 무엇/왜 를 설명하는 문장 (What/why statements)


```
2. Dynamic Components
```

이 컴포넌트는 오류 상황의 심각성, 원인, 다른 요소 등에 의해 조절될 오류 메세지의 톤을 조정하는 역할을 한다.

이 컴포넌트는 다음 정보를 포함할 수 있을 것이다:

- 초래된 결과 (Impact statements)
- 상황 확인/사과 (Acknowledgements/apologies)
- 다른 해결 방안 (Alternate resolution paths)
- 의례 어구 (Politeness markers)
- 담화 어구 (Discourse markers)

![Good Error message example 1](https://miro.medium.com/max/1400/1*xZlzjnNGRorReOSq3H_-Pg.png){:class="lazyload"}

![Good Error message example 2](https://miro.medium.com/max/1400/1*cnuSLNYWGBjAp0G0gm5M9A.png){:class="lazyload"}

### 오류 메세지 문장이 잘못된 경우

오류 메세지가 기본 구성에서 벗어나 있다면 사용자들은 오류 상황을 명확하게 인지하지 못하게 될 것이고, 그 오류 메세지는 곧 SNS에서 까이게 될 것이다.

![Bad Error message example 1](https://miro.medium.com/max/1400/1*iYDqQSuGT2Lku9tUMg6y7A.png){:class="lazyload"}

![Bad Error message example 2](https://miro.medium.com/max/1400/1*IGdrWARpuHYbnqWF_9xG-w.png){:class="lazyload"}

![Bad Error message example 3](https://miro.medium.com/max/1400/1*MIwPQ_SpUGDZ7_rr3iVvXg.png){:class="lazyload"}

### 이 문장을 활용하는 방법

- 오류 메세지를 작성할 때 Constant Component를 작성하는 것을 목표로 하기
- 오류 발생한 컨텍스트의 살을 붙이기 위해 Dynamic Component를 작성하기
- 어떤 종류의 오류 메세지들은 왜 제구실을 하지 못하는지에 대한 가설을 생각해보기
- 작성한 오류 메세지를 한 번 더 검수하기
- 깊게 파고들 수 없는 작은 프로젝트이더라도 매번 유용한 오류 메세지를 작성하는 패턴을 만들기