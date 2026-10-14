// 이벤트
const myButton = document.querySelector("#myButton");

// addEvent istener
// 첫번쨰 인자는 이벤트, 두번째 인자는 동작을 부여
myButton.addEventListener("click", function () {
    console.log("클릭");
});

const mouseEnter = () => console.log("진입");
const mouseLeave = () => console.log("이탈");

myButton.addEventListener("mouseenter", mouseEnter);
myButton.addEventListener("mouseleave", mouseLeave);

const clickPosition = document.querySelector("#clickPosition");
clickPosition.addEventListener("click", function (e) {
    console.log(e);
});

const myInput = document.querySelector("#myInput");
myInput.addEventListener("focus", () => {
    myInput.setAttribute("placeHolder", "포커스 온 상태");
});
myInput.addEventListener("blur", () => {
    myInput.setAttribute("placeHolder", "블러 된 상태");
});
myInput.addEventListener("change", (e) => {
    console.log(e.target.value);
});
myInput.addEventListener("keyup", (e) => {
    console.log(e.key);
});
