gsap.registerPlugin(ScrollTrigger);

const checkpoints = gsap.utils.toArray('.checkpoint');

checkpoints.forEach((checkpoint) => {
  gsap.from(checkpoint.firstElementChild, {
    height: 0,
    scrollTrigger: {
      trigger: checkpoint,
      start: 'center center',
      end: 'bottom+=340 center',
      scrub: true,
    },
  });
});

const checkpointTexts = gsap.utils.toArray('.text');
console.log(checkpointTexts);
checkpointTexts.forEach((text) => {
  gsap.from(text, {
    opacity: 0,
    x: 100,
    // ease: 'power2.inOut',
    esae: 'power.inOut',
    scrollTrigger: {
      start: 'top center+=340',
      end: 'center center+=340',
      scrub: true,
      toggleActions: 'restart none none reverse',
      markers: true,
    },
  });
});

// const moveis = document.querySelectorAll('.images img');

// images.forEach((img, i) => {
//   const checkpoint = img.parentElement.nextElementSibling.children[i];
//   gsap.from(img, {
//     opcaity: 0,
//     zIndex: 0,
//     scrollTrigger: {
//       trigger: checkpoint,
//       start: 'top+=200 center',
//       end: 'bottom+=340 center',
//       toggleActions: 'restart none none reverse',
//     },
//   });
// });
