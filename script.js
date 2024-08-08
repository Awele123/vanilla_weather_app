let nowday = document.querySelector("#day");
let month = document.querySelector("#month");
let newday = document.querySelector("#newday");
let year = document.querySelector("#year")
let currentDate = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
    "January",
    "February","March","April","May","June","July","August","September","October","November","December"

]
day.innerHTML = days[currentDate.getDay()];
newday.innerHTML= currentDate.getDay();
month.innerHTML = months[currentDate.getMonth()]; 
year.innerHTML = currentDate.getFullYear();


function refreshWeather(response) {
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    let temperatureElement = document.querySelector("#temp");
    let temperature = response.data.temperature.current;
    temperatureElement.innerHTML = Math.round(temperature);
    let humidity = document.querySelector("#humid");
    humidity.innerHTML = response.data.temperature.humidity +"%";
    let pressure = document.querySelector("#pressure");
    pressure.innerHTML = response.data.temperature.pressure +"hPa";

}
function refreshCondition(response){
    let condition = document.querySelector("#description");
    condition.innerHTML = response.data.condition.description;
    
}

function searchCity(city) {
    let apiKey = "afb1fco0e30530debtd23f53ac7d4cbb"
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(refreshWeather);
    axios.get(apiURL).then(refreshCondition);
}
    function search(event) {
        event.preventDefault();
        let searchInput = document.querySelector("#search-form-input");
        searchCity(searchInput.value);
    }

let searchform = document.querySelector("#search-form");
searchform.addEventListener("submit", search);

