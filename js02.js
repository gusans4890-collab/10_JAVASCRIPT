// 기본 자료형들과 연산자
// -프로그램에서 사용되는 데이터 종류
// 자바 스크립트는 동적 자료형
// -변수 , 상수 등 데이터가 들어가는 곳에 자료형 제한이 없다.

// boolean : 참 ; 거짓 여부

let bool1 = true; //참
let bool2 = false; //거짓
console.log(bool1, bool2);
console.log(typeof bool1);

const bool3 = 1 < 2;
const bool4 = 1 > 2;
console.log(bool3, bool4);

let bool5 = !true;
let bool6 = !bool5;
let bool7 = !bool6;
console.log(bool5, bool6, bool7);
// !연산자 : 뒤에 오는 불리언의 반대 값을 반환

// number : 숫자
let num1 = 10; //정수
let num2 = 3.14; //실수
console.log(typeof num2);

//사칙연산
console.log(1 + 2);
console.log(3 - num1);
console.log(num1 * num2);
console.log(num1 / num2);

console.log(10 % 3); //나머지를 구하는 연산

const num3 = (num1 + num2) * 10;
console.log(num3);

//string : 문자열
const str1 = "Hello";
const str2 = "월드😊😊😊";

console.log(typeof "안녕하세요");
console.log(typeof "1");

let str3 = str1 + "World";
console.log(str3);
let str4 = 1 + 2;
console.log(str4);

// undefined 와 null
let x;
console.log(x, typeof x);

let y = 1;
x = 1;
console.log(x);

x = null;
console.log(x, typeof x);
