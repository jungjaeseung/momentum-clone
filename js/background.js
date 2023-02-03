const body = document.querySelector("body");
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage);
body.style.background = `url(./img/${chosenImage}), rgba(0,0,0,0.2)`;
body.style.backgroundSize = "auto";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundBlendMode = "darken";
