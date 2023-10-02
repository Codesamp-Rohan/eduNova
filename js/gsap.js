gsap.to(".page1", {
  transform: "translateY(0)",
  duration: 1.4,
});
const tl = gsap.timeline();
tl.to(".page1-header", {
  opacity: "1",
  duration: 1,
  delay: 0.4,
});
tl.to("nav", {
  transform: "translateY(0)",
  duration: 1,
});
tl.to(
  ".logo",
  {
    opacity: "1",
    duration: 1,
    delay: 0.5,
  },
  "amin"
);
tl.to(".social-media", {
  width: "auto",
  duration: 0.5,
  delay: -1,
});
tl.to(".social-media a", {
  scale: "1",
  duration: 1,
  delay: -1,
});
tl.to(
  ".knowmoreBtn",
  {
    scale: "1",
    duration: 0.5,
  },
  "amin"
);
tl.to(".bgVideo", {
  scale: 1,
  duration: 0.5,
});

// PAGE2 TIMELINE
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "top 0%",
    end: "bottom 140%",
    scrub: true,
    // markers: true,
  },
});
tl2.to(".page2-text", {
  marginRight: "0px",
  duration: 1,
});

gsap.registerPlugin(ScrollTrigger);
const splitTypes = document.querySelectorAll(".reveal-type");

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: "char, words" });

  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 80%",
      end: "top 50%",
      scrub: true,
      // markers: true,
    },
    opacity: 0.2,
    transform: "translateY(100%)",
    stagger: 0.1,
  });
});