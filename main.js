//all necessary elements from the DOM

const app = document.querySelectorAll('.weather-app');
const temp = document.querySelectorAll('.temp');
const dateOutput = document.querySelectorAll('.date');
const timeOutput = document.querySelectorAll('.time');
const conditionOutput = document.querySelectorAll('.condition');
const nameOutput = document.querySelectorAll('.name');
const icon = document.querySelectorAll('.icon');
const cloudOutput = document.querySelectorAll('.cloud');
const humidityOutput = document.querySelectorAll('.humidity');
const windOutput = document.querySelectorAll('.wind');
const form = document.querySelectorAll('.locationInput');
const search = document.querySelectorAll('.search');
const btn = document.querySelectorAll('.submit');
const cities = document.querySelectorAll('.city');


//default city when the page lands
let cityInput = "London";

//click event for each city in panel

cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        //change from default city to next one
        cityInput = e.targetinnerHTML;

        /* function fetches and displays all data from weather API */
        fetchWeatherData();

        //fade out the app
        app.style.opacity = "0";
    });
    
});

//adding submit event to the form

form.addEventListener('submit', (e) => {
    /*if the search bar is empty, give an alert*/
    if(search.values.length == 0){
        alert('Please type in a city name');
    }
    else{
        /*change the default city to the search one*/
        cityInput = search.values;

        fetchWeatherData();

        //remove all text from search field
        search.value = "";
        app.style.opacity = "0";
    }
});

function dayOfTheWeek(day, month, year){
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return weekday[ new Date(`${day}/${month}/${year}`).getDay()];
};