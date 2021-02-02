// Tutorial by http://youtube.com/CodeExplained
// api key : 82005d27a116c2880c8f0fcb866998a0

const iconElement= document.querySelector('.weather-icon');
const tempElement= document.querySelector('.temperature-value p');
const descElement= document.querySelector('.temperature-description p');
const locationElement= document.querySelector('.location p');
const notificationElement= document.querySelector('.notification');


// app data
const weather={}
weather.temperature = {
    unit:"celcius"
}
/// app const
const KELVIN = 273
const key = "9effcb9337d4e395d24238ba46e116ae"

// check geolocation
if ('geolocation' in navigator)
{
    console.log('1');
    navigator.geolocation.getCurrentPosition(setPositon,showError)
} else {
    console.log('2');
    notificationElement.style.display = 'block';
    notificationElement.innerHTML="<p>Brower doesn't Support Geolocation</p>"
}

function setPositon(position)
{
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}
function showError(error)
{
    notificationElement.style.display = 'block';
    notificationElement.innerHTML=`<p>${error.message}</p>`
}
function getWeather(latitude, longitude)
{
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
    console.log(api);
    
}
getWeather()
