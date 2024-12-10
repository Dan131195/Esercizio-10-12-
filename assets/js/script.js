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

const Timer = function () {
  this.seconds = 0;
  this.interval = null;

  
  this.start = function () {
    this.interval = setInterval(this.update.bind(this), 1000);
  };

  
  this.update = function () {
    this.seconds++;
    document.getElementById(
      "timer"
    ).innerText = `Tempo: ${this.seconds} secondi`;
    sessionStorage.setItem("time", this.seconds);
  };

  this.total_seconds = function () {
    return this.minutes * 60 + this.seconds;
  };
};

const clock = new Timer();
clock.start();
