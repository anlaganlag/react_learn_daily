var numeral = require('numeral');
var myNumeral = numeral(1000);
var myNumeral2 = numeral('1,000');
// console.log(myNumeral)
console.log(numeral('10,000.12'))

console.log(numeral('23rd'))

console.log(numeral('3.467KB'))
console.log(numeral('3.467MB'))
console.log(numeral('3.467GB'))
console.log(numeral('3.467TB'))
// { _input: '3.467KB', _value: 3467 }
// { _input: '3.467MB', _value: 3467000 }
// { _input: '3.467GB', _value: 3467000000 }
// { _input: '3.467TB', _value: 3467000000000 }
console.log(numeral('-76%'))
// console.log(myNumeral)
// console.log(myNumeral)
// console.log(myNumeral)
// console.log(myNumeral)
