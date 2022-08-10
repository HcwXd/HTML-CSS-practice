const container = document.querySelector('.container');

let lenMax = 1000;
let lenDiff = 100;
let degMax = 360;
let degDiff = 5;
let lenMaxIncr = 1;
let lenDiffIncr = 1;
let degMaxIncr = 1;
let degDiffIncr = 1;

const sig = `${lenMax}:${lenDiff}:${degMax}:${degDiff}:${lenMaxIncr}:${lenDiffIncr}${degMaxIncr}${degDiffIncr}`;

setInterval(() => {
  container.innerHTML = '';
  lenMax += lenMaxIncr;
  lenDiff += lenDiffIncr;
  degMax += degMaxIncr;
  degDiff += degMaxIncr;
  for (let len = 0; len < lenMax; len += lenDiff) {
    for (let deg = 0; deg < degMax; deg += degDiff) {
      const box = document.createElement('div');
      box.className = `box`;
      box.style.transform = `translate(-50%, -50%) rotate(${deg}deg)`;
      box.style.width = `${len}px`;
      box.style.height = `${len}px`;
      box.style.borderColor = `rgb(${rc()},${rc()},${rc()})`;

      container.appendChild(box);
    }
  }
}, 100);

function rc() {
  return `${Math.floor(Math.random() * 100) + 100}`;
}
