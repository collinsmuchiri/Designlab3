// REGISTER PLUGINS
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
    ScrollTrigger.refresh();