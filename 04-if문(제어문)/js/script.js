let x = 10000; // 입장료: 10000원
let age = 60;

if (age >= 65) {
  x = 0;
}

console.log(`입장료는 ${x}원 입니다.`);

let id = "admin";
let level = 5;

if (id === "admin" || level === 5) {
  console.log(`관리자입니다.`);
}

if (id === "user" || level === 5) {
  console.log("관리자입니다.");
}

if (id === "admin" && level === 4) {
  console.log("관리자입니다.");
}
if (id === "admin" && level === 4) {
  console.log("관리자입니다.");
}
``;

let num = 9;
if (num % 2 === 0) {
  console.log(`${num}은(는) 짝수입니다.`);
} else {
  console.log(`${num}은(는) 홀수입니다.`);
}
