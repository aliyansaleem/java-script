// question 1

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// console.log(factorial(5));
// console.log(factorial(9));



// question 2

// let now = new Date();

// console.log(now);


// question 3
// function greetUser(){
//     let fullName = `${fullname}${lastname}`;
//     console.log(`Hello, ${fullName}! Welcome!`);
// }
// greetUser("aliyan","saleem");





// question 4
// function addNumber(){
//     let num1 = parseFloat(prompt("enter your first number"));
//     let num2 = parseFloat(prompt("enter your first number"));
//     if(isNaN(num1)||isNaN(num2)){
//         console.log("enetr a valid number");
//         return;
//     }
//     let sum = num1 + num2;
//     console.log(`the sum of ${num1} and ${num2} is ${sum}`);
//     return sum;
// }
// addNumber();
// 6
// function square(num) {
//     return num * num;
// }

// // Example usage
// console.log(square(5));


// question 6

// function calculate(num1, num2, operator) {
//     let result;

//     switch (operator) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
//             break;
//         default:
//             result = "Invalid operator";
//     }

//     return result;
// }

// console.log(calculate(10, 5, "+")); 
// console.log(calculate(8, 2, "/"));  
// console.log(calculate(7, 3, "-"));  
// console.log(calculate(6, 0, "/")); 
// console.log(calculate(4, 5, "%"));  






// question 7
// function factorial(n) {
//     if (n < 0) return "Factorial is not defined for negative numbers.";
//     if (n === 0 || n === 1) 
//     return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(5));
// console.log(factorial(7));
// console.log(factorial(0)); 


// question 9
// function displayCounting(start, end) {
//     if (isNaN(start) || isNaN(end)) {
//         document.body.innerHTML = "Please enter valid numbers.";
//         return;
//     }
    
//     if (start > end) {
//         document.body.innerHTML = "Start number should be less than or equal to the end number.";
//         return;
//     }
    
//     let result = "<h2>Counting:</h2><p>";
//     for (let i = start; i <= end; i++) {
//         result += i + " ";
//     }
//     result += "</p>";
    
//     document.body.innerHTML = result;
// }

// displayCounting(1, 10);


// question 9
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//         return num * num;
//     }
//     if(isNaN (base)|| isNaN(perpendicular)){
//         return "Please enter valid numbers";
//     }
//     let hypotenuseSquared = calculateSquare(base) + calculateSquare(perpendicular);
//     let hypotenuse = Math.sqrt(hypotenuseSquared);
//     return`The hypotenuse of the right-angled triangle is:${hypotenuse}`;
// }

// console.log(calculateHypotenuse(3,5));


// question 10

// function displayArguments(){
//     if(arguments.length === 0){
//         console.log(' No arguments provided');
//         return;
//     }
//     console.log('Arguments list:');
//     for(let i = 0; i < arguments.length; i++){
//         console.log(`Argument ${i+1} : ${arguments[i]}`);
//     }
// }
// displayArguments(1,"hello", true, 45.6,"javascript");





// question 11
// function findLargest(...numbers) {
//     if (numbers.length === 0) {
//         return "No numbers provided.";
//     }
//     let largest = Math.max(...numbers);
//     return `The largest number is: ${largest}`;
// }
// console.log(findLargest(10, 25, 98, 3, 45));

// question 12
// function calculate(width,height){
//     return width * height;
// }
// console.log(calculate(5,5));
// let w = 5;
// let h = 7;
// console.log(calculate(w,h));

// question 14
// function sumArray(numbers){
//     return numbers.reduce((sum,num) => sum + numbers, 0);
// }
// let nums = [1,2,3,4,5];
// console.log(sumArray(nums));

// question 15

// let param = function inner(){
//     return typeof inner;
// }
// console.log(param());


// question 16

// function power(base,experiment){
//     return base ** experiment;
// }
// console.log(power(3,3));

// questinon 17

// function rollDice(){
//     return Math.floor(Math.random() * 6) + 3;
// }
// console.log(rollDice());


// question 21
//  function findLongestword(str){
//     let words = str.split(' ');
//     let Longestword = '';
//     for (let word of words){
//         if (word.length > Longestword.length){
//             Longestword = word;
//         }
//     }
//     return Longestword;
// }
// console.log(findLongestword('I love programming'));



//  question 20
// function capitalLizeword(str){
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// }
// console.log(capitalLizeword('aliyan saleem'));

// question 22
// function countVowels(str){
//     let count = 0;
//     let Vowels = "aeiouAEIOU"
//     for (let char of str){
//     if (Vowels.includes(char)) {
//         count++;
//     }
//     return count;
// }
// }
// console.log(countVowels("aliyan saleem rathor"));


// question 26
// function calculateAge(brithyear,currentyear = new Date ().getFullYear()){
//     return currentyear - brithyear;
// }
//   console.log(calculateAge(2002));

// question 25

// function countOccurrences(text,letter){
//  let count = 0;
//   for(i =0;i<text.length;i++){
//     if(text[i] === letter){
//         count++;
//     }
//   }
//   return count;
// }
// console.log(countOccurrences("hello world", "h"));

// question 27

// function calculateSupply(age,amountperday){
//     let maxAge = 75;
//     let yearsRemaining  = maxAge - age;
//     let totalSupply = yearsRemaining * amountperday * 365;
//     totalSupply = Math.round(totalSupply);
//     console.log(`You should last about ${totalSupply} to last you until the ripe old age of ${maxAge}`);
// }
// console.log(calculateSupply(20, 2));
// console.log(calculateSupply(40, 1.5));
// console.log(calculateSupply(60, 1.8));

// question 28

// function Circumference(){
//     let radius = 5;
//     let pi = 3;
//     let circumference = 2 * pi * radius;
//     return circumference;
// }
// console.log(Circumference());