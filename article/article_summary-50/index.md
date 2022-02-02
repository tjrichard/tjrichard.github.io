---
layout: post
type: 'Product'
title:  '잘못된 해석을 유도하는 통계 자료'
subtitle: 번역 및 요약 👉 How Stats can Mislead you
tags: [데이터 분석, 데이터 시각화, 마인드셋, 문서 작성법]
date: 2021-11-10 14:30:00
article: true
is_list-img: true
list-img: 'https://miro.medium.com/max/700/1*xfeo0P87gcZLOD0tCJ_wZg.jpeg'
post-header: false
order: 50
---

<p class="text-gray">
 🔗 이 글은 SalRite님이 <a href='https://towardsdatascience.com/' target='blank' rel='nofollow' id='outlink1' onclick='clickedOutlink(outlink1)'><img src='https://www.google.com/s2/favicons?sz=64&domain=https://towardsdatascience.com/' style='display:inline; height: 1em; position: relative; bottom: -2px; margin-right: 2px;'>미디엄</a>에 올린 <a href='https://towardsdatascience.com/how-stats-can-mislead-you-e0ad563a578a' target='blank' rel='nofollow' id='outlink2' onclick='clickedOutlink(outlink2)'>아티클</a>을 번역, 요약한 글입니다.
</p>

## ⚡️ 요약

잘못된 해석을 유도하는 통계 자료. 어떤 상황에서 통계 자료를 잘못 해석할 수 있을까요?

1. **통계적 유의성이 있다는 것이 실제로 유의미한 내용이라는 말은 아닙니다.** 분석 결과가 통계적 유의성을 확보했더라도 샘플이 모집단을 적절히 대변하지 못할 수도, 리스크가 너무 커서 1%의 오차라도 용납할 수 없을수도 있습니다.

2. **잘못된 도표를 사용하는 경우.** Y축이 전체가 보여야 할 때 숨기거나 숨겨야 할 때 전체를 보이도록 하거나, 오르내리는 변동을 트렌드처럼 표시하지 않아야 합니다.

3. **연관 관계는 인과관계가 아닙니다.** 아이스크림 판매량과 상어 공격으로 인한 사상자는 여름에 동시에 오르지만 서로 인과관계가 있는것은 아닙니다.

4. **심슨의 역설.** 1973년 버클리 대학교는 전체 지원자 대비 남여 입학 비율(남: 44%, 여: 35%) 차이에 대한 자료를 바탕으로 성차별로 고소되었습니다. 추가 조사 결과 각 학과별 지원자 대비 입학 비율에서는 여성이 더 높은 비율임이 밝혀졌습니다. 이 통계에서는 남여 지원 모수가 차이가 있었고, 전체를 평균했을 때 발생하는 대표적인 통계적 역설입니다.

5. **샘플링 방식.** 샘플링은 전체 모수를 대변할 수 있는 일부를 수집하고, 통계적으로 분석해 전체 모수를 해석하기 위한 방법입니다. 따라서 샘플링 된 데이터는 전체 모수를 대변할 수 있다는 점을 확신할 수 있어야 합니다. 샘플링 할 때는 일관성, 다양성, 투명성을 유지할 수 있도록 유의해야 합니다. 또 샘플링에는 여러 방식(Random, Systemic, Stratified 등)이 있으니 각 장단점을 고려해 선택해야 합니다.

통계는 결국 숫자일 뿐이고, 전달하고자 하는 이야기의 일부일 뿐입니다. 통계 자료를 만드는 사람은 해결하고자 하는 문제에 대해 잘 알고, 자료를 바탕으로 어떤 결론을 내리기 전에 데이터를 잘 다뤄야 합니다. 다음번 통계 자료를 바라볼 땐 해석을 잘못할 수 있는 여지가 있는지 스스로에게 잘 질문할 수 있어야겠습니다.