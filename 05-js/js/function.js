// 1. 써클에어리어() 함수를 정의
// js 엔진은 정의된 써클에어리어() 함수를 컴퓨터 메모리에 저장하고 있다가 나중에 이 함수에 대한 호출이 일어날 때만 이 함수가 실행
function circleArea(r) {\
    // 매개변수(parameter) r은 함수 호출에 사용된 변수나 데이터 값
  let result = r * r * 3.14;
  return result; // 함수 호출 측으로 결과값을 반환
}
const area = circleArea(500);

console.log(area);
