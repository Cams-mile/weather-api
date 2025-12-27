/* ================= CONFIG ================= */
const API_KEY = "6fcb379c5599071df74a3c9fff97040d"; // palitan mo sa local run
const BASE_URL = "https://api.openweathermap.org/data/2.5";

/* ================= DOM ================= */
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const result = document.getElementById("result");
const forecastBox = document.getElementById("forecast");

/* ================= EVENT ================= */
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (!city) {
    showError("Please enter a city name.");
    return;
  }
  fetchWeather(city);
});

/* ================= FUNCTIONS ================= */

async function fetchWeather(city) {
  showLoading(true);
  clearError();
  result.classList.add("hidden");
  forecastBox.innerHTML = "";

  try {
    const res = await fetch(
      `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (res.status === 401) throw new Error("Invalid API key.");
    if (res.status === 404) throw new Error("City not found.");

    const data = await res.json();
    displayWeather(data);

    const forecastRes = await fetch(
      `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    const forecastData = await forecastRes.json();
    displayForecast(forecastData);

  } catch (err) {
    showError(err.message);
  } finally {
    showLoading(false);
  }
}

function displayWeather(data) {
  result.classList.remove("hidden");

  document.getElementById("cityName").textContent = data.name;
  document.getElementById("condition").textContent =
    data.weather[0].description;
  document.getElementById("temp").textContent =
    `${data.main.temp} °C`;
  document.getElementById("humidity").textContent =
    `Humidity: ${data.main.humidity}%`;
  document.getElementById("icon").src =
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  /* ===== AUTO DAY / NIGHT ===== */
  const nowUTC = Math.floor(Date.now() / 1000);
  const cityTime = nowUTC + data.timezone;
  const sunrise = data.sys.sunrise;
  const sunset = data.sys.sunset;

  document.body.classList.remove("day", "night");

  if (cityTime >= sunrise && cityTime < sunset) {
    document.body.classList.add("day");
  } else {
    document.body.classList.add("night");
  }
}

function displayForecast(data) {
  const daily = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  );

  daily.forEach(day => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>${new Date(day.dt_txt).toLocaleDateString()}</p>
      <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png">
      <p>${day.main.temp}°</p>
    `;
    forecastBox.appendChild(div);
  });
}

/* Helpers */
function showLoading(show) {
  loading.classList.toggle("hidden", !show);
}

function showError(msg) {
  error.textContent = msg;
}

function clearError() {
  error.textContent = "";
}
