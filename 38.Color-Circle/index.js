const pin = document.querySelector('.container');
const pinHTML = pin.innerHTML;
pin.remove();

for (let dy = 0; dy < 10; dy++) {
  for (let idx = 0; idx < 20; idx++) {
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = `${idx * 5 + dy * 10}%`;
    container.style.top = `${idx * 5}%`;
    container.style.transform = 'translate(-50%, -50%)';
    container.innerHTML = pinHTML;
    console.log(pinHTML);
    document.body.appendChild(container);
  }
}
