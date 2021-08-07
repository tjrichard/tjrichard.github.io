---
layout: post
type: "Product"
title:  "모든 프로덕트는 북극성 지표가 필요하다. 우리 북극성 지표는 어떻게 찾을까?"
subtitle: "번역 및 요약 👉 Every Product Needs a North Star Metric: Here’s How to Find Yours"
tags: [아티클 요약, North Star Metric, 북극성 지표, KPI]
date: 2020-10-30 12:20:45
blog: true
is_list-img: false
list-img: "article_summary-4/img/what-is-north-star-metric.png" 
post-header: false
order: 6
---

<p class="text-gray">
🔗 이 글은 Sandhya Hegde가 <a href='https://amplitude.com/blog/' target='blank' rel='nofollow' id='outlink1' onclick='clickedOutlink(outlink1)'><img src='https://blog.amplitude.com/wp-content/uploads/2020/10/favicon-big.png' style='display:inline; height: 1em; position: relative; bottom: -2px;'> Amplitude Blog</a>에 올린 <a href='https://abit.ly/article_25' target='blank' rel='nofollow' id='outlink2' onclick='clickedOutlink(outlink2)'>아티클</a>을 번역, 요약한 글입니다.
</p>

### ⚡️요약

> - 북극성 지표는 프로덕트 팀이 목표로하는 고객의 문제와 비즈니스가 목표로하는 수익을 연결한다  
- 북극성 지표는 회사 내 조직들의 목표와 전략을 하나로 일치시키는 역할을 한다  
- 북극성 지표는 고객의 가치를 대변하는 `프로덕트의 비전` 과 고객의 가치를 측정할 수 있는 `프로덕트 전략에 대한 선행 지표` 로 나뉜다  
- 북극성 지표는 트리로 만들 수 있는데,  
  1. 북극성 지표를 `넓이, 깊이, 빈도, 효율성` 4가지 차원으로 구성하고  
  2. 각각의 차원을 개선할 수 있는 KPI를 설정하고  
  3. 각 KPI를 만족할 수 있는 전략을 구성하여 만들 수 있다  
- 또 각 회사는 `Attention`, `Transaction`, `Productivity` 게임 중 하나에서 플레이하는데, 각 게임 종류와 프로덕트의 비즈니스 구조에 따라 가져야 할 북극성 지표를 어느정도 방향을 잡을 수 있다

### Intro

프로덕트 북극성 지표는 오늘날 가장 강력하면서 사람들이 잘못 이해하고 있는 프로덕트 전략 프레임워크이다. 많은 프로덕트 팀이 북극성 지표를 수립하지 않거나 잘못 수립해 의도하지 않은 결과를 맞이하고 있다.

이 아티클은 북극성 지표에 대해 파고드는 시리즈 중 첫 번째다. 이 아티클이 프로덕트 리드와 매니저에게 이 지표가 왜 중요한지, 어떻게 정의하고 프로덕트 전략과 성장을 위해 어떻게 사용하는지 가이드가 되길 바란다. 이 아티클에서 다음에 대해 이야기한다:

