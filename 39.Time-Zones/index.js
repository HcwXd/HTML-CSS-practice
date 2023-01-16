const container = document.querySelector('.container');

const gridLen = 50;

for (let rowIdx = 0; rowIdx < gridLen; rowIdx++) {
  const rowContainer = document.createElement('div');
  container.appendChild(rowContainer);
  rowContainer.className = `rowContainer`;
  for (let colIdx = 0; colIdx < gridLen; colIdx++) {
    const box = document.createElement('div');
    box.className = `box`;
    rowContainer.appendChild(box);
    box.textContent = '1';
    setInterval(() => {
      box.textContent = +box.textContent == 9 ? 0 : +box.textContent + 1;
      const trans = (+box.textContent * 9 + 19) / 100;
      box.style.color = `rgba(255,0,0, ${trans})`;
    }, rc() * 100 + 100);
  }
}

function rc() {
  return `${Math.floor(Math.random() * 100)}`;
}
