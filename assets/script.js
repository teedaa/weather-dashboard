var city = document.querySelector(".form-control");
var button = document.querySelector(".btn");
var currentContainer = document.querySelector("#currentWeather");
var today = moment().format("l");
var currentCity = $("#currentCity");
var currentTemperature = $("#currentTemp");
var currentWind = $("#currentWind");
var currentHumidity = $("#currentHumidity");

$(document).ready(function(){

    $(document).on("submit", function (event){
        event.preventDefault();

       fetch("https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&units=imperial&appid=f33477ee6cb130320adcdd14a83733fa")
       .then(function(response){
        return response.json();
       })
       .then(function (data){
        console.log(data);
            var cityName = data.name;
            var weatherIcon =data.weather[0].icon
            var iconURL="https://openweathermap.org/img/wn/"+weatherIcon+"@2x.png"
            $(currentCity).html(cityName + " (" + today + ")" + "<img src="+iconURL+">");
        

            var currentTemp = data.main.temp;
            
            
            // var convertedTemp = ((currentTemp - 273.15) * 1.80 + 32);
            // var tempEl = document.createElement('p')
            // tempEl.textContent =
            $(currentTemperature).html("Temperature: " + currentTemp.toFixed(2) + "°F");
            

            var windSpeed = data.wind.speed;
            // var windEl = document.createElement('p');
            $(currentWind).html("Wind Speed: " + windSpeed ); 
           

            var humidity = data.main.humidity;
            // var humidityEl = document.createElement('p');
            $(currentHumidity).html("Humidity: " + humidity + "%");

            
            // currentContainer.append(cityEl, tempEl, windSpeed, humidityEl);
            var lat = data.coord.lat
            var lon = data.coord.lon

            fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&cnt=5&units=imperial&appid=f33477ee6cb130320adcdd14a83733fa")
               .then(function(response){
                return response.json();
               })
               .then(function(forecast){
                console.log(forecast);

            $("#futureDate1").html(moment().add(1, "day").format("l")); 
            $("#futureTemp1").html("Temperature: " +forecast.list[0].main.temp + "°F");
            $("#futureWind1").html("Wind Speed: " + forecast.list[0].wind.speed + "MPH");
            $("#futureHumidity1").html("Humidity: " + forecast.list[0].main.humidity +"%");
               })
               


            //    for (i=0;i<5;i++){
            //     var futureDate= new Date((response.list[((i+1)*8)-1].dt)*1000).toLocaleDateString();
            //     var weatherIcon= response.list[((i+1)*8)-1].weather[0].icon;
            //     var iconURL="https://openweathermap.org/img/wn/"+weatherIcon+".png";
            //     var futureTemp= response.list[((i+1)*8)-1].main.temp;
            //     var futureHumidity= response.list[((i+1)*8)-1].main.humidity;
            
            //     $("#futureDate"+i).html(date);
            //     $("#futureImg"+i).html("<img src="+iconURL+">");
            //     $("#futureTemp"+i).html(temp+"°F");
            //     $("#futureHumidity"+i).html(humidity+"%");
            // }
        }
        )
    })

});
// `${weatherApiRootUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherApiKey}`;