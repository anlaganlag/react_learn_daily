// var numeral = require('numeral');
const axios = require("axios");
const {v4} = require("uuid");

const l = [321,3,4,1,3,]
console.log(l.sort(
    (a,b)=>(b-a)
));
console.log(l.sort(
    (a,b)=>(b-a)
));

// const URL = `http://www.reddit.com/r/reactjs.json`;
// console.log(v4(),"v1")

// console.log("测试axios");

// axios
//   .get(URL)
//   .then((res) => {
//     const data = res.data.data.children.map((obj) => obj.data.title);
//     // const fd = data.filter(itme=>itme.length<20)
//     const fd = data.filter((itme) => itme.includes("r"));
//     console.log(fd);
//   })
//   .catch((e) => console.log(e));

// fetch(`http://www.reddit.com/r/reactjs.json`)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error("Request failed");
//   })
//   .then((json) => {
//     const posts = res.data.data.children.map((obj) => obj.data);
//     console.log(posts);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// var myNumeral = numeral(1000);
// var myNumeral2 = numeral('1,000');
// // console.log(myNumeral)
// console.log(numeral('10,000.12'))

// console.log(numeral('23rd'))

// console.log(numeral('3.467KB'))
// console.log(numeral('3.467MB'))
// console.log(numeral('3.467GB'))
// console.log(numeral('3.467TB'))
// // { _input: '3.467KB', _value: 3467 }
// // { _input: '3.467MB', _value: 3467000 }
// // { _input: '3.467GB', _value: 3467000000 }
// // { _input: '3.467TB', _value: 3467000000000 }
// console.log(numeral('-76%'))
// console.log(myNumeral)
// console.log(myNumeral)
// console.log(myNumeral)
// console.log(myNumeral)
