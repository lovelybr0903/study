let a = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;
let f = "안녕";
// const(거의 변하지 않는 값) 쓰고 안되면 let(변하는값)

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

let name = "박보람";
let tel = "010-1234-5678";
let age = 30;

let text = "";
text += "<div>";
text += "이름:";
text += name;
text += "</div>";

document.write(text);

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
