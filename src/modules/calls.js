const searchInput = document.getElementById("location");
const submitButton = document.getElementById("glassContainer");
const locationName = document.getElementById("locationName");
const dateAndTime = document.getElementById("dateAndTime");
const forecastTitle = document.getElementById("forecastTitle");
let selectedTemp = "f";

const elementNames = [
  "Wind",
  "Humidity",
  "UV Index",
  "Visibility",
  "Cloudiness",
  "Chance of Rain",
  "Sunrise",
  "Sunset",
  "Max Temperature",
];

async function retrieveWeather(location) {
  const fetchedForecastData = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=a016d2051be44e2f9be171214241005&q=${location}&days=3`
  );

  const forecastData = await fetchedForecastData.json();
  return forecastData;
}

function setForecastDays(forecast) {
  for (let i = 1; i < 4; i++) {
    let day = document.getElementById(`day${i}`);
    let temp = document.getElementById(`temp${i}`);
    let nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + i);

    console.log(`day${i} element:`, day);

    const options = {
      weekday: "long",
    };

    let weekday = nextDate.toLocaleDateString(undefined, options);
    day.textContent = weekday;

    temp.textContent = `${
      forecast.forecast.forecastday[i - 1].day["avgtemp_" + selectedTemp]
    }°${selectedTemp.toUpperCase()}`;

    if (day.classList.contains("hidden")) {
      day.classList.remove("hidden");
    }

    if (temp.classList.contains("hidden")) {
      temp.classList.remove("hidden");
    }
  }
}

function setLocationInformation(forecast) {
  locationName.textContent = `${forecast.location.name}, ${forecast.location.region}`;
  dateAndTime.textContent = new Date();
  let upperTemp = "°" + selectedTemp.toUpperCase();

  document.getElementById("currentTemp").textContent = `${
    forecast.current["temp_" + selectedTemp]
  }${upperTemp}`;
  document.getElementById(
    "weatherDesc"
  ).textContent = `${forecast.current.condition.text}`;
  document.getElementById("feelsLike").textContent = `Feels like ${
    forecast.current["feelslike_" + selectedTemp]
  }${upperTemp}`;
  document.getElementById(
    "windValue"
  ).textContent = `${forecast.current.wind_mph}mph`;
  document.getElementById(
    "humidityValue"
  ).textContent = `${forecast.current.humidity}%`;
  document.getElementById("uvValue").textContent = `${forecast.current.uv}`;
  document.getElementById(
    "visibilityValue"
  ).textContent = `${forecast.current.vis_miles}m`;
  document.getElementById(
    "cloudValue"
  ).textContent = `${forecast.current.cloud}%`;
  document.getElementById(
    "rainValue"
  ).textContent = `${forecast.forecast.forecastday[0].day.daily_chance_of_rain}%`;
  document.getElementById(
    "riseValue"
  ).textContent = `${forecast.forecast.forecastday[0].astro.sunrise}`;
  document.getElementById(
    "setValue"
  ).textContent = `${forecast.forecast.forecastday[0].astro.sunset}`;
  document.getElementById("maxTempValue").textContent = `${
    forecast.forecast.forecastday[0].day["maxtemp_" + selectedTemp]
  }${upperTemp}`;

  setElementTitles();
  setForecastDays(forecast);
}

function setElementTitles() {
  for (i = 0; i < 9; i++) {
    document.getElementById(`title${i}`).textContent = elementNames[i];
  }

  forecastTitle.textContent = "Forecast";
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  retrieveWeather(searchInput.value).then((data) => {
    console.log(data);
    setLocationInformation(data);
  });
});

(function changeTemperature() {
  const celsiusButton = document.getElementById("celsius");
  const fahrenheitButton = document.getElementById("fahrenheit");

  window.addEventListener("load", () => {
    fahrenheitButton.style.border = "2px solid white";
  });

  fahrenheitButton.addEventListener("click", () => {
    fahrenheitButton.style.border = "2px solid white";
    celsiusButton.style.border = "2px solid rgb(2, 121, 177)";
    selectedTemp = "f";
    submitButton.click();
  });

  celsiusButton.addEventListener("click", () => {
    celsiusButton.style.border = "2px solid white";
    fahrenheitButton.style.border = "2px solid rgb(2, 121, 177)";
    selectedTemp = "c";
    submitButton.click();
  });
})();
