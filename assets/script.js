var city = document.querySelector(".form-control");
var button = document.querySelector(".btn");
var currentContainer = document.querySelector("#currentWeather");
var today = moment().format("l");
$(document).ready(function(){
    $(document).on("submit", function (event){
        event.preventDefault();

       fetch("https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&&units=imperial&appid=f33477ee6cb130320adcdd14a83733fa")
       .then(function(response){
        return response.json();
       })
       .then(function (data){
        console.log(data);
            var cityName = data.name;
            var weatherIcon =data.weather[0].icon
            var iconURL="https://openweathermap.org/img/wn/"+weatherIcon +"@2x.png"
            var cityEl = document.createElement('h2');
            cityEl.innerHTML =(cityName + " (" + today + ")" + "<img src="+iconURL+">");

            var currentTemp = data.main.temp;
            
            // var convertedTemp = ((currentTemp - 273.15) * 1.80 + 32);
            var tempEl = document.createElement('p')
            tempEl.textContent =("Temp: "+ currentTemp.toFixed(2) + "°F");

            var windSpeed = data.wind.speed;
            var windEl = document.createElement('p');
            windEl.textContent =(windSpeed); 

            var humidity = data.main.humidity;
            var humidityEl = document.createElement('p');
            humidityEl.textContent =("Humidity: " + humidity + "%");


            currentContainer.append(cityEl, tempEl, windSpeed, humidityEl);

        }
       )
    })
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city.value+"&cnt=5&units=imperial&appid=f33477ee6cb130320adcdd14a83733fa")
       .then(function(response){
        return response.json();
       })
       .then(function(forecast){
        console.log(forecast);
            
       })
});