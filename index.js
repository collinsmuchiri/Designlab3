//OLD ORIGINAL GSAP CODE

/*// REGISTER PLUGINS
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//SCROLL SMOOTHER
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
      smoothTouch: 0.3
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

    gsap.to(".texts", {
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".texts",
        start: "top 80%"
      },
      opacity: 1,
      ease: "power3.inOut"
    });


    gsap.to(".servicestxt", {
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".servicestxt",
        start: "top 80%"},
      opacity: 1,
      ease: "power3.inOut"
    });

    gsap.to(".graphics, .graphix2", {
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".graphics",
        start: "top 80%"
      },
      opacity: 1,
      ease: "power3.inOut"
    });

    gsap.to(".imaginecreate", {
      y: 0,
      duration: 2.5,
      scrollTrigger: {
        trigger: ".imaginecreate",
        start: "top 90%"
      },
      opacity: 1,
      ease: "power3.inOut"
    });

    gsap.to(".imaginecreatemobile", {
      y: 0,
      duration: 2.5,
      scrollTrigger: {
        trigger: ".imaginecreatemobile",
        start: "top 90%"
      },
      opacity: 1,
      ease: "power3.inOut"
    });

    gsap.to(".scroll", {
      y: 0,
      duration: 3,
      repeat: -1,
      scrollTrigger: {
        trigger: ".scroll",
        start: "top 90%"
      },
      opacity: 1,
      ease: "power3.inOut"
    });

    gsap.to(".floatingmac", {
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".floatingmac",
        start: "top 90%"
      },
      opacity: 1,
      ease: "power3.inOut"
    });

    gsap.to(".projectcontent", {
      y: 0,
      duration: 2,
      opacity: 1,
      ease: "power3.inOut",
      
      scrollTrigger: {
        trigger: ".ourwork",
        start: "top 80%"},});

    gsap.to(".servicestxt", {
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".servicestxt",
        start: "top 80%"
      },
      opacity: 1,
      ease: "power3.inOut"
    });

    // refresh after setup
    ScrollTrigger.refresh();*/

//NEW GSAP CODE OPTIMIZED BY CHAT GPT
// === REGISTER PLUGINS ===
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// === SCROLL SMOOTHER ===
const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.2,       // reduced for better mobile stability
  effects: true,
  smoothTouch: 0.1   // prevents stutter on touch devices
});

// === CONTINUOUS WELCOME ROTATION ===
gsap.to(".welcom", {
  rotation: 360,
  duration: 4,
  repeat: -1,
  ease: "power3.inOut"
});

// === BATCHED FADE-IN SECTIONS ===
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

// === STAGGER PROJECTS ===
ScrollTrigger.batch(".projectcontent", {
  start: "top 85%",
  onEnter: batch => gsap.to(batch, {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 1.5,
    ease: "power3.out"
  }),
});

// === SCROLLING ICON ANIMATION ===
gsap.to(".scroll", {
  y: 0,
  opacity: 1,
  duration: 3,
  repeat: -1,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: ".scroll",
    start: "top 90%"
  }
});

// === LAG EFFECT ===
smoother.effects(".largetxt, .brandidentity, .textsection2", { 
  lag: 0.3
});

// === LAZY LOAD VIDEOS ===
document.querySelectorAll("video").forEach(video => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) video.play();
      else video.pause();
    });
  });
  observer.observe(video);
});

// === GRAPHICS2 SAFETY FADE (MOBILE FIX) ===
window.addEventListener("load", () => {
  const g2 = document.querySelector(".graphix2");
  if (g2) gsap.to(g2, { opacity: 1, duration: 1.2, ease: "power2.out" });

  // Refresh triggers after all media loaded
  ScrollTrigger.refresh();
});





