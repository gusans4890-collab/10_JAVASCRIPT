// 반복문 : 주어진 조건이 충족되는 특정 작업을 반복해서 수행
// for 문
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 괄호 안 요소들 ( ;으로 구분)
// - 종료조건
// 참일 시 블록안의 코드를 실행

// 중첩사용
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(i + "X" + j + "=" + i * j);
    }
}

// continue & break
for (let i = 0; i < 100; i++) {
    if (i % 3 === 0) continue; // 한 루프를 건너뜀
    if (i > 10) break; // 루프 종료
    console.log(i);
}

// for ... of 문
// 배열의 요소를 순서대로 반환
const myArray = ["하나", "둘", "셋", "넷", "다섯"];
for (const item of myArray) {
    console.log(item);
}

//for ... in 문
// 객체의  키들을 순서대로 반환
const person1 = {
    name: "김철수",
    age: "25",
    married: false,
};

for (const key in person1) {
    console.log(key, typeof key);
}

// while문
// 괄호 안의 조건이 참인 동안 반복

let x = 0;
while (x < 10) {
    console.log(x++);
}

for (let i = 0; 1 < 10; i++) {
    console.log(i);
}
