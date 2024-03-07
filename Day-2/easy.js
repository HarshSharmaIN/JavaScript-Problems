//q1
var variable = '30 Days Of JavaScript';
//q2
console.log(variable);
//q3
console.log(variable.length);

//q4
var upperVar = variable.toUpperCase();
//q5
var lowerVar = variable.toLowerCase();

//q6
var slicedFirstStr = variable.substring(0, 2);
//q7
var slicedSecondStr = variable.substring(3, 6);

//q8
console.log(variable.includes('Script'));
//q9
var splitVar = variable.split(' ');

//q10
var company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
var splitCompany = company.split(',');

//q11
var replacedVar = variable.replace('JavaScript', 'Python');

//q12
var chatAt15 = variable.charAt(15);
//q13
var charCode = variable.charCodeAt(11);

//q14
var firstIndex = variable.indexOf('a');
//q15
var lastIndex = variable.lastIndexOf('a');

//q16
var sentence = 'You cannot end a sentence with because because because is a conjunction';
//q17
var firstBecause = sentence.indexOf('because');
//q18
var lastBecause = sentence.lastIndexOf('because');
//q19
var firstBecauseSearch = sentence.search('because');

//q20
var untrimmedVar = ' 30 Days Of JavaScript ';
var trimmedVar = untrimmedVar.trim();

//q21
console.log(variable.startsWith('30'));
//q22
console.log(variable.endsWith('JavaScript'));

//q23
var matchVar = variable.match(/a/g);
console.log(matchVar);

//q24
var string = "30 Days Of";
var concatString = string.concat(' JavaScript');

//q25
var repeatVar = variable.repeat(2);