//Q1
const currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();

if (hours < 10) {
    hours = '0' + hours;
}

if (minutes < 10) {
    minutes = '0' + minutes;
}

if (month < 10) {
    month = '0' + month;
}

if (day < 10) {
    day = '0' + day;
}

const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
console.log(formattedDate);