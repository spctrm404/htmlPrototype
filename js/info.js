const introLottie = document.querySelector('#lottie-intro');
lottie.loadAnimation({
  container: introLottie,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../asset/frontBracket/frontBracket.json',
});

// const slides = document.querySelectorAll('.each');
// let pslideIdx = -1;
// let pscroll = 0;
// let ticking = false;
// const padding = 10;
// const scrollTo = (slideIdx) => {
//   console.log(slideIdx);
//   while (slides[slideIdx].getBoundingClientRect().y > 1) {
//     let delta = 0 - slides[slideIdx].getBoundingClientRect().y;
//     slides[slideIdx].scrollTop =
//       slides[slideIdx].getBoundingClientRect().y + 0.5 * delta;
//   }
//   if (slides[slideIdx].getBoundingClientRect().y <= 1) {
//     slides[slideIdx].scrollTop = 0;
//   }
// };

// const doSomething = (scroll) => {
//   console.log('A');
//   let isScrollDown = false;
//   if (scroll > pscroll) isScrollDown = true;
//   const clientH = document.documentElement.clientHeight;
//   let slideIdx = pslideIdx;
//   let none = true;
//   slides.forEach((slide, idx) => {
//     const top = slide.getBoundingClientRect().y;
//     const bot =
//       slide.getBoundingClientRect().y + slide.getBoundingClientRect().height;
//     let isInView;
//     if (isScrollDown) {
//       isInView = top < clientH - padding && top > 0 + padding;
//       if (isInView) {
//         none = false;
//         slideIdx = Math.max(slideIdx, idx);
//       }
//     } else {
//       isInView = bot < clientH - padding && bot > 0 + padding;
//       if (isInView) {
//         none = false;
//         slideIdx = Math.min(slideIdx, idx);
//       }
//     }
//   });
//   if (none) {
//     slideIdx = -1;
//   }
//   if (slideIdx >= 0 && slideIdx < slides.length && slideIdx != pslideIdx) {
//     console.log('B');
//     setTimeout(scrollTo(slideIdx), 1);
//   }
//   pslideIdx = slideIdx;
//   pscroll = scroll;
// };
// document.addEventListener('scroll', (e) => {
//   const scroll = window.pageYOffset;
//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       doSomething(scroll);
//       ticking = false;
//     });
//     ticking = true;
//   }
// });
