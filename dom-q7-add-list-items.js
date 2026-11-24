// DOM Q7: Add the entered item to the unordered list

function addItem() {
  let input = document.getElementById("itemInput");
  let message = document.getElementById("message");
  let itemText = input.value.trim();

  if (itemText === "") {
    message.textContent = "Please enter an item.";
    return;
  }

  message.textContent = "";

  let li = document.createElement("li");
  li.textContent = itemText;
  document.getElementById("itemList").appendChild(li);

  input.value = "";
  input.focus();
}
