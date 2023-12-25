const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
// const API = `https://api.openweathermap.org/data/2.5/weather? q=${city}&appid=${API_KEY}&units=metric`

// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")


// 2
const getweather = async(city) => {
    weather.innerHTML = `<h2> Loading...</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showweather(data);
}

// 3
const showweather = (data) => {
    // 4 jab city type kiya us name ki koi city nhi hai to bah answer dega
    if(data.cod == "404"){
        weather.innerHTML = `<h2> City not found <h2/>`
        return;
    }

    console.log(data)
    weather.innerHTML = `
        <div>
            <img src="${data.weather[0].icon}.jpg" height="50px" width="50px" alt="">
        </div>
        <div>
            <h2>${data.main.temp}</h2>
            <h4>${data.weather[0].main}</h4>
        </div>
    `
}

form.addEventListener(
    "submit",
    function(event){
        getweather(search.value)
        event.preventDefault();
    }
)


