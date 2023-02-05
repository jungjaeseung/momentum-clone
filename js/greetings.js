const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const toDoForms = document.querySelector("#todo-form");
const mfTitle = document.querySelector(".mf-title");
const mfForm = document.querySelector(".main-focus");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

let greet = "";
function setGreet() {
  const date = new Date();
  const hours = date.getHours();
  console.log(hours);
  if (hours >= 7 && hours < 12) {
    greet = "Good morning";
  } else if (hours >= 12 && hours < 17) {
    greet = "Good afternoon";
  } else if (hours >= 17 && hours < 22) {
    greet = "Good evening";
  } else {
    greet = "Good night";
  }
  greeting.innerText = `${greet}, ${savedUsername}!`;
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loginInput.classList.add(HIDDEN_CLASSNAME);
  clock.classList.remove(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  mfTitle.classList.remove(HIDDEN_CLASSNAME);
  mfForm.classList.remove(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `${greet}, ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  mfTitle.classList.remove(HIDDEN_CLASSNAME);
  mfForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loginInput.classList.add(HIDDEN_CLASSNAME);
  clock.classList.remove(HIDDEN_CLASSNAME);
  toDoForms.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings();
}

setGreet();
setInterval(setGreet, 60000);
