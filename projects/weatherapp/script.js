document.getElementById("getWeather").addEventListener("click", function () {
  const city = document.getElementById("cityInput").value;
  const apiKey = "645d6cdb295c1dc821f178b27bd04db6"; // Your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${Chittagong}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const weatherInfo = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
      document.getElementById("weatherInfo").innerHTML = weatherInfo;
    })
    .catch((error) => {
      document.getElementById(
        "weatherInfo"
      ).innerHTML = `<p>${error.message}</p>`;
    });
});
