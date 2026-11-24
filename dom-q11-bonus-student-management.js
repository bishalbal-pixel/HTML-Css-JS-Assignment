function addStudent() {
  let name = document.getElementById("name").value;
  let roll = document.getElementById("roll").value;
  let section = document.getElementById("section").value;
  let age = document.getElementById("age").value;
  let address = document.getElementById("address").value;
  let phone = document.getElementById("phone").value;
  let msg = document.getElementById("msg");

  // check empty fields
  if (name == "" || roll == "" || section == "" || age == "" || address == "" || phone == "") {
    msg.textContent = "Please fill all fields";
    return;
  }

  // check age
  if (age <= 0) {
    msg.textContent = "Age must be greater than 0";
    return;
  }

  // make new row
  let row = document.createElement("tr");
  let data = [roll, name, section, age, address, phone];

  for (let i = 0; i < data.length; i++) {
    let td = document.createElement("td");
    td.textContent = data[i];
    row.appendChild(td);
  }

  // delete button
  let td = document.createElement("td");
  let btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.onclick = function () {
    row.remove();
  };
  td.appendChild(btn);
  row.appendChild(td);

  document.getElementById("table").appendChild(row);

  msg.textContent = "Student added successfully!";
  clearForm();
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("roll").value = "";
  document.getElementById("section").value = "";
  document.getElementById("age").value = "";
  document.getElementById("address").value = "";
  document.getElementById("phone").value = "";
}
