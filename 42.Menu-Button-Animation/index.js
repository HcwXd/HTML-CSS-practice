// 'use strict';

// const track = document.getElementById('image-track');

// const numOfRow = 9;
// const numOfCol = 29;

// let trackHtml = '';
// let imageIdx = 0;
// for (let rowIdx = 0; rowIdx < numOfRow; rowIdx++) {
//   let rowHtml = '<div class="row">';
//   for (let colIdx = 0; colIdx < numOfCol; colIdx++) {
//     rowHtml += `<img class="image" src="./${imageIdx % 6}.jpg" draggable="false" />`;
//     imageIdx++;
//   }
//   rowHtml += '</div>';
//   trackHtml += rowHtml;
// }
// track.innerHTML = trackHtml;

// const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

// const handleOnUp = () => {
//   track.dataset.mouseDownAt = '0';
//   track.dataset.prevPercentage = track.dataset.percentage;
// };

// const handleOnMove = (e) => {
//   if (track.dataset.mouseDownAt === '0') return;

//   const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
//   const maxDelta = window.innerWidth / 2;

//   const percentage = (mouseDelta / maxDelta) * -100;
//   const nextPercentage = Math.max(
//     Math.min(parseFloat(track.dataset.prevPercentage) + percentage, 0),
//     -100
//   );

//   track.dataset.percentage = nextPercentage;

//   track.animate(
//     {
//       transform: `translate(${nextPercentage}%, -50%)`,
//     },
//     { duration: 1200, fill: 'forwards', easing: 'ease-out' }
//   );

//   for (const image of track.getElementsByClassName('image')) {
//     image.animate(
//       {
//         objectPosition: `${100 + nextPercentage}% center`,
//       },
//       { duration: 1200, fill: 'forwards', easing: 'ease-out' }
//     );
//   }
// };

// /* -- Had to add extra lines for touch events -- */

// window.onmousedown = (e) => handleOnDown(e);

// window.ontouchstart = (e) => handleOnDown(e.touches[0]);

// window.onmouseup = (e) => handleOnUp(e);

// window.ontouchend = (e) => handleOnUp(e.touches[0]);

// window.onmousemove = (e) => handleOnMove(e);

// window.ontouchmove = (e) => handleOnMove(e.touches[0]);
