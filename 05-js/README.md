# 5. for 문

## 5.1 for 문

```txt
for(초기값; 조건식; 증가/감소;){
  하고싶은 일;
}
```

```js
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// for문을 이용하여 1~10 정수의 합계
let sum = 0;
// i가 1에서 10까지 값을 가지는 동안
for (let i = 1; i <= 10; i++) {
  // 문장 반복 실행되며, 변수 sum에 1~10의 누적 합계가 저장
  sum += i;
}
console.log(sum);

const colors = ["red", "green", "blue", "pink"];
let text = "";

for (let i = 0; i <= 3; i++) {
  text += `<span style="color: ${colors[i]}">안녕</span>`;
}

document.write(text);
```

## 5.2 for in 문

## 5.3 for of 문

# 6. 함수 (function)

## 6.1 함수 정의와 호출

```js
// 함수정의
function hello() {
  console.log("안녕하세요");
}

// 함수호출
hello();
```

## 6.2 매개변수와 함수 값 반환

- 함수 정의에서는 매개변수(parameter)를 통하여 함수 호출 측에서 사용되는 변수나 데이터 값을 전달 받는다.
- 반대로 함수 정의에서 얻어진 결과값을 함수 호출 측에서 반환(return)할 수 있다.

```js
// 1. 써클에어리어 함수를 정의
// js 엔진은 정의된 써클에어리어 함수를 컴퓨터 메모리에 저장하고 있다가 나중에 이 함수에 대한 호출이 일어날 때만 이 함수가 실행
function circleArea(r) {\
    // 매개변수(parameter) r은 함수 호출에 사용된 변수나 데이터 값
  let result = r * r * 3.14;
  return result; // 함수 호출 측으로 결과값을 반환
}
// 2. 써클에어리어(50)는 써클에어리어 함수를 호출
// 이 때 함수 호출 측의 써클에어리어(50) 괄호 안에 있는 값이 함수 정의 측 r에 복사가 된다.
// 써클에어리어 함수가 실행되어 얻어진 결과 값을 리턴으로 함수 호출 측에 반환
// 변수 area = circleArea 함수에서 구한 변수 result 값을 가지게 된다.
const area = circleArea(50);

console.log(area);
```
