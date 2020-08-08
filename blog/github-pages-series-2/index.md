---
layout: post
title:  "Jekyll 테마 찾고 설치하는 법"
subtitle: "Github.io로 나만의 블로그 만들기 시리즈 2"
type: "블로그 만들기"
tags: [Blog, Github.io, Jekyll, Development]
blog: true
post-header: true
header-img: "img/header.jpg"
order: 2
---

이전 글 → [Github.io로 나만의 블로그 만들기 (1): 가입 및 초기 세팅](https://tjrichard.github.io/2020/07/06/starting-github.io-series-1/)

# 지난 글과 다른 점

---

지난 글에서는 Github.io로 블로그 페이지를 만들 수 있는 틀을 구축했다면, 이번 글에서는 이미 잘 만들어진 블로그 테마를 찾고, 나의 블로그에 적용하는 과정을 다룬다.

# Jekyll 테마를 찾기 전

---

이 글을 읽는 우리의 1차 목표는 내 입맛에 맞는 디자인으로 Github 블로그를 만들어 보는 것이고, 2차 목표는 그렇게 만든 블로그로 실제 블로그를 운영하는 것이다.

`Github.io로 나만의 블로그 만들기` 시리즈는 내가 원하는 스타일과 인터랙션으로 커스터마이징 하는 과정이 포함되어 있다. 따라서 두 목표 모두 실현할 수 있기 위해서 우리가 고려해야 하는 것은 1. 테마의 디자인, 2. 테마의 기능 지원 여부, 3. 테마의 블로그 구조이다.

**1. 테마의 디자인**에서 봐야할 것은 테마의 컨셉, 레이아웃, Table of Contents 지원, 포스트 검색 기능 지원, 코드 하이라이팅, 링크 하이라이팅, 모바일 혹은 반응형 대응 등이 있다.

**2. 테마의 기능 지원 여부**에서는 애널리틱스 지원, 태그 페이지 지원, 인기 글 모아보기 지원 등이 있다.

**3. 테마의 구조**는 아래👇에서 더 상세하게 알아보자.

# 🧱 테마의 구조

---

Jekyll 테마를 선택하기 전 내가 만들려고 하는 블로그의 구조를 어떻게 짤 것인가를 먼저 생각해봐야 한다. 왜냐하면 많은 수의 단순한, 미니멀한 Jekyll 테마는 다음과 같은 블로그 구조를 가지고 있기 때문이다.

![Minimal Jekyll theme Structure](/images/posts/Starting_github.io_series_2/Minimal%20Jekyll%20Structure.png)

만약 당신이 만들고 싶은 블로그의 구조가 더 깊고 다양하다면 테마에서 제공하는 구조를 활용해도 어려울 수 있다.

![Your Jekyll theme Structure](/images/posts/Starting_github.io_series_2/Your%20Blog%20Structure.png)

테마 안에서 스타일과 인터랙션을 수정하는 것 보다 테마의 구조를 변경하는 것이 더 난이도가 높으므로 처음 테마를 결정할 때 본인의 블로그 구조를 먼저 구상 해두는 것이 필요하다.

# Jekyll 테마 찾기

---

위 기준들을 잘 생각하면서 테마를 찾아보자. 다음과 같이 무료 Jekyll 테마를 모아서 리스트를 제공하는 사이트들이 있으니 원하는 테마를 찾아보도록 하자.

개인적으로는 [Github의 Jekyll-theme 토픽](https://github.com/topics/jekyll-theme) 이 가장 많은 테마를 제공하고 있고 정렬도 자유롭게 할 수 있지만, 리스트에서는 이름만 보이는 테마가 대부분이라 직접 들어가지 않는 한 어떤 테마인지 알 기 어렵다는 단점이 있다. [Jekyllthemes.io](http://jekyllthemes.io)는 start, last commit, fork 순으로 정렬할 수 있어 인기있는 테마를 빠르게 찾을 수 있다.

[https://jekyllthemes.io/free](https://jekyllthemes.io/free)

[https://github.com/topics/jekyll-theme](https://github.com/topics/jekyll-theme)

이외에도 다음과 같은 사이트들도 있다.

[https://jekyll-themes.com/free/](https://jekyll-themes.com/free/)

[http://themes.jekyllrc.org/](http://themes.jekyllrc.org/)

[http://jekyllthemes.org/](http://jekyllthemes.org/)

[https://jekyllthemes.dev/](https://jekyllthemes.dev/)

[https://drjekyllthemes.github.io/new](https://drjekyllthemes.github.io/new)

# Jekyll 설치

---

위에서 정했던 테마 선택 기준에서 내가 원했던 태그 기능, Table of Contents 기능을 제공하는 [Huxpro](https://github.com/Huxpro/huxpro.github.io) 테마를 이용해 블로그를 만들어보기로 했다. ~~중국어로 되어있긴 하지만, 코드는 영어겠지..~~

![Hupro Blog Demo](/images/posts/Starting_github.io_series_2/screenshot1.png)

Huxpro 테마로 만든 Hux Blog 페이지

## 1. 설치 하고싶은 테마의 저장소[^1] 복사하기

설치려고 하는 테마를 정했다면, 해당 테마의 github 저장소에 들어가자.

![Fork](/images/posts/Starting_github.io_series_2/Fork.png)

![Fork at](/images/posts/Starting_github.io_series_2/Fork_at.png)

우측 상단에 있는 `Fork`[^2] 버튼을 클릭 하면, 복사하기를 원하는 저장소를 선택할 수 있을 것이다. 준비된 블로그용 저장소를 선택해 테마의 코드를 복사하자.

❗️ 다른 사람의 저장소를 Fork 하면 본인의 저장소에서도 기존 저장소의 정보들이 표시되게 되는데, 이것이 싫은 경우 저장소를 .zip으로 컴퓨터에 다운로드 받은 후 본인의 저장소에 내용물을 풀면 새로운 내용으로 인식하게 할 수 있다.

## 2. 저장소 이름 변경

테마를 Fork하니 1편에서 설정했던 저장소 이름과 다르게 개별 저장소로 생성이 되었다. 1편에서 만들었던 저장소는 다른 이름으로 변경 혹은 삭제 후, 복사 해온 저장소의 이름을 변경해주자. 1편에서 한 설명과 같이, 저장소의 이름을 본인의 `username.github.io` 로 변경해야 한다. 각 저장소의 Settings 메뉴에 가면 기존 저장소를 삭제할 수 있고, 새로운 저장소 이름을 변경할 수 있다.

![Repo name change](/images/posts/Starting_github.io_series_2/repo_name_change.png)

저장소 이름을 변경했으니, 해당 주소로 들어가면 우리가 Fork 한 테마가 그대로 보이는 것을 확인할 수 있다!

## 3. Github Desktop 에서 열기

자신의 깃헙 저장소에 테마 코드를 복사하고 저장소 이름도 내 username으로 변경도 완료했으니, 이를 불러오고 수정할 수 있도록 본인의 컴퓨터 로컬에 저장하고 편하게 수정할 수 있도록 Github Desktop에서 열도록 하자. 저장소를 Clone한 후 나의 경우엔 Fork 한 대상인 Huxpro에 contribute 할 것인지 나의 프로젝트로 사용할 것인지 물어보는데, 우리는 개인 블로그를 만들 것이기 때문에 아래 선택지인 개인 프로젝트 용으로 사용할 것으로 선택하자.

![Select for my own project](/images/posts/Starting_github.io_series_2/for_my_own_project.png)


## 4. config.yml 수정하기

config.yml 파일은 테마의 가장 기본적인 설정들을 관리하는 파일이다. 보통 저장소의 가장 바깥에 있으니 찾기 쉬울 것이다. config 파일 내용은 테마마다 지원하는 기능, 구조가 달라 설정 가능한 항목들은 제각각이겠지만 나는 내가 복사한 Huxpro 테마의 설정들을 기준으로 설명해보겠다.

![change config file](/images/posts/Starting_github.io_series_2/change_config_file.png)

블로그 안에 내용과 관계 없이 블로그 사이트를 구성하는 가장 기초적인 세팅만 변경해보자.

1. `title` : 본인의 블로그의 제목을 입력
2. `SEOTitle` : 블로그 첫 페이지(Home)를 열었을 때 브라우저 탭에서 보일 문구
3. `header-img` : 블로그 첫 페이지(Home)에서 제공될 이미지. 지금은 변경하지 않고 유지하자
4. `email` : contact, 프로필 등에서 계속해서 제공 될 나의 contact 이메일 정보. 사용 여부에 따라 입력해두자.
5. `description` : 본인의 블로그를 나타내는 설명
6. `keyword` : 본인의 블로그에 담길 내용에 대한 키워드. 더 나은 검색에 사용되는듯 하다
7. `url` : 본인의 저장소 이름과 같이 `username.github.io` 로 변경해두자. 이후 CNAME 등록, URL 호스팅 등으로 주소도 커스터마이징 가능하다. 
8. `baseurl` : 블로그가 다른 도메인의 하위에 속한다면 지정하는 영역. 우리는 블로그 주소를 가장 상위 주소로 사용할것이기 때문에 이 영역은 건드리지 않고 남겨두자.

> 이제 테마를 설치하고 기본적인 세팅까지 완료하였다. 여기까지는 스텝에 따라서 설치, 클릭 정도만 하면 되기 때문에 생각보다 어렵지 않았을 것이다. 역시 문제는 원하는 대로 스타일을 수정 하고, 꾸준히 블로그에 올릴 글을 쓰는 것이겠지.

다음 글에서는 내가 쓴 글에 사람들의 반응을 받을 수 있는 댓글 기능인 Disqus를 연결하는 방법을 알아보자.

---

### **Github.io로 나만의 블로그 만들기 시리즈**

[(1) 가입 및 초기 세팅](https://tjrichard.github.io/2020/07/06/starting-github.io-series-1/)

[(2) 원하는 Jekyll 테마 찾는 법, 설치하는 법](#)

(3) Disqus 연결하기

---

[^1]: Repository

[^2]: Fork는 해당 저장소에 있는 코드를 내 저장소에 복사 붙여넣기 하는 것이다.