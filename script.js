const cursor = document.querySelector(".cursor");
const cursorOutline = document.querySelector(".cursor-outline");
const pageHeader = document.querySelector(".page1-header");
// GLOBAL DECLARATION...UP...

function cursorHover() {
  window.addEventListener("mousemove", function (e) {
    cursor.animate(
      {
        left: e.pageX + "px",
        top: e.pageY + "px",
      },
      { duration: 0, fill: "forwards" }
    );
    cursorOutline.animate(
      {
        left: e.pageX + "px",
        top: e.pageY + "px",
      },
      { duration: 500, fill: "forwards" }
    );
  });
}
function ankerHover() {
  const anker = document.querySelectorAll(".nav-anker").forEach((elem) => {
    elem.addEventListener("mousemove", function (e) {
      cursor.style.width = "80px";
      cursor.style.height = "80px";
      cursor.style.transition = "0.3s";
    });
    elem.addEventListener("mouseleave", function (e) {
      cursor.style.width = "10px";
      cursor.style.height = "10px";
      cursor.style.transition = "0s";
    });
  });
}
function ankermagnet() {
  const btn = document.querySelectorAll(".nav-anker").forEach((btn) => {
    btn.addEventListener("mousemove", function (e) {
      let x = e.offsetX;
      let y = e.offsetY;
      console.log(x, y);
      let btnWidth = btn.clientWidth;
      let btnHeight = btn.clientHeight;
      let transX = (x - btnWidth) / 2;
      let transY = (y - btnHeight) / 2;
      btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
    });
    btn.addEventListener("mouseleave", function () {
      btn.style.transform = ``;
    });
  });
}
function hoverBtn() {
  const hoverBtn = document.querySelector(".knowmoreBtn");
  const ankerHoverBtn = document.querySelector(".knowmoreBtn a");
  hoverBtn.addEventListener("mousemove", function () {
    ankerHoverBtn.style.color = "#000";
  });
  hoverBtn.addEventListener("mouseleave", function () {
    ankerHoverBtn.style.color = "#000";
  });
}
function cardHover() {
  const card = document.querySelectorAll(".page3 section");
  const cardImg = document.querySelectorAll(".box-image");
  card.forEach((e) => {
    e.addEventListener("mouseenter", function () {
      cardImg.forEach((elem) => {
        elem.style.display = "none";
      });
    });
    e.addEventListener("mouseleave", function () {
      cardImg.forEach((elem) => {
        elem.style.display = "block";
      });
    });
  });
}
function buttonCatch() {
  const knowmoreBtn = document.querySelector(".knowmoreBtn");
  const anker = document.querySelector(".knowmoreBtn a");
  const bgColor = document.querySelector(".bgColor");
  knowmoreBtn.addEventListener("mousemove", function (e) {
    e.preventDefault;
    bgColor.style.scale = "1";
    bgColor.style.transition = "0.4s";
  });
  knowmoreBtn.addEventListener("mouseleave", function (e) {
    e.preventDefault;
    bgColor.style.scale = "0";
    bgColor.style.transition = "0.4s";
  });
}
function menuPage() {
  const menu = document.querySelector(".menu");
  const menuPage = document.querySelector(".menuPage");
  let i = 1;
  menu.addEventListener("click", function () {
    i++;
    if (i % 2 == 0) {
      menuPage.style.transform = "translateY(0%)";
      menuPage.style.borderRadius = "4%";
    } else {
      menuPage.style.transform = "translateY(-150%)";
      menuPage.style.borderRadius = "50%";
    }
  });
}
cursorHover();
ankerHover();
ankermagnet();
hoverBtn();
cardHover();
buttonCatch();
menuPage();
