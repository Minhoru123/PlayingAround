function getWeather() {
    var locationInput = document.getElementById('locationInput');
    var location = locationInput.value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=83dbd551a8ca03332fd7eeec5a3af321')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayWeather(data);
        })
        .catch(function (error) {
            console.log('Error:', error);
        });

    locationInput.value = '';
}

function displayWeather(data) {
    var weatherContainer = document.getElementById('weatherContainer');
    weatherContainer.innerHTML = '';

    var cityName = document.createElement('h2');
    cityName.textContent = data.name;

    var weatherDescription = document.createElement('p');
    weatherDescription.textContent = data.weather[0].description;

    var temperature = document.createElement('p');
    temperature.textContent = 'Temperature: ' + (data.main.temp - 273.15).toFixed(2) + '°C';

    var humidity = document.createElement('p');
    humidity.textContent = 'Humidity: ' + data.main.humidity + '%';

    var windSpeed = document.createElement('p');
    windSpeed.textContent = 'Wind Speed: ' + data.wind.speed + ' m/s';

    weatherContainer.appendChild(cityName);
    weatherContainer.appendChild(weatherDescription);
    weatherContainer.appendChild(temperature);
    weatherContainer.appendChild(humidity);
    weatherContainer.appendChild(windSpeed);
}
