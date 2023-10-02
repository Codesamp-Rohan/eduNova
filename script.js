const cursor = document.querySelector(".cursor");
const pageHeader = document.querySelector(".page1-header");
// GLOBAL DECLARATION...UP...

function cursorHover() {
  window.addEventListener("mousemove", function (e) {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });
}
function ankerHover() {
  const anker = document.querySelectorAll(".nav-anker").forEach((elem) => {
    elem.addEventListener("mousemove", function (e) {
      cursor.style.scale = "4";
    });
    elem.addEventListener("mouseleave", function (e) {
      cursor.style.scale = "1";
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
  const card = document.querySelectorAll(".box");
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
cursorHover();
ankerHover();
ankermagnet();
hoverBtn();
cardHover();
