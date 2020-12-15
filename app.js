const intro = document.querySelector('.intro');
const video = intro.querySelector('.video');
const text = intro.querySelector('h1');

const section = document.querySelector('section');
const end = section.querySelector('h1');

//Scroll Magic
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 11000,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelAmount = 0.1;
let scrollPos = 0;
let delay = 0;

scene.on("update", e => {
  scrollPos = e.scrollPos / 1000;
});

setInterval(() => {
  // delay += (scrollPos - delay) * accelAmount;
  // video.currentTime = delay;
  video.currentTime = scrollPos;
}, 41.6);