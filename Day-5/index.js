//Level-1
//Q1
const array = [];

//Q2
const numbers = [1, 2, 3, 4, 5, 6, 7];

//Q3
let arrayLength = array.length;

//Q4
const firstItem = array[0];
const middleItem = array[Math.floor(array.length / 2)];
const lastItem = array[array.length - 1];

//Q5
const mixedDataTypes = [1, 'two', true, null, { name: 'John' }];
arrayLength = mixedDataTypes.length;

//Q6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//Q7
console.log(itCompanies);

//Q8
arrayLength = itCompanies.length;
console.log(itCompanies.length);

//Q9
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

//Q10
itCompanies.forEach(company => {
  console.log(company);
});

//Q11
itCompanies.forEach(company => {
  console.log(company.toUpperCase());
});

//Q12
console.log(itCompanies.join(', ') + ' are big IT companies.');

//Q13
const searchCompany = 'Microsoft';
if (itCompanies.includes(searchCompany)) {
  console.log(searchCompany + ' exists in the itCompanies array.');
} else {
  console.log('Company is not found.');
}

//Q14
const filteredCompanies = itCompanies.filter(company => {
  const count = company.split('o').length - 1;
  return count > 1;
});
console.log(filteredCompanies);

//Q15
itCompanies.sort();
console.log(itCompanies);

//Q16
itCompanies.reverse();
console.log(itCompanies);

//Q17
const firstThreeCompanies = itCompanies.slice(0, 3);
console.log(firstThreeCompanies);

//Q18
const lastThreeCompanies = itCompanies.slice(-3);
console.log(lastThreeCompanies);

//Q19
const middleCompanies = itCompanies.slice(1, -1);
console.log(middleCompanies);

//Q20
itCompanies.shift();
console.log(itCompanies);

//Q21
itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
console.log(itCompanies);

//Q22
itCompanies.pop();
console.log(itCompanies);

//Q23
itCompanies.splice(0);
console.log(itCompanies);

//Level-2
//Q1
import { countries } from "./countries";
import { webTechs } from "./webTechs";

//Q2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = text.split(' ');
console.log(words);
console.log(words.length);

//Q3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';

//Q4
if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
}

//Q5
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}

//Q6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//Level-3
//Q1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

const medianAge = ages.length % 2 === 0 ? (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2 : ages[Math.floor(ages.length / 2)];

const sum = ages.reduce((total, age) => total + age, 0);
const averageAge = sum / ages.length;

const range = maxAge - minAge;

const minAverageDiff = Math.abs(minAge - averageAge);
const maxAverageDiff = Math.abs(maxAge - averageAge);

//Q2
const firstTenCountries = countries.slice(0, 10);
console.log(firstTenCountries);

//Q3
const middleIndex = Math.floor(countries.length / 2);
const middleCountries = countries.length % 2 === 0 ? countries.slice(middleIndex - 1, middleIndex + 1) : [countries[middleIndex]];
console.log(middleCountries);

//Q4
const firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
const secondHalf = countries.slice(Math.ceil(countries.length / 2));
console.log(firstHalf);
console.log(secondHalf);