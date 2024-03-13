//Q1
let base = prompt('Enter the base of the triangle');
let height = prompt('Enter the height of the triangle');

console.log(`The area of the triangle is ${0.5 * base * height}`);

//Q2
let sideA = prompt('Enter side a of the triangle');
let sideB = prompt('Enter side b of the triangle');
let sideC = prompt('Enter side c of the triangle');

let perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
console.log(`The perimeter of the triangle is ${perimeter}`);

//Q3
let length = prompt('Enter the length of the rectangle');
let width = prompt('Enter the width of the rectangle');

let area = parseInt(length) * parseInt(width);
console.log(`The area of the rectangle is ${area}`);

let perimeterRect = 2 * (parseInt(length) + parseInt(width));
console.log(`The perimeter of the rectangle is ${perimeterRect}`);

//Q4
let radius = prompt('Enter the radius of the circle');

let areaCircle = 3.14 * radius * radius;
console.log(`The area of the circle is ${areaCircle}`);

let circumference = 2 * 3.14 * radius;
console.log(`The circumference of the circle is ${circumference}`);

//Q5
let line = '2x-2';
let slope = 2;
let xIntercept = 1;
let yIntercept = -2;

console.log(`The slope of the line is ${slope}`);
console.log(`The x-intercept of the line is ${xIntercept}`);
console.log(`The y-intercept of the line is ${yIntercept}`);

//Q6
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;

let slopeLine = (y2 - y1) / (x2 - x1);
console.log(`The slope between the two points is ${slopeLine}`);

//Q7
if (slope === slopeLine) {
    console.log("The slopes are equal.");
} else {
    console.log("The slopes are not equal.");
}

//Q8
let x = prompt('Enter the value of x');
let y = x**2 + 6*x + 9;

if (y === 0) {
    console.log(`At x = ${x}, y is 0`);
} else {
    console.log(`At x = ${x}, y is not 0`);
}

//Q9
let hours = prompt('Enter hours:');
let rate = prompt('Enter rate per hour:');

let pay = hours * rate;
console.log(`Your weekly earning is ${pay}`);

//Q10
let name = prompt('Enter your name');

if (name.length > 7) {
    console.log('Your name is long');
} else {
    console.log('Your name is short');
}

//Q11
let firstName = prompt('Enter your first name');
let lastName = prompt('Enter your last name');

if (firstName.length > lastName.length) {
    console.log('Your first name is longer than your last name');
} else if (firstName.length < lastName.length) {
    console.log('Your last name is longer than your first name');
} else {
    console.log('Your first name and last name have the same length');
}

//Q12
let myAge = 25;
let yourAge = 30;

if (myAge > yourAge) {
    console.log("I am older than you by " + (myAge - yourAge) + " years.");
} else if (myAge < yourAge) {
    console.log("You are older than me by " + (yourAge - myAge) + " years.");
} else {
    console.log("We are the same age.");
}

//Q13
let birthYear = prompt('Enter the year you were born');
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

if (age >= 18) {
    console.log('You are old enough to drive.');
} else {
    let yearsToWait = 18 - age;
    console.log(`You need to wait ${yearsToWait} more years to drive.`);
}

//Q14
let years = prompt('Enter the number of years');
let secondsInYear = 365 * 24 * 60 * 60;
let totalSeconds = years * secondsInYear;

console.log(`You lived ${totalSeconds} seconds in ${years} years.`);

//Q15
let currentDate = new Date();

let format1 = currentDate.toLocaleString('en-GB', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'});
let format2 = currentDate.toLocaleString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'});
let format3 = currentDate.toLocaleString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', separator: '/'});

console.log(format1);
console.log(format2);
console.log(format3);