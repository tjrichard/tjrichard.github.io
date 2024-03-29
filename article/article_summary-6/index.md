---
layout: post
type: "Product"
title:  "프로덕트에 맞는 지표 발견하기"
subtitle: "번역 및 요약 👉 Product Metrcs That Matter"
tags: [아티클 요약, 프로덕트 지표, 프로덕트 개선, 프로덕트 관리]
date: 2021-06-27 17:39:45
article: true
is_list-img: true
list-img: "article_summary-6/img/product_management_after_product_metrics.png" 
post-header: false
order: 6
---

<p class="text-gray">
🔗 이 글은 Claudia Delago가 본인의 <a href='https://claudiatd.medium.com/' target='blank' rel='nofollow' id='outlink1' onclick='clickedOutlink(outlink1)'><img src='https://miro.medium.com/fit/c/120/120/1*sHhtYhaCe2Uc3IU0IgKwIQ.png' style='display:inline; height: 1em; position: relative; bottom: -2px; margin-right: 2px;'>미디엄 블로그</a>에 올린 <a href='https://abit.ly/article_43' target='blank' rel='nofollow' id='outlink2' onclick='clickedOutlink(outlink2)'>아티클</a>을 번역, 요약한 글입니다.
</p>

> 프로덕트 관리를 위해 프로덕트 선행 지표는 반드시 필요합니다. 이 때 프로덕트 지표는 모든 것을 측정하려 해서는 안되고, 프로덕트를 더 나은 방향으로 만들기 위한 의사결정이나 액션을 할 수 있는 지표 중에서 선택해야 합니다.
> 
> **AARRR**, **HEART**, **북극성 지표** 세 종류를 적절히 혼합해 프로덕트 지표의 예시를 만들고 이에 대해 설명 합니다. 아래는 사용자의 각 단계 별 성공을 측정하기 위해 만든 프로덕트 지표의 예시입니다.
> 
> 본인의 프로덕트에 맞는 지표를 설정하는 것은 정해져 있는것이 아니라 항상 변화해야 합니다. 아래 예시에서도 본인의 프로덕트와 잘 맞는 부분은 프로덕트 별로 다 다를 것입니다. 프로덕트 지표를 선택하는 것은  가장 임팩트가 큰 것부터 집중하되, 필요하다면 각 단계를 더 심층적으로 들어가 살필 수도 있습니다. 프로덕트 지표를 선정하는 것은 프로덕트가 사용자의 어떤 단계와 상호작용 하는지, 프로덕트의 비즈니스 목표가 어떤지, 처음 수집하고 있던 데이터 셋에서 더 변화해나갈 부분은 있는지 등을 고려해서 계속해서 반복 개선해야 합니다.

> - 획득(Acquisition)
>   - 획득률 (Acqusition Rate)
>   - 소스 별 획득률 (Acquisition by Source)
> - 활성화/참여 (Activation/Adoption)
>     - 활성화 비율 (Activation Rate)
>     - 사용률 (Adoption Rate)
>     - 최초 사용률 (First Time Rate)
>     - 최초 사용까지 소요된 시간 (Time to First Action)
> - 참여 (Engagement)
>     - 활성 사용자 (Active User)
>     - 행동 다 사용자 수 (Users per Action)
>     - 사용자 별 행동 수 (Actions per User)
>     - 행동 간 걸린 시간 (Time Between Actions)
> - 작업 완료 (Task Success)
>     - 성공률 (Success Rate)
>     - 행동에 걸린 시간 (Time on Action)
>     - 낭비 (Lostness)
> - 행복감 (Hapiness)
>     - 추천율 (Referral Rate)
>     - 만족률 (Satisfaction Rate)
>     - 만족 점수 (Satisfaction Score)
> - 리텐션 (Retention)
>     - 리텐션율 (Retention Rate)
>         - <i>리텐션율을 볼 수도 있고, 반대 개념인 이탈율을 볼 수도 있다</i>
>     - 사용 시간 (Retained Time)
>     - 업그레이드율 (Upgrade Rate)
> - 수익
>     - 사용자 당 수익 (Revenue per User)

---

## Intro

