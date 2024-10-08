---
layout: post
type: "블로그 만들기"
title:  "Github Pages 가입 및 초기 세팅"
subtitle: "Github.io로 나만의 블로그 만들기 시리즈 1"
tags: [Blog, Github.io, Jekyll, Development]
date: 2020-07-07 14:40:45
blog: true
is_list-img: true
post-header: false
order: 1
---


### Github.io, 혹은 Github Pages란

간략하게 설명하자면 Github.io, Github Pages는 Github에서 제공하는 블로그 서비스이다.


Github.io는 본인 Github 계정의 저장소를 바탕으로 정적(static) 호스팅을 제공해주는 Github Pages라는 서비스이다. 따로 웹 서버를 구축하거나 호스팅 서비스를 이용하지 않고서도 간단하게 웹페이지를 만들어 제공할 수 있다는 말이다.

티스토리 블로그도 글을 올리면서 Github Pages로 블로그를 따로 만들고 있는 이유는 코드레벨에서 블로그를 운영할 수 있고, 이후 내가 원하는대로 커스터마이징을 할 수 있다는 장점이 있기 때문이다.

티스토리, 브런치, 네이버 블로그와 같이 기존 플랫폼에서 블로그를 운영하면 제공하는 스킨, 에디터, 관리자 페이지를 활용할 수 있지만 플랫폼의 틀 안에서만 커스터마이징 가능한 반면,
Github Pages로 만든 블로그는 다양한 Jekyll 테마를 설치하고 내 입맛에 맞게 커스터마이징 할 수 있는 장점이 있다.

```
Jekyll: Github Pages는 블로그 구축을 위한 틀을 제공한다면, Jekyll은 블로그가 어떻게 보일지, 어떤 구조로 쌓아서 표현할지에 대한 틀을 제공하는 테마이다.
```

### 💎 이 글을 읽는 우리의 목표

나는 디자이너로 디자인 툴에서 이미지를 만들어 내는것을 넘어 원하는 디자인을 직접 구현해 보는데 관심이 있다. 반면 이 구현에 대한 관심은 취미 수준을 목표로 하기 때문에 모든 과정을 100% 나의 손으로 만들어 내는 것은 원하지 않는다.

따라서 이 글과 나의 목표는 적은 개발 공수를 들이면서도 마음에 드는 디자인을 직접 코드 레벨에서 뚝딱뚝딱 만들어 보는 것으로 잡으려고 한다.

1. 큰 노력 없이 간단하게 얻을 수 있는 결과
   ```
   괜찮은 테마를 가져와 Github Page를 통해 내 블로그를 웹에 띄워볼 수 있음
   ```
2. 큰 노력을 기울여 얻을 수 있는 멋진 결과
   ```
   괜찮은 테마를 가져와 이를 뜯어보고 내가 원하는 대로 구조, 스타일, 인터랙션을 커스터마이징 하고 서드파티 플러그인, 애널리틱스를 설치하고 방문자에 대한 분석까지 할 수 있음
   ```
