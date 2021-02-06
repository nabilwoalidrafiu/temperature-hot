document.getElementById("search").addEventListener('click', function () {
    showWeather()
})

function showWeather() {
    let cityname = document.getElementById("search-box").value
    console.log(cityname);
    fetch( `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&APPID=9586a46f44603abaac0290620deb663c`)
        // api.openweathermap.org/data/2.5/find?q=London&units=metric
        .then(response => response.json())
        .then(data => {
            // console.log(data)

            // city name
            const city = data.name;
            // console.log(city);
            document.getElementById("city").innerText = city;

            // temperature
            const Temperature = data.main.temp;
            document.getElementById("temperature").innerText = Temperature + "\xB0C";

            // feels like
            const feelsLike = data.main.feels_like;
            document.getElementById("feels-like").innerText = feelsLike + "\xB0C";
            // condition
            const condition = data.weather[0].main;
            // console.log(condition);
            document.getElementById("condition").innerText = condition;

            // icon
            const icon = document.getElementById("icon");
            const iconimage = data.weather[0].icon;
            // console.log(icon);
            icon.src = `https://openweathermap.org/img/w/${iconimage}.png`
        })
}
