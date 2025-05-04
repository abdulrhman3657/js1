
//
function rec(x, y){

    return x * y;
}

console.log("The area of the rectangle is:", rec(5, 5));

function temp(c){

    let f = (c * 9/5) + 32;

    return f;
}

console.log("themp in Fahrenheit is:", temp(5));


function hourToSec(h){

    m = h * 60 *    60;

    return m;
}

console.log(`${1} hours = ${hourToSec(5)} Seconds`);


let str1 = "string 1 "
let str2 = "string 2"

console.log(str1.concat(str2))


let bill = 10.25 + 3.99 + 7.15;

console.log(bill);

let tip = bill * 0.15;

console.log(tip);

let total = bill + tip;

console.log(total);

let adjective1 = "amazing";
let adjective2 = "fun";
let adjective3 = "entertaining";

let madLib = `The Intro to JavaScript course is ${adjective1}. James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!`;


console.log(madLib)


let firstName = 'ali';
let interest = 'football';
let hobby = 'read books';

let awesomeMessage = `Hi, my name is ${firstName}. I love ${interest}. In my spare time, I like to ${hobby}.`

console.log(awesomeMessage);