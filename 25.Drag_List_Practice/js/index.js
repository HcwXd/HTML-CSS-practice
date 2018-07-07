const container = document.querySelector(".container");

function addHandler() {
  let item_collection = document.querySelectorAll(".item");
  item_collection.forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('drop', handleDrop);
    item.addEventListener('dragend', handleDragEnd);
  });
}


let dragItem = null;
addHandler();

function handleDragStart(e) {
  dragItem = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.outerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  this.classList.add('overTop');
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDragLeave(e) {
  this.classList.remove('overTop');
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (dragItem != this) {
    this.parentNode.removeChild(dragItem);
    let dropHTML = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin', dropHTML);
    let dropElem = this.previousSibling;
    addHandler(dropElem);
  }
  this.classList.remove('overTop');
  return false;
}

function handleDragEnd(e) {
  this.classList.remove('overTop');
}