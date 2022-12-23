const API_KEY = '8f4d1b6deac8c44fd2d6b3aa0aa41c78';

// Get location of city in terms of longitude and latitude
async function getLocation(city) {
    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`);
    let json = await response.json();
    if (json.length === 0) {
        throw Error("Invalid City ");
    }
    let obj = {
        'lon':json[0].lon,
        'lat':json[0].lat
    };
    return obj;
}

async function getWeatherPromise(city) {
    try {
        let weatherObj = await getLocation(city);
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${weatherObj.lat}&lon=${weatherObj.lon}&appid=${API_KEY}&units=metric`);
        let json = await response.json();
        return json.main;
    }  catch(e) {
        alert(e);
        return false;
    }
}

export default getWeatherPromise