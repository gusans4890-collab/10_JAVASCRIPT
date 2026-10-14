//if /else문

//if문

if (true) console.log("사실");
if (false) console.log("거짓");

let open = true;

// 한줄 코드
if (open) console.log("문이 열렸습니다");

// 여러줄 코드
if (open) {
    console.log("문이열렸습니다");
    console.log("들어오세요");
}

// 중첩해서 사용
const x = 15;

// 0 : false , 1,2,3,3, true
if (x % 4) {
    if (x % 2) {
        console.log("홀수입니다");
    } else {
        console.log("짝수입니다");
    }
} else {
    console.log("4의 배수입니다");
}

// if ... else if 문
const a = 3;
const b = 3;

if (a < b) {
    console.log("a가 b보다 작다");
} else if (a > b) {
    console.log("a가 b보다 크다");
} else {
    console.log("a와 b는 같다");
}

const yooThorow = "도";

if (yooThorow === "도") {
    console.log("1칸전진");
} else if (yooThorow === "개") {
    console.log("2칸전진");
} else if (yooThorow === "걸") {
    console.log("3칸전진");
} else if (yooThorow === "윷") {
    console.log("4칸전진");
} else {
    console.log("5칸전진");
}
