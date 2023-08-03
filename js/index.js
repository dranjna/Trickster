import gsap from './vendor/gsap/gsap.min.js';
import ScrollTrigger from './vendor/gsap/ScrollTrigger.min.js';
import ScrollSmoother from './vendor/gsap/ScrollSmoother.min.js';
import SplitText from './vendor/gsap/SplitText.min.js';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);


class Animation {
  constructor() {
    //this.scorllSmoother();
    //this.ResizeObserverWatch();

    this.initLocoScroll();
    this.locoscrolProxy();


    this.hero();
    this.sect2();
    this.sect3();
    this.sect4();
    this.sect5();
    this.sect6();
    this.init();
    this.lastSection();
    this.menu();
    this.resizerObserver();

  }

  scorllSmoother() {

    const target = document.querySelector("#garciScroll");
    // create the smooth scroller FIRST!
    let smoother = ScrollSmoother.create({
      normalizeScroll: true,
      ignoreMobileResize: true,
      smooth: !!ScrollTrigger.isTouch ? 1 : 1.2,
      effects: true,
      smoothTouch: !!ScrollTrigger.isTouch ? 0 : 0.1,
    });

    window.smoother = smoother;
  }

  resizerObserver() {
    new ResizeObserver(() => {
      window.scroller.update();
      ScrollTrigger.refresh();
      console.warn('REFRESHED')
    }).observe(document.querySelector("[data-scroll-container]"));
  }

