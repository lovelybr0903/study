# 3. 연산자

## 3.1 산술 연산자

```txt
+ 덧셈
- 뺄셈
* 곱셈
/ 나눗셈
% 나머지 계산
** 거듭제곱
++ 1증가
-- 1감소
```

## 3.2 할당 연산자

```js
let a = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;
let f = "안녕";

a += 3;
console.log(a);
b -= 8;
console.log(b);
c *= 2;
console.log(c);
d /= 10;
console.log(d);
e %= 6;
console.log(e);
f += "하세요.";
console.log(f);
```

```js
let name = "박보람";
let tel = "010-1234-5678";
let age = 30;

let text = "";
text += "<div>";
text += "이름:";
text += name;
text += "</div>";

document.write(text);
console.log(text);
```

## 3.3 비교연산자

```js
let a = 3;
let b = "3";
let c = 5;
let d = 3;

console.log(a == b); //true 데이터 타입도 같다
// 데이터 타입 검사안 함
console.log(a === b); // false 데이터 타입도 같다
console.log(a != b); //false 에이하고 비하고는 다르다
console.log(a !== b); //true 에이하고 비하고는 데이터 타입도 같다
console.log(a > c); //false
console.log(a < c); // true
console.log(a >= c); //false
console.log(a <= c); //true
```

## 3.4 논리연산자

```txt
&& - and 연산자 두 조건이 모두 true 일 경우에만 최종 결과 true
|| - or 두 조건 중 하나만 ture 가 되어도 최종 결과 ture
! - not 결과가 ture 인 경우 false, 반대로 false 인 경우 true
```
