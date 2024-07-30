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