  initLocoScroll() {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      offset: 0,
      repeat: false,
      smooth: true,
      smoothMobile: false,
      direction: "vertical",
      inertia: 1,
      multiplier: 1,
      touchMultiplier: 2,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
      getSpeed: false,
      getDirection: false,
      //scrollFromAnywhere: true,
      //inertia: 0.75,
    });

    window.scroller = this.scroll;


    ScrollTrigger.defaults({ scroller: this.scroll });

  }

  locoscrolProxy() {
    window.scroller.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("[data-scroll-container]", {
      scrollTop(value) {
        return arguments.length ? window.scroller.scrollTo(value, 0, 0) : window.scroller.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => this.scroll.update());
    ScrollTrigger.refresh();
  }


  hero() {
    gsap.from('.hero-section', { duration: 2, delay: 1, filter: "invert(1)" })
  }


  init() {
    this.tl = gsap.timeline({})

    //ScrollTrigger.create({
    //    trigger: ".biographie",
    //    start: "top top",
    //        end: "bottom bottom",
    //    pin: true,
    //    pinSpacing:false
    //  }), 

    document.querySelectorAll(".cita .content span").forEach(((item) => {
      item.classList.remove("effet1", "effet2", "effet3", "effet4")
    })), document.querySelectorAll(".cita .content span").forEach(((item) => {
      item.classList.add("effet" + parseInt(Math.floor(4 * Math.random()) + 1))
    })), document.querySelectorAll(".cita").forEach(((item) => {
      this.tl.to(item.querySelector(".flexbis"), {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: item,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: item.querySelector(".flex")
        },
        y: "-5%",
        ease: "none"
      })
    })), document.querySelectorAll(".effet1").forEach(((item) => {
      this.tl.to(item, {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: item.closest(".cita"),
          start: "top 0%",
          end: "top -40%",
          scrub: true
        },
        opacity: 0,
        ease: "none"
      })
    })), document.querySelectorAll(".effet2").forEach(((item) => {
      this.tl.to(item, {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: item.closest(".cita"),
          start: "top -20%",
          end: "top -60%",
          scrub: true
        },
        opacity: 0,
        ease: "none"
      })
    })), document.querySelectorAll(".effet3").forEach(((item) => {
      this.tl.to(item, {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: item.closest(".cita"),
          start: "top -40%",
          end: "top -80%",
          scrub: true
        },
        opacity: 0,
        ease: "none"
      })
    })), document.querySelectorAll(".effet4").forEach(((item) => {
      this.tl.to(item, {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: item.closest(".cita"),
          start: "top -60%",
          end: "top -100%",
          scrub: true
        },
        opacity: 0,
        ease: "none"
      })
    }));
  }

  sect2() {
    gsap.to(".debut", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".second-sec-title",
        start: "bottom 20%",
        end: "bottom 0%",
        scrub: true,
        markers: false,
      },
      alpha: 1,
      ease: "none"
    })

    this.splitedSecondSecTitle =


      gsap.timeline({
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: ".second-sec-title",
          start: "top center",
          end: "top center",
          markers: false
        }
      })
        .from(".second-sec-title", { alpha: 0, duration: 1, ease: "none" })


    //gsap.to(".debut", {
    //    scrollTrigger: {
    //      trigger: ".innerCita2",
    //      start: "bottom bottom",
    //      end: "bottom 0%",
    //      scrub: true,
    //    },
    //    opacity: 0,
    //    ease: "none",
    //    immediateRender: false
    //  });


    ScrollTrigger.create({
      scroller: "[data-scroll-container]",
      trigger: ".music-section",
      start: "top-=25% bottom",
      end: "top top",
      pin: ".debut",
      markers: false
    });
  }

  sect3() {
    gsap.to(".truth .mot", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".truth .repere",
        start: "top 50%",
        end: "+=" + 2 * window.innerHeight + "px",
        pin: ".truth",
        scrub: true,
        markers: false
      },
      scale: 3.4,
      x: "0%",
      ease: "none"
    })
  }

  sect4() {
    this.splittedText = new SplitText(".text-block-title", { type: "words,chars", reduceWhiteSpace: false });

    console.log(this.splittedText)
    gsap.from(this.splittedText.chars, {

      y: 40, alpha: 0, duration: 1, ease: "none", stagger: 0.01,
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".fondNextRec",
        start: "top 60%",
        end: "bottom 60%",
        markers: false,
        preventOverlaps: true,
      }
    })
  }

  sect5() {
    const target = document.querySelector(".text-content-state-block");
    const timeline = gsap
    gsap.from(target.querySelectorAll('.bio')[1], {
      x: '100vw',
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".text-content-state-block",
        scrub: true,
        start: "top 60%",
        end: "bottom 60%",
        markers: false,
      }
    })
    gsap.from(target.querySelectorAll('.bio')[0], {
      x: '-100vw',
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".text-content-state-block",
        scrub: true,
        start: "top 60%",
        end: "bottom 60%",
        markers: false,
      }
    })

  }

  sect6() {
    const scrollingHorizontal = gsap.to(".people", {
      scrollTrigger: { scroller: "[data-scroll-container]", trigger: ".people", end: "+=" + (document.querySelector(".people").offsetWidth - window.innerWidth), scrub: true, pin: true },
      x: -document.querySelector(".people").offsetWidth + window.innerWidth + "px",
      willChange: "transform",
      ease: "none",
    });

    gsap.set('.people span', { transformOrigin: "50% 50%" })

    setTimeout(() => {
      document.querySelectorAll(".people span").forEach((textitem) => {
        let randomArrayPosition = this.getRandom([-40, 60, -80, 50], 1);
        console.log(randomArrayPosition)
        var leftPosition = textitem.getBoundingClientRect().left - window.innerWidth;
        gsap.fromTo(textitem, { scale: 0.5, y: `${randomArrayPosition}%` }, {
          y: 0, willChange: "auto", scale: 1, ease: "elastic.inOut", scrollTrigger: {
            scroller: "[data-scroll-container]", trigger: ".people", start: "top top-=" + leftPosition, end: "+=" + 0.6 * window.innerWidth, scale: 1, scrub: true, containerAnimation: scrollingHorizontal
          },
        });
      });
      document.querySelectorAll(".horizontal-text-anim-itemretion .mot").forEach((function (item) {
        console.log('first')
        var leftPosition = item.getBoundingClientRect().left - 1.25 * window.innerWidth;
        gsap.to(item, {
          scrollTrigger: {
            scroller: "[data-scroll-container]",
            trigger: ".people",
            start: "top top-=" + leftPosition,
            end: "+=" + window.innerWidth,
            scrub: true,
            containerAnimation: scrollingHorizontal
          },
          x: '-10%',
          scale: 1,
          ease: "none",
          willChange: "transform",
          immediateRender: false
        })
      }))
    }, 0);




  }

  menu() {
    document.querySelector('.toMenu').addEventListener('click', (e) => {
      e.preventDefault()
      console.log('click')
      //document.querySelector('#menu').classList.toggle('active')
      gsap.timeline().set('#menu', { display: 'flex', opacity: 0 }).to('#menu', { opacity: 1, duration: 0.5, ease: "none" })
    })
    document.querySelector('.toClose').addEventListener('click', () => {
      //document.querySelector('#menu').classList.toggle('active')
      gsap.timeline().to('#menu', { opacity: 0, duration: 0.5, ease: "none" })
        .set('#menu', { display: 'none' })
    })
  }

  lastSection() {


    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      var textItem = [];
      document.querySelectorAll(".mot1 span").forEach((function (item) {
        return textItem.push(item)
      })), textItem.reverse();
      var textItem2 = [];
      document.querySelectorAll(".mot2 span").forEach((function (item) {
        return textItem2.push(item)
      })), textItem2.reverse();
      var i = 0;
      textItem.forEach((function (item) {
        gsap.to(item, {
          scrollTrigger: {
            scroller: "[data-scroll-container]",
            trigger: ".bottom-block-text-wrapper",
            start: "top -50%",
            end: "top -" + 1.2 * window.innerHeight + "-=" + i,
            scrub: true
          },
          y: "-250%",
          ease: "none"
        }), i += .48 * window.innerHeight
      }));
      var j = 0;
      textItem2.forEach((function (item) {
        gsap.to(item, {
          scrollTrigger: {
            scroller: "[data-scroll-container]",
            trigger: ".bottom-block-text-wrapper",
            start: "top -50%",
            end: "top -" + 1.2 * window.innerHeight + "-=" + j,
            scrub: true
          },
          y: "-250%",
          ease: "none"
        }), j += .48 * window.innerHeight
      }))
      gsap.to(".truth2 .mot", {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: ".truth2 .repere",
          start: "top 80%",
          end: "+=" + 2 * window.innerHeight + "px",
          pin: ".pin-intraction-box",
          scrub: true,
        },
        scale: window.innerWidth < 768 ? 4 : 8.55,
        x: window.innerWidth < 768 ? "-0%" : "-380%",
        marginRight: '0',
        y: window.innerWidth < 768 ? "0%" : "200%",
        transformOrigin: "100%% 100%",
        ease: "none"
      })
    })
  }


  getRandom(arr, n) {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }


  ResizeObserverWatch() {
    new ResizeObserver(() => {
      ScrollTrigger.refresh();
    }).observe(document.querySelector("#smooth-wrapper"));
  }
}



document.addEventListener('DOMContentLoaded', () => {
  new Animation();
});