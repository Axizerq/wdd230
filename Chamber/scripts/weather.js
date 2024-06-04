const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast-container');

const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=49.75&lon=6.63&units=imperial&exclude=minutely,hourly,alerts&appid=50ad748788082bc224446bc1c45d9f72';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    // Display current weather
    currentTemp.innerHTML = `${data.current.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`;
    let desc = data.current.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;

    // Display 3-day forecast
    const forecast = data.daily.slice(1, 4); // Get the next 3 days forecast
    forecastContainer.innerHTML = ''; // Clear previous forecast
    forecast.forEach(day => {
        const forecastDiv = document.createElement('div');
        forecastDiv.classList.add('forecast-item');
        forecastDiv.innerHTML = `
            <h3>${new Date(day.dt * 1000).toLocaleDateString()}</h3>
            <p>Temp: ${day.temp.day}&deg;F</p>
            <p>${day.weather[0].description}</p>
        `;
        forecastContainer.appendChild(forecastDiv);
    });
}

apiFetch();

const currentDate = new Date();
const currentDay = currentDate.getDay();

if (currentDay >= 1 && currentDay <= 3) {
    const banner = document.getElementById('banner');
    const closeBtn = document.getElementById('closeBtn');

    banner.style.display = 'block';

    closeBtn.addEventListener('click', () => {
        banner.style.display = 'none';
    });
}