const pins = document.querySelectorAll('.pin');
let speed = 2;
setInterval(() => {
  if (speed < 0.04) speed = 2;
  pins.forEach((pin) => (pin.style.animationDuration = `${speed}s`));
  speed /= 2;
}, 2000);
