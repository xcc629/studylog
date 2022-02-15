---
title: "TIL: CSS 레이아웃"
layout: single
categories: css
tag: css position display float
date: 2022-02-15 12:00
toc: true
toc_sticky: true
toc_label: " CONTANT"
---

---

```jsx
const css = ["position", "display", "float"];
```

`CSS`는 밋밋한 HTML을 디자인적으로 `아름답게` 꾸며주는 `스타일시트 언어`이다.

가끔 인터넷 오류로 `HTML`로만 이루어진 페이지를 보았다. 고작 작년 초만 해도 `WEB`에 대한 지식이 전혀 없었던 나는 그걸 보면서, 단지 오류라고 생각했지 `WEB`의 구조를 구성하는 마크업 언어와 꾸며주는 스타일시트 언어가 따로 있을 거라곤 상상도 못했다. 그걸 보면서 “아니 이게 뭐야?” 하고 경악하기만 했던 기억이 생생하다.

`HTML`로 `WEB`에 필요한 요소를 넣어주는 것 또한 중요하고 그 뒤에서 데이터를 처리하는 과정도 중요하나, 결국 사용자가 그 사이트에 계속 방문하는 데 거리낌이 없어야 만든 것에 의미가 있지 않을까? 🙄

마주하는 사이트 얼마나 사용하기 편하고(사용자의 인지와 일치), 아름다운지에 따라 서비스를 접하는 `사용자의 마음`이 달라질 수도 있을 것이다.

그런 점에서 `CSS`가 중요하다고 생각한다. `사이트의 가치`에는 `보이는 것`도 중요한 부분 중 하나인 것이다.

그래서 결론은! `CSS 레이아웃`을 잘 알아두는 것이 `프론트엔드`를 목표로 하는 나에게 중요한 부분이라는 것! 이다.

차례대로 살펴보자.

---

## 1. position 속성

### 1-1. static

- Position 지정이 없을 때 갖는 기본값이다. 기존 흐름대로 배치하게 된다.

### 1-2. relative

- 원래 흐름대로 배치하지만, 적용된 요소의 원래 위치를 기준으로 위치를 정할 수 있다.
- 다른 요소에는 영향을 주지않는다. 아래의 예시에서 보이듯, 옆의 2번째 박스는 static때랑 똑같은 위치에 자리잡고 있다.
- 요소끼리 겹치는 것이 가능하다.

### 1-3. absolute

- 일반적인 흐름에서 벗어나서 자신의 부모 요소를 기준으로 위치를 지정하면 그곳에 자리잡는다. (보통 absolute의 부모요소는 `position: relative`를 쓰게 된다.)
- relative와 같이 요소끼리 겹치는 것이 가능하다.
- relative는 정말 다른 요소에 영향없이 혼자만 상대적인 위치로 움직이나 absolute를 부여받은 요소는 그 자리에 없는 것처럼(없던 것처럼) 취급된다. absolute의 2번 박스가 당당하게 자리를 차지했다.

### 1-4. fixed

- 뷰포트(보이는 창의 화면)를 기준으로 위치를 설정한다. 인터넷 신문 광고처럼 스크로를 아무리 내려도 뷰포트의 어떤 위치에만 있는다.
- 위치가 고정되어있다. 스크롤을 내려보자.

### 예시

{% include codepen.html hash="qBVPgOJ" title="position" %}

---

## 2. display

CSS의 속성으로, 요소의 종류를 선택하는 속성이다. `position`이 `위치`를 설정하는 것이라면, `display`는 `요소의 종류`를 지정하게 되는데, 대표적인 종류로는 `block`, `inline`, `inline-box`가 있다.

### 2-1. block

- 요소의 크기만큼 보이는 화면의 줄을 모두 차지하여서 `다음 요소는 다음 줄`에 보이게 된다.
- 그렇다고 `크기를 조정`할 수 없는 건 아니다. block은 원하는 만큼 width와 height를 지정할 수 있다.
- `header`, `footer`를 포함해 `p`, `li`, `table`, `div`, `h1` 등이 모두 해당된다.

### 2-2. inline

- block과 달리 한 `요소의 크기만큼만 차지`해서 `요소들끼리 나란히 위치`한다.
- 딱 요소의 크기만큼 차지하게 되어서 `마음대로 width나 height를 지정할 수 없다`.
- 대표적으로 `span`, `img`, `a`가 inline 요소이다.

### 2-3. inline-block

- `inline과 block을 합해놓은` 것으로, 각 요소들은 `block처럼 원하는 크기를 지정`할 수 있다. 그리고 `inline처럼 요소들이 나란히 서게` 된다.
- 대표적으로 `button`이나 `input` 등이 포함된다.

### 예시-1

{% include codepen.html hash="abVLXgr" title="display" %}

### 2-4. display 변경

