// 요소들 조작하기
const $carrot = document.querySelector("section>ul>li");
console.log($carrot);
$carrot.textContent = "제주당근";

const $onion = document.querySelector("section ul").lastElementChild;
console.log($onion);
$onion.classList.remove("hidden");
$onion.classList.add("hidden");
$onion.classList.toggle("hidden");

// style
$onion.style.fontSize = "32px";
$onion.style.color = "red";
$onion.style.backgroundColor = "blue";
$onion.style["font-weight"] = "bold";

const $hyperlink = document.querySelector("a");

$hyperlink.getAttribute("href");
console.log($hyperlink.getAttribute("href"));

$hyperlink.setAttribute(
    "href",
    "https://www.coupang.com/?src=1139000&spec=10799999&addtag=900&ctag=HOME&lptag=AF7284829&itime=20261014115006&pageType=HOME&pageValue=HOME&wPcid=17852007649117211411129&wRef=searchconsole.co.kr&wTime=20261014115006&redirect=landing&traceid=V0-301-879dd1202e5c73b2-I780372&mcid=88058951ccd248e3a3daa2a3669b4e42&placementid=&campaignid=&contentcategory=&imgsize=&pageid=&tsource=&deviceid=&contenttype=&token=&impressionid=&subid=helpstart&campaigntype=&contentkeyword=&newssource=&subparam=",
);

const $message = document.querySelector("input");
$message.setAttribute("value", "안녕하세요");
// $message.setAttribute("type", "password");

const $img = document.querySelector("img");
$img.setAttribute("src", "hero-bg-4.jpg");
$img.setAttribute("width", "500");

const $message2 = document.querySelector("input[name=message]");
$message.value = "반가워";

const $toggle = document.querySelector("input[name=toggle]");
$toggle.checked = !$toggle.checked;

// 요소제거
const $ul = document.querySelector("section ul");
$ul.removeChild($onion);
