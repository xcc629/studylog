---
title: "TIL: Linux & Terminal"
layout: single
categories: html
tag:
  - Linux
date: 2022-02-24 1:20
toc: true
toc_sticky: true
toc_label: " CONTANT"
---

---

```jsx
const studyLog12 = "Linux & Terminal";
```

`Linux` 는 오픈소스 운영 체제로 CPU, 메모리, 스토리지처럼 시스템의 하드웨어와 리소스를 직접 관리하는 소프트웨어이다. 주로 서버를 구축하기 위해 사용하고, GUI 커스터마이즈 가능 등의 장점이 있어서 Linux의 배포판 들 중 하나를 사용하기도 한다. 개발 공부를 하기 위해서도 많이 사용하는데(나와 같은 경우...) , 윈도우와는 다르게 `GUI`가 아니라 `CLI`를 사용하여야 한다.

## 1.GUI 와 CLI

`GUI` 는 `graphical user interface` 로 사용자가 편리하도록 아이콘 등의 그래픽으로 구성되어있다. 내가 지금 쓰는 윈도우나 맥os 을 보면, 폴더나 파일 등이 아이콘으로 되어 있고, 마우스로 클릭해서 여러가지를 작동할 수 있다. 하지만 Linux에서는 CLI를 쓴다.

`CLI` 는 `command line interface`로 명령 줄을 입력하는 방식이다. 영화 같은 곳을 보면 해커들이 검은 화면에 어려운 말들을 쓰고 있거나 하는 모습을 볼 수 있는데, 그런 식으로 폴더와 파일에 접근하고 새로운 디렉토리를 만드는 것이다. 특정 기능을 위한 `commands` 가 정해져 있어서, 자주 쓰는 명령어를 기억해두는 것이 좋다.

## 2. Linux commands

command 전에, 먼저 기본적인 용어를 정리해두자.

GUI에서 `폴더` 라고 부르는 것은 `디렉토리`라고 생각하면 되는 줄 알았는데, 둘은 엄밀하게 말하면 다르다고 한다. 폴더가 좀 더 넓은 개념이다. 자세한 내용은 아래의 링크에서 읽어 볼 수 있다.

- 디렉토리와 폴더의 차이
  [https://wnw1005.tistory.com/435](https://wnw1005.tistory.com/435)

---

> Commands를 쉽게 이해하기 위해서, 현재 위치를 바탕화면(desktop)에 있는 wecode라는 폴더에 있다고 가정했다..

### 2-1. pwd (print working directory)

현재 위치를 출력한다.

```jsx
$ pwd
../Desktop/wecode
```

### 2-2. mkdir /rmdir

디렉토리를 생성/제거 한다.

`wecode` 디렉토리에 `practice` 라는 디렉토리를 만들어보자.

```jsx
$ mkir practice
```

### 2-3. ls (list segements)

현재 위치 내 파일 목록을 출력해준다.

```jsx
$ ls

practice
```

좀 더 편하게 볼 수 있는 옵션도 있다.

```jsx
$ ls -al

total 12
drwxr-xr-x 1 user 197121 0 Feb 24 00:59 ./
drwxr-xr-x 1 user 197121 0 Feb 24 00:56 ../
drwxr-xr-x 1 user 197121 0 Feb 24 00:59 practice/
```

### 2-4. cd(change directory)

디렉토리를 이동한다.

`practice` 디렉토리로 이동하고 파일 목록을 출력해보자.

```jsx
$ cd practice

$ ls -al
total 0
drwxr-xr-x 1 user 197121 0 Feb 24 01:04 ./
drwxr-xr-x 1 user 197121 0 Feb 24 00:59 ../
```

### 2-5. touch

파일 생성 및 날짜정보를 변경한다.

`[first.md](http://first.md)` 를 만들어보고 파일 목록을 출력하면 md파일이 생성된 것을 볼 수 있다.

```jsx
$ touch first.md

$ ls -al
total 0
drwxr-xr-x 1 user 197121 0 Feb 24 01:05 ./
drwxr-xr-x 1 user 197121 0 Feb 24 00:59 ../
-rw-r--r-- 1 user 197121 0 Feb 24 01:05 first.md
```

### 2-6. 다른 commands

- rm : 파일/디렉토리 제거 (option: rm -rf)
- cp: 파일/ 디렉토리 복사
- mv: 파일/디렉토리 이동
- cat: 터미널에 파일 내용 출력
- chmod: 파일/ 디렉토리 권한 설정

## 3. VI 에디터 (VIM)

리눅스에서 파일 에디터를 사용 할 수 있다. 다른 command들과 같이 터미널에 입력하면 에디터를 열 수 있다.

```jsx
$ vi <파일>
```

해당 이름이 없는 경우에는 새로운 파일을 만들어준다.

`VI에디터`는 `입력모드` 와 `명령모드` 로 구분된다. 처음 에디터를 열면 명령모드가 실행된다. 입력모드로 가기 위해서는 `insert`의 `i` 를 입력하면 된다. 다시 명령모드로 전환 하는 것은 `ESC`를 누르면 된다. 명령모드에서 `:w` 로 저장하고 `:q` 로 에디터를 종료한다. 합해서 `:wq` 로 사용 할 수 있다.

- i : 명령모드 > 입력모드
- ESC키 : 입력모드 > 명령모드
- :wq : 저장과 종료

파일을 수정하고 싶으면 언제든 위의 명령어를 사용하면 된다.
