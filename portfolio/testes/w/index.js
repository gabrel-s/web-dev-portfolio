let fname = document.querySelector("#fname").value;
let lname = document.querySelector("#lname").value;
let bttn = document.querySelector("#bttn");
let users = ["wqe"];

function createUser() {
  users.push(fname);
  console.log(users);
  //console.log(Arry.arrayIs());
}

bttn.addEventListener("click", function() { createUser() }, false);
