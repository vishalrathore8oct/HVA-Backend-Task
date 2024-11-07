document.getElementById('city-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const city = document.getElementById('city-input').value;
    fetchWeatherData(city);
});

function fetchWeatherData(city) {
    const apiKey = "5a2835d20040291d1ca4096f6905bc3d"
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                displayError('City not found. Please try again.');
            } else {
                displayCurrentWeather(data);
                return fetch(forecastUrl);
            }
        })
        .then(response => response.json())
        .then(forecastData => {
            displayForecast(forecastData);
        })
        .catch(error => {
            displayError('An error occurred while fetching data.');
        });
}

function displayCurrentWeather(data) {
    const weatherDisplay = document.getElementById('weather-display');
    const { name, main, weather, wind } = data;

    weatherDisplay.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Weather: ${weather[0].description}</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Wind Speed: ${wind.speed} m/s</p>
    `;
}

function displayForecast(data) {
    const forecastDisplay = document.getElementById('forecast-display');
    forecastDisplay.innerHTML = '<h3>5-Day Forecast</h3>';
    
    data.list.forEach((item, index) => {
        if (index % 8 === 0) { // 8 readings per day
            const date = new Date(item.dt * 1000).toLocaleDateString();
            forecastDisplay.innerHTML += `
                <div>
                    <p>Date: ${date}</p>
                    <p>Temperature: ${item.main.temp}°C</p>
                    <p>Weather: ${item.weather[0].description}</p>
                </div>
            `;
        }
    });
}

function displayError(message) {
    const weatherDisplay = document.getElementById('weather-display');
    weatherDisplay.innerHTML = `<p style="color:red;">${message}</p>`;
}
