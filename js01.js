//변수와 상수에 데이터 담기
//-어떤 데이터를 변수/ 상수 라는 주머니에 넣는 것

var x = 1;
var y = 2;
console.log(x, y);
// 오늘날 사용하지 않는다

// let : 변수 - 넣은 데이터를 바꿀 수 있음
// const : 상수 - 넣은 데이터를 바꿀 수 없음

let a = 1;
console.log(a);

let b = a;
console.log(a, b);

a = 2;
console.log(a, b);

a = "안녕하세요";
b = true;
console.log(a, b);

const A = 1;
console.log(A);

A = 2;

let c = 1;
c = 2;

// 식별자 명명 규칙
// 숫자시작 X
// 영문
// 공백 불가능
// menuBar
// 특수문자 불가능
// $  _  가능
// $menu menu_bar
