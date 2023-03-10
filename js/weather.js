const API_KEY = "513e9a0a6d518f61c20b93ff47f79249";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //const mylat = 37.1914;
  //const mylon = 127.2194;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      temp.innerText = `${data.main.temp}℃`;
      weather.innerText = `${data.name}  / ${data.weather[0].main} `;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
