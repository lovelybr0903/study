// 변수를 선언하고 저장하겠다 콘스트의 헤딩은 h1의 아이디랑은 다른거임
const heading = document.querySelector("#heading");
heading.onclick = function () {
  heading.style.color = "red";
  console.log("클릭했지롱");
};
