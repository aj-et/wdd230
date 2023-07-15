const currentTemp = document.querySelector('.current-temp');
const weatherIcon = document.querySelector('.weather-icon');
const captionDesc = document.querySelector('figcaption');

const APIkey = 'e2cb23d08e69f4d7349c5c0abac192ad';
const lat = '14.600645466869565'
const long = '120.98154370645699'

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}&units=imperial`
const forecast_url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${APIkey}`

function displayResults(data) {
    const currTemp = data['main']['temp'];
    const weather_icon = data['weather'][0]['icon']
    const weather_desc = data['weather'][0]['description']
    
    const iconsrc = `https://openweathermap.org/img/w/${weather_icon}.png`

    console.log(iconsrc)
    currentTemp.innerHTML = `${currTemp}°F`;
    weatherIcon.setAttribute('src', iconsrc);
    captionDesc.innerHTML = `${weather_desc.charAt(0).toUpperCase() + weather_desc.slice(1)}`;
}

async function fetchForecast() {
    try {
        const response = await fetch(forecast_url);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {
    const forecastItems = data.list.slice(0, 24); // Get the first 24 entries (3 days * 8 entries per day)
    const forecastContainer = document.querySelector('.forecast-container');
    forecastContainer.innerHTML = ''; // Clear the container

    forecastItems.forEach(item => {
        const date = new Date(item.dt_txt);
        const temperature = item.main.temp;
        const weatherIcon = item.weather[0].icon;

        const forecastCard = document.createElement('div');
        forecastCard.classList.add('forecast-card');

        const forecastDate = document.createElement('p');
        forecastDate.textContent = formatDate(date);

        const forecastTemp = document.createElement('p');
        forecastTemp.textContent = `${temperature}°F`;

        const forecastIcon = document.createElement('img');
        forecastIcon.src = `https://openweathermap.org/img/w/${weatherIcon}.png`;

        forecastCard.appendChild(forecastDate);
        forecastCard.appendChild(forecastTemp);
        forecastCard.appendChild(forecastIcon);

        forecastContainer.appendChild(forecastCard);
    });
}

function formatDate(date) {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data)
            displayResults(data);
            fetchForecast();

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();