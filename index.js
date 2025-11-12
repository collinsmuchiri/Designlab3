// REGISTER PLUGINS
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//SCROLL SMOOTHER
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
      smoothTouch: 0.1
    });

//LAG
smoother.effects(".largetxt, .brandidentity, .textsection2",{ 
  lag: 0.3
});    

// ANIMATIONS
    gsap.to(".welcom", {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: "power3.inOut"
    });

    const fadeInElements = [
  ".graphics",
  ".graphix2",
  ".imaginecreate",
  ".imaginecreatemobile",
  ".floatingmac",
  ".projectcontent",
  ".servicestxt",
  ".texts"
];

fadeInElements.forEach(selector => {
  gsap.from(selector, {
    y: 50,
    opacity: 0,
    duration: 1.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: selector,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
});
    // refresh after setup

    window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});


