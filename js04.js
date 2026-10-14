// 객체와 배열
// 데이터의 묶음 - 키:값

const person1 = {
    name: "김철수",
    age: 25,
    married: false,
};

console.log(typeof person1);
console.log(person1);

const person1Age = person1.age;
console.log(person1Age);
const typeOfMarried = typeof person1["married"];
console.log(person1Age, typeOfMarried);

// 프로퍼티 추가
person1.job = "프로그래머";
person1["bloodtype"] = "0";

console.log(person1);

// 기존의 프로퍼티 수정하기
person1.age++;
person1.job = "디자이너";
console.log(person1);

//배열
const myArray = [true, 3.14, "Hello", person1];
console.log(myArray, myArray.length);

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);

myArray[0] = !myArray[0];
myArray[1] *= 100;
myArray[2] += "world";
console.log(myArray);
console.clear();

// 요소 추가 및 삭제
myArray.push(123); // 요소를 추가
console.log(myArray);

const popped1 = myArray.pop();
console.log(popped1, myArray);
console.clear();
//객체와 배열의 중첩 사용
const person2 = {
    name: "배수지",
    age: 30,
    languages: ["한국어", "영어", "프랑스어"],
    education: {
        school: "엠비씨",
        major: ["컴공", "시디"],
        graduated: true,
    },
};

console.log(person2);
console.log(person2.languages[1]);
console.log(person2.education.school);
console.log(person2.education.major[1]);
