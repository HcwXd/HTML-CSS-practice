const container = document.querySelector('.container');

for (let len = 0; len < 1000; len += 100) {
  for (let deg = 0; deg < 360; deg += 50) {
    const box = document.createElement('div');
    box.className = `box`;
    box.style.transform = `translate(-50%, -50%) rotate(${deg}deg)`;
    box.style.width = `${len}px`;
    box.style.height = `${len}px`;
    container.appendChild(box);
  }
}
