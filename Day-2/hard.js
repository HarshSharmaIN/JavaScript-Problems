//q1
var sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
var count = sentence.match(/love/g);
console.log(count.length);

//q2
var secondSentence = "You cannot end a sentence with because because because is a conjunction";
var becauseCount = secondSentence.match(/because/g);
console.log(becauseCount.length);

//q3
const mixedSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;.The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
var cleanedSentence = mixedSentence.replace(/[^\w\s]/g, '');
var words = cleanedSentence.split(' ');
var wordCount = [];

for (var i=0; i<words.length; i++) {
    if (wordCount[words[i]]) {
        wordCount[words[i]]++;
    } else {
        wordCount[words[i]] = 1;
    }
}

var mostFrequentWord = '';
var maxCount = 0;

for (var i = 0; i < words.length; i++) {
    if (wordCount[words[i]] > maxCount) {
        mostFrequentWord = words[i];
        maxCount = wordCount[words[i]];
    }
}

console.log('Most frequent word:', mostFrequentWord);

//q4
var incomeSentence = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
const numbers = incomeSentence.match(/\d+/g);
var totalIncome = parseInt(numbers[0]) * 12 + parseInt(numbers[1]) + parseInt(numbers[2]) * 12;
console.log('Total income:', totalIncome);