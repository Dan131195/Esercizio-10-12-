// ESERCIZIO 1

const formName = document.getElementById("formName");
const namesList = document.getElementById("namesList");
const myName = document.getElementById("name");
const btnAddaName = document.getElementById("addName");
const btnDeleteName = document.getElementById("deleteName");

let names = [];

btnAddaName.addEventListener("click", function (e) {
  e.preventDefault();
  addName();
  storageName();
  printName();
  formName.reset();
});

btnDeleteName.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.clear();
  namesList.innerHTML = "";
  names = [];
  console.log(names);
});

function addName() {
  names.push(myName.value);
  console.log(names);
}

function storageName() {
  localStorage.setItem("username", JSON.stringify(names));
}

function printName() {
  namesList.innerHTML = "";
  for (let i = 0; i < names.length; i++) {
    let newLi = document.createElement("li");
    newLi.innerText = `Username: ${names[i]}`;
    namesList.appendChild(newLi);
  }
}

// ESERCIZIO 2

