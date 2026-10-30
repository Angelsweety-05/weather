async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY'; // Replace this with your free OpenWeather API key
    
    if (city === '') {
        alert('Please enter a city name!');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert('City not found!');
            return;
        }

        document.getElementById('cityName').innerText = data.name + ", " + data.sys.country;
        document.getElementById('temp').innerText = `Temperature: ${data.main.temp} °C`;
        document.getElementById('description').innerText = `Condition: ${data.weather[0].description}`;
    } catch (error) {
        alert('Failed to fetch weather data!');
    }
}