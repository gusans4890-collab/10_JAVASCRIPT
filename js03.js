//연산자 더 알아보기

// 비교 연산자
// boolean을 반환
// == : 자료형과 관계없이 같은 값이다 ( 반대 : !=)

const a = 1;
const b = 1;
const c = "1";
const d = 2;

console.log(a == b, a != b);
console.log(a == c, a != c);
console.log(a == d, a != d);

console.log(a === c, a !== c);
console.log(a > b, a <= b);
console.log(a > d, a < d);

const str1 = "ABC";
const str2 = "DEF";
console.log(str1 === "ABC");
console.log(str1 > str2);
// 문자열의 경우 사전수서상 뒤로 오는 쪽이 더 크다고 인식

// 부수효과를 일으키는 연산자
// 값을 증가 시킴
// ~ ++ 값을 증가시키지 않은채 사용
// ++ ~ 값을 증가 시킨 채 사용
let num1 = 1;
console.log(num1); //1
console.log(num1++); //1
console.log(num1); //2
console.log(++num1); //3

let num2 = 2;
let num3 = 3;
let num4 = num2-- * --num3;
console.log(num4, num2, num3);

// 할당 산술 연산자
// x = x + y   =>  x+=y
// x = x - y   =>  x-=y
// x = x * y   =>  x*=y
// x = x / y   =>  x/=y
// x = x % y   =>  x%=y
// x = x ** y  =>  x**=y

let x = 3;
x += 2;
console.log(x);

x -= 3;
console.log(x);

x *= 12;
console.log(x);

x /= 3;
console.log(x);

x %= 5;
console.log(x);

x **= 4;
console.log(x);

//boolean 관련 연산자
// AND & OR
// && : AND - 양쪽이 모두 true 일때만 true 반환
// // : OR - 한쪽만 true 면 true 반환

console.log(true && true, true && false, false && false, false && true);

console.log(true || true, true || false, false || true, false || false);

let z = 14;

console.log((z > 10 && z <= 20) || z % 3 === 0);

// 삼향 연산자
// -(조건) ? (참일 시 값) : (거짓일 시 값)

let bool1 = true;

let result = bool1 ? "참" : "거짓";
console.log(result);

let num5 = 562244;
console.log("num5는 3의 배수" + (num5 % 3 === 0 ? "입니다" : " 가 아닙니다"));
