---
layout: post
type: 'Design'
title:  '복잡한 애플리케이션에 적용되는 10가지 휴리스틱'
subtitle: 번역 및 요약 👉 10 Usability Heuristics Applied to Complex Applications
tags: [UX 개선, 가이드, 휴리스틱]
date: 2021-11-22 14:30:00
article: true
is_list-img: true
list-img: 'https://media.nngroup.com/media/editor/2021/07/28/salesforce-dashboard-realtime-preview.jpg'
post-header: false
order: 58
---

<p class="text-gray">
 🔗 이 글은 Kate Kaplan님이 <a href='https://www.nngroup.com/' target='blank' rel='nofollow' id='outlink1' onclick='clickedOutlink(outlink1)'><img src='https://www.google.com/s2/favicons?sz=64&domain=https://www.nngroup.com/' style='display:inline; height: 1em; position: relative; bottom: -2px; margin-right: 2px;'>NN Group</a>에 올린 <a href='https://www.nngroup.com/articles/usability-heuristics-complex-applications/' target='blank' rel='nofollow' id='outlink2' onclick='clickedOutlink(outlink2)'>아티클</a>을 번역, 요약한 글입니다.
</p>

## ⚡️ 요약

B2B 프로덕트는 기업 사용자의 다양한 업무적 요구사항을 충족하기 위해, 다루는 데이터 자체가 복잡하기 때문 등 다양한 이유로 복잡해지기 마련입니다. 복잡한 프로덕트를 디자인 하면서 놓칠 수 있는 10가지 휴리스틱을 소개합니다.

1. **시스템 상태에 대한 가시성 (Visibility of System Status)**  
    사용자의 행동에 대한 적절한 피드백은 가장 기본적인 디자인 가이드라인입니다. 가장 대표적인 피드백으로는 프로그레스 인디케이터를 꼽을 수 있습니다. 프로그레스 인디케이터는 전체 소요시간이 10초 이내로 걸릴 때 사용하면 좋습니다. 그보다 더 많이 걸리는 때에는 프로세스가 얼마나 걸릴 지 추가적인 정보를 제공해야 합니다.

2. **현실 세상과 시스템을 일치시키기 (Match Between System and the Real World)**  
    인터페이스를 디자인 할 때 이미 현실에 구축된 문화적 메타포와 용어를 이용하면 사용자가 컨셉을 더 잘 이해하고 조작할 수 있는 이점을 누릴 수 있습니다. 하지만 만약 이런 문화적 메타포가 유효하지 않다면 반대로 혼란이 야기될 수 있습니다. 미국에서는 'Coffee break'라는 문화가 형성되어있어 근무자 옆에 커피 아이콘을 제공하는 것이 해당 근무자가 휴식중이라는 의미를 잘 전달할 수 있지만 이 문화가 없는 곳에서는 의도한 의미가 제대로 전달되지 못할 수 있습니다.

3. **사용자 통제감과 자유 (User Control and Freedom)**  
    사용자는 실수하기 마련입니다. B2B 프로덕트를 통해 복잡한 업무를 하는 사용자에게는 더 높은 인지와 시간이 필요합니다. 우리의 사용자에게 오류, 실수와 선택을 되돌릴 수 있는 방법을 제공해야 합니다. 대표적으로는 뒤로가기, 되돌리기 기능을 꼽을 수 있습니다.

4. **일관성과 표준 (Consistency and Standards)**  
    사용자가 각 단어, 상황, 액션이 같은 의미를 가지는지 고민하도록 해서는 안됩니다. 플랫폼과 산업군에서 사용중인 표준에 따라야 합니다. 사용자가 속해있는 특정한 도메인과 관련이 깊은 기능을 수행하는 B2B 프로덕트에서는 사용자의 학습 용이성을 위해 표준 용어를 일관되게 사용해야 합니다. 표준과 일관성은 프로덕트 내에서 사용되는 컴포넌트의 색상, 위치, 레이블 뿐 만 아니라 다른 일반적인 프로덕트에서 사용되는 기능에 대한 메타포 또한 포함합니다.

5. **오류 방지 (Error Prevention)**  
    잘 작성된 오류 메세지는 중요하지만, 에러 상황을 마주하지 않도록 디자인 하는것이 먼저입니다. 사용자는 (특히 한국 사용자는!) 프로덕트나 기능에 대해 이해를 하기 보다는 먼저 사용해보는 경향이 있습니다. 세일즈포스는 대시보드를 만들 때 위젯을 추가하기 전에 실시간 프리뷰를 제공해 그들이 원하는 설정이 반영된 모습을 제공하여 발생할 수 있는 오류를 방지하고 더 빨리 수정할 수 있도록 합니다.

6. **회상보다는 인지 (Recognition Rather than Recall)**  
    사용자가 선택 가능한 요소, 액션, 옵션들을 보여줘서 사용자의 기억 부하를 최소화 해야 합니다. 복잡한 프로덕트에서는 이미 제공해야 하는 데이터나 옵션, 정보가 많아서 공간이 부족할 수도 있습니다. 3D 모델링 소프트웨어에서는 사용 할 요소의 모델명('ML-38')에 마우스를 올리면 3D 이미지와 자세한 이름을 툴팁으로 제공합니다.

7. **유연성과 사용 효율성 (Flexibility and Efficiency of Use)**  
    사용자가 프로덕트를 얼마나 능숙하게 사용하는지와 별개로, 효율성은 높아지는 데 한계가 있습니다. 이럴 때 능숙한 사용자는 숏컷, 매크로, 제스쳐 등을 통해 더 빠르게 워크플로우를 수행할 수 있습니다. 

8. **미려하면서 미니멀한 디자인 (Aesthetic and Minimalist design)**  
    인터페이스에는 현재 태스크와 무관하거나 별로 필요 없는 정보를 포함해서는 안됩니다. 인터페이스에서 모든 요소들은 주목도 경쟁을 하기 때문에 복잡한 B2B 프로덕트에서는 불필요한 정보가 많을 때 사용자가 필요한 요소를 찾기 힘들어집니다. 만약 일부 사용자에게 유용하거나 유즈케이스가 드문 경우, 해당 요소는 점진적 공개를 사용해 제공할 수 있습니다. (점진적 공개에 대해서는 <a href='../article_summary-27/' target='blank' rel='nofollow' id='outlink3' onclick='clickedOutlink(outlink3)'>이전 글</a>을 참고해주세요)

9. **사용자가 에러를 인지하고, 진단하고, 복구할 수 있도록 하기 (Help Users Recognize, Diagnose, and Recover from Errors)**  
    에러 메세지는 발견 가능해야하고, 상황을 명확하게 설명해야하며, 에러를 수정할 수 있는 방법을 일반적인 용어로 안내해야 합니다. 

10. **도움말과 문서 (Help and Documentation)**  
    프로덕트를 사용하는데 추가적인 안내가 필요하지 않는것이 가장 좋은 방법이겠지만, 복잡한 B2B 프로덕트를 사용해 태스크를 수행하는데는 종종 추가적인 안내나 교육이 필요한 경우가 있습니다. 하지만 일반적인 사용자는 태스크를 수행하기 전에 수많은 가이드 문서를 모두 읽지 않기 때문에 사용자의 컨텍스트에 맞게, 축약된 정보를 제공하는것이 좋습니다.