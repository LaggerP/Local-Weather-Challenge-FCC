var apiUrl = "https://crossorig.in/https://fcc-weather-api.glitch.me/api/current?";
var lon;
var lat;

$(document).ready(function(){
    //esta funcion me permite obtener mi latitud y longitud para determinar en donde me encuentro posicionado.
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(posicion){
            var lat = "lat=" + posicion.coords.latitude;
            var lon = "lon=" + posicion.coords.longitude;
            calcularTemperatura(lat,lon);
        })
    } else {
        console.log("Error en capturar latitud / longitud");
    }
})


function calcularTemperatura(lat, lon){
    var apiUrlFinal = apiUrl + lat + "&" + lon; // aca se obtiene el link final de la api que va a usarse
    $.getJSON(apiUrlFinal, function(data){
        $("#idCiudad").text(data.name); 
        $("#idTempertura").text(data.main.temp + " Grados Celsius");
    })
    var temperaturaActualCelsius = $("#idTempertura").text();
    $("#idFahrenheit").click(function () {
        var temperaturaFahren = Math.round(parseInt($("#idTempertura").text()) * 9 / 5 + 32);
        $("#idTempertura").text(temperaturaFahren + " Grados Fahrenheit");
    })

    $("#idCelsius").click(function () {
        $("#idTempertura").text(temperaturaActualCelsius);
    })  
}