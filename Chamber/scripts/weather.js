const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast-container');

// URLs для текущей погоды и прогноза с использованием units=imperial
const apiKey = '50ad748788082bc224446bc1c45d9f72';
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=49.75&lon=6.63&units=imperial&appid=${apiKey}`;

async function apiFetch() {
    try {
        const [currentResponse, forecastResponse] = await Promise.all([
            fetch(currentWeatherUrl),
            fetch(forecastUrl)
        ]);
        if (currentResponse.ok && forecastResponse.ok) {
            const currentData = await currentResponse.json();
            const forecastData = await forecastResponse.json();
            console.log(currentData, forecastData); // testing only
            displayResults(currentData, forecastData); // uncomment when ready
        } else {
            throw Error('Error fetching data');
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(currentData, forecastData) {
    // Display current weather
    currentTemp.innerHTML = `${currentData.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${currentData.weather[0].icon}.png`;
    let desc = currentData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;

    // Display 3-day forecast
    const forecast = forecastData.list.filter(item => {
        const date = new Date(item.dt * 1000);
        const hours = date.getHours();
        return hours === 12; // Выбираем прогноз на 12 часов для каждого дня
    }).slice(0, 3); // Получаем прогноз на следующие 3 дня

    forecastContainer.innerHTML = ''; // Clear previous forecast
    forecast.forEach(day => {
        const forecastDiv = document.createElement('div');
        forecastDiv.classList.add('forecast-item');
        forecastDiv.innerHTML = `
            <h3>${new Date(day.dt * 1000).toLocaleDateString()}</h3>
            <p>Temp: ${day.main.temp}&deg;F</p>
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

