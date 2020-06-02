let colorIdx = 0;
const container = document.querySelector('.container');
for (let i = 0; i < 20; i++) {
  const col = document.createElement('div');
  for (let j = 0; j < 50; j++) {
    const box = document.createElement('div');
    box.className = `box box${colorIdx}`;
    col.appendChild(box);
  }
  container.appendChild(col);
}

container.addEventListener('click', function () {
  container.innerHTML = '';
  colorIdx++;
  if (colorIdx > 6) colorIdx = 0;
  for (let i = 0; i < 20; i++) {
    const col = document.createElement('div');
    for (let j = 0; j < 50; j++) {
      const box = document.createElement('div');
      box.className = `box box${colorIdx}`;
      col.appendChild(box);
    }
    container.appendChild(col);
  }
});
