//Level-1
//Q1
const age = prompt("Enter your age:");

if (age >= 18) {
  console.log("You are old enough to drive");
} else {
  const yearsToWait = 18 - age;
  console.log(`You need to wait ${yearsToWait} year(s) to turn 18.`);
}

//Q2
const myAge = 25;
const yourAge = prompt("Enter your age:");

if (myAge > yourAge) {
  console.log(`I am ${myAge-yourAge} older than you.`);
} else if (myAge < yourAge) {
  console.log( `You are ${yourAge-myAge} older than me.`);
} else {
  console.log("We are the same age.");
}

//Q3
const a = 4;
const b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${b} is greater than ${a}`);
}

console.log(a > b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`);

//Q4
const number = prompt("Enter a number:");

if (number % 2 === 0) {
  console.log(`${number} is an even number.`);
} else {
  console.log(`${number} is an odd number.`);
}

//Level-2
//Q1
const score = prompt("Enter your score:");

if (score >= 80) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else if (score >= 60) {
  console.log("C");
} else if (score >= 50) {
  console.log("D");
} else {
  console.log("F");
}

//Q2
const month = prompt("Enter a month:");

if (month === "September" || month === "October" || month === "November") {
  console.log("The season is Autumn.");
} else if (month === "December" || month === "January" || month === "February") {
  console.log("The season is Winter.");
} else if (month === "March" || month === "April" || month === "May") {
  console.log("The season is Spring.");
} else if (month === "June" || month === "July" || month === "August") {
  console.log("The season is Summer.");
} else {
  console.log("Invalid month input.");
}

//Q3
const day = prompt("Enter a day:");

if (day === "Saturday" || day === "Sunday") {
  console.log(`${day} is a weekend day.`);
} else {
  console.log(`${day} is a working day.`);
}

//Level-3
//Q1 && Q2
const monthName = prompt("Enter a month:");

const year = prompt("Enter a year:");
let daysInFebruary;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  daysInFebruary = 29;
} else {
  daysInFebruary = 28;
}

switch (monthName.toLowerCase()) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log("31 days");
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log("30 days");
    break;
  case "february":
    console.log(`${daysInFebruary} days`);
    break;
  default:
    console.log("Invalid month input.");
}
