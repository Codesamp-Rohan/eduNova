function menu() {
  const menu = document.querySelector(".menu");
  const menuPage = document.querySelector(".menuPage");

  let i = 1;
  menu.addEventListener("click", function () {
    i++;
    if (i % 2 == 0) {
      menuPage.style.transform = "translateY(0%)";
      menuPage.style.borderRadius = "0%";
      gsap.to(".menuPage a:nth-child(1)", {
        transform: "translateY(0%)",
        duration: 0.5,
        delay: 1,
      });
      gsap.to(".menuPage a:nth-child(2)", {
        transform: "translateY(0%)",
        duration: 0.5,
        delay: 1.5,
      });
      gsap.to(".menuPage a:nth-child(3)", {
        transform: "translateY(0%)",
        duration: 0.5,
        delay: 2,
      });
    } else {
      menuPage.style.transform = "translateY(100%)";
      menuPage.style.borderRadius = "50%";
      gsap.to(".menuPage a", {
        transform: "translateY(1000%)",
        duration: 1,
      });
    }
  });
}
menu();

const mt = gsap.timeline();

mt.to(".sendBtn", {
  transform: "translateY(0)",
  duration: 1.2,
});
mt.to("textarea", {
  transform: "translateY(0)",
  duration: 1.2,
  delay: -1,
  //   delay: 0.5,
});
mt.to("input", {
  transform: "translateY(0)",
  duration: 1.2,
  delay: -1,
  //   delay: 0.5,
});
mt.to(".header", {
  transform: "translateX(0)",
  duration: 1.2,
  delay: -1,
});
mt.to(".home", {
  transform: "translateY(0)",
  duration: 1.2,
})
  .to(".move1", {
    scale: 1,
    duration: 0.4,
    ease: "back.out",
  })
  .to(".move2", {
    scale: 1,
    duration: 0.4,
    ease: "back.out",
  })
  .to(".move3", {
    scale: 1,
    duration: 0.4,
    ease: "back.out",
  });
