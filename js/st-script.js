// REFER TO: 
// Random Number Generator: https://teamtreehouse.com/library/javascript-basics/working-with-numbers/create-a-random-number
// Concatenation: https://teamtreehouse.com/library/javascript-basics/storing-and-tracking-information-with-variables/combining-strings-2
// addClass() : api.jquery.com/addClass/
// text() : api.jquery.com/text/
// eval() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval


// class code of random number generator 

// Generate random number between for three images
//var random = Math.floor(Math.random() * 3);
//var randomBg = 'bg' + random;
//$('body').addClass(randomBg);

// My edited code
var random = Math.floor(Math.random() * 6);
var randomBg = 'bh' + random;
$('h1').addClass(randomBg);


var random = Math.floor(Math.random() * 5);
var randomBg = 'st' + random;
$('body').addClass(randomBg);