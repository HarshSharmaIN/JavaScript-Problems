//q1
console.log(`The quote 'There is no exercise better for the heart than reaching down and
lifting people up.' by John Holmes teaches us to help one another.`);

//q2
console.log(`Love is not patronizing and charity isn't about pity, it is about love.
Charity and love are the same -- with charity you give love, so don't just give
money but reach out your hand instead.`);

//q3
if (typeof '10' !== typeof 10) {
    console.log(typeof parseInt('10') === typeof 10);
}

//q4
if (parseFloat('9.8') !== 10) {
    console.log(Math.ceil(parseFloat('9.8')));
}

//q5
console.log('python'.includes('on') && 'jargon'.includes('on'));

//q6
var sentence = 'I hope this course is not full of jargon.';
console.log(sentence.includes('jargon'));

//q7
console.log(parseInt(Math.random() * 101));
//q8
console.log(parseInt(Math.random() * 51) + 50);
//q9
console.log(parseInt(Math.random() * 256));

//q10
console.log('JavaScript'.charAt(parseInt(Math.random() * 10)));

//q11
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

//q12
var sentence = 'You cannot end a sentence with because because because is a conjunction';
var phrase = sentence.substring(sentence.indexOf('because'), 23);
console.log(phrase);