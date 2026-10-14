// 함수
// 반복될 수 있는 작업의 정리
// input을 받아 output을 반환

// console.log("문서를 만들어라");
// console.log("안녕하세요");
// console.log("좋은 아침입니다");

function func() {
    console.log("문서를 만들어라");
    console.log("안녕하세요");
    console.log("좋은 아침입니다");
}
func();

// 매개변수와 인자
// - 특정 인풋을 받아 작업을 수행하는 함수들에 사용
// to : 매개변수
function countTo(to) {
    for (let i = 1; i <= to; i++) {
        console.log(i);
    }
}

// 6: 인자
countTo(6);

// 값은 반환하는 함수
// return : 함수가 값을 반환하도록 한다
function add(x, y) {
    return x + y;
}
console.log(add(2, 3), add(8, 9), add(10, 20));

// 변수 또는 상수에 함수의 넣는다, 변수에 인자값을 넣어준다
const result = function (x, y) {
    return x - y;
};

console.log(result(7, 2));

// // 화살표 함수
// const mult = function (x, y) {
//     return x * y;
// };
// console.log(mult(10, 20));

// 한줄 안에 값만 반환시
const mult = (x, y) => x * y;
console.log(mult(10, 20));

// 두줄 이상의 작업이 있을시
const mult2 = (x, y) => {
    // console.log(x + "와" + y + "를 곱합니다");
    console.log(`${x}와 ${y}를 곱합니다`);
    // console.log("결과는" + x * y + "입니다");
    console.log(`결과는 ${x * y} 입니다.`);
    return x * y;
};
console.log(mult2(2, 7));
