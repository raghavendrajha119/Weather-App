const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
    // const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    // console.log(data)
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>    
    `
    weather1.innerHTML = `
        <div>
            <p>LATITUDE: ${data.coord.lat} °</p>
            <p>LONGITUDE: ${data.coord.lon} °</p>
        </div> 
        <div>
            <p>HUMIDITY: ${data.main.humidity} %</p>
            <p>PRESSURE: ${data.main.pressure} bar</p>
        </div> 
        <div>
            <p>TEMPERATURE MAX: ${data.main.temp_max} ℃</p>
            <p>TEMPERATURE MIN: ${data.main.temp_min} ℃</p>
        </div>
        
        
              
    `
    
    
}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)