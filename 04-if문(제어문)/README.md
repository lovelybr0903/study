# 4. 제어문

## 4.1 if~ 구문

```txt
if(조건식){
    문장(하고싶은일);
}
```

```js
let x = 10000; // 입장료 10000원
let age = 60;

if (age >= 65) {
  x = 0;
}

console.log(`입장료는 ${x}원입니다.`);

let id = "admin";
let level = 5;

if (id === "admin" || level === 5) {
  console.log(`관리자입니다.`);
}

if (id === "admin" && level === 4) {
  console.log("관리자입니다.");
}
```

## 4.2 if ~ else ~ 구문

```txt
if(조건식){조건식이 참이면 하고싶은 일} else {조건식이 거짓이면 하고 싶은 일}
```

```js
let num = 9;
if (num % 2 === 0) {
  console.log(`${num}은(는) 짝수입니다.`);
} else {
  console.log(`${num}은(는) 홀수입니다.`);
}
```
