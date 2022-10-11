var city = document.querySelector(".form-control");
var button = document.querySelector(".btn");
var currentContainer = document.querySelector("#currentWeather")

$(document).ready(function(){
    $(document).on("submit", function (event){
        event.preventDefault();

       fetch("https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&appid=f33477ee6cb130320adcdd14a83733fa")
       .then(function(response){
        return response.json();
       })
       .then(function (data){
        console.log(data);
        for (var i = 0; i < data.length; i++){
            var temp = document.createElement('p');
            var wind = document.createElement('p');
            var humidity = document.createElement('p');
            temp.textContent = data[i].main.temp;
            console.log(temp)
        
        }
       })
    })

});