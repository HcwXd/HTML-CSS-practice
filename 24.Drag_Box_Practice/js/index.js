function AllowDrop(event) {
  event.preventDefault();
}

function Drag(event) {
  event.dataTransfer.setData("text", event.currentTarget.id);
}

function Drop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  event.currentTarget.appendChild(document.getElementById(data));
}