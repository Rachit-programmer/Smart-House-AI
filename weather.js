fetch(
"https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.20&current_weather=true"
)

.then(r=>r.json())

.then(data=>{

document
.getElementById("outdoorTemp")
.innerText=
"Temp: "+
data.current_weather.temperature+"°C";

document
.getElementById("outdoorWind")
.innerText=
"Wind: "+
data.current_weather.windspeed;

});