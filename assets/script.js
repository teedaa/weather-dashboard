var city = document.querySelector(".form-control");
var button = document.querySelector(".btn");
var currentContainer = document.querySelector("#currentWeather");
var today = moment().format("l");
var currentCity = $("#currentCity");
var currentTemperature = $("#currentTemp");
var currentWind = $("#currentWind");
var currentHumidity = $("#currentHumidity");

$(document).ready(function(){
//Click Event
    $(document).on("submit", function (event){
        event.preventDefault();
    //API Call for current weather
       fetch("https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&units=imperial&appid=f33477ee6cb130320adcdd14a83733fa")
       .then(function(response){
        return response.json();
       })
       .then(function (data){
        console.log(data);
            var cityName = data.name;
            var weatherIcon =data.weather[0].icon
            var iconURL="https://openweathermap.org/img/wn/"+weatherIcon+"@2x.png"

            //Populate Current Weather Div
            $(currentCity).html(cityName + " (" + today + ")" + "<img src="+iconURL+">");
        
            var currentTemp = data.main.temp;            
            $(currentTemperature).html("Temperature: " + currentTemp.toFixed(2) + "°F");
            
            var windSpeed = data.wind.speed;      
            $(currentWind).html("Wind Speed: " + windSpeed + "MPH" ); 
         

            var humidity = data.main.humidity;      
            $(currentHumidity).html("Humidity: " + humidity + "%");

      
            var lat = data.coord.lat
            var lon = data.coord.lon

            //Second API call for forecast
            fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&cnt=5&units=imperial&appid=f33477ee6cb130320adcdd14a83733fa")
               .then(function(response){
                return response.json();
               })
               .then(function(forecast){
                console.log(forecast);

            //Populate Forecast Elements
            var weatherIcon =forecast.list[0].weather[0].icon
            var newURL="https://openweathermap.org/img/wn/"+weatherIcon+"@2x.png"
            $("#futureDate1").html(moment().add(1, "day").format("l") + "<img src="+ newURL+ ">"); 
            $("#futureTemp1").html("Temperature: " +forecast.list[0].main.temp + "°F");
            $("#futureWind1").html("Wind Speed: " + forecast.list[0].wind.speed + "MPH");
            $("#futureHumidity1").html("Humidity: " + forecast.list[0].main.humidity +"%");

            var weatherIcon2 =forecast.list[1].weather[0].icon
            var newURL2="https://openweathermap.org/img/wn/"+weatherIcon2+"@2x.png"
            $("#futureDate2").html(moment().add(2, "day").format("l") + "<img src="+newURL2+">"); 
            $("#futureTemp2").html("Temperature: " +forecast.list[1].main.temp + "°F");
            $("#futureWind2").html("Wind Speed: " + forecast.list[1].wind.speed + "MPH");
            $("#futureHumidity2").html("Humidity: " + forecast.list[1].main.humidity +"%");
            
            var weatherIcon3 =forecast.list[2].weather[0].icon
            var newURL3="https://openweathermap.org/img/wn/"+weatherIcon3+"@2x.png"
            $("#futureDate3").html(moment().add(3, "day").format("l") + "<img src="+newURL3+">"); 
            $("#futureTemp3").html("Temperature: " +forecast.list[2].main.temp + "°F");
            $("#futureWind3").html("Wind Speed: " + forecast.list[2].wind.speed + "MPH");
            $("#futureHumidity3").html("Humidity: " + forecast.list[2].main.humidity +"%");

            var weatherIcon4 =forecast.list[3].weather[0].icon
            var newURL4="https://openweathermap.org/img/wn/"+weatherIcon4+"@2x.png"
            $("#futureDate4").html(moment().add(4, "day").format("l") + "<img src="+newURL4+">"); 
            $("#futureTemp4").html("Temperature: " +forecast.list[3].main.temp + "°F");
            $("#futureWind4").html("Wind Speed: " + forecast.list[3].wind.speed + "MPH");
            $("#futureHumidity4").html("Humidity: " + forecast.list[3].main.humidity +"%");

            var weatherIcon5 =forecast.list[4].weather[0].icon
            var newURL5="https://openweathermap.org/img/wn/"+weatherIcon5+"@2x.png"
            $("#futureDate5").html(moment().add(5, "day").format("l") + "<img src="+newURL5+">"); 
            $("#futureTemp5").html("Temperature: " +forecast.list[4].main.temp + "°F");
            $("#futureWind5").html("Wind Speed: " + forecast.list[4].wind.speed + "MPH");
            $("#futureHumidity5").html("Humidity: " + forecast.list[4].main.humidity +"%");
               })
        }
        )
    })

});