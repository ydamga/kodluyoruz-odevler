const newTask = document.querySelector("#task");
const list = document.querySelector("#list");

var toDo;

newTask.addEventListener("onClick", newElement);

function check(obj) {
  obj.classList.toggle("checked");
}

function deleteItem(obj) {
  obj.parentElement.remove();
}

function addItem(text) {
  let liDom = document.createElement("li");
  liDom.onclick = function () {
    check(this);
  };
  liDom.className = "item";
  liDom.textContent = text;
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.onclick = function () {
    deleteItem(this);
  };
  span.appendChild(txt);
  liDom.appendChild(span);
  return liDom;
}

function newElement() {
  toDo = newTask.value;
  toDo = toDo.trim();
  if (toDo !== "") {
    list.appendChild(addItem(toDo));
    newTask.value = "";
    $(".success").toast("show");
  } else {
    $(".error").toast("show");
  }
}
