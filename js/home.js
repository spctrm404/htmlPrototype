window.addEventListener('load', () => {
  setTimeout(() => {
    scrollUpBtn.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, 1);
});

const scrollUpBtn = document.querySelector('#scrollUpBtn');
const menuBar = document.querySelector('#menuBar');
scrollUpBtn.addEventListener('click', (e) => {
  menuBar.scrollIntoView({ behavior: 'smooth' });
});

const poster = document.querySelector('#posterContainer');
const homeBtn = document.querySelector('#homeBtn');
homeBtn.addEventListener('click', (e) => {
  poster.scrollIntoView({ behavior: 'smooth' });
});

const posterLottie = document.getElementById('posterLottie');
lottie.loadAnimation({
  container: posterLottie,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/asset/front/front.json',
});