- [⚡️요약](#️요약)
- [Intro](#intro)
- [북극성 지표는 무엇이며 왜 중요한가?](#북극성-지표는-무엇이며-왜-중요한가)
- [질문 1: 좋은 북극성 지표의 좋은 예](#질문-1-좋은-북극성-지표의-좋은-예)
- [질문 2: 회사에서 북극성 지표는 하나만 가져야 하는가?](#질문-2-회사에서-북극성-지표는-하나만-가져야-하는가)
- [질문 3: 좋은 북극성 지표를 선택하는 방법](#질문-3-좋은-북극성-지표를-선택하는-방법)
- [프로덕트 전략 운영에 북극성 지표를 사용하는 방법](#프로덕트-전략-운영에-북극성-지표를-사용하는-방법)

<div class="c-list">
    <div class="c-list__item">
        <a href="https://amplitude.com/north-star?utm_source=blog&utm_medium=onsite&utm_campaign=download-north-star-playbook" target="_blank" rel="nofollow" id='outlink3' onclick='clickedOutlink(outlink3)'>
            <div class="c-list__info" style="border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 3px;">
                <div class="c-list__type">
                ⭐️ The North Star Playbook
                </div>
                <div class="c-list__sub">
                📕 Playbook PDF 다운로드 >>
                </div>
                <div class="c-list__body">
                The North Star Playbook은 북극성 지표를 발견할 수 있도록 더 디테일한 가이드를 제공하고 있다
                </div>
            </div>
        </a>
    </div>
</div>

### 북극성 지표는 무엇이며 왜 중요한가?

북극성 지표는 프로덕트 팀의 성공을 측정하는 지표이다. 북극성 지표는 프로덕트 팀이 풀고자 하는 고객의 문제와 비즈니스가 목표로하는 수익의 관계를 정의한다.

![Relationship between Vision and Revenue](https://images.ctfassets.net/vrkkgjbn4fsk/oUxh6lTfLa28sEKyAUSuo/b233ce2534db23544414c48ff0956cc3/what-is-north-star-metric.png?q=90&w=1168)

따라서 어떤 회사든 세 가지 중요한 목적을 가진다.

- 프로덕트 팀이 어떤 것에 최적화 하거나 무엇을 트레이드 오프할 지 **명확하게(clarity)**하고 조직 내에서 **일치(alignment)**시킨다
- 프로덕트 조직의 **임팩트**와 **진행 과정**을 회사의 다른 조직에 전달하여 프로덕트 전략 계획을 가속하고 더 많은 지원을 받을 수 있도록 한다
- 가장 중요한 것은, **프로덕트의 결과에 대해 책임**을 질 수 있다는 것이다

많은 회사에서 프로덕트 팀은 비즈니스에서 얼마나 임팩트를 주고 있냐가 아닌, 그들이 얼마나 결과물을 전달하는지에 따라 평가받는다. 프로덕트에 임팩트 중심적인 문화가 없다면, 당신은 비즈니스의 운명에 영향을 줄 수 없다. 즉 북극성 지표가 없다면, [프로덕트 중심 회사](https://amplitude.com/blog/2017/10/04/thrive-product-led-era)가 될 수 없다는 말이다.

> 책임 없이는 리더십도 없다

다음은 프로덕트 전략이나 실행에 책임이 있는 사람이 프로덕트 북극성 지표에 대해 대답해야 할 세 질문이다.

### 질문 1: 좋은 북극성 지표의 좋은 예

북극성 지표는 두 가지 파트로 나뉘어져 있다.

1. 프로덕트의 비전에 대한 정의
2. 현재 프로덕트 전략을 측정할 수 있는 주요 지표

![Amplitude's Product North Star](https://images.ctfassets.net/vrkkgjbn4fsk/32oOmrJcmkUoQA8goGK2CW/8201f0905344fe35ee353eb8217dfcce/amplitude-b2b-north-star-metric-example-1024x401.png?q=90&w=2336)

<figcaption>Amplitude의 현재 프로덕트 북극성 지표</figcaption>

우리가 끌어내고 싶은 고객 가치는 `"무엇이 행동을 이끌어 내는지 더 쉽게 답변하고, 더 나은 고객 경험을 제공하는 것"`이다.

우리는 현재 빠른 성장 단계에 있기 때문에, 우리의 Weekly Quering Users (WQUs) 지표 - 예를 들어 최소 주 1회 이상 데이터를 조회한 고객 수 - 는 '넓이(breadth)'를 반영한다. 이 지표는 시간이 지남에 따라 사용자가 다시 방문하게 하고(Retain) 사용자를 확장할 수 있는 선행 지표이다.

#### 좋은 북극성 지표는 가치와 일치한다 <!-- omit in toc -->  

당신의 북극성 지표는 **고객이 인지하는 가치**를 제공하는 행동이 무엇인지에 대한 이해로부터 나와야 한다. 임팩트에 가장 가까워질 수 있도록 해야 한다. 이것은 "일간 활성 사용자 수 (Daily Active USers, DAU)"나 "등록 사용자 수 (Registered Users)"가 좋은 KPI가 아니라는 뜻이다. 만약 이 지표가 프로덕트의 KPI라면 팀에 명확성을 제공할 큰 기회를 날리고 있는 것이다.

팀이 고객 가치를 북극성 지표와 연결하지 못한다면, 비즈니스를 잘못된 길로 이끌게될 수 있다.

---

#### LinkedIn의 북극성 지표 예시 <!-- omit in toc -->  

LinkedIn의 데이터 사이언티스트는 ["추천 (endorsements)" 기능](https://blog.linkedin.com/2012/09/24/introducing-endorsements-give-kudos-with-just-one-click)에 대한 그들의 북극성 지표를 개선하는 것이 더 나은 프로덕트 경험을 제공하지 **않았다는** [멋진 케이스 스터디](http://papers.www2017.com.au.s3-website-ap-southeast-2.amazonaws.com/companion/p617.pdf)를 공유하였다. 그들의 지표 정의는 추천이 만들어지고/받아들여진 액션에 관한 것 이었고, 채용 담당자는 이러한 지지가 잘못된 정보를 제공하고 있을지 우려한다는 고객이 인지하는 가치를 대변하지 못해 LinkedIn의 비즈니스를 실제로 개선하지 못했다.

Reforge 또한 최근 프로덕트 지표를 제대로 설정하지 않았을 경우 [일반적으로 발생하는 위험](https://www.reforge.com/blog/north-star-metric-growth)에 대한 훌륭한 아티클을 개제하였다.

---

#### 좋은 북극성 지표는 성공에 대한 선행 지표이다 <!-- omit in toc -->  

> 프로덕트 북극성 지표는 프로덕트와 고객 가치가 무엇인지에 대해 상세해야 한다

이 지표의 중요한 부분은 미래 성공에 대한 선행 지표가 되어야 한다는 것이다. 월간 매출이나 ARPU(사용자 별 평균 매출, Average Revenue Per User)와 같은 후행 지표는 프로덕트 임팩트의 신호를 빠르게 줄 수 없다. 이러한 지표는 미래 수익에 대한 예측을 제공하는 것이 아니라 과거에 발생한 일에 대해 말해줄 뿐이다. 미래에 발생할 수익과 시장 가치가 더 늘어나도록 지표를 가져갈 수 있다면, 임팩트 또한 더 많이 가져갈 수 있다.

---

#### eCommerce 산업의 북극성 지표 예시 <!-- omit in toc -->  

Amplitude의 고객 중 하나인 Fourtune 100 리테일러는 회사의 미래에 모바일 커머스 비즈니스가 전략적으로 우선순위가 높다는 것을 발견해 이를 성장시키려고 하고 있다.

그 팀의 북극성 지표는 아마 <span style="color: #4139EF;">**"모바일 주문이 배송 완료된 수"** </span>일 것이다. 이 지표는 배송이 지불, 물류 문제, 반송 문제 없이 완료 되었다는 것이기 때문에 그들의 모바일 앱에서 주문하는 사람을 포착하고 (현재 전략이 집중하는 바), 좋은 경험을 한 사람(가치를 얻는 고객)을 포착한다.

---

프로덕트의 세계에서, 이것은 종종 "고객의 아하 모먼트"를 찾는 것으로 비유되곤 한다. 고객이 다시 돌아오는(리텐션) 초기 행동을 찾을 수 있다면, 강한 선행 지표가 되는 효과적인 북극성 지표를 가지게 되는 것이다.

> 북극성 지표는 미래 비즈니스 결과에 대한 선행 지표여야 한다

#### Facebook 북극성 지표 예시 <!-- omit in toc -->  

최근 Facebook은 "첫 10일 동안 7명의 친구를 등록한 사용자 수"를 주요 지표로 선정하고 있다는 것이 잘 알려져 있다. 이러한 주요 액션을 어떻게 발견하는지 궁금하다면 [다음 가이드 👉](https://help.amplitude.com/hc/en-us/articles/115001526027-How-to-Use-Compass-to-Find-Your-Company-s-Inflection-Metrics)를 확인해볼 수 있다.

---

#### B2B의 북극성 지표 예시 <!-- omit in toc -->  

만약 SaaS 회사가 Dropbox나 Hubspot과 같은 셀프 서브 비즈니스 모델을 가지고 있다면, 그들의 지표는 아마 "첫 주에 활성 사용자가 3명인 트라이얼 계정" 일 수 있다. 이 지표는 가치를 발견하고 있는 모든 신규 무료 계정을 포착하고, 트라이얼 전환과 구독으로 인한 매출이 발생할 것이라는 프로덕트 팀이 예측하고 활성화 할 수 있는 신호를 제공해준다.

Docusign의 전 프로덕트 리더이자 Social Capital의 파트너인 Ashley Carroll은 자신의 웨비나에서 더 나은 프로덕트를 만드는데 <span style="color: #4139EF;">**"non-revenue" 프로덕트 북극성 지표**</span>의 중요성을 이야기했다.

비슷하게, Instacart와 같이 빠르게 성장하는 회사들은 그들 프로덕트 북극성 지표를 종종 "주 별 첫 주문을 완료하는 사용자"와 같은 <span style="color: #4139EF;">**새로운 사용자 활성화(New user activation)**</span> 지표에 집중하기도 한다. 한 번 활성화 된 사용자가 유지된다는 것을 알기 때문에, 회사가 미래 수익에 대한 선행 지표에 집중할 수 있도록 해준다.

---

#### 요약하자면, 좋은 북극성 지표는 다음 세 가지 특징을 가진다: <!-- omit in toc -->  

![Three Good North Star Metric Attributes](https://images.ctfassets.net/vrkkgjbn4fsk/6xuFgiHMhq0sK0cGyKikWe/f88f0774f052ced056cea9494d7a79cc/attributes-good-north-star-metric.png?q=90&w=2336)

<figcaption>Three Good North Star Metric Attributes</figcaption>

1. 고객이 당신의 프로덕트에서 가치를 발견하는 순간을 측정한다
2. 현재 프로덕트 전략의 핵심을 대변한다
3. 회사가 중요하게 여기는 미래 비즈니스 결과물에 대한 선행(후행이 아닌) 지표이다

### 질문 2: 회사에서 북극성 지표는 하나만 가져야 하는가?

꼭 그런것은 아니다. "하나의 핵심 지표"라는 생각은 비즈니스 저변에서 커뮤니케이션을 단순화하는데 용이하지만 보통 충분하지 않다. 보통 규모가 큰 회사들은 복잡한 생태계를 가지고 있고 1-3개의 핵심 프로덕트 지표에서 최적의 균형을 찾기 위해 노력한다. 핵심 지표가 하나라면 무엇이 더 중요한지 알 수 없고, 중요한 트레이드 오프를 눈치채지 못할 수 있다.

거기에 더해, 지표는 각 프로덕트 팀의 목표와 지표를 도출하는데도 사용된다. 모든 팀은 프로덕트 조직의 북극성 지표를 발전시키는 그들만의 구체적인 목표를 만들어야 한다.

> 북극성 없는 KPI들은 그냥 지표 국밥이 되기 마련이다

예를 들어, Amplitude에서 우리의 프로덕트 북극성 지표는 주 별 Amplitude에서 한 번 이상 쿼리를 치는 사용자의 수이다. 우리는 이것을 주별 쿼리하는 사용자(Weekly Querying Users, WQUs) 라고 부른다. 거기에 더해, 우리는 이전에 백엔드 엔지니어링 팀이 가지고 있던 인프라의 퍼포먼스에 대한 지표도 가지고 있다.

모든 북극성 지표는 <span style="color: #4139EF;">**4가지 차원**</span> -  <span style="color: #4139EF;">**넓이, 깊이, 빈도, 효율성**</span> - 으로 쪼갤 수 있다. Amplitude의 핵심 지표는, 이 중 세 가지 차원을 높은 우선순위를 부여해 프로덕트 팀이 발전하는 데 쓰고 있다.

아래는 식료품 주문과 배달 앱에 대한 북극성 지표 트리 예시이다. 트리는 12개의 프로덕트 개선 계획을 북극성 지표의 각의 차원을 발전시킬 수 있는 하나의 프레임워크로 묶은 것이다.

![Example of 4 North Star Metric Dimensions for Grocery Delivery App](https://images.ctfassets.net/vrkkgjbn4fsk/1mEKe0EY6QIWICyokeiu2g/a4328e19435979a92118585463160bcd/north-star-metric-tree.png?q=90&w=2336)

<figcaption>Example of 4 North Star Metric Dimensions for Grocery Delivery App</figcaption>

### 질문 3: 좋은 북극성 지표를 선택하는 방법

이 아티클이 그 방법을 배우기에 딱 알맞은 곳입니다! 조직과 프로덕트 분야에 적합한 북극성 지표를 선택하는 데 가장 중요한 것은 당신이 어떤 게임을 하고 있는지 아는 것이다.이 게임은 핵심 고객 관여 모델에 대한 것이다. 11,000개가 넘는 회사와 3조가 넘는 사용자 액션을 분석한 결과, 모든 디지털 제품은 다음 세 종류 중 하나에 대한 게임을 하고 있다는 것을 알게 되었다.

1. <span style="color: #4139EF;">**관심 게임(Attention)**</span> : 프로덕트가 사용자의 시간을 얼마나 가져갈 수 있는가
2. <span style="color: #4139EF;">**트랜잭션 게임(Transaction)**</span> : 플랫폼 안에서 사용자가 상업적 트랜잭션을 얼마나 만드는가
3. <span style="color: #4139EF;">**생산성 게임(Productivity)**</span> : 프로덕트 내에서 사용자가 얼마나 고가치 디지털 업무를 수행할 수 있는가

![The 3 Games in Product](https://images.ctfassets.net/vrkkgjbn4fsk/46J74JVEBqSgEkQ0SeGKO0/baaf247a501c6a1cf74e1becd82cb92e/product-engagement-game.png?q=90&w=2336)

<figcaption>The 3 Games in Product</figcaption>

![Hypothetical North Star Example for each Game](https://images.ctfassets.net/vrkkgjbn4fsk/58AQcYMZfimWsQmK8QMyAe/c8740feb5c15f050c6e0623e725f6106/examples-hypothetical-north-star-metric.png?q=90&w=2336)

<figcaption>Hypothetical North Star Example for each Game</figcaption>

**Facebook**과 **Netflix**는 둘 다 관심 게임을 하고 있지만, 비즈니스 모델은 근본에서 부터 다르다. Facebook의 수익은 광고 수익을 창출하기 위한 피드 관여도와 비례한다.

반면 Netflix는 구독 모델을 가지고 있고 콘텐츠의 양이 정해져 있다(점점 많아지고 있지만). 이는 그들의 북극성 지표는 콘텐츠를 시청하는 시간이 아니라 구독자들의 수를 극대화 하는데 있어야 한다는 것을 의미한다.

유사하게 **Amazon Retail**과 **Walmart**는 동일한 트랜잭션 게임을 수행하지만 다른 북극성 지표를 가질 수 있다. Amazon은 그들의 구독 모델이 충성도와 LTV에 대한 가시성을 제공하기 때문에 아마존 프라임 구독자들의 수와 그들이 만들어 내는 가치를 최적화 하는데 있을 것이다. Walmart는 반대로 비용 우위를 가지기 때문에 고객이 방문할 때 마다 고객의 지갑 점유율에 집중할 것이다.

**Salesforce**는 B2B 회사들에게 고객 정보에 대한 Source of Truth 중심지 역할을 하고자 한다. 그들의 새로운 전략은 세일즈 시 의사결정을 위한 AI 와 관련되어 있다. 이것은 그들의 북극성 지표는 사용자 확보 보다는 그들 계정에 고객 데이터가 얼마나 저장되는가에 더 집중하고 있다는 것을 의미한다. 이런 모델과는 다르게, **Adobe Creative Cloud**는 개별 구독자와 그들이 구독을 유지하도록 충분한 인게이지먼트를 제공하는 것에 집중할 것이다.

### 프로덕트 전략 운영에 북극성 지표를 사용하는 방법

프로덕트 전략을 수행하는데 북극성 지표 프레임워크를 사용하는 것은 임팩트 중심 조직에게 필수적인 투자이다. 또 이것은 프로덕트 주도형 기업으로 가는 길이다.

![Product-led Company using the North Star Metric](https://images.ctfassets.net/vrkkgjbn4fsk/3hNgILdWYE2cYOkoEgI4My/22b0d5da4ac88610f3d8eff8450516d7/product-initiatives-north-star-metric-revenue.png?q=90&w=2336)

<figcaption>Product-led Company using the North Star Metric</figcaption>

이 시리즈에서 이후 이어지는 아티클들은 다음 질문들에 대한 답을 찾아볼 것이다.

- 북극성 지표를 도입하려면 어떤 **인프라와 문화**가 필요한가?
- **프로덕트 생애 주기**에 북극성 지표를 어떻게 최적화 하는가?
- 북극성 지표 트리를 **고객 여정**에 어떻게 매핑할 것인가?
- PM, 엔지니어링, 디자인과 같은 다른 프로덕트 조직에 위해 신뢰도와 **오너십**을 어떻게 제공하는가?

만약 사용자의 행동을 어떻게 분석하고 북극성 지표를 수행하는 방법을 더 배우고 싶다면 이를 시작하기 위한 [리소스들](https://amplitude.com/understand-user-behavior)도 있습니다!