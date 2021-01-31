
var $tempMode = $("#tempMode");
var $tempText = $("#temp-text");
var $windText = $("#local_wind");
var $pressureText = $("#local_pressure");
var $humidityText = $("#local_humidity");
var $windDirText = $("#local_wind_dir");
    
  
function formatTemperature(kelvin) {
    var cels = (kelvin - 273.15).toFixed(1);
    $tempText.html(cels);
    if (cels > 24) {
        $("#temp-text").css("color", "red");
    } else if (cels < 18) {
        $("#temp-text").css("color", "blue");
    }
}

// API
function dataHandler(data) {
    dataString = JSON.stringify(data);
    console.log(data.main.temp);
    formatTemperature(data.main.temp);
    if (data.main.temp && data.sys) {
    // icons
    if (data.weather) {
    var imgURL = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    $("#weatherImg").attr("src", imgURL);
    $("#weather-text").html(data.weather[0].description);
}

// wind
if (data.wind) {
    var knots = data.wind.speed;
    $windText.html(knots.toFixed(1) + " m/s");
}

if (data.main) {
    var hum2 = data.main.pressure;
    var mm = (data.main.pressure * 0.75006).toFixed(0);
    $pressureText.html(mm + " mm Hg");
}
if (data.main) {
    var hum3 = data.main.humidity;
    $humidityText.html(hum3 + " %");
}

//wind dir
if (data.main) {
    var hum4 = data.wind.deg;
        if (hum4=>0 && hum4<22.5) {
            $windDirText.html("N (North)");
            wDir = "n";
            }
        if (hum4=>22.5 && hum4<67.5) {
            $windDirText.html("N-E (Northeastern)");
            wDir = "ne";
             }
        if (hum4=>67.5 && hum4<112.5) {
            $windDirText.html("E (Eastern)");
            wDir = "e";
             }
        if (hum4=>112.5 && hum4<157.5) {
            $windDirText.html("S-E (Southeastern)");
            wDir = "se";
             }
        if (hum4=>157.5 && hum4<202.5) {
            $windDirText.html("S (South)");
            wDir = "s";
             }
        if (hum4=>202.5 && hum4<247.5) {
            $windDirText.html("S-W (Southwest)");
            wDir = "sw";
             }
        if (hum4=>247.5 && hum4<292.5) {
            $windDirText.html("W (West)");
            wDir = "w";
             }
        if (hum4=>292.5 && hum4<337.5) {
            $windDirText.html("N-W (Northwest)");
            wDir = "nw";
             }
        if (hum4=>337.5) {
            $windDirText.html("N (North)");
            wDir = "n";
             }			   
        }  console.log(hum4); 	
    }
    imgURL = "icons/" + wDir + ".png"
    $("#wingImg").attr("src", imgURL);

}

function getWeather(locdata) {
    console.log("getWeather has been called.")
    var lat = locdata.latitude;
    var lon = locdata.longitude;

    var apiURI = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=5b58aee62c41eb64fcab16edce2e5cc1";
    // IP
    if (locdata){ 
        console.log("success");
        $("#local_city").html(locdata.city );
        $("#local_country").html(locdata.country_name);
    } else {
        console.log("fail");
    }

// weather API
    console.log("success getWeather");
    console.log(apiURI);
    return $.ajax({
        url: apiURI,
        dataType: "jsonp",
        type: "GET",
        async: "true",
    }).done(dataHandler);
}

var counter = 0;

function getLocation() {
    console.log("Update# " + counter++);

    return $.ajax({
        url: "https://ipapi.co/jsonp/",
        dataType: "jsonp",
        type: "GET",
        async: "true",
    });
}
  
      
var updateInterval = setInterval(getLocation().done(getWeather), 300000);
 
  
function showDateTime() {
    var now = new Date();
    date.textContent = correctData(now);
    time.textContent = correctTime(now);
}
showDateTime();
setInterval(showDateTime, 1000);
   
          let stopwatchId, stopwatch_ms,
              timerId, timer_ms;
              
function correctData(date){
    let d = date.getDate(),
        m = date.getMonth() + 1,
        y = date.getFullYear();
    return `${(d < 10 ? "0" : "") + d}.${(m < 10 ? "0" : "") + m}.${(y < 10 ? "0" : "") + y}`;
}                                   
 
function correctTime(time) {
    let h = time.getHours(),
        m = time.getMinutes(),
        s = time.getSeconds();
    return `${(h < 10 ? "0" : "") + h}:${(m < 10 ? "0" : "") + m}:${(s < 10 ? "0" : "") + s}`;
} 
