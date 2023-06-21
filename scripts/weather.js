const currentTemp = document.querySelector('.current-temp');
const weatherIcon = document.querySelector('.weather-icon');
const captionDesc = document.querySelector('figcaption');

const APIkey = 'e2cb23d08e69f4d7349c5c0abac192ad';
const lat = '43.825386'
const long = '-111.792824'

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}&units=imperial`


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

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data)
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();