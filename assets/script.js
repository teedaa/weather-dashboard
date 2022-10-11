$(document).ready(function(){
    $(document).on("submit", ".event-form", function (event){
        event.preventDefault()
        var cityName = $("#cityName").val()
        var APIKey = "f33477ee6cb130320adcdd14a83733fa"
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response){
            console.log(response)
        })
    })

});