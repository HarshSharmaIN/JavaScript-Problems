//Q1
let firstName = 'Random';
let lastName = 'Person';
let country = 'India';
let city = 'Delhi';
let age = 30;
let isMarried = true;
let year = 2024;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//Q2
console.log(typeof '10' == typeof 10);

//Q3
console.log(parseInt('9.8') == 10);

//Q4
console.log(2 > 1);
console.log('abc' < 'bac');
console.log(!false);

console.log(4 > 3 && 10 > 12);
console.log('abc' > 'bac');
console.log(!false && false);

//Q5
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log('python'.length !== 'jargon'.length);

//Q6
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log('dragon'.includes('on') && 'python'.includes('on'));


//Q7
let currentDate = new Date();
let yearToday = currentDate.getFullYear();
let monthToday = currentDate.getMonth() + 1;
let dateToday = currentDate.getDate();
let dayToday = currentDate.getDay();
let hoursNow = currentDate.getHours();
let minutesNow = currentDate.getMinutes();
let secondsElapsed = Math.floor(currentDate.getTime() / 1000);

console.log(yearToday);
console.log(monthToday);
console.log(dateToday);
console.log(dayToday);
console.log(hoursNow);
console.log(minutesNow);
console.log(secondsElapsed);