'지표'가 들어오고 나서부터 프로덕트 관리는 근본적으로 바뀌어버렸다.
![Product Management after Product Metrics](https://miro.medium.com/max/1648/1*G4srRM5VkRgGyCDLQmeNkQ.png){:class="lazyload"}

<figcaption>Product Management after Product Metrics</figcaption>

프로덕트 지표가 있기 이전에는 우린 눈을 가린채로 사격하고 있는것과 다름 없었다. 우리는 그저 경기가 끝나고 사격 결과가 어떤지 정도만 이해했을 뿐이다. 피드백과 학습의 루프는 너무나도 오래 걸렸다.

최초 우리는 비즈니스 지표에 주로 의존하고 있었다. 예를 들어 '수익' 이라는 지표를 생각 해보자. 수익은 후행 지표이다. 사용자 인게이지먼트의 감소가 수익에 반영되어 수익이 줄어들기 까지는 몇 달이 걸릴 수도 있다. 하지만 수익은 우리의 유일한 가시적인 지표였기 때문에 우리는 수익이 줄어든 후에나 반응할 수 밖에 없었다.

그 후로, 연결된 디바이스들은 전례없이 많은 데이터들을 쏟아내기 시작했고, 분석 툴에도 가시적인 개선이 있었다. 그 결과로 프로덕트 지표가 빠르게 확립되었다. 이제 우리는 거시적인 관점에서 사용자 행동을 이해할 수 있고 사용자 인게이지먼트가 감소하기 수 개월 전에 미리 대응할 수도 있다. 이제 우리는 사격의 결과를 바로 알 수 있게 되어서 즉시 그 결과에 적응할 수 있게 되었다.

프로덕트 지표는 프로덕트의 진행률을 측정하고 결과 지향적인 방식으로 얼라인을 맞출 수 있게 한다. 프로덕트 지표는 우리가 Data Informed, Data Inspired 되도록 하였고 실험을 하고자 하는 의욕을 고취시켰다. 이제 프로덕트 지표를 쓰지 않는다면 뒤쳐지게 되었다. 프로덕트 지표를 쓰지 않으면 사용자에 대해 이해도 덜 할 것이고, 불필요한 리스크도 지게 될 것이고, 똑똑하게 보단 열심히 일하게 될 것이고, 우리가 한 일이 발생시킬 효과에 대해서도 이해하기 힘들어질 것이다.

이제는 프로덕트 지표 없이는 살 수 없는 몸이 되었다..

## 무엇을 측정할 것인가?

이제 우리는 이벤트(우리 프로덕트에서 수행한 행동)를 트래킹 하고 프로퍼티(이벤트나 사용자에 관한 추가적인 정보)를 수집함으로써 우리의 사용자가 어떤 행동을 하는지 너무나도 쉽게 알 수 있게 되었다. 이 상황에서 드는 첫 번째 생각은 모든 것을 측정하자! 일 것이다. 이를 위해 아마 대시보드도 만들 것이고, 대시보드에는 숫자가 반짝이고 있을 것이다. 우리는 해냈고, 이정도로 밀도 있는 데이터를 다루고 있는 것에 나는 굉장히 중요한 일을 하고 있다고 생각하게 될 것이다.

![Don't measure everything](https://miro.medium.com/max/2400/1*ElzBBKD90of7LAC9-eWCtA.png){:class="lazyload"}

<figcaption>Don't measure everything</figcaption>

하지만, 우리가 할 일은 모든 것을 측정하는게 아니다. 우리가 해야할 일은 우리의 프로덕트를 더 나은 방향으로 만드는 것이다. 비즈니스적으로 실행 가능한 방식으로 우리 고객들에게 어떤 가치를 창출하는 것이다. 모든 프로덕트 지표 대시보드는 이를 실행하게 할 내부 도구일 뿐이다. 우리는 우리와, 우리와 함께 일하는 모든 사람들이 더 쉽고 더 가치있는 방식으로 이용할 수 있도록 만들어야 한다. 만약 우리가 모든 것에 대해 보고하기 시작하면, 모든 것이 노이즈가 될 뿐이다.

이 때문에 우리는 KPI(Key Performance Indicators), KEI(Key Experience Indicators)와 같이 주요 지표를 정의할 필요가 있다. 이 숫자들은 허영심이 만들어낸 숫자가 아니라, 우리가 의사결정하고 액션하는데 도움을 주는 작은 데이터 셋이다.

측정해야 하는 주요 항목들이 어떤 것들이 있는지 알려주는 여러 프레임워크들이 있다. 그 중에서 내가 가장 좋아하는 것들을 요약해보았다.

**[☠️ 해적 지표](https://www.youtube.com/watch?v=irjgfW0BIrw)** 혹은 해적 언어로는 **AARRR**. 이 프레임워크는 제품 단계를 각 사용자 라이프사이클에 따라 측정하는 방식을 제안한다.

![AARRR Framework](https://miro.medium.com/max/2400/1*9DlKcu8diC38xNR35oPmYA.png){:class="lazyload"}

<figcaption>AARRR Framework</figcaption>

**[❤️ HEART](https://library.gv.com/how-to-choose-the-right-ux-metrics-for-your-product-5f46359ab5be)**. 이 프레임워크는 사용자가 프로덕트와 어떻게 상호작용 하고 얼마나 만족하는지를 알아보기 위해 만들어졌다.

![HEART Framework](https://miro.medium.com/max/2400/1*y-ONePPGFZ1E0Sy-DP-mAQ.png){:class="lazyload"}

<figcaption>HEART Framework</figcaption>

**[⭐️ 북극성 지표](https://blog.growthhackers.com/what-is-a-north-star-metric-b31a8512923f)**. 이 프레임워크는 좀 더 급진적이고, 모든 프로덕트 노이즈를 가장 중요한 지표를 위해 제거해야 한다고 본다. 이 때 가장 중요한 지표는 장기적인 비즈니스 결과와 사용자에게 제공되는 핵심 가치의 관계를 가장 잘 나타내는 선행 지표를 말한다. 하지만 이 프레임워크도 북극성 지표에 가장 직접적인 영향을 주는 3에서 5개 보완적 지표를 포함하고 있다.

![North Star Framework](https://miro.medium.com/max/2400/1*OO76SNnTgQIQkWAgqMQ-3A.png){:class="lazyload"}

<figcaption>North Star Framework</figcaption>

측정해야 하는 주요 항목은 프로덕트에 따라 다르다. 그럼에도 불구하고, 우리는 이 세가지 프레임워크나 다른 적절하다고 생각되는 프레임워크에서 발견한 인사이트를 사용할 수 있다(그리고 사용 해야한다).

## 더 자세히 보기

더 자세히 보기 위해, 나는 일반적인 프로덕트가 가질법 한 표준 지표를 몇 가지 작성해보았다. ☠️ 해적 지표와 ❤️ HEART 지표가 말하는 영역을 늘어놓고, 여기서 주요한 항목들을 ⭐️ 북극성과 같이 트리 구조에 배치해보았다. 여기서 어떤 지표들은 다른 지표들보다 더 잘 발견될 수 있는데, 좋은 현상이다. 분석 대시보드는 가장 임팩트가 큰 것부터 집중하되, 필요할 때는 더 심층적으로 들어갈 수 있다.

![Tree-shaped Product Metric Structure](https://miro.medium.com/max/3848/1*WbcS7-VIH7OITvu5x4vcpQ.png){:class="lazyload"}

<figcaption>Tree-shaped Product Metric Structure</figcaption>

그럼 각 지표들을 더 심층적으로 살펴보도록 하자.

## Acquisition (획득)

획득 단계가 성공적인지 트래킹하기 위해 우리는 새로운 사용자들이 누구인지와 그들이 어떻게 프로덕트를 발견했는지에 대한 지표가 필요하다. 프로덕트 관리 관점에서 획득 지표는 우리가 마케팅 팀과 얼마나 잘 커뮤니케이션 하는지와 우리의 프로덕트가 타겟 사용자들에게 설득력 있는지를 알려준다.

![Acquisition](https://miro.medium.com/max/2400/1*JykEdoELxEE7-gEwovWprA.png){:class="lazyload"}

<figcaption>Acqusition</figcaption>

- **획득률**은 신규 사용자가 기존 사용자 대비한 양을 의미한다
- **소스 별 획득**은 신규 사용자 유치를 위한 각 소스 별 마케팅 전략의 효과를 측정한다

## Activation / Adoption (활성화 / 사용)

활성화와 사용 단계가 성공적인지 트래킹하기 위해 우리는 사용자가 프로덕트나 특정 기능과 얼마나 빨리 상호작용을 시작하는지 알려주는 지표가 필요하다. 여기에서는 신규 사용자에만 집중해야 한다(참여(Engagement) 단계와 반대).

이러한 지표들은 우리가 만든 것이 성공할 수 있을지를 파악하는데 많은 도움이 된다. 사람들이 처음 시도해보는 어떤 것을 빠르게 시도해 본다는 것은 그것이 해결하려고 하는 문제에 대해 신경쓰고 있다는 의미인 것이다.

![Activation / Adoption](https://miro.medium.com/max/2400/1*D4MiHQamtSYrnDgem0Q_HQ.png){:class="lazyload"}

<figcaption>Activation / Adoption</figcaption>

- **활성화 비율**은 가입한 사용자 중 얼마나 많은 사용자가 상호작용을 시작했는지를 측정하고 이를 활성 사용자로 변환해서 측정할 수 있다.  
⚠️ 이 때 우리는 상호작용을 시작한다는 것이 어떤 것인지를 정의해야 한다. 이 경우, 핵심 행동을 처음으로 시작하는 때 혹은 어떤 여러 행동을 연속적으로 수행할 때를 의미한다. 하지만 프로덕트의 성질에 맞게 각자가 정의해야 하는 부분이다.
- **사용률**은 얼마나 많은 사용자가 특정 행동을 하거나 어떤 기능과 상호작용 하는지를 측정한다.
- **최초 사용률**은 얼마나 많은 사용자가 처음으로 특정 행동을 하거나 어떤 기능과 상호작용을 하는지 이해하는 것이다.
- **최초 사용까지 소요된 시간**은 사용자들이 얼마나 빠른 시간 내에 특정 행동을 하거나 어떤 기능과 상호작용을 하는지를 아는 것이다.

## Engagmenet(참여)

참여 단계가 성공적인지 트래킹 하기 위해 우리는 사용자가 프로덕트나 어떤 기능과 얼마나 자주 상호작용 하는지를 알려주는 지표가 필요하다. 이런 지표는 편파적이지 않아야 하고 사용자의 행동에 관한 내용이어야 하며 따라서 믿을 수 있고, 유효해야 한다.

참여 단계에서는 전체를 아우르는 것을 측정하는 것 보다 구체적인 것을 측정하는 것이 필요하다. 또 모든 것을 측정할 수 없으므로, 중요한 것 부터 측정해야 한다. 특정 경험을 선택할 때, 우리는 핵심이 무엇인지를 생각해야 한다. 사용자가 우리 프로덕트를 왜 사용하는지, 그리고 어떤 사용자의 행동이 우리 프로덕트를 사용하는 핵심 행동이라고 할 수 있는지 생각해야 한다. 아마존의 경우 구매 행동이, 에어비엔비의 경우 예약 행동이, 왓츠앱의 경우 메세지를 보내는 행동이 핵심 행동이다.

⭐ 사용자가 핵심 행동에 참여하는것은 비즈니스적으로 매우 중요하기 때문에 대부분의 프로덕트 관리 팀에서 북극성 지표와 연관관계를 찾는다. 사용자가 프로덕트와 더 많이 상호작용 할 수록, 그들이 리텐션될 확률이 높고, 이는 곧 수익을 낼 확률이 더 높은 것으로 이어진다. 모든 게임에서 선행 지표이다. 사용자들이 행동하지 않으면 모든 것이 무너지기 마련이다.

![Engagement](https://miro.medium.com/max/2400/1*nBEsztZCHWXSulgrkBJdWw.png){:class="lazyload"}

<figcaption>Engagement</figcaption>

- **활성 사용자(Active Users)**는 프로덕트 내에서 얼마나 많은 사용자가 활성 상태였는지를 의미한다.
⚠️ 이 때 우리는 활성 상태가 어떤 것인지를 정의해야 한다. 이 경우, 핵심 행동을 한번 이상 수행한 것을 의미한다. 하지만 프로덕트의 성질에 맞게 각자가 정의해야 하는 부분이다.
- **행동 당 사용자 수(Users per Action)**는 얼마나 많은 사용자가 특정 기능을 사용하거나 특정 행동을 수행하는지를 의미한다.  
ℹ️ 위에서 핵심 행동을 수행한 활성 사용자 수를 활성 사용자라고 가정했기 때문에, 핵심 행동 당 사용자 수는 프로덕트 전체의 활성 사용자 수와 동일할 것이다.
- **사용자 별 행동 수(Actions per User)**와 **행동 간 걸린 시간(Time Between Actions)**은 사용자가 어떤 행동을 얼마나 자주 하는지와 그 사용 행동에 걸리는 시간을 측정하는 것이다.

## Task Success(작업 완료)

작업 혹은 행동이 성공적인지 트래킹 하기 위해, 우리는 사용자가 해당 행동을 하기가 얼마나 용이한지를 알 수 있는 지표가 필요하다. 바로 사용성이다.

![Task Success](https://miro.medium.com/max/2400/1*nZx5_xkUGZpBIe8dITRlUg.png){:class="lazyload"}

<figcaption>Task Success</figcaption>

- **성공률(Success Rate)**은 의도한 최종 상태에 도달하기까지 걸린 행동의 수를 측정한다. 이를 통해 효과를 측정할 수 있다.
- **행동에 걸린 시간(Time on Action)**과 **낭비(Lostness)**는 행동을 얼마나 빠르게 수행할 수 있는지를 알고, 사용자가 행동을 수행하다 길을 잃었는지에 대해 이해할 수 있다. 이를 통해 효율을 측정할 수 있다.  
⚠️ 사용자가 어떤 행동을 할 때 우리는 그들이 어떤 생각으로 행동하는지 알 수 없기 때문에 이런 지표들의 숫자만으로는 인사이트를 얻기 힘들다. 예를 들어 행동에 걸린 시간이 길었을 때, 사용자는 화장실에 다녀왔거나 전화를 하고 왔을수도 있다. 그럼에도 불구하고 우리는 이 수치들이 갑자기 나빠졌을 때는 문제를 파악해야 할 타이밍임을 알 수 있고, 이 수치들이 좋아졌을 때 개선 사항들이 효과가 있었는지를 알 수 있다.  
💡 좀 더 정확성을 확보하기 위해, 우리가 사용자에게 과제를 제공해 동기를 유도할 수 있는 환경을 만들어볼 수 있다. 이를 통해 우리는 사용자가 어떤 동기로 행동하는지 미리 알 수 있다.

## Happiness(행복감)

사용자들의 행복감을 측정하려면, 우리는 추천(Referral)과 만족도(Satisfaction)을 확인할 수 있다. 추천을 트래킹 하기 위해서는 사용자가 프로덕트를 얼마나 자주 추천하는지 알려주는 지표가 필요하다. 만족도를 측정하기 위해서는 사용자가 얼마나 만족하는지(~~ㅋㅋㅋ~~) 알려주는 지표가 필요하다.

이런 지표들은 측정하기 흥미로우면서도 까다로운 지표이다. 이 지표들은 사용자가 스스로 알릴 수 밖에 없으며, 감정과 편견이 끼어들 수 있다. 하지만 행동 지표와 결합한다면 유의미한 인사이트를 제공할 수 있다.

![Happiness](https://miro.medium.com/max/2400/1*oaz5dRoGflCN7JxIOy1EVg.png){:class="lazyload"}

<figcaption>Happines</figcaption>

- **추천율(Referral Rate)**은 사용자가 프로덕트를 추천할만큼 만족하는지를 알 수 있다.
⚠️ NPS(순 추천 고객 지수, Net Promoter Score)는 추천율을 측정하는 가장 잘 알려진 지표이다. "친구나 동료에게 이 프로덕트를 추천할 의향이 있습니까? 1-10 중에서 답변해주세요" 라고 물어보는 것인데, 이는 실제 행동을 측정하는게 아니라 의향을 측정하는것이기 때문에 이 지표를 사용하는 사람들은 많지 않다.  
💡 [사용자와 의사소통하는 규칙 중 하나는 그들의 경험에 대해 물어보는 것이다](https://bootcamp.uxdesign.cc/talk-with-your-customer-6e8ff84f98d8). 우리는 NPS 질문 대신에 이렇게 물어볼 수 있다. "최근 2주 간 이 프로덕트를 누군가에게 추천한 적이 있습니까?" 이렇게. 더 나은 방법으로는 사용자에게 누군가에게 추천할 수 있는 아주 쉬운 방법을 제시하고, 얼마나 많은 사람들이 추천 행동을 수행하는지 트래킹 하는 방법이 있다.
- **만족률(Satisfaction Rate)** 및 **만족 점수(Satisfaction Score)**는 얼마나 많은 사용자가 만족스럽다고 표현할 만큼 만족했는지와 대다수 사용자가 만족한 정도를 측정한다.  
⚠️ 만족도를 측정할 때는 맥락을 고려해야 한다. 실험을 진행한 1주 이후에 설문을 수행한다면 사용자들의 인지가 이미 변질되었을 것이기 때문에 사용자들의 답변을 신뢰하기가 어려울 것이다.  
💡 화상 전화 서비스에서 품질에 대한 평가를 제공하는 것 같이 어떤 행동의 마지막 단계에 간단한 평가 시스템을 제공할 수도 있다.

## Retention(리텐션)

리텐션 단계의 성공을 측정하기 위해, 프로덕트나 특정 기능을 사용자가 얼마나 오래 사용하는지에 대한 지표가 필요하다. 이 지표로 우리는 사용자들이 어떤 것을 중시하는지, 왜 사용자들이 떠나는지를 파악할 수 있다. 사용자의 리텐션은 매우 중요하다. 새로운 사용자를 유치하는 것 보다 기존 사용자를 유지시키는 것이 훨씬 더 쉽기 때문이다.

![Retention](https://miro.medium.com/max/2400/1*hmOu2TykzPX1b7FpiRAAoA.png){:class="lazyload"}

<figcaption>Retention</figcaption>

- **리텐션율(Retention Rate)**은 얼마나 많은 사용자가 계속 프로덕트를 사용하는지를 측정한다.
⚠️ 프로덕트를 사용하는것이 어떤 의미인지 먼저 정의해야 한다. 예를 들어 로그인 하는것, 핵심 행동을 수행하는 것, 구독 상태를 유지하는 것 등이 있다. 하지만 프로덕트의 성질에 맞게 각자가 정의해야 하는 부분이다.
- **사용 시간(Retained Time)**은 사용자가 우리 프로덕트를 얼마나 오래 사용하는지에 대한 시간이다. 우리는 이 시간을 늘리기 위해 노력해야 할 것이다.
- **업그레이드율(Upgrade Rate)**은 프로덕트의 사용 티어가 나뉘어져 있을 때, 사용자가 언제 업그레이드를 결심하는지 그 시기를 파악하는 것이다.

ℹ️ 일부 팀은 리텐션(Retention) 대신에 이탈(Churn)을 측정한다. 최종적인 목표는 같지만 절반이 찬 물잔을 바라보는 관점과도 같다. 나의 경우는 물이 반 차있다고 보는 사람이다.

## Revenue(수익)

수익은 사용자가 얼마나 지불하고 있는지, 혹은 우리 프로덕트로 얼마나 돈을 벌고 있는지를 나타낸다. 따라서 비즈니스가 지속 가능하고 건전한 상태를 유지하면서 기존 고객으로부터 수익을 증대시킬 수 있는 다양한 가격 전략을 테스트 해보는 것이 중요하다.

![Revenue](https://miro.medium.com/max/2400/1*Zwy6eztwuIme5jDQoyhx-w.png){:class="lazyload"}

<figcaption>Revenue</figcaption>

- **사용자 당 수익(Revenue per User)**이 이것을 측정할 수 있는 방법이다. 이외에도 다른 지표들이 있지만, 비즈니스의 형태에 따라서 달라질 수 있다.

---

프로덕트 지표를 선택하는 것은 방향에 관한 것이 아니라, 여정이다. 프로덕트 지표는 프로덕트와 마찬가지로 반복적으로 변경되어야 한다. 우리는 작은 데이터 셋으로부터 시작해 우리가 측정해야 할 결과에 따라 조정해나가야 한다.

이 같은 프로덕트 지표가 없으면 우리는 결과 지향적일 수 없게 된다. 결과 지향적이지 못한다면, 우리는 진정한 의미에서 애자일할 수 없다. 마지막으로, 우리가 결과 지향적이지 못하고 애자일 하지 않는다면, 우리는 우리 프로덕트를 효율적이고 현대적인 방식으로 관리할 수 없게 된다.

프로덕트 관리는 프로덕트 지표가 들어오면서 영원히 바뀌어버렸고, 다시 돌아갈 방법은 없다.

![Product Management ♥️ Product Metrics](https://miro.medium.com/max/1648/1*yGcKezcxzPa4j7b4xb6rgA.png){:class="lazyload"}

<figcaption>Product Management ♥️ Product Metrics</figcaption>

---

긴 글을 여기까지 읽어줘서 고맙습니다. 만약 이 글이 좋았다면, 다음 (Cláudia Delgado의!) 글들도 읽어볼 만 할겁니다. 이 글보단 더 짧으니까 읽어보세요! 👉

[How to Navigate the Abstract World of Outcomes](https://medium.com/swlh/how-to-navigate-the-abstract-world-of-outcomes-58a81cdbab95)

[Learn to Earn: An Experimentation Guide](https://bootcamp.uxdesign.cc/learn-to-earn-an-experimentation-guide-94d4b07f2640)