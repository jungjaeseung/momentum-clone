const mainFocusForm = document.querySelector(".main-focus");
const mainFocusInput = document.querySelector("#main-focus-input");
const mainFocusDiv = document.querySelector("#main-focus-div");
const mainFocusTitle = document.querySelector(
  ".main-focus-container > span:first-child"
);

const date = new Date();
const day = date.getDate();

let mainFocus = {};
let isChecked = false;

const MAIN_FOCUS_KEY = "mainFocus";
const ISCHECKED_KEY = "isChecked";

function saveIsChecked() {
  localStorage.setItem(ISCHECKED_KEY, true);
}
function saveMainFocus() {
  localStorage.setItem(MAIN_FOCUS_KEY, JSON.stringify(mainFocus));
}

function clearMainFocus(span, checkbox) {
  console.log("clicked");
  span.style.textDecoration = "line-through";
  checkbox.disabled = true;
  saveIsChecked();
}

function paintMainFocus(mainFocus) {
  const span = document.createElement("span");
  span.classList.add("mainfocus");
  span.innerText = mainFocus.text;
  const checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", () => {
    clearMainFocus(span, checkbox);
  });
  mainFocusDiv.appendChild(checkbox);
  mainFocusDiv.appendChild(span);
}

function handleMFSubmit(e) {
  e.preventDefault();
  const newMainFocus = mainFocusInput.value;
  const newMainFocusObj = {
    text: newMainFocus,
    day: day,
  };
  mainFocus = newMainFocusObj;
  paintMainFocus(newMainFocusObj);
  saveMainFocus();
  mainFocusForm.classList.add("hidden");
  mainFocusTitle.innerHTML = "TODAY";
}
mainFocusForm.addEventListener("submit", handleMFSubmit);

const savedMainFocus = localStorage.getItem(MAIN_FOCUS_KEY);
const savedIsChecked = localStorage.getItem(ISCHECKED_KEY);

if (savedMainFocus !== null) {
  const parsedMainFocus = JSON.parse(savedMainFocus);
  mainFocus = parsedMainFocus;

  if (mainFocus.day == day) {
    paintMainFocus(parsedMainFocus);
    mainFocusForm.classList.add("hidden");
    mainFocusTitle.innerHTML = "TODAY";
    if (savedIsChecked !== null) {
      const parsedIsChecked = JSON.parse(savedIsChecked);
      isChecked = parsedIsChecked;
      const mainFocusCheckbox = document.querySelector(".checkbox");
      const mainFocusSpan = document.querySelector(".mainfocus");
      mainFocusCheckbox.checked = true;
      mainFocusCheckbox.disabled = true;
      mainFocusSpan.style.textDecoration = "line-through";
    }
  } else {
    mainFocus = {};
    saveMainFocus();
    isChecked = false;
    localStorage.setItem(ISCHECKED_KEY, false);
  }
}