그러나 각 요소의 기본값을 외워둘 필요가 없다. 어떤 `tag`라도 원하는 값으로 바꿀 수 있기 때문이다. 위의 예시와 같은 코드에 단지 포지션만 기입해보자.

{% include codepen.html hash="podWYvZ" title="display2" %}

원하는 대로 바꿀 수 있기 때문에 큰 걱정없이 쓰면 된다!

---

## 3. float

### 3-1. float란

float는 이미지와 텍스트 등의 요소를 뜨게하는 방법이다. 기존의 흐름은 무시한다!!

- left는 왼쪽방향으로, right는 오른쪽방향으로 뜨게 해서, 이 방법을 사용하면 CSS 레이아웃이 한결 편해진다.
- float를 받은 요소는 block이 자동적으로 된다. 그러나 inline-block처럼 보인다.

{% include codepen.html hash="xxPXBEx" title="float1" %}

`float`의 값을 `left`나 `right`로 변경해보면 float가 굉장히 편한 방법이라는 것을 알 수 있다.

그러나 `단점`도 있다. float는 기본 문서 흐름을 무시하고 지정한 방향대로 “뜨기” 때문에 `원치않은 요소까지 레이아웃이 무너지게 된다는 단점`이 있다.

### 3-2. clear

그럴때는 “이 요소부터는 더 이상 쓰고 싶지 않아!” 라는 의미로 `clear` 속성과 `그 값으로 제거를 원하는 float의 방향`을 써주면 된다.

{% include codepen.html hash="ExbwMwx" title="float-de" %}

위의 테두리가 사진까지 안들어가는 문제는 `overflow`로 해결 할 수 있다.

### 3-3. overflow

위의 예시처럼 요소의 컨텐츠가 커서 블록안에 맞출 수 없는 경우, 지정한다.

- 속성값으로는 `visible`, `hidden`, `scroll`, `auto`, `clip` 등이 있다.

{% include codepen.html hash="WNXZmdg" title="overflow" %}

재미있는 방법이 많은데, 나머지 것들은 필요한 부분에서 써보도록 하겠다.

---

## 정리

CSS 레이아웃에 대한 정리를 해보았다. 가장 처음에 말했듯, `WEB`제작에서 중요한 포인트 중 하나는 `소비자가 사용하기에 편리`하고 `보기에 아름다운 배치`를 하는 것이다. 그런 역할을 하는 것 중 `정적인`부분을 담당하는 것이 CSS이다.

나는 처음 CSS를 배웠을 때 `WEB개발`이 재미있다고 느꼈다. 아무것도 모르는 초보 개발자가 이것저것 만지고 붙이고 뜯고... 그러다보면 ‘적어도 보기’에는 유명 사이트의 페이지와 비슷하게 만들 수 있다는 점이 그랬다.

그런데 현재, CSS로 페이지를 몇 번 만들어 보고선, 튼튼한 기본기와 깊은 이해가 필요하다는 것을 뼈저리게 느꼈다. 내가 처음 만든 페이지의 CSS는 정말 풀로 아무거나 덕지덕지 붙이고 막 접어버린 게시판 같았다. 필요없는 속성들이 잔뜩 들어가서 만든이도 어디서부터 뜯어봐야할지 모르겠는 느낌에 CSS가 무섭게 느껴지기도 했다... (분명 이상하게 코드를 짰는데... 비슷하게 보여..... 근데 모바일로 보면 이상해... 운영체제마다 다르게 보인대...... 뭐지???)

그런 이유로... CSS는 꾸준히 공부하는 것이 맞는 것 같다. 좋은 기능들도 추가되고... 그래서 개발자는 계속 공부를 해야하는 구나, 하는 것을 다시 한번 느끼고 다짐했다.

다음 글은 HTML에 대해서 다루고, 주말에는 내가 만든 Introduce myself 페이지의 html과 css를 고쳐보는 과정을 업데이트 할 것이다. 고친 후에도 보이기엔 같겠지만 좀 더 업그레이드 버전으로 말이다.

2022- 02 -16

오전 1:34

---

## 참고자료

1.  [http://www.tcpschool.com/css/css_position_position](http://www.tcpschool.com/css/css_position_position)
2.  [https://developer.mozilla.org/ko/docs/Web/CSS/position](https://developer.mozilla.org/ko/docs/Web/CSS/position)
3.  [https://developer.mozilla.org/ko/docs/Web/CSS/float](https://developer.mozilla.org/ko/docs/Web/CSS/float)
4.  [https://ofcourse.kr/css-course/float-속성](https://ofcourse.kr/css-course/float-%EC%86%8D%EC%84%B1)
5.  [https://developer.mozilla.org/ko/docs/Web/CSS/overflow](https://developer.mozilla.org/ko/docs/Web/CSS/overflow)
