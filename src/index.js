import getWeatherPromise from "./get_weather_promise";

function updateCard(city) {
    let data = getWeatherPromise(city);
    data.then(result => {
        if (result) {
            city = city[0].toUpperCase() + city.slice(1)
            console.log(city)
            divCityName.textContent = city;
            divTemp.textContent = `Temperature: ${result.temp} °C`;
            divOther1.textContent = `Max temp: ${result.temp_max}`;
            divOther2.textContent = `Feels Like ${result.feels_like} °C`;
            divOther3.textContent = `Humidity: ${result.humidity}%`;
        }
    })
}


const divCard = document.querySelector('#weather-card');
const divCityName = document.createElement('div');
const divTemp = document.createElement('div');
const divOther1 = document.createElement('div');
const divOther2 = document.createElement('div');
const divOther3 = document.createElement('div');
const searchBtn = document.getElementById('search-button');
const input = document.getElementById('search');

divCityName.id = 'city-name';
divTemp.id = 'city-temp';

updateCard('Melbourne');

divCard.appendChild(divCityName);
divCard.appendChild(divTemp);
divCard.appendChild(divOther1);
divCard.appendChild(divOther2);
divCard.appendChild(divOther3);

document.body.appendChild(divCard)

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    updateCard(input.value);
    input.value = '';
})