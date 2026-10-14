// 태그 선택
const $section = document.getElementsByTagName("section");
console.log($section);

const $listItem = document.getElementsByTagName("li");
console.log($listItem);

// 클래스명 선택
const plant = document.getElementsByClassName("plant");
console.log(plant);
const soldout = document.getElementsByClassName("soldout");
console.log(soldout);

// 아이디 선택
const $sweets = document.getElementById("sweets");
console.log(sweets);

//querySelector
const $section1 = document.querySelector("section");
const $plant = document.querySelector(".plant");
const $sweets1 = document.querySelector("#sweets");
const $li2 = document.querySelectorAll("li");

console.log(document.querySelector(".plant>ul.soldout"));

// 자식요소
console.log(document.querySelector("section").children);

console.log(document.querySelector("ul").firstElementChild);
console.log(document.querySelector("ul").lastElementChild);

// 부모요소
console.log(document.querySelector(".soldout").parentElement);
