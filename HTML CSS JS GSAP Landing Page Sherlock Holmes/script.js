//Initialize Lenis Smooth Scroll
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//Register Scroll Trigger plugin

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add('(min-width:750px)', () => {
  gsap.from('.hero div', {
    y: 300,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top 10%',
      scrub: true,
    },
  });

  gsap.from('.title .title-1', {
    xPercent: 80,
    scrollTrigger: {
      trigger: '.title',
      start: 'top center',
      scrub: true,
    },
  });
  gsap.from('.title .title-2', {
    xPercent: -80,
    scrollTrigger: {
      trigger: '.title',
      start: 'top center',
      scrub: true,
    },
  });

  const icons = gsap.utils.toArray('.icon');
  icons.forEach((icon) => {
    gsap.to(icon, {
      scale: 1.5,
      scrollTrigger: {
        scrub: true,
        trigger: icon,
        start: 'top 80%',
        toggleActions: 'restart none none reset',
        markers: true,
      },
    });
  });

  gsap.to('.img-1', {
    top: 0,
    left: window.innerWidth > 1200 ? '24.5vw' : 0,
    opacity: 1,
    borderRadius: 0,
    scrollTrigger: {
      trigger: '.split-image',
      start: 'top',
      end: '+=1500',
      scrub: true,
      pin: true,
    },
  });
  gsap.to('.img-2', {
    top: 0,
    right: window.innerWidth > 1200 ? '24.5vw' : 0,
    opacity: 1,
    borderRadius: 0,
    scrollTrigger: {
      trigger: '.split-image',
      start: 'top',
      end: '+=1500',
      scrub: true,
    },
  });
});