우리의 목표에 맞는 아주 멋진 사례로 Jihye Lee 님의 블로그를 소개하겠다.
> Jihye Lee 님은 Tale ([테마 데모](https://chesterhow.github.io/tale/), [테마 Git](https://github.com/chesterhow/tale)) 이라는 아주 심플하고 별거 없어 보이는 Jekyll 테마로 [본인의 블로그](https://jihyeleee.com/)를 아주 새롭고 멋지게 만든 예시가 있다.

나는 간단한 HTML, CSS 코딩 공부도 할 겸 직접 내 입맛에 맞는 블로그를 만들면서 실습까지 진행해보고자 시작하게 되었다.


### 1. Github.com 가입하기

Github.io는 Github.com에서 제공하는 블로그 서비스로, Github.io 페이지를 사용하기 위해서는 Github.com에 가입되어 있어야 한다.

[Github.com](https://github.com)으로 들어가서 가입을 해보자.

![github.com 메인 화면](img/screenshot1.png){:class="lazyload"}

[Github.com](https://github.com) 메인 화면이다. 화면 중간 우측에 바로 가입할 수 있는 필드가 있다. 혹은 우측 상단의 Sign-up 을 눌러 Sign-up 페이지에서도 가입을 할 수 있다.

![Sign-up 페이지](img/screenshot2.png){:class="lazyload"}

여기서 주의할 점은 **Username**이 이후 [Github.io](https://github.io) 에서 블로그 페이지를 만들 때 사용될 주소의 첫 부분을 담당한다는 점이다.
평소에 사용하던 읽을 수 없고 알아보기 힘든 `rhrnakaktxkd490000` 이나, 남들에게 보여주기 부끄러운 `cutie-jisu-94` 같은 아이디보단 만들고 싶은 블로그의 목적이나 본인을 잘 나타낼 수 있는 이름으로 만드는 것을 추천한다.


![가입 완료 후 설문조사](img/screenshot3.png){:class="lazyload"}

가입을 완료하면 간단한 설문이 있는데, 대강 입력하고 다음으로 넘어가보자.

![이메일 인증 후 첫 온보딩 화면](img/screenshot4.png){:class="lazyload"}


이후 이메일 인증을 완료하면 가장 먼저 어떤 것을 할 지 물어보는 페이지가 나온다. 우리는 Github.io 페이지의 저장소 역할을 할 Repository를 만들어야 한다. 가장 첫 번째에 있는Repository 만들기를 선택하자.

---

### 2. Repository 만들기

![Repository 만들기](img/screenshot5.png){:class="lazyload"}

Repository를 만들기 위한 간단한 설정이다. Owner는 자동으로 가입한 계정으로 선택된 상태일 것이다.

**❗️여기서 Repository name을 정확하게 설정하는 것이 가장 중요하다.❗️**

```
Repository name을 'Username.github.io' 형태로 입력하자. 이 때 Username은 가입 시 입력한 사용자 이름이다.
```

위와 같이 정확하게 입력하지 않으면 이후 Github.io에서 페이지를 만들 때 이 Repository를 사용하지 못하기 때문에 **정.확.하.게** 입력해야 한다.


나머지 설정들은 당장 중요한게 아니니 적당히 입력하거나 무시하고 넘어가도록 하자.


![environments - github-pages](img/screenshot11.png){:class="lazyload"}

위 형식대로 정확하게 입력 했다면 Github.com > 해당 Repository에 들어가면 우측 하단 environments 영역에 github-pages가 표시되고 있는 것을 확인할 수 있을 것이다.

---

### 3. Git Client 연결해서 기초 작업 환경 세팅하기

자 이제 [Github.io](https://github.io)를 위한 계정과 저장소를 만들었다. Github.io 에서 다음 스텝을 따라가 보자.

[Github.io 페이지 ↗](https://pages.github.com/)

![User or organization site, Project site](img/screenshot6.png){:class="lazyload"}

가장 먼저 `User or organization site` 와 `Project site` 옵션이 있다. Project site를 선택하면 다른 절차 없이 Jekyll 테마를 입힐 수 있지만, 기본적으로 제공하는 테마 자체가 구리디 구려서 선택할 테마가 단 하나도 없다. 약간 더 번거로운 절차가 있을지라도 원하는 테마를 찾아 입힐 수 있도록 User or organization site를 선택 해주자.

![Create Repository](img/screenshot7.png){:class="lazyload"}

   **1. Create Repository**
   
   이 부분은 앞 단계에서 이미 완료했으니 넘어가자.
   
   **2. What git client are you using?**
   
   Git 클라이언트를 어떤 것으로 사용할 것인지 물어보는 선택지인데, 이 글을 보고 있는 사람들은 어짜피 터미널이나 CLI(Code Level Interface)로 깃을 사용하는 사람이 아니니, UI를 제공하는 `Github Desktop`을 선택하자.

   Github Desktop이 설치되어 있지 않은 사용자는 `I don't know`를 선택해 설치하고 다시 돌아오자.

   ![Clone repository](img/screenshot9.png){:class="lazyload"}

   **3. Clone the repository**
   
   설치, 로그인 한 Github Desktop 에서 계정의 Repository를 본인의 컴퓨터에 복제해 관리할 수 있도록 한다. 나는 이미 세팅이 완료된 상태라 초기 화면은 아니지만 비슷한 설정 화면이 보일 것이다.

   혹은 Github.com에서 생성한 Repository에서 Clone > Open with Github Desktop 버튼을 눌러 연동할 수 있다.

   ![Open with Github Desktop](img/screenshot10.png){:class="lazyload"}


두 번째 Step에서 만든 Repository를 선택한 후, 본인의 컴퓨터에 보관 할 위치를 선택한다. 나는 icloud를 사용하고 있어 여러 컴퓨터에서 작업을 진행할 수 있도록 icloud에 복제해 두었다.

---

> 여기까지 하면 테마 설정 이전 단계는 모두 끝난 것이라고 봐도 무방하다. Github.io 에서는 index.html 파일을 만들어 제대로 작동 하는지 확인하는 단계를 추가적으로 제공하고 있긴 한데, 이미 Repository를 만들 때 Readme.md를 생성했기 때문에 주소창에 {username}.github.io (나의 경우엔 `nam-d.github.io`)로 들어가면 Readme.md 내용이 보이는 것을 확인할 수 있다.

다음 게시글에서는 원하는 Jekyll 테마를 찾고 설치하는 과정에 대해 알아보도록 하자.

---

#### Github.io로 나만의 블로그 만들기 시리즈

[(1) 가입 및 초기 세팅](#)<br>
[(2) 원하는 Jekyll 테마 찾는 법, 설치하는 법](https://tjrichard.github.io/blog/github-pages-series-2/)<br>
(3) ???