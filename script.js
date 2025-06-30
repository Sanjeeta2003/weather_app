async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "cf7cba4c5dfdafabc086da8482acc240"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("temp").textContent = `🌡️ Temp: ${data.main.temp}°C`;
    document.getElementById("humidity").textContent = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById("weatherResult").classList.remove("d-none");
  } catch (error) {
    alert(error.message);
    document.getElementById("weatherResult").classList.add("d-none");
  }
}
