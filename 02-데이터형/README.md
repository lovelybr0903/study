# 2. 데이터 타입

- number
- string: 문자
- boolean: 참 , 거짓
- null
<!-- 공백도 문자로 봄. 공백도 문자열. 스페이스 키를 눌러도 공백 -->
- undefined
- object
<!-- 밑에 두개는 잘 안 씀 -->
- bigint
- symbol

## 2.1 숫자 number

```js
const a = 3; //정수(integer) . 줄여서 int
console.log(a);

const b = 5.7; // 부동소수점  숫자(float, double)
console.log(b);

const c = 123e3; // 123000 e3은 0이 3개다
console.log(c);

const d = 123e-3; // 0.123 e에 -3승
console.log(d);
```

## 2.2 문자열 string

```js
const text1 = "사과";
const text2 = "10"; // 쌍따옴표 안에 있으니 넘버가 아니라 스트링이다
const text3 = "오 렌 지";
console.log(text1);
console.log(text2);
console.log(text3.length); //문자길이를 알려준다 공백도 문자기 때문에 5로 나온다
```

## 2.3 템플릿 문자열

```js
const text1 = "사과";
const text2 = "10";
const text3 = "오 렌 지";
console.log(text1);
console.log(text2);
console.log(text3.length);

const txt1 = "내가 좋아하는 과일은" + " " + text1 + "입니다.";
console.log(txt1);

const txt2 = `내가 좋아하는 과일은 ${text1}입니다.`;
console.log(txt2);
```

## 2.4 참 거짓 boolean

```js
const x = 5 > 3;
const y = 5 < 3;

console.log(x); //true
console.log(y); //false
```

## 2.5 배열array

<!-- 배열인덱스는 0부터 메겨짐 -->

```
const car = ["롤스", "볼보", "벤츠", "아우디"];
console.log(car);
console.log(car[0]);
console.log(car[1]);
console.log(car[2]);
console.log(car[3]);
```

## 2.6 텍스트 관련 스타일

- [구글폰트](https://fonts.google.com/)
- [눈누](https://noonnu.cc/)

### 2.6.1 글자색을 지정 color 속성
