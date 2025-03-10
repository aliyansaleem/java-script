// postive

// let number = prompt("enter a postive integar");
// if(number > 0 && Number % 2 == 0){
//     console.log("<P> number: " + number + "</P>");
//     console.log("<P> round of value : " + Math.round(number)+"</P>");
//     console.log("<P> floor of value : " + Math.floor(number) + "</P>");
//     console.log("<P> ceil value: " + Math.ceil(number) + "</P>");
// }
// else{
//     console.log("<p> plese enter a valid postive integar");
// }


// negative
// let userInput = prompt("Enter a negative integer:");
// let number = parseFloat(userInput);

// if (number < 0 && Number.isInteger(number)) {
//     console.log("<h3>Number: " + number + "</h3>");
//     console.log("<h3>Round off value: " + Math.round(number) + "</h3>");
//     console.log("<h3>Floor value: " + Math.floor(number) + "</h3>");
//     console.log("<h3>Ceil value: " + Math.ceil(number) + "</h3>");
// } else {
//     console.log("<h3>Please enter a valid negative integer.</h3>");
// }



// floating
// let userInput = prompt("Enter a positive floating-point number:");
// let number = parseFloat(userInput);

// if (number > 0 && !Number.isInteger(number)) {
//     console.log("<h3>Number: " + number + "</h3>");
//     console.log("<h3>Round off value: " + Math.round(number) + "</h3>");
//     console.log("<h3>Floor value: " + Math.floor(number) + "</h3>");
//     console.log("<h3>Ceil value: " + Math.ceil(number) + "</h3>");
// } else {
//     console.log("<h3>Please enter a valid positive floating-point number.</h3>");
// }

// negative floating
// let userInput = prompt("Enter a negative floating-point number:");
// let number = parseFloat(userInput);

// if (number < 0 && !Number.isInteger(number)) {
//     console.log("<h3>Number: " + number + "</h3>");
//     console.log("<h3>Round off value: " + Math.round(number) + "</h3>");
//     console.log("<h3>Floor value: " + Math.floor(number) + "</h3>");
//     console.log("Ceil value: " + Math.ceil(number) + "</h3>");
// } else {
//     console.log("<h3>Please enter a valid negative floating-point number.</h3>");
// }

// absoloute value
// let userInput = prompt("Enter a number:");
// let number = parseFloat(userInput);

// console.log("<h3>Number: " + number + "</h3>");
// console.log("<h3>Absolute value: " + Math.abs(number) + "</h3>");


// dice value
// let userInput = prompt("Enter a number:");
// let diceValue = Math.floor(Math.random()*6);
// console.log("The value of the dice is: " + diceValue);


// toss
// let coin = Math.floor(Math.random()*2);
// let result = (coin === 1)?
// "tails" : "heads";
// console.log("The result of the coin toss is: " + result);


// random number
// let random = Math.floor(Math.random()*100)+1;
// console.log("Random number between 1 and 100: " + random);


// weight
// let weight = prompt("Enter your weight:");
// let weightInKg = parseFloat(weight);
// if( weightInKg > 0 ){
//     console.log( "Your weight is: " + weightInKg + " kg" );
// }else{
//     console.log( "Please enter a valid positive number." );
// }




// secret number
// let secretNumber = Math.floor(Math.random()*10)+1;
// let guess = prompt("Guess the secret number between 1 and 10:");
// if(guess === secretNumber){
//     console.log("Congratulations, you guessed the secret number!");
// }
// else{
//     console.log("Sorry, the secret number is " + secretNumber + ".");
// }

// new date
// let currentDate = new Date();
// console.log(currentDate);


// month
// let months = ["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEP","OCT","NOV","DEC"];

// let currentMonth = months[new Date().getMonth()];
// console.log("current month :" + currentMonth);


// day
// let Days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
// let currentDay = Days[new Date().getDay()];
// console.log("current day : " + currentDay);



// funday

// let funday = ["MON","TUE","WED","THU","FRI","SAT","SUN"];
// if(funday === 0 || funday === 6){
//     console.log("Today is a funday!");
// }


// date message

// let date = new Date().getDate();
// if(date < 16){
//     console.log("first fifteen days of month");
// }else {
//     console.log("last days of month");
// }

// milsecond 1970
// let now = new Date();
// let elapsedMillisecond = now.getTime();
// let elapsedMinutes = elapsedMillisecond / (10000 * 60);

// console.log("elapsedMillisecond since jan 1970:",elapsedMillisecond);
// console.log("elapsedMinutes since jan 1970:",elapsedMinutes);

// am pm
// let hours = new Date().getHours();
// if(hours < 12){
//     console.log("AM");
// }else {
//     console.log("PM");
// }

// last date
// let lastDate = new Date(new Date(2020,11,31));
// console.log(lastDate);

// ramdan

// let ramdanStart = new Date(2015, 8, 23);
// let today = new Date();
// let timeDifference = today-ramdanStart;
// let daysPassed = Math.floor(timeDifference /(1000*60*60*24));
// console.log(daysPassed + "days have last since passed month")

// seconds refernce

// let refernceDate = new Date(2015,11,5,22,50,16);
// let startOf2015 = new Date(2015,0,1,0,0,0);
// let timeDifference = (refernceDate-startOf2015) / 1000;
// console.log(`on reference date ${refernceDate}`);
// console.log(`time difference from start of 2015 is ${timeDifference} seconds`);

// date object

// let currentDate = new Date();
// console.log(`currentDate ${currentDate}`);

// currentDate.setHours(currentDate.getHours()-1);
// console.log(`currentDate ${currentDate}`);


// 100 years back
// let currentDate = new Date();
// console.log(currentDate + currentDate);
// currentDate.setFullYear(currentDate.getFullYear()-100);
// console.log("100 years back" +  currentDate);

// age calculate

// let age = prompt("how old are you");
// let currentyears = new Date().getFullYear();
// let birthYear = currentyears - age;
// console.log(`you were born in ${age}`);
// console.log(`your brith year is ${birthYear}`)


// k electric

// let customerName = "virat kholi";
// let currentDate = new Date();
// let currentMonth = currentDate.toLocaleString('default', { month: 'long' }); // Get month name
// let numberOfUnits = 480;
// let chargesPerUnit = 14;
// let latePaymentSurcharge = 500;


// let netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
// let grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);

// console.log(<h2>K-Electric Bill</h2>);
// console.log(<p><strong>Customer Name:</strong> ${customerName}</p>);
// console.log(<p><strong>Month:</strong> ${currentMonth}</p>);
// console.log(<p><strong>Number of units:</strong> ${numberOfUnits}</p>);
// console.log(<p><strong>Charges per unit:</strong> ${chargesPerUnit}</p>);
// console.log(<p><strong>Net Amount Payable (within Due Date):</strong> ${netAmountPayable}</p>);
// console.log(<p><strong>Late Payment Surcharge:</strong> ${latePaymentSurcharge}</p>);
// console.log(<p><strong>Gross Amount Payable (after Due Date):</strong> ${grossAmountPayable}</p>);