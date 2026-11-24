function addItem() {
  let item = document.getElementById("item").value;

  let li = document.createElement("li");
  li.textContent = item;

  document.getElementById("list").appendChild(li);
  document.getElementById("item").value = "";
}
