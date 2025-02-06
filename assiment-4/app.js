// let num = +prompt("enter your number");
// if (num % 3 === 0){
//     console.log('number is visible');
// }
// else {
//     console.log('number is not visible');
// }





// let num = +prompt('enter your number');
// if (num % 2 === 0){
//      console.log('odd number');
// }
// else{
//     console.log('even number');
// }








// let age = +prompt('how old are you');
// if (age > 19){
//     console.log('old');
// }
// else{
//     console.log('young');
// }




// let myName = "haider";
// let userName = prompt('what is your name');

// if(userName === myName){
//     console.log('we have smiliar name');
// }
// else {
//     console.log('nice to meet you');
// }




// let input = 'type'
// let asciicode = prompt('what is number');
//  if(input >=0 && input <=9){
//     console.log('input is a number');
//  }
//  else if (asciicode >=65 && asciicode <=99){
//       console.log('input in uppercase');
//  }
// else if (asciicode >=97 && asciicode <=122){
//     console.log('input is a lower case');
//  }
// else {
//     console.log('input is niether not a number');
//  }




// let name = "ali";
// let firstname = prompt("are you fahad")
// if (firstname === "fahad"){
//     console.log("hello fahad");
// }
// else {
//     console.log('you are not fahad');
// }
 



// let clock = 13;
// let hour = prompt("when you are awake");

// if(hour < 9){
//     console.log('good moring');
// }
// else if (hour < 12){
//     console.log('good eveing');
// }
// else{
//     console.log('greeting');
// }



// let num1 = 0;
// let num2 = 10;

// if (num1 > num2){
//     console.log(num1);
// }
// else if (num1 > num2){
//     console.log(num2);
// }
// else{
//     console.log('both number are equal');
// }





// let currentYear = new Date().getFullYear(); 
// let birthYear = 1995; 
// let age1 = currentYear - birthYear; 
// let age2 = age1 - 1; 

// document.write(`The person is either ${age1} or ${age2} years old.`);







// let a = 2;
// let b = 1;
// let result = --a -  --b  +  ++b  +  b--;

// document.write("a =",a);
// document.write("<br> b =",b);
// document.write("<br> result =", result);






let favoriteSnack = "burger";
let currentAge = 25;
let maxAge = 75;
let perDay = 2;
let yearsRemaning = maxAge - currentAge;
let totalSupply = yearsRemaning * 365 *perDay;
 
document.write(`you will ned approximately:${totalSupply}<br> ${favoriteSnack} to last your age of :${maxAge}`);
