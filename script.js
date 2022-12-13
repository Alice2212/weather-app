const btn = document.querySelector("#submit");
const temps = document.querySelector(".temps");
const humidity = document.querySelector(".humidity");
const weather = document.querySelector(".weather");

const apiKey = "d1d3053bcaf978bfa2d00bda55f06324";

function convertion(val) {
  return (val - 273).toFixed(2);
}

btn.addEventListener("click", function () {
  let searchInput = document.getElementById("city").value;
  // console.log(searchInput);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const tempature = data.main.temp;
      temps.innerHTML = `Temperature: <span>${convertion(tempature)} °C</span>`;
      humidity.innerHTML = `Humidity: ${data.main.humidity}`;
      weather.innerHTML = `Oh!! it's gonna be ${data.weather[0].main}`
    })
    .catch((err) => (temps.innerHTML = `you entered a wrong city ${err}`));
});


 