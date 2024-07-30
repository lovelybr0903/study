# 6. 문서 객체 모델 (DOM)

- 객체 (프로퍼티와 메서드)
- HTML 문서의 구조화 된 표현
- DOM 구조에 접근하여 HTML 문서의 구조, 스타일, 내용 등을 변경
- DOM은 JS 언어와는 독립적인 구조를 가짐

## 6.1 DOM의 구조

- HTML요소(element), 속성(attribute), 내용(content 또는 text)등으로 구성 된 트리구조
- 모든 HTML요소들은 객체로 정의된다.
- 자바스크립트에서는 DOM에서 제공되는 메서드(method)와 프로퍼티(property)를 통하여 HTML요소들에 접근하거나 요소들을 수정할 수 있다.

## 6.2 HTML 요소 선택

- 자바스크립트에서 웹페이지에 있는 html 요소를 추가, 수정, 삭제하는 방법
- 제일 먼저 페이지 내에 존재하는 해당 요소를 선택
- 아이디 / 태그이름 / 클래스 이름 / css선택자(selector) 이용

## 6.3 HTML 내용과 속성

```html
<p id="p1">
  <span style="color: red">안녕</span>
</p>

<script>
  const x = document.getElementById("p1");
  alert(x.innerText); /글자만 나옴
  alert(x.innerHTML); /innerHTML을 많이 씀. 태그가 다 나옴
</script>
```

### 6.3.2 요소 내용 설정하기

```html
<ul>
  <li>항목1</li>
  <li>항목2</li>
  <li></li>
  <li></li>
  <li></li>
</ul>

<script>
  const x = document.querySelectorAll("li"); // x는 배열이다
  x[2].innerHTML = `<span style="color: red">항목3</span>`;
</script>
```

### 6.3.3 요소의 속성 변경하기

```html
<img id="img" src="/02/imges/네티.jpg" width="400" alt="네티" />
<button onclick="change()">이미지 변경</button>
<button onclick="size()">크기 변경</button>
<script>
  const change = () => {
    document.getElementById("img").src = "/02/imges/ss.jpg";
  };
  const size = () => {
    document.getElementById("img").width = "200";
  };
</script>
```

## 6.4 DOM 노드

- DOM 트리의 가장 기본이 되는 HTML, 요소, 속성, 텍스트 등은 모두 노드(node)에 속한다.

### 6.4.1 노드의 종류

- 요소 노드(element node)
- 속성 노드(attribute node)
- 텍스트 노드(text node)
- 문서 노드(document node)
- 주석 노드(comment node)
- DOM 트리의 최상위 : root node

### 6.4.2 노드 추가하기

```html
<div id="box">
  <p>단락1</p>
  <p>단락2</p>
</div>

<script>
  const elem = document.createElement("p");
  const textNode = document.createTextNode("새로운단락!");

  elem.appendChild(textNode);
  document.getElementById("box").appendChild(elem);
</script>
```

### 6.4.3 노드 삽입하기

```html
<div id="box">
  <p id="p1">단락1</p>
  <p id="p2">단락2</p>
</div>

<script>
  const elem = document.createElement("p");
  const textNode = document.createTextNode("새로운 단락!");
  elem.appendChild(textNode);
  const p2 = document.getElementById("p2");
  document.getElementById("box").insertBefore(elem, p2);
</script>
```

### 6.4.4 노드 삭제하기

```html
<div id="box">
  <p id="p1">단락1</p>
  <p id="p2">단락2</p>
  <p id="p3">단락3</p>
</div>

<script>
  const elem = document.getElementById("p2");
  elem.remove();
</script>
```

### 6.4.5 노드 변경하기

```html
<body>
  <div id="box">
    <p id="p1">단락1</p>
    <p id="p2">단락2</p>
    <p id="p3">단락3</p>
  </div>

  <script>
    const elem = document.createElement("p");
    const textNode = document.createTextNode("노드 변경하기");
    elem.appendChild(textNode);

    const p1 = document.getElementById("p1");
    document.getElementById("box").replaceChild(elem, p1);
  </script>
</body>
```