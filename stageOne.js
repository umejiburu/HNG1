const currentDay = document.getElementById('currentDay')


const date = new Date()
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = weekday[date.getUTCDay()];
currentDay.textContent = `Today is ${day}`
console.log(day);